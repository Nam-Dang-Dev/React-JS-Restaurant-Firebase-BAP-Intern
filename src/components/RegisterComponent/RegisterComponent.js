import React, { Component } from 'react';
import * as Aleart from './../../pure_components/alearts/Aleart'
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";

class RegisterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',


        }
    }
    addUser = () => {
        if (this.state.password === this.state.confirmPassword) {
            let newUser = {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            }
            this.props.addUserRequest(newUser);
        } else {
            Aleart.Aleart("error", "Confirm password not correct");

        }

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.user.userID) {
            Aleart.Aleart("success", "Register success!");
        } else {
            Aleart.Aleart("error", "Register  has error !");
        }

    }
    render() {


        return (
            <React.Fragment>
                <div className="col-md-6 offset-md-3 ">

                    <span className="anchor" id="formRegister"></span>

                    <div className="card card-outline-secondary">
                        <div className="card-header">
                            <h3 className="mb-0">Sign Up</h3>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label >User Name</label>
                                    <input type="text" className="form-control" placeholder="User name" onChange={(event) => {
                                        this.setState({ name: event.target.value });
                                    }} />
                                </div>

                                <div className="form-group">
                                    <label >Email</label>
                                    <input type="email" className="form-control" placeholder="Email" onChange={(event) => {
                                        this.setState({ email: event.target.value });
                                    }} />
                                </div>
                                <div className="form-group">
                                    <label >Password</label>
                                    <input type="password" className="form-control" placeholder="Password" onChange={(event) => {
                                        this.setState({ password: event.target.value });
                                    }} />

                                </div>
                                <div className="form-group">
                                    <label >Verify</label>
                                    <input type="password" className="form-control" placeholder="Password (again)" onChange={(event) => {
                                        this.setState({ confirmPassword: event.target.value });
                                    }} />

                                </div>
                                <div className="form-group centerLink">

                                    <NavLink to="/login">go to login page</NavLink>
                                </div>
                                <div className="form-group">
                                    <button type="button" className="btn btn-success btn-lg float-right" onClick={this.addUser}>Register</button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

export default RegisterComponent;