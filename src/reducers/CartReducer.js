import * as types from './../constants/ActionTypes'

const initialState = [];
export default function CartReducer(state = initialState, action) {

    switch (action.type) {
        case types.ADD_TO_CART:
            state.carts.push(action.data);
            return {
                ...state
            }
        case types.GET_ALL_CART:

            return {
                ...state,
                carts: action.data
            }
        case types.UPDATE_CART:
            const id = state.carts.findIndex(products => products.id === action.data.id);
            if (action.data.quantity) {
                state.carts[id].quantity = action.data.quantity;
            } else {
                state.carts[id].quantity = state.carts[id].quantity + 1;
            }

            return {
                ...state
            }
        case types.UPDATE_CART_STATUS:
            let carts = state.carts;
            for (let i = 0; i < carts.length; i++) {
                if (carts[i].user_id === action.data.user_id && carts[i].status === 1) {
                    carts[i].status = action.data.status;
                }
            }
            return {
                ...state
            }

        case types.DELETE_CART_ITEM:
            const index = state.carts.findIndex(products => products.id === action.data);
            state.carts.splice(index, 1);

            return {
                ...state
            }

        default:
            return state;
    }
}