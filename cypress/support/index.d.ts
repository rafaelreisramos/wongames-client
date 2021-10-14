/// <reference types="cypress" />

type ShowcaseAttributes = {
  name: string
  highlight?: boolean
}

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to get elements by data-cy
     * @example cy.getByDataCy()
     */
     getByDataCy(selector: string, args?: Partial<Cypress.Timeoutable>): Chainable<Element>

    /**
     * Custom command to check banner in page
     * @example cy.shouldRenderBanner()
     */
    shouldRenderBanner(): Chainable<Element>

    /**
     * Custom command to check showcase in page
     * @example cy.shouldRenderShowcase()
     */
    shouldRenderShowcase(attrs: ShowcaseAttributes, args?: Partial<Cypress.Timeoutable>): Chainable<Element>
  }
}
