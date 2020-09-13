$(function () {
    //가장 뒤에 있는 요소.insertBefore(b (가장 앞 요소))
    // 맨 뒤에 있는 애를 맨 앞으로 삽입하는 명령

    setInterval(function () {
        $(".slider ul li:last-child").insertBefore(".slider ul li:first-child");
        $(".slider ul").css({ "margin-left": "-960px" });
        $(".slider ul").animate({ "margin-left": 0 }, 1000);
    }, 3000);

    setInterval(function () {
        $(".slider2 ul li:last-child").insertBefore(
            ".slider2 ul li:first-child"
        );
        $(".slider2 ul").css({ "margin-top": "-429px" });
        $(".slider2 ul").animate({ "margin-top": "0" });
    }, 3000);
});
