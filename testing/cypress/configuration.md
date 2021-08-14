#  CYPRESS CONFIGURATION

## Define script in package.json
Create the corresponding script for cypress.

`"start-test": "NODE_ENV=TEST node app.js"`

`"test:e2e": "npx cypress run"`

To take in account: `npx` will execute on the fly cypress package. It will be installed in the temp folder only when required. Cypress also installs a full browser in order to run tests as end2end tests.