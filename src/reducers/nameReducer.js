import { NAME_UPDATE_VALUE } from '../actions/actionTypes';

const initialState = {
    name: ''
};

export const nameReducer = (state = initialState, action) => {
    switch (action.type) {
        case NAME_UPDATE_VALUE:
            return {
                ...state,
                name: action.name
            }
        default:
            return state;
    }
}