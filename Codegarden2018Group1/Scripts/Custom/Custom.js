//$(window).width() < 768
// Menu icon toggle and menu

var userToggle = $("[data-user-toggle]");
var menuToggle = $("[data-menu-toggle]");
var wrapperToggle = $("[data-main-wrapper]");


menuToggle.click(function () {
    $(this).toggleClass("active");
    $(this).next().toggleClass("active");
    wrapperToggle.toggleClass("active");
    if (userToggle.hasClass("active")) {
        userToggle.removeClass("active");
        userToggle.next().removeClass("active");
        wrapperToggle.addClass("active");
    }
});
userToggle.click(function () {
    $(this).toggleClass("active");
    $(this).next().toggleClass("active");
    wrapperToggle.toggleClass("active");
    if (menuToggle.hasClass("active")) {
        menuToggle.removeClass("active");
        menuToggle.next().removeClass("active");
        wrapperToggle.addClass("active");
    }
});


// VOTINGPAGE
// producing a object with map, wich contains an array
// Then use get() to work with array
// Join() joins the elements of a array to string
$("[data-vote]").click(function () {
    var radioList = $('.votinglist input[type="radio"]:checked');
    var checkedVals = radioList.map(function () {
        return $(this).val();
    }).get();

    if ($('.votinglist input[type="radio"]:checked').length === 4) {

        $("[data-vote-result]").html("<h3>Thank you for you vote. You voted on<span>" + checkedVals + "</span></h3>");
    } else {
        $("[data-vote-result]").html("<span>You need to select one from each category</span>");
    }
});


// custom toggle
var toggleList = $("[data-custom-list-item]");

toggleList.click(function () {
    $(this).toggleClass("active");
    $(this).next().toggleClass("active");

    if ($(this).hasClass("active")) {
        toggleList.removeClass("active");
        toggleList.next().removeClass("active");
        $(this).addClass("active");
        $(this).next().addClass("active");
    }
});

// map overlay
$("[data-map-overlay]").click(function () {
    $(this).toggleClass("hide-show");
});




$(document).ready(function () {
    svgFill();
    discoverToggle();
});

$(window).resize(function () {
    svgFill();
});

// logo fill function
function svgFill() {
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
}

//discover page

function discoverToggle() {
    var todayDate = new Date().toISOString().slice(0, 10); // convert date to msql friendly string
    var codegardenStart = '2018-05-23'; // codegarden 18 start
    var codegardenEnd = '2018-05-25'; // codegarden 18 end
    var getReady = $("[data-custom-list-item]#get-ready");
    var experience = $("[data-custom-list-item]#experience");
    var lookingBack = $("[data-custom-list-item]#looking-back");

    if (codegardenStart > todayDate) {
        console.log('codegarden er ikke startet');
        getReady.addClass("active");
        getReady.next().addClass("active");
    } else if (codegardenEnd < todayDate) {
        console.log('codegarden er slut');
        lookingBack.addClass("active");
        lookingBack.next().addClass("active");
    } else {
        console.log('codegarden er igang');
        experience.addClass("active");
        experience.next().addClass("active");
    }
}