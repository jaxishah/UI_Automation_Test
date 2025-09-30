const { test, expect, devices } = require('@playwright/test');


const viewports = [
{ name: 'mobile', width: 375, height: 812 },
{ name: 'tablet', width: 768, height: 1024 },
{ name: 'desktop', width: 1366, height: 768 }
];


for (const v of viewports) {
test(`page layout on ${v.name}`, async ({ page }) => {
await page.setViewportSize({ width: v.width, height: v.height });
await page.goto('/index.html');
await expect(page.locator('header')).toBeVisible();
});
}