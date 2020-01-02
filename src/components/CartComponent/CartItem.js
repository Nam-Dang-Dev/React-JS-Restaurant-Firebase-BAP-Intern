import React, { Component } from 'react';
import * as Aleart from './../../pure_components/alearts/Aleart'
class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItem: this.props.food,
            quantity: this.props.food.quantity
        } 
    }

    componentDidUpdate() {
        if (this.props.food.quantity !== this.state.quantity) {
            this.setState({ 
                cartItem: this.props.food,
                quantity: this.props.food.quantity
             });
        }
    }



    increase = () => {
        this.setState({ quantity: ++this.state.quantity });
        this.hanleQuantity();
    }

    reduction = () => {
        if (this.state.quantity > 1) {
            this.setState({ quantity: --this.state.quantity });
            this.hanleQuantity();
        }

    }

    hanleQuantity = () => {
        this.props.updateQuantity(this.state.cartItem.id, this.state.quantity);
    }
    handlDelete = (id) => {
        if (window.confirm("Do you want to delete this food?")) {
            this.props.deleteCartItem(id);
        }
    }

    render() {

        let { cartItem } = this.state;

        return (
            <tr className="cartitem" >
                <td> <img src={cartItem.image} alt="" />  </td>
                <td> {cartItem.name} </td>
                <td> {cartItem.price} </td>

                <td>
                    <div className="row" >
                        <button type="button" className="btn btn-success giam" onClick={this.reduction} > - </button>
                        <input className="form-control inputQuantity" value={this.state.quantity} />
                        <button type="button" className="btn btn-success tang" onClick={this.increase}> + </button>
                    </div>

                </td>

                <td>
                    <button type="button" className="btn btn-outline-danger btn-xs" onClick={(event) => { event.preventDefault(); this.handlDelete(cartItem.id) }}  >
                        <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                </td>
            </tr>
        )
    }


}

export default CartItem;





