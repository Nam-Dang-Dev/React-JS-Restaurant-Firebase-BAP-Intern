import React, { Component } from 'react'
import MenuFoodItem from './MenuFoodItem';
class MenuFoodComponent extends Component {
    constructor (props){
        super(props);
        this.state={
            starter: true,
            main: false,
            desert: false
        }
    }
    render() {
        return (
            <React.Fragment>

                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" data-toggle="tab" href="#starters" role="tab" aria-controls="home" onClick ={()=> this.setState({
                            starter: true, main: false, desert: false
                        })}  >Starters</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#main" role="tab" aria-controls="profile" onClick ={()=> this.setState({
                            starter: false, main: true, desert: false
                        })} >Main</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#deserts" role="tab" aria-controls="messages" onClick ={()=> this.setState({
                            starter: false, main: false, desert: true
                        })} >Deserts</a>
                    </li>

                </ul>

                <div className="tab-content">
                    {this.props.foods && this.showProducts(this.props.foods)}
                   
                </div>

            </React.Fragment>
        );
    }
    showProducts(foods) {
        let {starter, main, desert} = this.state;
        let {addToCart, storeCart, auth} = this.props;
        let result = null;
        result = foods.map((product, index) => {
            if(starter && product.category_id === "starters"){
                return <MenuFoodItem key={index}
                    food={product} addToCart = {addToCart} storeCart = {storeCart} auth = {auth} />
            }
            if(main && product.category_id === "main"){
                return <MenuFoodItem key={index}
                    food={product} addToCart = {addToCart}  storeCart = {storeCart} auth = {auth} />
            }
            if(desert && product.category_id === "deserts"){
                return <MenuFoodItem key={index}
                    food={product} addToCart = {addToCart}  storeCart = {storeCart} auth = {auth} />
            }
        });
       
        return result;
    }

}





export default MenuFoodComponent;