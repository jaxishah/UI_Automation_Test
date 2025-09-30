const { test, expect } = require('@playwright/test');
const { ResetPasswordPage } = require('./pages/ResetPasswordPage');

test.describe('Password Reset flow', () => {
  let resetPasswordPage;

  test.beforeEach(async ({ page }) => {
    resetPasswordPage = new ResetPasswordPage(page);
    await resetPasswordPage.goto();
  });

  test('shows success message after submitting email', async ({ page }) => {
    await resetPasswordPage.submitEmail(process.env.DEMO_ADMIN_EMAIL);

    const message = await resetPasswordPage.getMessage();
    await expect(message).toBeVisible();
    await expect(message).toHaveText('Password reset link sent!');
  });

  test('does not show message if email empty', async ({ page }) => {
    await resetPasswordPage.submitEmpty();

    const message = await resetPasswordPage.getMessage();
    await expect(message).toHaveCount(1);
    await expect(message).toBeHidden();
  });
});
