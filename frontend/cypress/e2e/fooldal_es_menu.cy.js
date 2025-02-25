describe('Főoldal és menü teszt', () => {

  beforeEach('Oldal betöltés',()=>{
    cy.visit('http://localhost:5173')
  })
  it('Oldal betöltése', () => {
    cy.get('h1').should('contains.text','Weboldal');
   
  });
  it('Logi menüpontmegjelenik-e',()=>{
    cy.get('#root > div > div > div > nav > div:nth-child(1) > a').should('have.text','Login');
  });
  it('Regisztrációs menüpont megjelenik-e',()=>{
    cy.get('#root > div > div > div > nav > div:nth-child(2) > a').should('have.text','Register');
  });
  it('Főoldal linkeje megjelenik-e',()=>{
    cy.get('#root > div > div > div > div > a').should('have.text',' Gészi Frontend ');
  });
  it('Logi menüpontmegjelenik-e',()=>{
    cy.get('#root > div > div > div > nav > div:nth-child(1) > a').should('have.text','Login').click()
    cy.get('h1').should('contains.text','Belépés');
  });
})