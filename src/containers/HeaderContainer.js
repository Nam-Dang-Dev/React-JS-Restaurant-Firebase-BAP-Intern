import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from './../actions/index'
import Header from './../components/block/Header'
class HeaderContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countCart: 0
        }
    }
    componentDidUpdate(prevProps) {
        let carts = this.props.carts;
        let count = 0;
        for (let i = 0; i < carts.carts.length; i++) {
            if (carts.carts[i].status === 1) {
                count += carts.carts[i].quantity ;
            }
        }
        if (this.props.carts !== prevProps.carts) {
            this.setState({
                countCart: count
            })
        }
    }
    render() {
        return (
            <div>
                <Header logOut={this.props.logOut} countCart={this.state.countCart} auth = {this.props.auth} />
            </div>
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
        logOut: () => {
            dispatch(action.logOut());
        }
    }
}
export default connect(stateToProps, mapDispatchToProps)(HeaderContainer);