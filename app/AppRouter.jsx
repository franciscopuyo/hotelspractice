/* eslint react/jsx-filename-extension: 0 */
/* eslint new-cap: 0 */

import React from 'react';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, Route, Redirect } from 'react-router';
import { createBrowserHistory } from 'history';
import store from './store';
import App from 'views/App';
import Hotels from 'views/Hotels';

const history = syncHistoryWithStore(createBrowserHistory(), store);

class AppRouter extends React.Component {
  render = () => (
    <Provider store={store}>
      <Router history={history}>
        <App>
          <Route path="/" component={Hotels} />
        </App>
      </Router>
    </Provider>
  );
}

export default AppRouter;
