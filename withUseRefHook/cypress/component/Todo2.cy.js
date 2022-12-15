import Todo from "../../src/Todo";
import App from "../../src/App";

describe('Todo', () => {
  it('test1', () => {
    cy.mount(<Todo/>);
    cy.get('[data-cy=value]').should('have.text', 'Current points: 0');
    cy.get('[data-cy=increment]').click()
    cy.get('[data-cy=increment]').click()
    cy.get('[data-cy=increment]').click()
    cy.get('[data-cy=value]').should('have.text', 'Current points: 2')
    cy.get('[data-cy=testing]').should('have.text', '2')
  })
})
describe('App', () => {
  it('test2', () => {
    cy.mount(<App />)
    cy.get('[data-cy=changed]').should('have.text', 'Initial Paragraph ')
    cy.get('[data-cy=clicked]').click()
    cy.get('[data-cy=changed]').should('have.text', 'Changed Paragraph')
    cy.get('[data-cy=changed2]').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
    cy.get('[data-cy=clicked2]').click()
    cy.get('[data-cy=changed2]').should('have.css', 'background-color', 'rgb(242, 228, 125)')
  })
})