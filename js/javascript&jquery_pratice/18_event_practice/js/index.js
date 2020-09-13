$(function () {
    $(".box1").click(function () {
        $(".box1").css("background", "#0fc");
    });
    $(".box2").mouseenter(function () {
        $(".box2").css("background", "#f0c");
    });
    $(".box2").mouseleave(function () {
        $(".box2").css("background", "#fc0");
    });
    $(".box3").hover(
        function () {
            $(".box3").css("background", "red").css("color", "blue");
        },
        function () {
            $(".box3").css("background", "#fc0").css("color", "#fff");
        }
    );

    var text = $("input");
    $(text).focus(function () {
        $(this).css({ background: "#fc0", color: "red" });
    });
    $(text).blur(function () {
        $(this).css({
            background: "#fff",
            color: "#000",
            border: "1px solid #000",
        });
    });

    $("button").click(function () {
        $("button").removeClass("btn_on");
        $(this).addClass("btn_on");
    });
});
