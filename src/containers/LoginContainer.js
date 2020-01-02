import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from './../actions/index';
import LoginComponent from './../components/LoginComponent/LoginComponent';


class LoginContainer extends Component {
    render() {
        return ( 
           <div>
               <LoginComponent login ={this.props.login} user = {this.props.user}/>
           </div>
        );
    }
    
}


const stateToProps = (store) => {
    
    return {
        user: store.AuthReducer.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (userName, password) => {
            dispatch(action.login(userName, password));
        },
    }
}
export default connect(stateToProps, mapDispatchToProps)(LoginContainer);