import React, { Component } from "react";

class Contact extends Component {
    render() {
        return (
            <>
                <div className="slider-area">
                    <div
                        className="single-slider hero-overly slider-height2 d-flex align-items-center"
                        style={{backgroundImage:"url(assets/img/hero/contact_hero.jpg)"}}
                    >
                        <div className="container">
                            <div className="row">
                                <div className="col-md-11 offset-xl-1 offset-lg-1 offset-md-1">
                                    <div className="hero-caption">
                                        <span>Contact</span>
                                        <h2>Contact</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="contact-section">
                    <div className="container">
                        <div className="d-none d-sm-block mb-5 pb-4">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14237.074355048653!2d75.8153216!3d26.8632064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1582293660388!5m2!1sen!2sin" width="1200" height="450" frameBorder="0" style={{border:0}} allowFullScreen=""></iframe>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <h2 className="contact-title">Get in Touch</h2>
                            </div>
                            <div className="col-lg-8">
                                <form
                                    className="form-contact contact_form"
                                    id="contactForm">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <textarea
                                                    className="form-control w-100"
                                                    name="message"
                                                    id="message"
                                                    cols="30"
                                                    rows="9"                                                    
                                                    placeholder=" Enter Message"
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input
                                                    className="form-control valid"
                                                    name="name"
                                                    id="name"
                                                    type="text"                                                    
                                                    placeholder="Enter your name"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input
                                                    className="form-control valid"
                                                    name="email"
                                                    id="email"
                                                    type="email"                                                    
                                                    placeholder="Email"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    name="subject"
                                                    id="subject"
                                                    type="text"                                                    
                                                    placeholder="Enter Subject"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group mt-3">
                                        <button type="submit" className="button button-contactForm boxed-btn">Send</button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-3 offset-lg-1">
                                <div className="media contact-info">
                                    <span className="contact-info__icon">
                                        <i className="ti-home"></i>
                                    </span>
                                    <div className="media-body">
                                        <h3>Buttonwood, California.</h3>
                                        <p>Rosemead, CA 91770</p>
                                    </div>
                                </div>
                                <div className="media contact-info">
                                    <span className="contact-info__icon">
                                        <i className="ti-tablet"></i>
                                    </span>
                                    <div className="media-body">
                                        <h3>+1 253 565 2365</h3>
                                        <p>Mon to Fri 9am to 6pm</p>
                                    </div>
                                </div>
                                <div className="media contact-info">
                                    <span className="contact-info__icon">
                                        <i className="ti-email"></i>
                                    </span>
                                    <div className="media-body">
                                        <h3>support@colorlib.com</h3>
                                        <p>Send us your query anytime!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Contact