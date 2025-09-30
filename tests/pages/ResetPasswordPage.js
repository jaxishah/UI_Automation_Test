class ResetPasswordPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('#email');
    this.submitBtn = page.locator('button[type=submit]');
    this.message = page.locator('.message');
  }

  async goto() {
    await this.page.goto('/reset-password.html');
  }

  async submitEmail(email) {
    await this.emailInput.fill(email);
    await this.submitBtn.click();
  }

  async submitEmpty() {
    await this.submitBtn.click();
  }

  async getMessage() {
    return this.message;
  }
}

module.exports = { ResetPasswordPage };
