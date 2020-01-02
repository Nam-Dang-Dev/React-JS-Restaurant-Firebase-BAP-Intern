import React, { Component } from 'react';

class SignatureFoodItemComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foodItem: this.props.food,
            auth: {}
        }
    }
    componentDidUpdate(prevProps) {

        if (this.state.foodItem !== prevProps.food) {
            this.setState({
                foodItem: this.props.food
            })
        }

    }
    componentDidMount() {
        this.setState({
            auth: this.props.auth
        })
    }
    addToCart = () =>{
        let auth = this.props.auth;
       if(auth.user){
        let user_id = auth.user.uid;
        this.props.addToCart(this.state.foodItem, this.props.storeCart, user_id);
       }else{
           console.log("can login");
       }
      
    }

    render() {
        let { foodItem, auth } = this.state;
       
        return (
            <div key={foodItem.id} className="col-lg-6 blog_col">
                <div className="blog_post">
                    <div className="blog_post_image_container">
                        <div className="blog_post_image"><img src={foodItem.image} alt="" /></div>
                        <button className="blog_post_date btn-outline-danger"><a  onClick={this.addToCart }>Oder Now</a></button>
                    </div>
                    <div className="blog_post_content">
                        <div className="blog_post_title"><a href="/#">{foodItem.name}</a></div>
                        <div className="blog_post_info">
                            <ul className="d-flex flex-row align-items-center justify-content-start">
                                <li>Price <a href="/#">{foodItem.price}</a></li>
                                <li><a href="/#">2 Comments</a></li>
                            </ul>
                        </div>
                        <div className="blog_post_text">
                            <p> {foodItem.detail}.</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default SignatureFoodItemComponent;





