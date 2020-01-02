import React, { Component } from 'react'
import * as Aleart from './../../pure_components/alearts/Aleart' 
class BillComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            LastName: "",
            phone: "",
            address: "",
            comment: ""
        }
    }


    clickOrder = () => {
        let auth = this.props.auth;
        let { firstName, phone, address } = this.state;
        if (auth.user) {
            if (firstName && phone && address) {
                let cart = this.props.cartStore;
                let user_id = auth.user.uid;
                this.props.order(cart.carts, user_id, this.state);
                this.props.updateStatusCart(user_id, 2);
            }else{
                Aleart.Aleart("error", "You need to fill out the information");
            }

        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="bill" >
                    <div className="tr title-bill" >
                        <h3 > Bill now </h3>
                    </div>
                    <div className="tr price" >
                        Price: <span className="left" > {this.props.totalPrice} </span>
                    </div>
                    <div className="tr transport" >
                        Transport fee(Est.) <span className="left"> 7, 000 đ / km </span>
                    </div>
                    <div className="tr total_price" >
                        Total price: <span className="left" > </span>
                    </div>
                    <div className="tr btn-order" >
                        <button type="button"
                            className="btn btn-large btn-block btn-danger"
                            id="recaptcha-container" data-toggle="modal" data-target="#exampleModalCenter"> Order now </button>
                    </div>

                </div>

                <div className="modal fade" id="exampleModalCenter" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3 className="modal-title" id="exampleModalLongTitle">Contact information </h3>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="row contact">
                                    <div>
                                        <div className="form-group">
                                            <label className="control-label">First Name:</label>
                                            <div className="">
                                                <input type="text" className="form-control" id="fname" placeholder="Enter First Name" name="fname" onChange={(event) => {
                                                    this.setState({ firstName: event.target.value });
                                                }} />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label">Last Name:</label>
                                            <div className="">
                                                <input type="text" className="form-control" id="lname" placeholder="Enter Last Name" name="lname" onChange={(event) => {
                                                    this.setState({ LastName: event.target.value });
                                                }} />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label">Phone number:</label>
                                            <div className="">
                                                <input type="number" className="form-control" placeholder="Enter phone number" onChange={(event) => {
                                                    this.setState({ phone: event.target.value });
                                                }} />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label" >Address:</label>
                                            <div className="">
                                                <input type="text" className="form-control" placeholder="Enter address" onChange={(event) => {
                                                    this.setState({ address: event.target.value });
                                                }} />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label">Comment:</label>
                                            <div className="">
                                                <textarea className="form-control" rows="5" id="comment"></textarea>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary"  data-dismiss="modal" onClick={this.clickOrder} >Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>

        );
    }

}








export default BillComponent;