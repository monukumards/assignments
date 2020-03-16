
/* 1. Proloder */
//     $(window).on('load', function () {
//       $('#preloader-active').delay(450).fadeOut('slow');
//       $('body').delay(450).css({
//         'overflow': 'visible'
//       });
//     });


// /* 2. slick Nav */
// // mobile_menu
//     var menu = $('ul#navigation');
//     if(menu.length){
//       menu.slicknav({
//         prependTo: ".mobile_menu",
//         closedSymbol: '+',
//         openedSymbol:'-'
//       });
//     };




// /* 4. Testimonial Active*/
//   var testimonial = $('.h1-testimonial-active');
//     if(testimonial.length){
//     testimonial.slick({
//         dots: false,
//         infinite: true,
//         speed: 1000,
//         autoplay:false,
//         arrows: true,
//         prevArrow: '<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
//         nextArrow: '<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         responsive: [
//           {
//             breakpoint: 1024,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1,
//               infinite: true,
//               dots: false,
//               arrow:true
//             }
//           },
//           {
//             breakpoint: 600,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1,
//               arrows:false
//             }
//           },
//           {
//             breakpoint: 480,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1,
//               arrows:false,
//             }
//           }
//         ]
//       });
//     }


// /* 5. Gallery Active */
//     var client_list = $('.gallery-active');
//     if(client_list.length){
//       client_list.owlCarousel({
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         loop: true,
//         autoplay:true,
//         speed: 3000,
//         smartSpeed:2000,
//         nav: false,
//         dots: false,
//         margin: 0,

//         autoplayHoverPause: true,
//         responsive : {
//           0 : {
//             nav: false,
//             items: 2,
//           },
//           768 : {
//             nav: false,
//             items: 3,
//           }
//         }
//       });
//     }


// /* 7.  Custom Sticky Menu  */
//     $(window).on('scroll', function () {
//       var scroll = $(window).scrollTop();
//       if (scroll < 245) {
//         $(".header-sticky").removeClass("sticky-bar");
//       } else {
//         $(".header-sticky").addClass("sticky-bar");
//       }
//     });

//     $(window).on('scroll', function () {
//       var scroll = $(window).scrollTop();
//       if (scroll < 245) {
//           $(".header-sticky").removeClass("sticky");
//       } else {
//           $(".header-sticky").addClass("sticky");
//       }
//     });



// /* 8. sildeBar scroll */
//     $.scrollUp({
//       scrollName: 'scrollUp', // Element ID
//       topDistance: '300', // Distance from top before showing element (px)
//       topSpeed: 300, // Speed back to top (ms)
//       animation: 'fade', // Fade, slide, none
//       animationInSpeed: 200, // Animation in speed (ms)
//       animationOutSpeed: 200, // Animation out speed (ms)
//       scrollText: '<i class="ti-arrow-up"></i>', // Text for element
//       activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
//     });


// /* 9. data-background */
//     $("[data-background]").each(function () {
//       $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
//       });


// /* 10. WOW active */
//     new WOW().init();
