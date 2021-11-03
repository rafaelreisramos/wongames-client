/// <reference path="../support/index.d.ts" />

import { createUser } from '../support/generate'

describe('User', () => {
  it('should be able to sign up', () => {
    cy.visit('/sign-up')

    const user = createUser()
    cy.findByPlaceholderText(/username/i).type(user.username)
    cy.findByPlaceholderText(/e-mail/i).type(user.email)
    cy.findByPlaceholderText(/^password/i).type(user.password)
    cy.findByPlaceholderText(/confirm password/i).type(user.password)
    cy.findByRole('button', { name: /Sign up now/i }).click()

    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
    cy.findByText(user.username).should('exist')
  })
})