/// <reference path="../support/index.d.ts" />

import { createUser } from '../support/generate'

describe('User', () => {
  it('should be able to sign up', () => {
    cy.visit('/sign-up')

    const user = createUser()
    cy.signUp(user)
    
    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
    cy.findByText(user.username).should('exist')
  })

  it('should be able to sign in and sign out', () => {
    cy.visit('/sign-in')

    cy.url().should('eq', `${Cypress.config().baseUrl}/sign-in`)
    cy.signIn()

    cy.contains(/cypress/i, { timeout: 8000 }).should('exist').click()
    cy.findByText(/sign out/i).click()
    
    cy.findByText(/cypress/i).should('not.exist')
    cy.findByRole('link', { name: /sign in/i }).should('exist')
  })

  it('should be able to redirect the user to the desired page after sign in', () => {
    cy.visit('/profile/me')

    cy.url().should('eq', `${Cypress.config().baseUrl}/sign-in?callbackUrl=/profile/me`)
    
    cy.signIn()
    cy.url().should('eq', `${Cypress.config().baseUrl}/profile/me`)
    cy.findByLabelText(/username/i).should('have.value', 'cypress')
    cy.findByLabelText(/e-mail/i).should('have.value', 'e2e@wongames.com')
  })
})