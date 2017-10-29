import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerReducer } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import filtersReducer from 'components/FilterPanel/Reducer';
import resultsReducer from 'components/ResultsList/Reducer';

const store = createStore(
  combineReducers({
    routing: routerReducer,
    filters: filtersReducer,
    results: resultsReducer,
  }),
  compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
);

export default store;
