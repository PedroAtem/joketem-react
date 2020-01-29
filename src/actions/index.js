import { JOKE_UPDATE_VALUE, LOADING_UPDATE_VALUE, NAME_UPDATE_VALUE } from './actionTypes';
import jokeApi from '../service/jokeApi';

export const updateJoke = () => {
    return async dispatch => {
        dispatch({ type: LOADING_UPDATE_VALUE, show: true });
        const response = await jokeApi.get();
        dispatch({ type: JOKE_UPDATE_VALUE, joke: response.data });
        dispatch({ type: LOADING_UPDATE_VALUE, show: false });
    }
};

export const updateName = name => ({ type: NAME_UPDATE_VALUE, name })