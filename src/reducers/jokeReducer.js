import { JOKE_UPDATE_VALUE, LOADING_UPDATE_VALUE } from '../actions/actionTypes';

const initialState = {
    joke: '',
    loading: false
};

export const jokeReducer = (state = initialState, action) => {
    switch (action.type) {
        case JOKE_UPDATE_VALUE:
            return {
                ...state,
                joke: action.joke
            }
        case LOADING_UPDATE_VALUE:
            return {
                ...state,
                loading: action.show
            }
        default:
            return state;
    }
}