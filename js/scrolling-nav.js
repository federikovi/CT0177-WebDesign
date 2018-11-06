//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("navbar-shrink");
    } else {
        $(".navbar-fixed-top").removeClass("navbar-shrink");
    }
});

