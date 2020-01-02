import React, { Component } from 'react'
class MenuFoodItem extends Component {


    addToCart = () =>{
        let {food, storeCart, auth, addToCart} = this.props;
        let user_id = auth.user.uid;
        addToCart(food, storeCart, user_id);

        

    }

    render() {
        let food = this.props.food;
        return (
            <React.Fragment>
                <div className="row itemMenu">
                    <a className="pull-left image" href="/#">
                        <img src={food.image} alt="Image" />
                    </a>
                    <div className="media-title">
                        <h4 className="media-heading">{food.name}</h4>
                        <p>Price: <span className="price"> {food.price}  </span> </p>
                    </div>

                    <div className="pull-right add-btn">
                        <button type="button" className="btn btn-danger" onClick = {this.addToCart} >+</button>
                    </div>
                </div>

            </React.Fragment>
        );
    }


}







export default MenuFoodItem;