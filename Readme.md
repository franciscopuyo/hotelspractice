# Al mundo practice

### Client side
- To run the client
``` yarn start ```
- To build the client to production
``` yarn build ```

### Server side
- To run the server
``` yarn start ```
- To build the server (it transpiled by babel)
``` yarn build ```


### What's left
- Add unit tests
- Add eslint tool
- Add mock api for dev enviroment in case the server is down
- Add configuration urls handling for more enviroments
- Server side rendering to improve results rendering (it has a good performance anyway)
- Clean unneded dependencies from package.json
- Test on IE and Firefox
- Improve some code stuff (missing index.js files in reducers and actions, actions hardcoded and there are no constants)
- Is sagas really required? For the moment no, perhaps in a bigger app
- Handle error response with axios (it needs a middleware to handle some error codes).
- *Add react proptypes and default props* (I coded fast and I leave them to the end)
