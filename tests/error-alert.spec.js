import { test, expect } from '@playwright/test';

test.describe('Error messages & alerts', () => {

  test('shows error on invalid login', async ({ page }) => {
    await page.goto('/login.html');

    // Fill invalid credentials
    await page.fill('#email', 'wrong@example.com');
    await page.fill('#password', 'badpassword');
    await page.click('button[type=submit]');

    // Select the error element
    const error = page.locator('.error');

    // Playwright automatically waits until visible
    await expect(error).toBeVisible();
    await expect(error).toHaveText('Invalid email or password');
  });

  test('shows alert popup and handle it', async ({ page }) => {
    await page.goto('/login.html');

    // Listen for the alert dialog
    page.once('dialog', async (dialog) => {
      expect(dialog.type()).toBe('alert');
      expect(dialog.message()).toBe('This is a test alert!');
      await dialog.accept();
    });

    // Trigger the alert
    await page.click('#alert-btn');
  });

});
