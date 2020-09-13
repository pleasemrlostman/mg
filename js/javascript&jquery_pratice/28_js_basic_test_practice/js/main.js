$(document).ready(function () {
    // 3
    var sw = 0;
    $(".btn1").click(function () {
        if (sw == 0) {
            $(".box1").fadeOut();
            sw = 1;
        } else {
            $(".box1").fadeIn();
            sw = 0;
        }
    });
    // 4
    $(".btn2").click(function () {
        $(".box2")
            .stop()
            .animate({ "margin-left": "900px" }, 1000)
            .animate({ "margin-left": 0 }, 1000);
    });
    // 5
    $(".menu li").mouseenter(function () {
        $(this).find("span").stop().animate({ width: "100%" }, 1000);
    });
    $(".menu li").mouseleave(function () {
        $(this).find("span").stop().animate({ width: "0%" }, 1000);
    });
    // 6
    function multie(a, b) {
        var res = a * b;
        return res;
    }
    var num = multie(10, 10);
    console.log(num);
    console.log(multie(20, 20));
    // 7
    var num = 0;
    $(".btn3").click(function () {
        num++;
        $(".box3").text(num);
    });
    // 8
    $(".loading_bar").animate({ width: "100%" }, 1000, function () {
        $(this).animate({ height: "10px" }).fadeOut();
    });
    // $(".loading_bar")
    //     .animate({ width: "100%" }, 1000)
    //     .animate({ height: "10px" })
    //     .slideUp();
    // 9
    $(".menu li").click(function (test) {
        test.preventDefault();
        var k = $(this).index();
        // $(this).find("a").attr({ href: "javascript:;" });
        $(".box4").text(k).css({ "font-size": "30px" });
        console.log(k);
    });
});
