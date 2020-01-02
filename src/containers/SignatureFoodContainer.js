import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from './../actions/index';

import SignatureFoodComponent from './../components/foodsComponent/SignatureFoodComponent';
import SignatureFoodItemComponent from './../components/foodsComponent/SignatureFoodItemComponent';

class SignatureFoodContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foods: {},
            carts: {}
        }
    }

    componentDidMount() {
        this.props.getAllFoodRequest();
        this.setState({
            foods: this.props.foods,
            carts: this.props.carts
        })
        let auth = this.props.auth;
        if(auth.user){
            let user_id = auth.user.uid;
            this.props.getAllCart(user_id);
        }else{
            console.log("need login");
        }
    }


    componentDidUpdate(prevProps) {
        if (this.props.foods !== prevProps.foods) {
            this.setState({
                foods: this.props.foods,
            })
        }
        if (this.props.carts !== prevProps.carts) {
            this.setState({
                carts: this.props.carts,
            })
        }
    }
    render() {
        let { foods } = this.state;
        return (
            <React.Fragment>
                <SignatureFoodComponent> {foods.foods && this.showFood(foods)} </SignatureFoodComponent>
            </React.Fragment>
        );

    }
    showFood(foods) {
        let result = null;
        result = foods.foods.map((food, index) => {
            return <SignatureFoodItemComponent key={index}
                food={food}
                storeCart={this.state.carts}
                addToCart={this.props.addToCart}
                auth ={this.props.auth}
            />
        });
        return result;
    }
}



const stateToProps = (store) => {
 
    return {
        foods: store.FoodReducer,
        carts: store.CartReducer,
        auth: store.AuthReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllFoodRequest: () => {
            dispatch(action.getAllFood());
        },
        addToCart: (food, storeCart, user_id) => {
            dispatch(action.addToCart(food, storeCart, user_id));
        },
        getAllCart: (user_id) => {
            dispatch(action.getAllCart(user_id));
        }

    }
}
export default connect(stateToProps, mapDispatchToProps)(SignatureFoodContainer);