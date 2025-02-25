describe('Login teszt', () => {
  it('Login teszt', () => {
    cy.visit('http://localhost:5173')
    cy.get('#root > div > div > div > nav > div:nth-child(1) > a').should('have.text','Login').click()
    cy.get('#username').type('test1331')
    cy.get('#password').type('Tiktok_12')
    cy.get('#root > div > div:nth-child(2) > form > button').click();
    cy.get('#root > div > div:nth-child(2) > form > button').click();
  })
})