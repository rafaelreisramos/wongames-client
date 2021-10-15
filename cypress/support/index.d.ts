/// <reference types="cypress" />

type ShowcaseAttributes = {
  name: string
  highlight?: boolean
}

type FieldsAttributes = {
  label: string
  name: string | number
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

    /**
     * Custom command to get fields by label
     * @example cy.getFields()
     */
     getFields(fields: FieldsAttributes[]): Chainable<Element>
  }
}
