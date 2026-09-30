EventHub Registration - Playwright Automation

This is a Playwright automation project I created to practice and demonstrate UI test automation using Playwright with TypeScript.

The project focuses on the EventHub registration page and covers both valid and invalid registration scenarios.

What I Tested

I created test cases for:

Valid registration
Invalid email format
Password less than 8 characters
Password without an uppercase letter
Password without a number
Password without a special character
Password and confirm password mismatch
Tools & Technologies
Playwright
TypeScript
Node.js
Git
Page Object Model (POM)
Project Structure
qa-portfolio/
│
├── pages/
│   └── RegistrationPage.ts
│
├── test-data/
│   └── registrationData.ts
│
├── tests/
│   └── registration.spec.ts
│
├── playwright.config.ts
├── package.json
└── README.md
How I Structured the Tests

I used Page Object Model (POM) to keep the page locators and reusable actions separate from the test cases.

For example, the registration page contains the locators and actions for:

Email
Password
Confirm password
Create Account button

The test file focuses mainly on the test scenarios and assertions.

I also kept the test data in a separate file so that the test data can be changed without modifying the main test logic.

Running the Tests

Install the project dependencies:

npm install

Run the registration tests:

npx playwright test tests/registration.spec.ts --project=chromium

To open the Playwright HTML report:

npx playwright show-report
Test Result

Current test execution:

7/7 tests passed on Chromium

Application Under Test

EventHub Registration

https://eventhub.rahulshettyacademy.com/register
