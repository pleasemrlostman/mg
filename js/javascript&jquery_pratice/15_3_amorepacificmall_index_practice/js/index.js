$(function () {
    $(".menu li").click(function () {
        var num = $(this).index();
        $(".menu li").removeClass("list_on");
        $(".menu .list1").removeClass("list1");
        $(this).addClass("list_on");
        $(".product").hide();
        $(".product").eq(num).show();
    });
});
