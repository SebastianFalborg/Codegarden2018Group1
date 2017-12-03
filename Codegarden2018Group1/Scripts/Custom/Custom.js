//$(window).width() < 768
// Menu icon toggle and menu
$("[data-menu-toggle]").click(function () {
    $(this).toggleClass("active");
    $(this).next().toggleClass("active");
    $("[data-main-wrapper]").toggleClass("active");
});

// logo fill function
$(function () {
    var headerLogo = $('[data-header-logo]');
    var banner = $(".main-banner");
    var bannerTop = banner.offset().top; // top of element (0)
    var bannerBottom = banner.offset().top + banner.height(); // 0 + 362px

    $(window).scroll(function () {
        var scroll = $(window).scrollTop() + 80; // how much the 'window' have scrolled
        if ((scroll > bannerBottom)) {
            headerLogo.addClass('change');
        } else {
            headerLogo.removeClass('change');
        }
    });
})