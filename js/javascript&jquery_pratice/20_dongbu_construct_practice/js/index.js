$(function () {
    $(".b_btn").click(function () {
        $(".b_btn").toggleClass("on");
    });
    $(".b_btn").click(function () {
        $(".left_menu").toggleClass("show");
    });
    $(".lang").click(function () {
        $(".another_lang").slideToggle();
    });
    $(".left_menu ul li").click(function () {
        $(this)
            .find(".depth2")
            .slideToggle()
            .parent()
            .siblings()
            .find(".depth2")
            .slideUp();
        $(this).toggleClass("on").siblings().removeClass("on");
    });
});
