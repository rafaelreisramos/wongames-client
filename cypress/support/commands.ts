import '@testing-library/cypress/add-commands'

Cypress.Commands.add('shouldRenderBanner', () => {
  cy.get('.slick-slider').within(() => {
    cy.findByRole('heading', { name: /cyberpunk 2077/i })

    cy.get('.slick-dots > :nth-child(2) > button').click()
    cy.wait(500)

    cy.findByRole('heading', { name: /cs\:go/i })
  })
})

Cypress.Commands.add('shouldRenderShowcase', ({ name, highlight = false }) => {
  cy.get(`[data-cy="${name}"]`).within(() => {
    cy.findByRole('heading', { name }).should('exist')

    cy.get(`[data-cy="highlight"]`).should(highlight ? 'exist' : 'not.exist')

    if (highlight) {
      cy.get(`[data-cy="highlight"]`).within(() => {
        cy.findByRole('link').should('have.attr', 'href')
      })
    }

    if (name !== "Upcoming Games") {
      cy.get(`[data-cy="game-card"]`).should('have.length.gt', 0)
    }
  })
})
