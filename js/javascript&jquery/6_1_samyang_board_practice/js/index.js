$(function () {
    $(".list2").click(function () {
        $(".nav_dep2_1").slideToggle();
    });
    $(".list3").click(function () {
        $(".nav_dep2_2").slideToggle();
    });
    $(".nav_dep1").mouseleave(function () {
        $(".nav_dep1").fadeOut();
    });
    $(".nav_dep2").mouseleave(function () {
        $(".nav_dep2").fadeOut();
    });
    $(".ten_more").click(function () {
        $(".ten_more_list").slideToggle();
    });
    $(".ten_more_list").mouseleave(function () {
        $(".ten_more_list").fadeOut();
    });
});
