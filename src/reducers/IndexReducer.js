import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import FoodReducer from './FoodReducer'
import CartReducer from './CartReducer'
const rootReducer = combineReducers({
    AuthReducer,
    FoodReducer,
    CartReducer
});

export default rootReducer;