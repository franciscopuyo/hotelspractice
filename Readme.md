# Al mundo practice

Node version >= 6.0.0

I recommend using [yarn](https://yarnpkg.com/) as package manager

(you can use npm instead anyway. To the following doc use *npm run* instad of *yarn*)

### Client side
- To run the client
``` yarn start ```
- To build the client to production
``` yarn build ```
- To run eslint to check code style
``` yarn lint ```
### Server side
- To run the server
``` yarn start ```
- To build the server (it transpiled by babel)
``` yarn build ```


### What's left
- Add unit tests
- Add eslint tool (DONE)
- Add mock api for dev enviroment in case the server is down (DONE)
- Add configuration urls handling for more enviroments (DONE)
- Server side rendering to improve results rendering (it has a good performance anyway) (Wont do)
- Clean unneded dependencies from package.json (DONE)
- Test on IE (Wont do, I need to install the VM :P)
- Test on Firefox (DONE)
- Improve some code stuff (missing index.js files in reducers and actions, actions hardcoded and there are no constants) (DONE)
- Is sagas really required? For the moment no, perhaps in a bigger app (DONE thunk is a better approach)
- Handle error response with axios (DONE)
- **Add react proptypes and default props** (I coded fast and I leave them to the end) (DONE)
