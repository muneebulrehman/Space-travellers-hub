import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rocketReducer from './rockets/rockets';

const store = createStore(rocketReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
