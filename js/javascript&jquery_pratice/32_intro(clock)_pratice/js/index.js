$(function () {
    function time() {
        var time = new Date();
        console.log(time);

        var hour = time.getHours();
        var min = time.getMinutes();
        var sec = time.getSeconds();
        var msec = time.getMilliseconds();
        var msec = Math.floor(msec / 10);

        console.log(hour);
        console.log(min);
        console.log(sec);
        console.log(msec);

        function digit(n) {
            if (n < 10) {
                n = "0" + n;
                return n;
            } else {
                return n;
            }
        }

        var newHour = digit(hour);
        var newMin = digit(min);
        var newSec = digit(sec);
        var newMsec = digit(msec);

        console.log(newHour);
        console.log(newMin);
        console.log(newSec);
        console.log(newMsec);

        $(".hour").text(newHour);
        $(".min").text(newMin);
        $(".sec").text(newSec);
        $(".msec").text(newMsec);
    }
    setInterval(function () {
        time();
    }, 10);
});
