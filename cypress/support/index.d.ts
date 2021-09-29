// load type definition from Cypress module
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to visit Google homepage
     * @example cy.google()
     */
    google(): Chainable<Window>
  }
}
