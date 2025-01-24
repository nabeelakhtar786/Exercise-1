The script uses the Cypress testing framework to: 
1. Log in to the application.
2. Perform package-related operations such as adding and deleting a package.
3. Verify the visibility and correctness of the package details after adding.
4. Confirm that the package no longer exists after deletion.
5. Log out at the end of each test.

The program is structured with two test cases:

Adding a package and verifying its addition.
Deleting the package and ensuring its removal.

Steps to Execute
Pre-Requisites:

Ensure Cypress is installed (npm install cypress).
Save the provided script (spec.cy.js) in the cypress/integration directory of your Cypress project.
Verify that all dependencies required by Cypress are installed.


Execution Steps:

Open the terminal in your project directory.
Run Cypress using the command:   "npx cypress open"
In the Cypress Test Runner, select the test file (spec.cy.js) to execute the script.

Design Decisions
Cypress Framework: Cypress was chosen for its robust end-to-end testing capabilities and ease of use for automating modern web applications.

Element Selection: DOM elements were located using CSS selectors, ensuring precise targeting of input fields, buttons, and text elements.

Assertion: Assertions (should) are used to verify that the package is added or removed as expected.

Reusability: Common actions like logging in and logging out are implemented in both test cases, making them easy to modify and expand.
