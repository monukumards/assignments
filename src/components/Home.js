import React, { Component } from "react";

class Home extends Component {

    mainSlider = () => {
        var BasicSlider = window.$('.slider-active');
        BasicSlider.on('init', () => {
            var $firstAnimatingElements = window.$('.single-slider:first-child').find('[data-animation]');
            this.doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', (currentSlide, nextSlide) => {
            var $animatingElements = window.$('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            this.doAnimations($animatingElements);
        });
        BasicSlider.slick({
            autoplay: false,
            autoplaySpeed: 4000,
            dots: true,
            fade: true,
            arrows: false,
            prevArrow: '<button type="button" class="slick-prev"><img src="img/hero_thumb/arrow-left.png" alt=""><img class="secondary-img" src="img/hero_thumb/left-white.png" alt=""></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="img/hero_thumb/arrow-right.png" alt=""><img class="secondary-img" src="img/hero_thumb/right-white.png" alt=""></button>',
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
            ]
        });
    }

    doAnimations = (elements) => {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function () {
            var $this = window.$(this);
            var $animationDelay = $this.data('delay');
            var $animationType = 'animated ' + $this.data('animation');
            $this.css({
                'animation-delay': $animationDelay,
                '-webkit-animation-delay': $animationDelay
            });
            $this.addClass($animationType).one(animationEndEvents, function () {
                $this.removeClass($animationType);
            });
        });
    }

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

        var popUp = window.$('.single_gallery_part, .img-pop-up');
        if (popUp.length) {
            popUp.magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
        }


        /* Gallery Active */
        var client_list = window.$('.gallery-active');
        if (client_list.length) {
            client_list.owlCarousel({
                slidesToShow: 3,
                slidesToScroll: 1,
                loop: true,
                autoplay: true,
                speed: 3000,
                smartSpeed: 2000,
                nav: false,
                dots: false,
                margin: 0,

                autoplayHoverPause: true,
                responsive: {
                    0: {
                        nav: false,
                        items: 2,
                    },
                    768: {
                        nav: false,
                        items: 3,
                    }
                }
            });
        }
        
        /* Nice Selectorp  */
        var nice_Select = window.$('select');
        if (nice_Select.length) {
            nice_Select.niceSelect();
        }
        window.$("[data-background]").each(function () {
            window.$(this).css("background-image", "url(" + window.$(this).attr("data-background") + ")")
        });
        window.$('#datepicker1').datepicker();
        window.$('#datepicker2').datepicker();

        this.mainSlider();

        this.showTestimonials();

        /*  Custom Sticky Menu  */
        window.$(window).on('scroll', function () {
            var scroll = window.$(window).scrollTop();
            if (scroll < 245) {
                window.$(".header-sticky").removeClass("sticky-bar");
            } else {
                window.$(".header-sticky").addClass("sticky-bar");
            }
        });
       

            /* slick Nav */
        // mobile_menu
        var menu = window.$('ul#navigation');
        if (menu.length) {
            menu.slicknav({
                prependTo: ".mobile_menu",
                closedSymbol: '+',
                openedSymbol: '-'
            });
        }
    }
    render() {
        
        return (
            <main>
                
                <div className="slider-area">

                    <div className="slider-active dot-style">
                        <div
                            className="single-slider hero-overly slider-height d-flex align-items-center"
                            style={{backgroundImage:"url(assets/img/hero/h1_hero.jpg)"}}                            
                        >
                            <div className="container">
                                <div className="row justify-content-center text-center">
                                    <div className="col-xl-9">
                                        <div className="h1-slider-caption">
                                            <h1 data-animation="fadeInUp" data-delay=".4s">top hotel in the city</h1>
                                            <h3 data-animation="fadeInDown" data-delay=".4s">Hotel & Resourt</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="single-slider hero-overly slider-height d-flex align-items-center"                            
                            style={{backgroundImage:"url(assets/img/dining/dining-img.jpg)"}}
                        >
                            <div className="container">
                                <div className="row justify-content-center text-center">
                                    <div className="col-xl-9">
                                        <div className="h1-slider-caption">
                                            <h1 data-animation="fadeInUp" data-delay=".4s">top hotel in the city</h1>
                                            <h3 data-animation="fadeInDown" data-delay=".4s">Hotel & Resourt</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="single-slider hero-overly slider-height d-flex align-items-center"                            
                            style={{backgroundImage:"url(assets/img/dining/dining-img2.jpg)"}}
                        >
                            <div className="container">
                                <div className="row justify-content-center text-center">
                                    <div className="col-xl-9">
                                        <div className="h1-slider-caption">
                                            <h1 data-animation="fadeInUp" data-delay=".4s">top hotel in the city</h1>
                                            <h3 data-animation="fadeInDown" data-delay=".4s">Hotel & Resourt</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="booking-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <form>
                                    <div className="booking-wrap d-flex justify-content-between align-items-center">

                                        <div className="single-select-box mb-30">

                                            <div className="boking-tittle">
                                                <span>Check In Date:</span>
                                            </div>
                                            <div className="boking-datepicker">
                                                <input id="datepicker1" placeholder="10/12/2020" />
                                            </div>
                                        </div>

                                        <div className="single-select-box mb-30">

                                            <div className="boking-tittle">
                                                <span>Check OutDate:</span>
                                            </div>
                                            <div className="boking-datepicker">
                                                <input id="datepicker2" placeholder="12/12/2020" />
                                            </div>
                                        </div>

                                        <div className="single-select-box mb-30">
                                            <div className="boking-tittle">
                                                <span>Adults:</span>
                                            </div>
                                            <div className="select-this">
                                                
                                                    <div className="select-itms">
                                                        <select name="select" id="select1">
                                                            <option value>1</option>
                                                            <option value>2</option>
                                                            <option value>3</option>
                                                            <option value>4</option>
                                                        </select>
                                                    </div>
                                                
                                            </div>
                                        </div>

                                        <div className="single-select-box mb-30">
                                            <div className="boking-tittle">
                                                <span>Children:</span>
                                            </div>
                                            <div className="select-this">
                                            
                                                    <div className="select-itms">
                                                        <select name="select" id="select2">
                                                            <option value>1</option>
                                                            <option value>2</option>
                                                            <option value>3</option>
                                                            <option value>4</option>
                                                        </select>
                                                    </div>
                                                
                                            </div>
                                        </div>

                                        <div className="single-select-box mb-30">
                                            <div className="boking-tittle">
                                                <span>Rooms:</span>
                                            </div>
                                            <div className="select-this">
                                                
                                                    <div className="select-itms">
                                                        <select name="select" id="select3">
                                                            <option value>1</option>
                                                            <option value>2</option>
                                                            <option value>3</option>
                                                            <option value>4</option>
                                                        </select>
                                                    </div>
                                                
                                            </div>
                                        </div>

                                        <div className="single-select-box pt-45 mb-30">
                                            <a href="#" className="btn select-btn">Book Now</a>
                                        </div>
                                    </div>
                                </form>
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
                                        <a href="#" className="btn more-btn1">
                                            Learn More
                  <i className="ti-angle-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                <section className="room-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8">

                                <div className="font-back-tittle mb-45">
                                    <div className="archivment-front">
                                        <h3>Our Rooms</h3>
                                    </div>
                                    <h3 className="archivment-back">Our Rooms</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6">

                                <div className="single-room mb-50">
                                    <div className="room-img">
                                        <a href="rooms.html">
                                            <img src="assets/img/rooms/room1.jpg" alt="true" />
                                        </a>
                                    </div>
                                    <div className="room-caption">
                                        <h3>
                                            <a href="rooms.html">classNameic Double Bed</a>
                                        </h3>
                                        <div className="per-night">
                                            <span>
                                                <u>$</u>150
                    <span>/ par night</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">

                                <div className="single-room mb-50">
                                    <div className="room-img">
                                        <a href="rooms.html">
                                            <img src="assets/img/rooms/room2.jpg" alt="true" />
                                        </a>
                                    </div>
                                    <div className="room-caption">
                                        <h3>
                                            <a href="rooms.html">classNameic Double Bed</a>
                                        </h3>
                                        <div className="per-night">
                                            <span>
                                                <u>$</u>150
                    <span>/ par night</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">

                                <div className="single-room mb-50">
                                    <div className="room-img">
                                        <a href="rooms.html">
                                            <img src="assets/img/rooms/room3.jpg" alt="true" />
                                        </a>
                                    </div>
                                    <div className="room-caption">
                                        <h3>
                                            <a href="rooms.html">classNameic Double Bed</a>
                                        </h3>
                                        <div className="per-night">
                                            <span>
                                                <u>$</u>150
                    <span>/ par night</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">

                                <div className="single-room mb-50">
                                    <div className="room-img">
                                        <a href="rooms.html">
                                            <img src="assets/img/rooms/room4.jpg" alt="true" />
                                        </a>
                                    </div>
                                    <div className="room-caption">
                                        <h3>
                                            <a href="rooms.html">classNameic Double Bed</a>
                                        </h3>
                                        <div className="per-night">
                                            <span>
                                                <u>$</u>150
                    <span>/ par night</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">

                                <div className="single-room mb-50">
                                    <div className="room-img">
                                        <a href="rooms.html">
                                            <img src="assets/img/rooms/room5.jpg" alt="true" />
                                        </a>
                                    </div>
                                    <div className="room-caption">
                                        <h3>
                                            <a href="rooms.html">classNameic Double Bed</a>
                                        </h3>
                                        <div className="per-night">
                                            <span>
                                                <u>$</u>150
                    <span>/ par night</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">

                                <div className="single-room mb-50">
                                    <div className="room-img">
                                        <a href="rooms.html">
                                            <img src="assets/img/rooms/room6.jpg" alt="true" />
                                        </a>
                                    </div>
                                    <div className="room-caption">
                                        <h3>
                                            <a href="rooms.html">classNameic Double Bed</a>
                                        </h3>
                                        <div className="per-night">
                                            <span>
                                                <u>$</u>150
                    <span>/ par night</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="room-btn pt-70">
                                <a href="#" className="btn view-btn1">
                                    View more
              <i className="ti-angle-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>



                <div className="dining-area dining-padding-top">

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


                <div className="testimonial-area testimonial-padding">
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
                                                <a href="#">
                                                    <i className="fas fa-star"></i>
                                                </a>
                                                <a href="#">
                                                    <i className="fas fa-star"></i>
                                                </a>
                                                <a href="#">
                                                    <i className="fas fa-star"></i>
                                                </a>
                                                <a href="#">
                                                    <i className="fas fa-star"></i>
                                                </a>
                                                <a href="#">
                                                    <i className="fas fa-star"></i>
                                                </a>
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



                <div className="blog-area blog-padding">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8">

                                <div className="font-back-tittle mb-50">
                                    <div className="archivment-front">
                                        <h3>Our Blog</h3>
                                    </div>
                                    <h3 className="archivment-back">Recent News</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6">

                                <div className="single-blog mb-30">
                                    <div className="blog-img">
                                        <a href="single-blog.html">
                                            <img src="assets/img/our_blog/blog-img1.jpg" alt="true" />
                                        </a>
                                    </div>
                                    <div className="blog-caption">
                                        <div className="blog-cap-top d-flex justify-content-between mb-40">
                                            <span>news</span>
                                            <ul>
                                                <li>
                                                    by
                      <a href="#">Jhon Guru</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="blog-cap-mid">
                                            <p>
                                                <a
                                                    href="single-blog.html"
                                                >5 Simple Tricks for Getting Stellar Hotel Service Wherever You Are</a>
                                            </p>
                                        </div>

                                        <div className="blog-cap-bottom d-flex justify-content-between">
                                            <span>Feb 28, 2020</span>
                                            <span>
                                                <img src="assets/img/our_blog/blog-comments-icon.jpg" alt="true" />3
                  </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6">

                                <div className="single-blog mb-30">
                                    <div className="blog-img">
                                        <a href="single-blog.html">
                                            <img src="assets/img/our_blog/blog-img2.jpg" alt="true" />
                                        </a>
                                    </div>
                                    <div className="blog-caption">
                                        <div className="blog-cap-top d-flex justify-content-between mb-40">
                                            <span>news</span>
                                            <ul>
                                                <li>
                                                    by
                      <a href="#">Jhon Guru</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="blog-cap-mid">
                                            <p>
                                                <a
                                                    href="single-blog.html"
                                                >5 Simple Tricks for Getting Stellar Hotel Service Wherever You Are</a>
                                            </p>
                                        </div>

                                        <div className="blog-cap-bottom d-flex justify-content-between">
                                            <span>Feb 28, 2020</span>
                                            <span>
                                                <img src="assets/img/our_blog/blog-comments-icon.jpg" alt="true" />3
                  </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6">

                                <div className="single-blog mb-30">
                                    <div className="blog-img">
                                        <a href="single-blog.html">
                                            <img src="assets/img/our_blog/blog-img3.jpg" alt="true" />
                                        </a>
                                    </div>
                                    <div className="blog-caption">
                                        <div className="blog-cap-top d-flex justify-content-between mb-40">
                                            <span>news</span>
                                            <ul>
                                                <li>
                                                    by
                      <a href="#">Jhon Guru</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="blog-cap-mid">
                                            <p>
                                                <a
                                                    href="single-blog.html"
                                                >5 Simple Tricks for Getting Stellar Hotel Service Wherever You Are</a>
                                            </p>
                                        </div>

                                        <div className="blog-cap-bottom d-flex justify-content-between">
                                            <span>Feb 28, 2020</span>
                                            <span>
                                                <img src="assets/img/our_blog/blog-comments-icon.jpg" alt="true" />3
                  </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="gallery-area fix">
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
            </main>
        )
    }
}


/* Nice Selectorp  */
var nice_Select = window.$('select');
if (nice_Select.length) {
    nice_Select.niceSelect();
}

export default Home