import { createStore, applyMiddleware, compose } from 'redux';
import reducer from 'src/reducers';
import logger from 'src/middlewares/logger';
import auth from 'src/middlewares/auth';
import socket from 'src/middlewares/socket';

/*
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
*/

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(logger, auth, socket),
));

export default store;
