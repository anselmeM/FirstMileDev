import { test, expect } from '@playwright/test';

test('homepage loads without console errors', async ({ page }) => {
  const errors: string[] = [];
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });
  page.on('pageerror', err => errors.push(err.message));
  
  await page.goto('/');
  await expect(page).toHaveTitle(/FirstMileDev/);
  
  // Check key sections exist
  await expect(page.locator('text=Validate Demand')).toBeVisible();
  
  expect(errors.filter(e => !e.includes('favicon'))).toHaveLength(0);
});
