$(function() {



    //SVG Fallback
    if (!Modernizr.svg) {
        $("img[src*='svg']").attr("src", function() {
            return $(this).attr("src").replace(".svg", ".png");
        });
    };

    //Chrome Smooth Scroll
    try {
        $.browserSelector();
        if ($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch (err) {

    };

    $("img, a").on("dragstart", function(event) {
        event.preventDefault();
    });

    if (document.body.clientWidth < 992) {
        $('.slider-advantages').slick({
            dots: true,
            infinite: false,
            slidesToShow: 2,
            autoplay: false,
            autoplaySpeed: 2000,
            arrows: false,
            adaptiveHeight: true,
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }]
        });

    }
    if (document.body.clientWidth < 992) {
        $('.massage-rows').slick({
            dots: true,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2000,
            arrows: false,
            adaptiveHeight: true

        });

    }
    $('.slider-gold').slick({
        dots: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1

            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: true

            }
        }]
    });
    $('.slider-reviews').slick({
        dots: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        adaptiveHeight: true
    });

    // Assign the main slider
    $('#mainSlides').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: true,
        dots: true,
        infinite: true,
        asNavFor: '#thumbSlides',
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                dots: false
            }

        }]
    });

    // Assign the thumbs slider
    $('#thumbSlides').slick({
        arrows: false,
        dots: false,
        infinite: true,
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 6,
        slidesToScroll: 6,
        asNavFor: '#mainSlides',
        focusOnSelect: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                vertical: false,
                verticalSwiping: false
            }

        }]

    });

});