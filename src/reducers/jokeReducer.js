import { JOKE_UPDATE_VALUE } from '../actions/actionTypes';

const initialState = {
    joke: 'Laboris dolore occaecat amet velit nostrud labore in culpa commodo officia officia quis magna irure.'
};

export const jokeReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case JOKE_UPDATE_VALUE:
            return {
                ...state,
                joke: action.joke
            }
        default:
            return state;
    }
}