/// <reference path="../support/index.d.ts" />

describe('Reset password', () => {
  it('should show an error if password does not match', () => {
    cy.visit('/reset-password?code=code')
  
    cy.findByPlaceholderText(/^password/i).type('new_password')
    cy.findByPlaceholderText(/confirm password/i).type('wrong_password')
    cy.findByRole('button', { name: /reset/i }).click()

    cy.findByText(/confirm password does not match with password/i).should('exist')
  })

  it('should an error if code is not valid', () => {
    cy.intercept('POST', '**/auth/reset-password', res => {
      res.reply({
        status: 400,
        body: {
          error: 'Bad Request',
          message: [
            { 
              messages: [
                {
                  message: 'Incorrect code provided'
                }
              ]
            }
          ]
        }
      })
    })
    
    cy.visit('/reset-password?code=invalid_code')

    cy.findByPlaceholderText(/^password/i).type('new_password')
    cy.findByPlaceholderText(/confirm password/i).type('new_password')
    cy.findByRole('button', { name: /reset/i }).click()

    cy.findByText(/Incorrect code provided/i).should('exist') 
  })

  it('should fill the inputs, sign in the user and redirect to home', () => {
    cy.intercept('POST', '**/auth/reset-password', {
      statusCode: 200,
      body: { 
        user: { 
          email: 'cypress@wongames.com'
        }
      }
    })

    cy.intercept('POST', '**/auth/callback/credentials*', {
      statusCode: 200,
      body: { 
        user: { 
          email: 'cypress@wongames.com'
        }
      }
    })

    cy.intercept('GET', '**/auth/session*', {
      statusCode: 200,
      body: { 
        user: {
          name: 'cypress', 
          email: 'cypress@wongames.com'
        }
      }
    })

    cy.visit('/reset-password?code=valid_code')

    cy.findByPlaceholderText(/^password/i).type('new_password')
    cy.findByPlaceholderText(/confirm password/i).type('new_password')
    cy.findByRole('button', { name: /reset/i }).click()
    
    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
    cy.findByText(/cypress/i).should('exist')
  })
})