import { test, expect } from '@playwright/test';
import { UploadPage } from './pages/UploadPage.js';

test.describe('File Upload flow', () => {
  let uploadPage;

  test.beforeEach(async ({ page }) => {
    uploadPage = new UploadPage(page);
    await uploadPage.goto();
  });

  test('upload a file successfully', async () => {
    await uploadPage.uploadFile('dummy.txt');
    await expect(uploadPage.success()).toBeVisible();
  });

  test('no file shows error', async () => {
    await uploadPage.submitWithoutFile();
    await expect(uploadPage.error()).toBeVisible();
  });
});
