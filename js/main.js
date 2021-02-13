AOS.init();

/* preloader */
$(window).on('load', function() {
    setTimeout(function() {
        $(".preloader").fadeOut('slow');
    }, 800);
});

/* carousel testimonial section */
$(document).ready(function() {

    $('#testimonial-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dot: false,
        autoplay: true,
        smartSpeed: 800,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    })
});