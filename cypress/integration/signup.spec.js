describe('Airtable signUp', () => {
    beforeEach('Before Each test', function() {
      cy.visit('https://airtable.com/signup')
    })
  
    it('Adding the collabrator while onboarding', () => {
      
      //Create a Unique random number to use it in email/Name
      const uniqueNumber = Date.now().toString();

      //Get a unique emailId, fullName, coWorker, password & baseName for each run
      var email = 'testEmail'+uniqueNumber+'@gmail.com'
      var fullName = 'Full'+uniqueNumber+' Name'
      var coWorker1 = 'coworker'+uniqueNumber+'@gmail.com'
      const password = 'testPwd!23'
      const baseName = "TestBase "+uniqueNumber

      cy.createUser(fullName, email, password)
      cy.contains('Skip').click()
      cy.addCollabratorDuringOnBoarding(coWorker1)

      //Add new Base
      cy.createBase(baseName)

      //Click on share and verify Collabrator
      cy.contains('Share').click()
      cy.get('.pt2 > :nth-child(3) > :nth-child(2)').click()
      cy.verifyCollabrator(coWorker1)
    })

    it('Add the collabrator after Creating a Base', () => {

      //Create a Unique random number to use it in email/Name
      const uniqueNumber = Date.now().toString();

      //Get a unique email id each and every time
      var email = 'testEmail'+uniqueNumber+'@gmail.com'
      var fullName = 'Full'+uniqueNumber+' Name'
      var coWorker1 = 'coworker'+uniqueNumber+'@gmail.com'
      const password = 'testPwd!23'
      const baseName = "TestBase "+uniqueNumber 

      cy.createUser(fullName, email, password)
      cy.clearOnboarding()
      cy.createBase(baseName)
      cy.addCollabrator(coWorker1)
      cy.verifyCollabrator(coWorker1)
    })
  })