$(function () {
    function time() {
        // 시스템의 날짜와 시간을 객체생성하여 date라는 변수에 기억시키키
        var date = new Date();
        console.log(date);

        // 데이트에 기억된 시간,분,초 값들을 가져와서 변수에 기억시킴

        var hour = date.getHours();
        console.log(hour);
        var min = date.getMinutes();
        console.log(min);
        var sec = date.getSeconds();
        console.log(sec);
        var msec = date.getMilliseconds();
        // 두자리로 표현하는 방법
        var msec = Math.floor(msec / 10);
        console.log(msec);
        // ----------------------------------------
        function digit(n) {
            if (n < 10) {
                n = "0" + n;
            } else {
                return n;
            }
        }
        var newHour = digit(hour);
        var newMin = digit(min);
        var newSec = digit(sec);
        var newMsec = digit(msec);

        $(".time .hour").text(newHour);
        $(".time .min").text(newMin);
        $(".time .sec").text(newSec);
        $(".time .msec").text(newMsec);
    }
    // ----------------------------------------

    setInterval(function () {
        time();
    }, 10);
});
