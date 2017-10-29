/* eslint react/jsx-filename-extension: 0 */
/* eslint new-cap: 0 */

import React from 'react';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import App from 'views/App';
import Hotels from 'views/Hotels';
import store from './store';

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
