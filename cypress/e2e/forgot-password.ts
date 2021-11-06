/// <reference path="../support/index.d.ts" />

describe('Forgot password', () => {
  it('should fill the input and receive a success message', () => {
    cy.intercept('POST', '**/auth/forgot-password', res => {
      res.reply({
        status: 200,
        body: { ok: true}
      })
    
      expect(res.body.email).to.eq('ci@wongames.com')
    })

    cy.visit('/forgot-password')

    cy.findByPlaceholderText(/e-mail/i).type('ci@wongames.com')
    cy.findByRole('button', { name: /send e-mail/i }).click()

    cy.findByText(/You just received an e-mail/i).should('exist')
  })
  
  it('should fill the input with an invalid e-mail and receive an error', () => {
    cy.intercept('POST', '**/auth/forgot-password', res => {
      res.reply({
        status: 400,
        body: {
          error: 'Bad Request',
          message: [
            { 
              messages: [
                {
                  message: 'This email does not exist'
                }
              ]
            }
          ]
        }
      })
    })

    cy.visit('/forgot-password')

    cy.findByPlaceholderText(/e-mail/i).type('unknown@wongames.com')
    cy.findByRole('button', { name: /send e-mail/i }).click()

    cy.findByText(/This email does not exist/i).should('exist')
  })
})