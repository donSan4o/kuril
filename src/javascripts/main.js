$(document).ready(initPage);

function initPage() {
    var swiper = new Swiper('.swiper-container', {
        autoplay: {
            delay: 5000,
        },
        speed: 700,
        spaceBetween: 0,
        effect: 'fade'
    });
    $('.drop-link').click(function() {
        $(this).toggleClass("rotate");
        $('.dropdown').slideToggle();
    })
    $('.search').click(function() {
        $('.search-popup').fadeIn(300);
        $('.fader').fadeIn();
    });
    $('.show-contact').click(function() {
        $('.contact-popup').addClass("show-popup");
        $('.contact-popup').fadeIn(300);
        $('.fader-white').fadeIn();
    });
    $('.fader, .fader-white, .close-popup').click(function() {
        $('.search-popup, .contact-popup').fadeOut(300);
        $('.fader, .fader-white').fadeOut();
    });
    $(".menu").click(function() {
        $('header nav').slideToggle();
        if ($(this).hasClass("cross")) {
            $(this).removeClass("cross");

        } else {
            $(this).addClass("cross");
        }
        return false;
    });
}