import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../actions/index';
import ProfileComponent from  './../components/ProfileComponents/ProfileComponent'
import ItemProductComponent from '../components/ProfileComponents/ItemProductComponent'
class ProfileContainer extends Component {
    constructor(props) { 
        super(props);
        this.state = {
            carts: []
        }
    }
    componentDidMount(){
        let auth = this.props.auth;
        if(auth.user){
            let user_id = auth.user.uid;
            this.props.getAllCart(user_id);
       
        }
       
    }
 
   
    render() {
        let producs = this.props.carts;
        let carts = producs.carts;
        
        return (<ProfileComponent>{carts && this.showProducts(carts)}</ProfileComponent>);
    }
    showProducts= (foods) => {
        let result = null;
        result = foods.map((product, index) => {
            if (product.status === 2) {
                return <ItemProductComponent key={index}
                    food={product}
                   
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
        
    }
}
export default connect(stateToProps, mapDispatchToProps)(ProfileContainer);