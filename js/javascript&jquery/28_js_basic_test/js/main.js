$(document).ready(function () {
    var sw = 0;
    $(".btn1").click(function () {
        // $(".box1").fadeToggle();
        if (sw == 0) {
            $(".box1").fadeOut();
            sw = 1;
        } else {
            $(".box1").fadeIn();
            sw = 0;
        }
    });
    $(".btn2").click(function () {
        $(".box2")
            .animate({ "margin-left": 900 }, 1000)
            .animate({ "margin-left": 0 }, 1000);
    });
    $(".menu li").mouseenter(function () {
        $(this).find("span").animate({ width: "100%" }, 300);
        // .css({ padding: "0 20px" })
        // .css({ "border-bottom": "1px solid #000" });
    });
    $(".menu li").mouseleave(function () {
        $(this).find("span").animate({ width: "0%" }, 300);
        // .find("span")
        // .css({ padding: "0" })
        // .css({ "border-bottom": "none" });
    });
    function multie(a, b) {
        var res = a * b;
        return res;
    }
    var num = multie(10, 20);
    console.log(num);
    num = 0;
    var btn3 = $(".btn3");
    btn3.click(function () {
        num++;
        console.log(num);
        if (num <= 10) {
            $(".box3").text(num);
        }
    });
    // $(".box3").text("정재훈");

    $(".loading_bar").animate({ width: "100%" }, 2000, function () {
        $(this).animate({ height: "100%" }, 2000).fadeOut();
    });
    // .animate({ height: "100px" });
    $(".menu li").click(function (test) {
        // test.preventDefault();
        var num = $(this).index();
        $(".box4").text(num).css({ "font-size": "36px" });
        $(this).find("a").attr({ href: "javascript:;" });
    });
});
