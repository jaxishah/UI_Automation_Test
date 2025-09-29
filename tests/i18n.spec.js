// tests/i18n.spec.js
import { test, expect } from '@playwright/test';

const languages = [
  { code: 'en', name: 'English', expected: 'Hello' },
  { code: 'ko', name: 'Korean', expected: '안녕하세요' },
  { code: 'ja', name: 'Japanese', expected: 'こんにちは' },
  { code: 'id', name: 'Indonesian', expected: 'Halo' },
];

test.describe('Internationalization (i18n)', () => {
  for (const lang of languages) {
    test(`UI changes to ${lang.name}`, async ({ page }) => {
      // Go to index page
      await page.goto('/index.html');

      // Select the language from dropdown
      await page.selectOption('#language-select', lang.code);

      // Assert that the text updates correctly
      await expect(page.locator('#label-hello')).toHaveText(lang.expected);
    });
  }
});
