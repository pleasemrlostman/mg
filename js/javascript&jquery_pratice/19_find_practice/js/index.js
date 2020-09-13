$(function () {
    var list = $(".menu1 li a");
    $(list).mouseenter(function () {
        $(this).find(".img2").stop().fadeIn(500);
    });
    $(list).mouseleave(function () {
        $(this).find(".img2").stop().fadeOut(500);
    });

    var list2 = $(".menu2 li a");
    $(list2).mouseenter(function () {
        $(this).find(".img2").stop().fadeIn(500);
    });
    $(list2).mouseleave(function () {
        $(this).find(".img2").stop().fadeOut(500);
    });
});
