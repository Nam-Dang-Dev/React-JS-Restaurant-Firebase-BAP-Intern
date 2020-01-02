import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: localStorage.getItem('userName')
        }
    }

    componentDidMount() {
        this.setState({ userName: localStorage.getItem('userName') })
    }

    logOut = () => {
        localStorage.removeItem('userName');
        localStorage.removeItem('token');
        this.props.logOut();
        this.setState({ userName: null })
    }
    render() {
        let auth = this.props.auth;
        return (
            <React.Fragment>
                <header className="header croll">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="header_content d-flex flex-row align-items-center justify-content-start">
                                    <div className="logo">
                                        <a href="/#">
                                            <div>Max</div>
                                            <div>restaurant</div>
                                        </a>
                                    </div>
                                    <nav className="main_nav">
                                        <ul className="d-flex flex-row align-items-center justify-content-start">
                                            <li><NavLink to="/">home</NavLink></li>
                                            <li><a href="about.html">about us</a></li>
                                            <li><a href="menu.html">menu</a></li>
                                            <li><a href="/#">delivery</a></li>

                                            {auth.user && <li>
                                                <NavLink to='/cart' className="btn btn-dark" href="cart.html">
                                                    <i className="fa fa-shopping-cart"></i> Cart
                                                     <span className="badge badge-light"> {this.props.countCart} </span>
                                                </NavLink>
                                            </li>}
                                         
                                        </ul>
                                    </nav>

                                    {this.state.userName && <div className="reservations_phone ml-auto btn btn-dark"><NavLink to="/profile">{this.state.userName} </NavLink></div>}
                                    {!this.state.userName && <div className="reservations_phone ml-auto btn btn-dark"><NavLink to="/login">login</NavLink></div>}
                                    {!this.state.userName && <div className="reservations_phone ml-auto btn btn-dark"><NavLink to="/register">Sign up</NavLink></div>}
                                    {this.state.userName && <div className="reservations_phone ml-auto btn btn-dark"><NavLink to="/" onClick={this.logOut}>Sign out</NavLink></div>}

                                </div>

                            </div>
                        </div>
                    </div>
                </header>

                <div className="hamburger_bar trans_400 d-flex flex-row align-items-center justify-content-start">
                    <div className="hamburger">
                        <div className="menu_toggle d-flex flex-row align-items-center justify-content-start">
                            <span>menu</span>
                            <div className="hamburger_container">
                                <div className="menu_hamburger">
                                    <div className="line_1 hamburger_lines hamburger_lines1" ></div>
                                    <div className="line_2 hamburger_lines hamburger_lines2" ></div>
                                    <div className="line_3 hamburger_lines hamburger_lines3"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="menu trans_800">
                    <div className="menu_content d-flex flex-column align-items-center justify-content-center text-center">
                        <ul>
                            <li><a href="index.html">home</a></li>
                            <li><a href="about.html">about us</a></li>
                            <li><a href="menu.html">menu</a></li>
                            <li><a href="/#">delivery</a></li>
                            <li><a href="contact.html">contact</a></li>
                            <li><a href="blog.html">Cart</a></li>
                        </ul>
                    </div>
                    <div className="reservations_phone ml-auto"><a href="/#">login</a></div>
                    <div className="reservations_phone ml-auto"><a href="/#">Logout</a></div>

                </div>


               
            </React.Fragment>

        );
    }

}

export default Header;




