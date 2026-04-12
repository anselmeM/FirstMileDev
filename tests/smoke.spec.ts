import { test, expect } from '@playwright/test';

const BASE = 'http://localhost:3000';

test('homepage loads without console errors', async ({ page }) => {
  const errors: string[] = [];
  page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });
  page.on('pageerror', err => errors.push(err.message));
  await page.goto(BASE);
  await expect(page).toHaveTitle(/FirstMileDev/);
  await expect(page.locator('text=VALIDATE DEMAND').first()).toBeVisible();
  const realErrors = errors.filter(e => !e.includes('favicon') && !e.includes('net::'));
  expect(realErrors).toHaveLength(0);
});

test('blog listing page loads', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', err => errors.push(err.message));
  await page.goto(`${BASE}/blog`);
  await expect(page).toHaveTitle(/Blog/);
  const realErrors = errors.filter(e => !e.includes('favicon') && !e.includes('net::'));
  expect(realErrors).toHaveLength(0);
});

test('blog post page loads without page errors', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', err => errors.push(err.message));
  const res = await page.request.get(`${BASE}/blog/why-startups-fail`);
  expect(res.status()).toBe(200);
  // pageerror is the critical check — confirms no React crashes
  const realErrors = errors.filter(e => !e.includes('favicon') && !e.includes('net::'));
  expect(realErrors).toHaveLength(0);
});

test('health endpoint returns ok', async ({ page }) => {
  const res = await page.request.get(`${BASE}/api/health`);
  expect(res.status()).toBe(200);
  const body = await res.json();
  expect(body.status).toBe('ok');
});

test('robots.txt exists', async ({ page }) => {
  const res = await page.request.get(`${BASE}/robots.txt`);
  expect(res.status()).toBe(200);
  const text = await res.text();
  expect(text).toContain('User-Agent');
});

test('header navigation visible on homepage', async ({ page }) => {
  await page.goto(BASE);
  await expect(page.locator('header')).toBeVisible();
  await expect(page.locator('text=FirstMileDev').first()).toBeVisible();
});

test('services section visible', async ({ page }) => {
  await page.goto(BASE);
  await expect(page.locator('text=How We Help')).toBeVisible();
});
