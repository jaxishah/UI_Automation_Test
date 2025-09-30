const { test, expect } = require('@playwright/test');
const users = require('./test-data/users.json');
const { LoginPage } = require('./pages/LoginPage');

test.describe('Login flow', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('valid login succeeds', async ({ page }) => {
    await loginPage.login(users.validUser.email, users.validUser.password);
    await expect(page).toHaveURL('/index.html');
    await expect(page.locator('#label-hello')).toHaveText('Hello!');
  });

  test('invalid login shows error', async () => {
    await loginPage.login(users.invalidUser.email, users.invalidUser.password);
    await expect(loginPage.errorMsg).toBeVisible();
    await expect(loginPage.errorMsg).toHaveText('Invalid email or password');
  });

  test('logout works', async ({ page }) => {
    await loginPage.login(users.validUser.email, users.validUser.password);
    await loginPage.logout();
    await expect(page).toHaveURL('/login.html');
  });
});
