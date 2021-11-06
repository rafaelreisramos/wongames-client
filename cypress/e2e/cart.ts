/// <reference path="../support/index.d.ts" />

describe('Cart', () => {
  it('should add/remove items to/from cart', () => {
    cy.visit('/')

    cy.addToCartByIndex(0)
    cy.addToCartByIndex(1)
    cy.addToCartByIndex(2)

    cy.findAllByLabelText(/cart items/i)
      .first()
      .should('have.text', 3)
      .click()
    
    cy.getByDataCy('cart-list').within(() => {
      cy.findAllByRole('heading').should('have.length', 3)
    })

    cy.findAllByLabelText(/cart items/i)
      .first()
      .click()

    cy.removeFromCartByIndex(0)
    cy.removeFromCartByIndex(1)
    cy.removeFromCartByIndex(2)

    cy.findAllByLabelText(/cart items/i).should('not.exist')

    cy.findAllByLabelText(/shopping cart/i)
      .first()
      .click()

    cy.getByDataCy('cart-list').within(() => {
      /**
       * You can look for a hidden heading element if you don't want to open the cart
       * cy.findByRole('heading', { name: /Your cart is empty/i, hidden: true }).should('exist')
       */
      cy.findByRole('heading', { name: /Your cart is empty/i }).should('exist')
    })
  })
})