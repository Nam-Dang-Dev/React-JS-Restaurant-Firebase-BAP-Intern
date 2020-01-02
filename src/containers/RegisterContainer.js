import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from './../actions/index';
import RegisterComponent from './../components/RegisterComponent/RegisterComponent';


class RegisterContainer extends Component {
    render() {
      
        return ( 
           <div>
               <RegisterComponent addUserRequest ={this.props.addUserRequest} user = {this.props.user} />
             
           </div>
        );
    }
    
}


const stateToProps = (store) => {
    return {
        user : store.AuthReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addUserRequest: (user) => {
            dispatch(action.addUserRequest(user));
        },
    }
}
export default connect(stateToProps, mapDispatchToProps)(RegisterContainer);