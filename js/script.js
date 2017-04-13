$(document).ready(function () {
    $(".navbar-toggle").click(function () {
        $(".collapsable-menu").toggleClass("collapse")
    });
    $(".container-fluid, .scroll").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
