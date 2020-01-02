import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from './../actions/index';
import ContactComponent from './../components/checkOutComponents/contactComponent'


class ContactContainer extends Component {

    render() {

        return (
            <React.Fragment>
                <ContactComponent></ContactComponent>
            </React.Fragment>
        );

    }


}



const stateToProps = (store) => {

    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllFoodRequest: () => {
            dispatch(action.getAllFood());
        },

    }
}
export default connect(stateToProps, mapDispatchToProps)(ContactContainer);