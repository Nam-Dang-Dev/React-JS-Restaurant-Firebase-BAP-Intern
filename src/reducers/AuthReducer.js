import * as types from './../constants/ActionTypes'

let initialState = {

};
export default function AuthReducres(state = initialState, action) {

    switch (action.type) {

        case types.REGISTER_SUCCEES:

            return {
                ...state
            }
        case types.REGISTER_FAILED:

            return {
                ...state
            };

        case types.LOGIN_SUCCEES:
            localStorage['userName'] = JSON.stringify(action.data.displayName);
            return {
                ...state,
                user: action.data
            }
        default:
            return state;
    }
}