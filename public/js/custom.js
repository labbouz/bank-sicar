
$(document).ready(function(){

    // For main slide
    $('.main_slides').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
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



});