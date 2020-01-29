import { createStore, applyMiddleware } from 'redux';
import { Reducers } from '../reducers';
import ReduxThunk from 'redux-thunk';

export const Store = createStore(Reducers, {}, applyMiddleware(ReduxThunk));