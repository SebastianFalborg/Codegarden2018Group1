

$("[data-menu-toggle]").click(function () {
    $(this).toggleClass("active");
    $(this).next().toggleClass("active");
    $("[data-main-wrapper]").toggleClass("active");
});

//var parallaxElements = $('[data-image-effect]'),
//    parallaxQuantity = parallaxElements.length;

//$(window).on('scroll', function () {

//    window.requestAnimationFrame(function () {

//        for (var i = 0; i < parallaxQuantity; i++) {
//            var currentElement = parallaxElements.eq(i);
//            var scrolled = $(window).scrollTop();

//            currentElement.css({
//                'transform': 'translate3d(0,' + scrolled * -0.3 + 'px, 0)'
//            });
//        }
//    });

//});