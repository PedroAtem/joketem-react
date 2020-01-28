import { combineReducers } from 'redux';

import { jokeReducer } from './jokeReducer';

export const Reducers = combineReducers({
  jokeState: jokeReducer
});