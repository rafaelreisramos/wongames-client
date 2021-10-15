import '@testing-library/cypress/add-commands'

Cypress.Commands.add('getByDataCy', (selector, ...args) => {
  return cy.get(`[data-cy="${selector}"]`, ...args)
})

Cypress.Commands.add('shouldRenderBanner', () => {
  cy.get('.slick-slider').within(() => {
    cy.findByRole('heading', { name: /cyberpunk 2077/i })

    cy.get('.slick-dots > :nth-child(2) > button').click()
    cy.wait(500)

    cy.findByRole('heading', { name: /cs\:go/i })
  })
})

Cypress.Commands.add('shouldRenderShowcase', ({ name, highlight = false }, ...args) => {
  cy.getByDataCy(`${name}`, ...args).within(() => {
    cy.findByRole('heading', { name }).should('exist')

    cy.getByDataCy("highlight").should(highlight ? 'exist' : 'not.exist')

    if (highlight) {
      cy.getByDataCy("highlight").within(() => {
        cy.findByRole('link').should('have.attr', 'href')
      })
    }

    if (name !== "Upcoming Games") {
      cy.getByDataCy("game-card").should('have.length.gt', 0)
    }
  })
})

Cypress.Commands.add('getFields', (fields) => {
  fields.map(({ label }) => {
    cy.findByLabelText(label).should('exist')
  })
})
