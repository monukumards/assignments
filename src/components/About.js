import React, { Component } from "react";

export default class About extends Component {
    showTestimonials = () => {
        /* Testimonial Active*/
        var testimonial = window.$('.h1-testimonial-active');
        if (testimonial.length) {
            testimonial.slick({
                dots: false,
                infinite: true,
                speed: 1000,
                autoplay: false,
                arrows: true,
                prevArrow: '<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
                slidesToShow: 1,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: false,
                            arrow: true
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: false
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: false,
                        }
                    }
                ]
            });
        }
    }

    componentDidMount = () => {
        this.showTestimonials();
    }

    render() {
        return (
            <>
                <div className="slider-area">
                    <div
                        className="single-slider hero-overly slider-height2 d-flex align-items-center"
                        style={{ backgroundImage: "url(assets/img/hero/aboutpage_hero.jpg)" }}
                    >
                        <div className="container">
                            <div className="row">
                                <div className="col-md-11 offset-xl-1 offset-lg-1 offset-md-1">
                                    <div className="hero-caption">
                                        <span>About</span>
                                        <h2>About</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <section className="make-customer-area customar-padding fix">
                    <div className="container-fluid p-0">
                        <div className="row">
                            <div className="col-xl-5 col-lg-6">
                                <div className="customer-img mb-120">
                                    <img src="assets/img/customer/customar1.png" className="customar-img1" alt="true" />
                                    <img src="assets/img/customer/customar2.png" className="customar-img2" alt="true" />
                                    <div className="service-experience heartbeat">
                                        <h3>
                                            25 Years of Service
                                            <br />Experience
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4">
                                <div className="customer-caption">
                                    <span>About our company</span>
                                    <h2>Make the customer the hero of your story</h2>
                                    <div className="caption-details">
                                        <p
                                            className="pera-dtails"
                                        >Lorem ipsum dolor sit amet, consectetur adipisic- ing elit, sed do eiusmod tempor inc.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                                        <a href="none" className="btn more-btn1">
                                            Learn More
                                                <i className="ti-angle-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <div className="gallery-area g-padding fix">
                    <div className="container-fluid p-0">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="gallery-active owl-carousel">
                                    <div className="gallery-img">
                                        <a href="#">
                                            <img src="assets/img/gallery/gallery1.jpg" alt="true" />
                                        </a>
                                    </div>
                                    <div className="gallery-img">
                                        <a href="#">
                                            <img src="assets/img/gallery/gallery2.jpg" alt="true" />
                                        </a>
                                    </div>
                                    <div className="gallery-img">
                                        <a href="#">
                                            <img src="assets/img/gallery/gallery3.jpg" alt="true" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dining-area d-padding">

                    <div className="single-dining-area left-img">
                        <div className="container">
                            <div className="row justify-content-end">
                                <div className="col-lg-8 col-md-8">
                                    <div className="dining-caption">
                                        <span>Our resturent</span>
                                        <h3>Dining & Drinks</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  <br />tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  <br />veniam, quis nostrud.
                </p>
                                        <a href="#" className="btn border-btn">
                                            Learn More
                  <i className="ti-angle-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="single-dining-area right-img">
                        <div className="container">
                            <div className="row justify-content-start">
                                <div className="col-lg-8 col-md-8">
                                    <div className="dining-caption text-right">
                                        <span>Our Pool</span>
                                        <h3>Swimming Pool</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  <br />tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  <br />veniam, quis nostrud.
                </p>
                                        <a href="#" className="btn border-btn">
                                            Learn More
                  <i className="ti-angle-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="testimonial-area t-padding">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-9 col-lg-9 col-md-9">
                                <div className="h1-testimonial-active">

                                    <div className="single-testimonial pt-65">

                                        <div className="font-back-tittle mb-105">
                                            <div className="archivment-front">
                                                <img src="assets/img/logo/testimonial.png" alt="true" />
                                            </div>
                                            <h3 className="archivment-back">Testimonial</h3>
                                        </div>

                                        <div className="testimonial-caption text-center">
                                            <p>Yorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>

                                            <div className="testimonial-ratting">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <div className="rattiong-caption">
                                                <span>
                                                    Clifford Frazier,
                      <span>Regular Client</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="single-testimonial pt-65">

                                        <div className="font-back-tittle mb-105">
                                            <div className="archivment-front">
                                                <img src="assets/img/logo/testimonial.png" alt="true" />
                                            </div>
                                            <h3 className="archivment-back">Testimonial</h3>
                                        </div>

                                        <div className="testimonial-caption text-center">
                                            <p>Yorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>

                                            <div className="testimonial-ratting">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <div className="rattiong-caption">
                                                <span>
                                                    Clifford Frazier,
                      <span>Regular Client</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

