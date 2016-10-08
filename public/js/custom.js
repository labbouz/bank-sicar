
$(document).ready(function(){

    // For main slide
    $('.main_slides').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        arrows: false,
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear'
    });

    // For main slide Home Page
    $('.main_slides_home').slick({
        autoplay: false,
        arrows: true,
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear',
        nextArrow: '<button class="next-slide"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
        prevArrow: '<button class="prev-slide"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>'
    });

    // For Module News
    $('.last_news_slides').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        vertical: true,
        pauseOnHover: true,
        arrows: false,
        infinite: true,
        speed: 500,
        fade: false,
        cssEase: 'linear'
    });

    // For Module Infos Flash
    $('.images-infos').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        arrows: false,
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear'
    });

    // For Module Sidebar Content

    $('.slides-contents').slick({
        autoplay: false,
        arrows: true,
        infinite: true,
        speed: 1000,
        fade: false,
        cssEase: 'ease-in-out',
        nextArrow: '<button class="next-slide"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
        prevArrow: '<button class="prev-slide"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>'
    });



});