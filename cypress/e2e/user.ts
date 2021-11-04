/// <reference path="../support/index.d.ts" />

import { createUser } from '../support/generate'

describe('User', () => {
  it.skip('should be able to sign up', () => {
    cy.visit('/sign-up')

    const user = createUser()
    cy.signUp(user)
    
    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
    cy.findByText(user.username).should('exist')
  })

  it('should be able to sign in and sign out', () => {
    cy.visit('/sign-in')

    cy.findByPlaceholderText(/e-mail/i).type('e2e@wongames.com')
    cy.findByPlaceholderText(/password/i).type('12345678')
    cy.findByRole('button', { name: /sign in now/i }).click()

    cy.contains(/cypress/i, { timeout: 8000 }).should('exist').click()
    cy.findByText(/sign out/i).click()

    cy.findByText(/cypress/i).should('not.exist')
    cy.findByRole('link', { name: /sign in/i }).should('exist')
  })
})