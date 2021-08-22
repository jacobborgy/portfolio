
$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});

$('.navbar-collapse a').click(function () {
    $(".navbar-collapse").collapse('hide');
});

