## Leads App

* Created using Angular, Express, Node.js, and postgreSQL.

* Used knex for the query builder, so npm install then in the terminal type knex migrate:latest --env development

* Sorry, no tests for this project. I tried my best to write stubs and mocks for angular's $http using $httpBackend but just couldn't quite get it to work. I know I can figure it out, but I didn't want to spend more time on this project figuring it out, even though I believe testing IS important. I have experience writing unit tests, integration tests, and acceptance tests. I am proficient in doing backend/frontend tests. I am capable of figuring out tools, libraries such as sinon, sinon-promise, mocking node.js' http methods and streaming the data and stubbing the res.on/res.end. My weakness is setting up the boilerplate, but once I get things set up (I don't give up and will figure it out) and things are working correctly, I can build on top of the codebase and refactor. 
## EDIT (TESTS NOW WORK):
* EDIT: This project had me waking up early and not being able to fall back to sleep. I just had to figure out how to write basic unit tests for angular's $http using $httpBackend. I successfully wrote karma tests for this project. I am satisfied to know this project has basic unit tests and feel good that I figured it out.

* In order to run the test just npm install first and run karma start.

* I will figure out how to mock the $http for my own sake since I don't like having this project without any tests. If you wish to see it, I will glady push it once I figure it out.

* Will need to implement better solution to refreshing the form after submitting. Currently with the way things are set up, new objects are being stored in the database with just the created_at property being defined. 

* run the project using nodemon and it will be on port 3000

* I know I can do a lot better if given the time to polish up things up, please provide feedback!

