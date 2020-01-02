import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from './../actions/index';
import HomeComponent from './../components/HomeComponent/HomeComponent'
class LoginContainer extends Component {
    render() {
        return ( 
           <div>
               <HomeComponent></HomeComponent>
           </div>
        );
    }
}


const stateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}
export default connect(stateToProps, mapDispatchToProps)(LoginContainer);