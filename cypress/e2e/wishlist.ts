/// <reference path="../support/index.d.ts" />

describe('Wishlist', () => {
  it('should add/remove a game to/from wishlist', () => {
    cy.visit('/wishlist')
    cy.signIn()

    cy.findByRole('heading', { name: /Your wishlist is empty/i }).should('exist')
    
    cy.getByDataCy('game-card').first().within(() => {
      cy.findByLabelText(/add to wishlist/i).click()
    })

    cy.getByDataCy('wishlist').within(() => {
      cy.getByDataCy('game-card').should('have.length', 1)
    })

    cy.getByDataCy('wishlist').within(() => {
      cy.findByLabelText(/remove from wishlist/i).click()
    })

    cy.findByRole('heading', { name: /Your wishlist is empty/i }).should('exist')
  })
})