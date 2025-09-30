# Playwright Test Suite

Requirements:

Node.js v22.20.0

Playwright Test framework

## How to Run

1. Clone the repo

   git clone https://github.com/your-username/your-playwright-project.git
   cd your-playwright-project

2. Install dependencies

    npm install

3. Install Playwright browsers

    npx playwright install --with-deps

4. Start the local server

    node server.js

5. Run tests

    npx playwright test - runs tests in background (browser not visible).
    npx playwright test --ui  - opens a window where you can pick and run tests.
    npx playwright test --headed - runs tests with browser visible.

6. View report

    npx playwright show-report



Note: All the points are completed mentioned in the Task. In CI/CD, 
