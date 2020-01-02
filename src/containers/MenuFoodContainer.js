import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from './../actions/index';
import MenuFoodComponent from './../components/menuFoodComponent/MenuFoodComponent'
class MenuFoodContainer extends Component {
    constructor(props){
        super(props);
        this.state ={
            foods: []
        }
    }
    componentDidMount() {
       let foods = this.props.foods;
        this.setState ({
            foods: foods.foods
        })
    }
    

    render() {
       let {foods} = this.state;
       let {addToCart, carts, auth} = this.props;
        return (
            <React.Fragment>
                <MenuFoodComponent foods = {foods} addToCart = {addToCart} storeCart = {carts} auth = {auth} />
            </React.Fragment>
        );
    }

   

}

const stateToProps = (store) => {
    return {
        carts: store.CartReducer,
        auth: store.AuthReducer,
        foods: store.FoodReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (food, storeCart, user_id) => {
            dispatch(action.addToCart(food, storeCart, user_id));
        },

    }
}
export default connect(stateToProps, mapDispatchToProps)(MenuFoodContainer);