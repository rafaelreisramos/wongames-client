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
})