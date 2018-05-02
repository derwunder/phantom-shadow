// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import signin from './signin';

const rootReducer = combineReducers({
  counter,
  signin,
  router,
});

export default rootReducer;
