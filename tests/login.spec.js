import { test, expect } from '@playwright/test';
import users from './test-data/users.json';

test.describe('Login flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/login.html');
  });

  test('valid login succeeds', async ({ page }) => {
    await page.fill('#email', users.validUser.email);
    await page.fill('#password', users.validUser.password);
    await page.click('button[type=submit]');
    await expect(page).toHaveURL('http://localhost:3000/index.html');
    await expect(page.locator('#label-hello')).toHaveText('Hello!');
  });

  test('invalid login shows error', async ({ page }) => {
    await page.fill('#email', users.invalidUser.email);
    await page.fill('#password', users.invalidUser.password);
    await page.click('button[type=submit]');
    const error = page.locator('.error');
    await expect(error).toBeVisible();
    await expect(error).toHaveText('Invalid email or password');
  });

  test('logout works', async ({ page }) => {
    await page.fill('#email', users.validUser.email);
    await page.fill('#password', users.validUser.password);
    await page.click('button[type=submit]');
    await page.click('#logout-btn');
    await expect(page).toHaveURL('http://localhost:3000/login.html');
  });
});
