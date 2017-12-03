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

// VOTINGPAGE
// producing a object with map, wich contains an array
// Then use get() to work with array
// Join() joins the elements of a array to string
$("[data-vote]").click(function () {
    var radioList = $('.votinglist input[type="radio"]:checked');
    var checkedVals = radioList.map(function () {
        return $(this).val();
    }).get();
    
    if ($('.votinglist input[type="radio"]:checked').length == 4) {
        $("[data-vote-result]").html("<h3>Thank you for you vote. You voted on<span>" + checkedVals + "</span></h3>");
    } else {
        $("[data-vote-result]").html("<span>You need to select one from each category</span>");
    }

});

