import { combineReducers } from 'redux';

import { jokeReducer } from './jokeReducer';
import { nameReducer } from './nameReducer';

export const Reducers = combineReducers({
  jokeState: jokeReducer,
  nameState: nameReducer
});