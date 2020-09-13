$(function () {
    $(".lang_wrap").click(function () {
        $(".koreng").slideToggle();
    });

    $(".menu").click(function () {
        $(".menu").toggleClass("on");
        $(".left_menu").toggleClass("on");
        // $(".left_menu").animate({ right: 0 });
    });
    // $(".on").click(function () {
    //     $(".left_menu").animate({ right: "-100%" });
    // });

    // 아코디언 메뉴

    $(".left_menu li a").click(function () {
        $(this)
            .next()
            .slideToggle()
            .parent()
            .siblings()
            .find(".depth2")
            .slideUp();
        $(this).parent().toggleClass("on").siblings().removeClass("on");
    });
});
