EventHub Registration - Playwright Automation

This project contains automated tests for the registration page of the EventHub application.

I built this project using Playwright and TypeScript to practice UI automation and cover some common registration validation scenarios.

Test Scenarios

The current test suite covers:

Successful registration
Invalid email
Password less than 8 characters
Password without uppercase letter
Password without number
Password without special character
Password and confirm password mismatch
Tools
Playwright
TypeScript
Node.js
Git
Page Object Model (POM)
Project Structure
qa-portfolio/
├── pages/
│   └── RegistrationPage.ts
├── test-data/
│   └── registrationData.ts
├── tests/
│   └── registration.spec.ts
├── playwright.config.ts
├── package.json
└── README.md
Test Setup

I used a separate page class for the registration page. It contains the locators and actions used by the tests.

Test data is also kept in a separate file so I can change the input values without changing the test cases.

The test file contains the actual scenarios and assertions.

Run the Tests

Install dependencies:

npm install

Run the registration tests:

npx playwright test tests/registration.spec.ts --project=chromium

Open the HTML report:

npx playwright show-report
Test Result

7 out of 7 tests passed on Chromium.

Application

EventHub Registration:

https://eventhub.rahulshettyacademy.com/register