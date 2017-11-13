

$("[data-menu-toggle]").click(function () {
    $(this).toggleClass("active");
    $(this).next().toggleClass("active");
    $("[data-main-wrapper]").toggleClass("active");
});