# CypressPocApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.1.

## Start the app

Run `ng serve` to build the project. 

## Starting the server

Run `npm run api` to kick off the json-server.

## Running tests

Run `npm run cypress` to kick off cypress - this should open the cypress GUI.


# About Cypress

### Network Requests
For true end to end testing, responses go through all layers of your server and therefore the tests are often slower than stubbed responses. To test using network responses, ensure the server is running and then complete the neccessary ui interaction to trigger the api call. You should be able to see the network request on the cypress gui as well as within your server terminal.

### Network Requests
To stub out calls to the api, use the following commands:

`cy.server()` to start a server and begin routing responses to cy.route().

`cy.route()` to manage the behavior of network requests.

`as()` to assign an alias to the route.

`cy.wait()` to wait for the aliased resource to resolve before moving on to the next command.


## Helpful Articles/Resources
### Cypress Documentation
[Installation](https://docs.cypress.io/guides/getting-started/installing-cypress.html)

[API](https://docs.cypress.io/api/api/table-of-contents.html)

### Github
[Cypress](https://github.com/cypress-io/cypress)

[Cypress IO](https://github.com/cypress-io)

### Other
[Angular in Depth - Cypress](https://medium.com/angular-in-depth/get-started-with-cypress-d6ac4b910605)
