$(function () {
    $(".list li").click(function () {
        var num = $(this).index();
        $(".list li").removeClass("list2");
        $(this).addClass("list2");
        $(".list .list1").removeClass("list1");
        $(".board").hide();
        $(".board").eq(num).show();
    });
});
