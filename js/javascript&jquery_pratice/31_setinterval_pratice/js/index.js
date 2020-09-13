$(function () {
    var i = 1;
    function time() {
        $(".popup").text("TIME : " + i);
        if (i < 10) {
            i++;
        } else {
            i = 0;
        }
    }

    setInterval(function () {
        time();
    }, 500);
});
