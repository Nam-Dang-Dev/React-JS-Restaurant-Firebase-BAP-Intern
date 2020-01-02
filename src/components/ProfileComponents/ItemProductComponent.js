import React, { Component } from 'react';
import * as Aleart from './../../pure_components/alearts/Aleart'
class ItemProductComponent extends Component {
  


    render() {

        let { food } = this.props;

        return (
            <tr className="cartitem" >
                <td> <img src={food.image} alt="" />  </td>
                <td> {food.name} </td>
                <td> {food.price} </td>

                <td>
                   {food.quantity}
                </td>
                <td className = "confirmed">
                    Confirmed
                </td>

                
            </tr>
        )
    }


}

export default ItemProductComponent;





