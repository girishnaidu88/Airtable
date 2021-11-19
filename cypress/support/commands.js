// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import '@testing-library/cypress/add-commands'

//Command to Create an User
Cypress.Commands.add('createUser', (fullName, email, password)=>{
    cy.contains('email').type(email)
      cy.contains('Continue').click()
      cy.get('input[name="fullName"]').click().type(fullName)
      cy.get('input[name="password"]').click().type(password)
      cy.contains('Continue').click()
})


//To clean onboarding screens
Cypress.Commands.add('clearOnboarding',()=>{
    // cy.get('input[id="coworker1"]').click().type(coworker1)
      cy.contains('Skip').click()
      cy.contains('Skip').click()
      cy.contains('Skip').click()
      cy.contains('Go home').click()
})


//To create a new Base
Cypress.Commands.add('createBase',(baseName)=>{
    // cy.wait(2000)
    cy.get('div[aria-label="Create Base from scratch"]').click()
    cy.contains('Untitled Base').click()
    cy.get('#hyperbaseContainer > div:nth-child(29) > div > div.width-full.flex.items-center > input').type(baseName+'{enter}')
})


//To add a collabrator
Cypress.Commands.add('addCollabrator',(email)=>{
    cy.contains('Share').click()
    // cy.get('.justify-end > .text-color-quiet').click()
    cy.get('.pt2 > :nth-child(3) > :nth-child(2)').click()
    cy.get('input[placeholder="Invite more base collaborators via email"').type(email)
    cy.get(':nth-child(2) > .selectMenu > .focus-container > .items-center').click().then(()=>{
        cy.get('.hdropdown > :nth-child(2)').click()
    })
    cy.contains('Send invite').click()
})

//To add collabrator during onboarding process
Cypress.Commands.add('addCollabratorDuringOnBoarding', (coworker1)=>{
    // Add corabrator and add him as editor
    cy.get('input[id="coworker1"]').click().type(coworker1)
    cy.get('#workspaceSetupDialogContainer > div.onboardingContainer.scrollbar-hidden.baymax.flex.items-center.justify-center.absolute.all-0.darken3 > div > div > div.flex.flex-auto.max-width-2.col-12.mx-auto.my3.line-height-4 > div > div.flex.flex-none.items-center.justify-between.mt3 > div.flex.flex-row.items-center.self-end > div.py1-and-half.signupButton.huge.strong.pointer.center.block.focus-visible.rounded.ml2.blueDark1-hover.blue.text-white.focusable').click()
    cy.contains('Skip').click()
    cy.contains('Go home').click()
})


//Command to verify collabrator got added successfully
Cypress.Commands.add('verifyCollabrator',(email)=>{
      cy.findAllByTitle(email).each(($value)=>{
        if($value === email)
          expect($value).equals(email)
      })
      //loop through all the sections and check if it's the same collabrator and then assert
      cy.get('section[role="list"]').each((item, index)=>{
                var getCurrentCollab = cy.get('section[role="list"] > .py1 > :nth-child(1) > .ml1 > .strong').eq(index).value
                var getCurrentRights = cy.get('section[role="list"] > .py1 > :nth-child(3) > :nth-child(1) > .selectMenu > .focus-container > .items-center > .flex-auto').eq(index).value
                if(email === getCurrentCollab){
                    expect(getCurrentCollab).equals(email)
                    expect(getCurrentCollab).equals("Editor")
                }
          })
        cy.get('.mx-auto > .absolute').click()
})