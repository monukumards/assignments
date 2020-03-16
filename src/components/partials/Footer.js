import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer-area black-bg footer-padding">
                    <div className="container">
                        <div className="row d-flex justify-content-between">
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                                <div className="single-footer-caption mb-30">

                                    <div className="footer-logo">
                                        <a href="index.html">
                                            <img src="assets/img/logo/logo2_footer.png" alt="true" />
                                        </a>
                                    </div>
                                    <div className="footer-social footer-social2">
                                        <a href="https://www.facebook.com">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                        <a href="https://www.twitter.com">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                        <a href="https://www.globe.com">
                                            <i className="fas fa-globe"></i>
                                        </a>
                                        <a href="https://www.behance.com">
                                            <i className="fab fa-behance"></i>
                                        </a>
                                    </div>
                                    <div className="footer-pera">
                                        <p>
                                            Copyright &copy;{new Date().getFullYear()} All rights reserved | This template is made with <i className="ti-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-5">
                                <div className="single-footer-caption mb-30">
                                    <div className="footer-tittle">
                                        <h4>Quick Links</h4>
                                        <ul>
                                            <li>
                                                About Mariana
                                            </li>
                                            <li>
                                                Our Best Rooms
                                            </li>
                                            <li>
                                                Our Photo Gellary
                                            </li>
                                            <li>
                                                Pool Service
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3">
                                <div className="single-footer-caption mb-30">
                                    <div className="footer-tittle">
                                        <h4>Reservations</h4>
                                        <ul>
                                            <li>
                                                Tel: 345 5667 889
                                            </li>
                                            <li>
                                                Skype: Marianabooking
                                            </li>
                                            <li>
                                                reservations@hotelriver.com
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                                <div className="single-footer-caption mb-30">
                                    <div className="footer-tittle">
                                        <h4>Our Location</h4>
                                        <ul>
                                            <li>
                                                198 West 21th Street,
                                            </li>
                                            <li>
                                                Suite 721 New York NY 10016
                                            </li>
                                        </ul>

                                        <div className="footer-form">
                                            <div id="mc_embed_signup">
                                                <form
                                                    target="_blank"
                                                    action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                                                    method="get"
                                                    className="subscribe_form relative mail_part"
                                                >
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        id="newsletter-form-email"
                                                        placeholder="Email Address"
                                                        className="placeholder hide-on-focus"
                                                    />
                                                    <div className="form-icon">
                                                        <button
                                                            type="submit"
                                                            name="submit"
                                                            id="newsletter-submit"
                                                            className="email_icon newsletter-submit button-contactForm"
                                                        >
                                                            <img src="assets/img/logo/form-iocn.jpg" alt="true" />
                                                        </button>
                                                    </div>
                                                    <div className="mt-10 info"></div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer