import { test, expect } from '@playwright/test';

test('homepage loads without console errors', async ({ page }) => {
  const errors: string[] = [];
  page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });
  page.on('pageerror', err => errors.push(err.message));
  
  await page.goto('http://localhost:3000');
  await expect(page).toHaveTitle(/FirstMileDev/);
  
  // Hero section visible
  await expect(page.locator('text=VALIDATE DEMAND').first()).toBeVisible();
  
  // No console errors (ignoring favicon)
  const realErrors = errors.filter(e => !e.includes('favicon') && !e.includes('net::'));
  expect(realErrors).toHaveLength(0);
});

test('blog page loads', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', err => errors.push(err.message));
  
  await page.goto('http://localhost:3000/blog');
  await expect(page).toHaveTitle(/Blog/);
  
  const realErrors = errors.filter(e => !e.includes('favicon') && !e.includes('net::'));
  expect(realErrors).toHaveLength(0);
});
