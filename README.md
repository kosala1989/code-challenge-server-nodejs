# Pragmateam code challenge server (NodeJS)
Please refer to the provided document for the code challenge requirements. 

- Time started : 5.32 P.M. SGT
- Time completed: 7.45 P.M, SGT 

### Configuration

### Run Application

```bash
# Please execute below comamnd to run the application
$ npm run start

# Please execute below command to run the application in dev mode 
$ npm run dev
```
### Execute Tests
```bash
# Please execute below comamnd to execute tests of the application
$ npm run test
```

#Summary
### Highlights of improvements

- Add and setup testing layer of the project. Now any file ends with *.test.js will be detected by jest and execute tests
- Add nodemon dependency and dev script
- Add dotEnv dependency and configure url, ports in configuration file. In the future, we can use this file to store environment specific value in proper way
- Add basic tests and verify functionality before start refactorings 
- Add test to verify CORS 
- Add routes  and organize code based on the routes
- Add `express-async-errors` to catch asynchronous errors
- Handle errors and add logging to the application 

### What would I improve next if I had more time

- Since it's in initial stage, I would convert this project to TypeScript.
- I would discuss with design team and change API in a such  a way that will reduce API calls to IOT layer.
- Add cache layer to enhance performance (*** Need to consider cache stale)
- Make project type-script support
- Introduce new framework like nest.js to project. Since it provides 
  out of box solutions to many use cases which may needed in future 
  - Add proper structure to project 
  - Caching support 
  - Microservice support  
  - ORM support 
  - Logging/Auditing
- Add deployment script (dockerized the project )
- Add smoke tests/ security testing/ static code analysis 

### Explanations of decisions or the approach I took

This exercise is about technical depth, hence I believe they would not expect me change any API contract in application.
Since project does not have proper safety harness, before I start refactoring I makesure to add enough tests to application and verify all are running well.