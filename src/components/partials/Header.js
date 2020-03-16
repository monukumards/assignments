import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false
        }
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        return (
            <header>
                <div className="header-area header-sticky">
                    <div className="main-header">
                        <div className="container">
                            <div className="row align-items-center">

                                <div className="col-xl-2 col-lg-2">
                                    <div className="logo">

                                        <NavLink to="/"><img src="assets/img/logo/logo.png" alt="" /></NavLink>

                                    </div>
                                </div>
                                <div className="col-xl-8 col-lg-8">

                                    <div className="main-menu f-right d-none d-lg-block">
                                        <nav>
                                            <ul id="navigation">
                                                <li><NavLink to="/" activeClassName="active-menu">Home</NavLink></li>
                                                <li><NavLink to="/about" activeClassName="active-menu">About</NavLink></li>
                                                <li><NavLink to="/contact" activeClassName="active-menu">Contact</NavLink></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-2">
                                    <div className="header-btn" style={{ display: (!isLoggedIn) ? 'block' : 'none' }}>
                                        <NavLink to="/login" className="btn btn1 d-none d-lg-block">Login</NavLink>
                                    </div>
                                    <div className="header-btn" style={{ display: (isLoggedIn) ? 'block' : 'none' }}>
                                        <NavLink to="/my-account" className="btn btn1 d-none d-lg-block">My Account</NavLink>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="mobile_menu d-block d-lg-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header