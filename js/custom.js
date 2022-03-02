$(document).ready(function () {

    //  parallex code

    $('.gallery-banner').parallax({
        imageSrc: "../img/gallery-banner.jpg",
    });


    //    gallery click code


    $(".gallery-bg .gallery .gallery-list ul li").click(function () {


        $(this).addClass("active").siblings().removeClass("active");


    });


    //    mixitup code


    var mixer = mixitup('.gallery-content');


    //    slick slider code


    $(".bird-slider").slick({


        centerMode: true,
        centerPadding: "60px",
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1300,

    })









});
