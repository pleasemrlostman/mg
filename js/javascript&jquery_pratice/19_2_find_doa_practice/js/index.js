$(function () {
    var num = $(this).index();
    $(".menu li").click(function () {
        $(".menu li").removeClass("list_on");
        $(".menu li").removeClass("list_1");
        $(this).addClass("list_on");
    });

    var bg = $(".bg_img");
    $(".brand .brand_list a").mouseenter(function () {
        $(this).find(bg).stop().fadeIn(500);
    });
    $(".brand .brand_list a").mouseleave(function () {
        $(this).find(bg).stop().fadeOut(500);
    });
});
