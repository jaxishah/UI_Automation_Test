// @ts-check
const { test, expect } = require('@playwright/test');

test('user can log in and log out', async ({ page }) => {
  // 1. Go to the login page
  await page.goto('https://the-internet.herokuapp.com/login');

  // 2. Fill in username and password
  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');

  // 3. Click the login button
  await page.click('button[type="submit"]');

  // 4. Verify login success message
  //await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
  await expect(page.locator('#flash')).toContainText(/You logged into a secure area!/);


  // 5. Log out
  await page.click('a[href="/logout"]');

  // 6. Verify logout message
  await expect(page.locator('#flash')).toContainText('You logged out of the secure area!');
});
