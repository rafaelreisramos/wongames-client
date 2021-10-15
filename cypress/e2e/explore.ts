/// <reference path="../support/index.d.ts" />

import { genreFields, platformFields, priceFields, sortFields } from '../../src/utils/filter/fields'

describe('Explore Page', () => {
  before(() => {
    cy.visit('/games')
  })

  it('should render filter headings and options', () => {
    cy.findByRole('heading', { name: /sort by price/i }).should('exist')
    cy.findByRole('heading', { name: /^price/i }).should('exist')
    cy.findByRole('heading', { name: /platforms/i }).should('exist')
    cy.findByRole('heading', { name: /genres/i }).should('exist')

    cy.getFields(sortFields)
    cy.getFields(priceFields)
    cy.getFields(platformFields)
    cy.getFields(genreFields)
  })
})