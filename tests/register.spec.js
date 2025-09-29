import { test, expect } from '@playwright/test';

test.describe('Registration flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/register.html');
  });

  test('successful registration', async ({ page }) => {
    await page.fill('#name', 'John Doe');
    await page.fill('#email', 'john@example.com');
    await page.fill('#password', 'pass123');
    await page.click('button[type=submit]');
    await expect(page.locator('.success')).toBeVisible();
  });

  test('missing fields shows error', async ({ page }) => {
    await page.click('button[type=submit]');
    await expect(page.locator('.error')).toBeVisible();
  });
});
