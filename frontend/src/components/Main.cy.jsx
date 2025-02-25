import React from 'react'
import Main from './Main'

describe('<Main />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Main />)
    cy.get('h2').should('have.text','Mire jó az oldal?');
    cy.get('h1').should('contains.text','Weboldal');
    //cy.get('img').should('be.visible');
  })
})