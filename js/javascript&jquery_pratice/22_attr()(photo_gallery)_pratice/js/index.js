$(function () {
    $("ul li:first-child").click(function () {
        $(".big_photo img").attr({ src: "images/img1.jpg" });
    });
    $("ul li:nth-child(2)").click(function () {
        $(".big_photo").find("img").attr({ src: "images/img2.jpg" });
    });
    $("ul")
        .find("li:last-child")
        .click(function () {
            $(".big_photo").find("img").attr({ src: "images/img3.jpg" });
        });
});
