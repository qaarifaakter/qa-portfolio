User Management API Testing

A small API testing project I created using Postman and Newman.

I used this project to practice testing different API operations and checking whether the responses contain the expected status codes and data.

What I tested
Get users
Get a non-existing user
Create a user
Update a user
Delete a user
Tools
Postman
Newman
JavaScript
HTML Extra Reporter
What I validated

For each request, I checked the response based on the expected behavior.

Some of the validations include:

HTTP status code
Response data
User information
User ID
Created/updated information
Required response fields
Test Result

The collection was executed using Newman.

5 requests
12 assertions
0 failed

All tests passed successfully.

Run the tests

From the project root:

npx newman run "api-testing/collection/API Testing.postman_collection.json"

To generate the HTML report:

npx newman run "api-testing/collection/API Testing.postman_collection.json" \
-r cli,htmlextra \
--reporter-htmlextra-export "api-testing/reports/api-test-report.html"
Project Structure
api-testing/
├── collection/
│   └── API Testing.postman_collection.json
├── reports/
│   └── api-test-report.html
└── README.md
What I practiced

This project helped me practice API request/response validation, negative testing, status code verification, writing Postman test scripts, and running API tests with Newman.
