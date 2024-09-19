const exp = require("constants")

describe('pagina de login', () => {
  it('visitar a pagina', () => {
    cy.visit('http://127.0.0.1:5500/index.html?')
  })
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/index.html?')
  })
  it('senha errada', () => {
    cy.get('#user').type('userTest')
    cy.get('#password').type('1234')
    cy.get('#submit').click()
    cy.get('#mensagemErro').should('be.visible')
  })
  it('senha certa', () => {
    cy.get('#user').type('admin')
    cy.get('#password').type('admin1234')
    cy.get('#submit').click()
    cy.on('window:alert', (text => {
      expect(text).to.contains('Log-in efetuado com sucesso.')
    }))
  })
})