import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rocketReducer, { initialState } from './rockets/rockets';
import { missionsReducer, missionsInitialState } from './missions/missions';

const rootReducer = combineReducers({
  missions: missionsReducer,
  rockets: rocketReducer
});
const store = createStore((state, action) => rootReducer(state, action),
  { rockets: initialState, missions: missionsInitialState },
  composeWithDevTools(applyMiddleware(thunk)));

export default store;
