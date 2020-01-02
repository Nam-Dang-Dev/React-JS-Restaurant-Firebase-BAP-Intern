import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from './../actions/index';
import BillComponent from './../components/checkOutComponents/BillComponent'

class BillContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carts: {},
            totalPrice: null
        }
    }
    componentDidMount() {
        this.setState({
            carts: this.props.carts
        })
    }
    componentWillReceiveProps(nextProps) {
       let carts = nextProps.carts.carts;
      let result = this.calculatePrice(carts);
      this.setState({totalPrice: result});
     
    }

    calculatePrice = (obj) => {
        let sum = 0;
        for (let i = 0; i < obj.length; i++) {
            if(obj[i].status === 1){
                sum += (obj[i].price * obj[i].quantity);
            }
          
        }
       
        return sum;
    };
 

    render() {
        return (
            <BillComponent totalPrice = {this.state.totalPrice} order ={this.props.order} cartStore = {this.props.carts} auth = {this.props.auth} updateStatusCart = {this.props.updateStatusCart} />
        );
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
        order: (foods, user_id, info) => {
            dispatch(action.order(foods, user_id, info));
        },
        updateStatusCart: (user_id, status)=>{
            dispatch(action.updateCartStatus(user_id, status));
        }

    }
}
export default connect(stateToProps, mapDispatchToProps)(BillContainer);