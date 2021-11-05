/// <reference types="cypress" />

import { User } from "./generate"

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
  
    /**
     * Custom command to check if value is less than price
     * @example cy.shouldBeLessThan(100)
     */
    shouldBeLessThan(value: number): Chainable<Element>
  
    /**
     * Custom command to check if value is greater than price
     * @example cy.shouldBeGreaterThan(100)
     */
    shouldBeGreaterThan(value: number): Chainable<Element>   
 
    /**
     * Custom command to sign up
     * @example cy.signUp(user)
     */
    signUp(user: User): Chainable<Element>   

    /**
    * Custom command to sign in
    * @example cy.signIn(email, password)
    */
    signIn(email?: string, password?: string): Chainable<Element>

    /**
    * Custom command to add a game to cart by index
    * @example cy.addToCartByIndex(0)
    */
    addToCartByIndex(index: number): void

    /**
    * Custom command to remove a game from cart by index
    * @example cy.removeFromCartByIndex(0)
    */
    removeFromCartByIndex(index: number): void
  }
}
