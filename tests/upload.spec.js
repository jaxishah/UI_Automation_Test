import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('File upload', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/upload.html');
  });

  test('upload a file successfully', async ({ page }) => {
    const filePath = path.resolve(__dirname, 'test-data', 'dummy.txt');
    await page.setInputFiles('#file-input', filePath);
    await page.click('button[type=submit]');
    await expect(page.locator('.success')).toBeVisible();
  });

  test('no file shows error', async ({ page }) => {
    await page.click('button[type=submit]');
    await expect(page.locator('.error')).toBeVisible();
  });
});
