import * as types from './../constants/ActionTypes'

let initialState = [];
export default function Foods(state = initialState, action) {

    switch (action.type) {
        case types.GET_ALL_FOOD:

            return {
                ...state,
                foods: action.data
            }
        default:
            return state;
    }
}