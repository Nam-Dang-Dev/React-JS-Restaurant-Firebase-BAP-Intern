import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch, withRouter } from "react-router-dom";
import * as Aleart from './../../pure_components/alearts/Aleart';

class HomeComponent extends Component {
    constructor (props){
        super(props);
        this.state ={
            userName: "",
            password: "",
           
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.user.uid) {
            this.props.history.push("/");
        } else {
            Aleart.Aleart("ERROR", "Login failed");
        }

    }

    login =() =>{
        this.props.login(this.state.userName, this.state.password);
    }
    render() {
        return (
            
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <span className="anchor" id="formLogin"></span>
                    <div className="card card-outline-secondary">
                        <div className="card-header">
                            <h3 className="mb-0">Login</h3>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control"  onChange={(event) => {
                                        this.setState({ userName: event.target.value });
                                    }}/>
                                    <div className="invalid-feedback">Please enter your email</div>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control"  onChange={(event) => {
                                        this.setState({ password: event.target.value });
                                    }}/>
                                    <div className="invalid-feedback">Please enter a password</div>
                                </div>
                                <div className="form-check small">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" /> <span>Remember me on this computer</span>
                                    </label>
                                </div>
                                <div className="form-group centerLink">

                                    <NavLink to="/register">go to sign up</NavLink>
                                </div>
                                <button type="button" onClick ={this.login} className="btn btn-success btn-lg float-right" id="btnLogin">Login</button>
                            </form>
                        </div>

                    </div>


                </div>
            </div>
        );
    }

}

export default withRouter(HomeComponent);


