import { test, expect } from '@playwright/test';

test.describe('Password Reset flow', () => {

  test('shows success message after submitting email', async ({ page }) => {
    await page.goto('http://localhost:3000/reset-password.html');
    await page.fill('#email', process.env.DEMO_ADMIN_EMAIL);
    await page.click('button[type=submit]');

    const message = page.locator('.message');
    await expect(message).toBeVisible();
    await expect(message).toHaveText('Password reset link sent!');
  });

  test('does not show message if email empty', async ({ page }) => {
    await page.goto('http://localhost:3000/reset-password.html');
    await page.click('button[type=submit]');

    const message = page.locator('.message');
    await expect(message).toHaveCount(1);
    await expect(message).toBeHidden();
  });

});
