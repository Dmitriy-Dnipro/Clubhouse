$(window).on("load", function (e) {
    var win = $(this); //this = window
    //console.log(win.width);
    if (win.width() >= 768 && win.width() <= 1640 ) { 
        //progress slider width
        var slider = $('.slider');
        var wrapper = $('#progress');

        var wrapperWidth = $(wrapper).width();
        console.log(wrapperWidth);
        var sliderWidth = 925 + ((wrapperWidth - 1140)/2);
        console.log(sliderWidth);
        slider.width(sliderWidth);
    }

    var swiper = new Swiper('.slider', {
        slidesPerView: 4,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            767: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1366: {
                slidesPerView: 3
            }
        }
    });

    var swiper1 = new Swiper('.sliderDocs', {
        autoHeight: true,
        slidesPerView: 3,
        spaceBetween: 25,
        centeredSlides: true,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            767: {
                slidesPerView: 1,
                spaceBetween: 0
            }
        }
    });

    var swiper2 = new Swiper('.swiper-gallery', {
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
});