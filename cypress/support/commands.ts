import '@testing-library/cypress/add-commands'

Cypress.Commands.add('getByDataCy', (selector, ...args) => {
  return cy.get(`[data-cy="${selector}"]`, ...args)
})

Cypress.Commands.add('shouldRenderBanner', () => {
  cy.get('.slick-slider').within(() => {
    cy.findByRole('heading', { name: /cyberpunk 2077/i })

    cy.get('.slick-dots > :nth-child(2) > button').click()
    cy.wait(500)

    cy.findByRole('heading', { name: /Horizon Zero Dawn/i })
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

Cypress.Commands.add('shouldBeLessThan', (value) => {
  cy
    .findByText(/^\$\d+(\.\d{1,2})?/)
    .invoke('text')
    .then($el => $el.replace('$', ''))
    .then(parseFloat)
    .should('be.lt', value)
})

Cypress.Commands.add('shouldBeGreaterThan', (value) => {
  cy
    .findByText(/^\$\d+(\.\d{1,2})?/)
    .invoke('text')
    .then($el => $el.replace('$', ''))
    .then(parseFloat)
    .should('be.gt', value)
})

Cypress.Commands.add('signUp', (user) => {
  cy.findByPlaceholderText(/username/i).type(user.username)
  cy.findByPlaceholderText(/e-mail/i).type(user.email)
  cy.findByPlaceholderText(/^password/i).type(user.password)
  cy.findByPlaceholderText(/confirm password/i).type(user.password)
  cy.findByRole('button', { name: /Sign up now/i }).click()
})

Cypress.Commands.add('signIn', (email = 'e2e@wongames.com', password = '123456') => {
  cy.findByPlaceholderText(/e-mail/i).type(email)
  cy.findByPlaceholderText(/password/i).type(password)
  cy.findByRole('button', { name: /sign in now/i }).click()
})

Cypress.Commands.add('addToCartByIndex', (index: number) => {
  cy.getByDataCy('game-card').eq(index).within(() => {
    cy.findByRole('button', { name: /add to cart/i} ).click()
  })
})

Cypress.Commands.add('removeFromCartByIndex', (index: number) => {
  cy.getByDataCy('game-card').eq(index).within(() => {
    cy.findByRole('button', { name: /remove from cart/i} ).click()
  })
})