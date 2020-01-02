import React, { Component } from 'react'
import HeaderContainer from './../../containers/HeaderContainer'
import './style.css'
class CartComponent extends Component {

    render() {
        return ( <
            React.Fragment >
            <
            HeaderContainer / >
            <
            div className = "space" > < /div> <
            div className = "container" >
            <
            table className = "table table-hover" >
            <
            thead >
            <
            tr >
            <
            th > Image < /th> <
            th > Name Food < /th> <
            th > Price < /th> <
            th > Quantity < /th> <
            th > Excute < /th> <
            /tr> <
            /thead> <
            tbody > { this.props.children } < /tbody> <
            /table>

            <
            /div> <
            /React.Fragment>
        );
    }

}





export default CartComponent;