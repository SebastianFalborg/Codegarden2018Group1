

$("[data-menu-toggle]").click(function (){
    $(this).toggleClass("active");
    $("[data-menu-content]").toggleClass("active");
$("[data-main-wrapper]").toggleClass("active");
});