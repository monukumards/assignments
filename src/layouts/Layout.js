import React from "react";
import {
    Route
} from "react-router-dom";
import Header from "../components/partials/Header"
import Footer from "../components/partials/Footer"
import Home from "../components/Home"
import About from "../components/About";
import Contact from "../components/Contact";

const Layout = () => {

    return (
        <>
            <Header />
            <Route path="/about">
                <About />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>
            <Route strict exact path="/">
                <Home />
            </Route>
            <Footer />
        </>
    )
}

export default Layout