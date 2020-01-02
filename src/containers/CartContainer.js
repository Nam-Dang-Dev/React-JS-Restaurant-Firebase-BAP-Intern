import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from './../actions/index';
import CartComponent from './../components/CartComponent/CartComponent'
import CartItem from './../components/CartComponent/CartItem'
import MenuFoodContainer from './MenuFoodContainer'
import BillContainer from './../containers/BillContainer'
class SignatureFoodContainer extends Component {
    constructor(props) { 
        super(props);
        this.state = {
            carts: []
        }
    }

    componentDidMount() {
        let auth = this.props.auth;
        if (auth.user) {
            let user_id = auth.user.uid;
            this.props.getAllCart(user_id);
        } else {
            console.log("need login");
        }


    }
    componentDidUpdate(prevProps) {
        if (this.props.carts !== prevProps.carts) {
            this.setState({ carts: this.props.carts.carts });
        }
    }

   
    render() {
        let carts = this.state.carts;
        return (<div className="cart">
            <div className="cartItem">
                <CartComponent>{carts && this.showProducts(carts)}</CartComponent>
            </div>

            <div className="container checkout" >
                <div className="row" >
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 contact-form panel">
                      <MenuFoodContainer />
                    </div>

                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 panel">
                        <BillContainer />
                    </div>

                </div>
            </div>



        </div>
        );
    }
    showProducts= (foods) => {
        let result = null;
        result = foods.map((product, index) => {
            if (product.status === 1) {
                return <CartItem key={index}
                    food={product}
                    updateQuantity={this.props.updateQuantity}
                    storeCart={this.props.carts}
                    deleteCartItem={this.props.deleteCartItem}
                />
            }

        });
        return result;
    }
}

const stateToProps = (store) => {
    return {
        carts: store.CartReducer,
        auth: store.AuthReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllCart: (user_id) => {
            dispatch(action.getAllCart(user_id));
        },
        updateQuantity: (id, quantity) => {
            dispatch(action.updateQuantity(id, quantity));
        },
        deleteCartItem: (id) => {
            dispatch(action.deleteCartItem(id));
        }
    }
}
export default connect(stateToProps, mapDispatchToProps)(SignatureFoodContainer);