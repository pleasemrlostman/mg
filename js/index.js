$(function () {
    $(".menu_btn").click(function () {
        $(".right_menu").animate({ right: "0" });
        $(".cover").fadeIn();
    });
    $(".right_menu_btn").click(function () {
        $(".right_menu").animate({ right: "-100%" });
        $(".cover").fadeOut();
    });
    $(".right_menu_list").click(function () {
        $(this).find(".depth2").slideToggle();
        $(this).siblings().find(".depth2").slideUp();
    });
    $(".slide").slick({
        dots: true,
        autoplay: true,
    });
    // $(".slide_warp").css({ width: "300px" });
    $(".gnb2").mouseenter(function () {
        $(".header_wrap").addClass("on");
    });
    $(".gnb2").mouseleave(function () {
        $(".header_wrap").removeClass("on");
    });
    $(".gnb2 li").mouseenter(function () {
        $(this).find(".depth2").stop().slideDown();
    });
    $(".gnb2 li").mouseleave(function () {
        $(this).find(".depth2").stop().slideUp();
    });
});
