$(function () {
    $("ul")
        .find(".list1")
        .mouseenter(function () {
            $(".big_box").find("img").attr({ src: "images/img1.jpg" });
        });
    $(".box_wrap")
        .find(".list2")
        .mouseenter(function () {
            $(".big_box img").attr({ src: "images/img2.jpg" });
        });
    $(".box_wrap li:last-child a").mouseenter(function () {
        $(".big_box img").attr({ src: "images/img3.jpg" });
    });
});
