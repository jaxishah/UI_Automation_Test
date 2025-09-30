const { test, expect } = require('@playwright/test');
const { RegisterPage } = require('./pages/RegisterPage');

test.describe('Registration flow', () => {
  let registerPage;

  test.beforeEach(async ({ page }) => {
    registerPage = new RegisterPage(page);
    await registerPage.goto();
  });

  test('successful registration', async () => {
    await registerPage.register('John Doe', 'john@example.com', 'pass123');
    await expect(registerPage.successMsg).toBeVisible();
  });

  test('missing fields shows error', async () => {
    await registerPage.submitBtn.click(); // directly click without filling
    await expect(registerPage.errorMsg).toBeVisible();
  });
});
