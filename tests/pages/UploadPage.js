import path from 'path';

export class UploadPage {
  constructor(page) {
    this.page = page;
    this.fileInput = '#file-input';
    this.submitButton = 'button[type=submit]';
    this.successMessage = '.success';
    this.errorMessage = '.error';
  }

  async goto() {
    await this.page.goto('/upload.html');
  }

  async uploadFile(fileName) {
    const filePath = path.resolve(__dirname, '../test-data', fileName);
    await this.page.setInputFiles(this.fileInput, filePath);
    await this.page.click(this.submitButton);
  }

  async submitWithoutFile() {
    await this.page.click(this.submitButton);
  }

  success() {
    return this.page.locator(this.successMessage);
  }

  error() {
    return this.page.locator(this.errorMessage);
  }
}
