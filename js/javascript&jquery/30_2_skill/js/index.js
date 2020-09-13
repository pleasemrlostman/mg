$(function () {
    // $(".progress-bar").loading(); // you can load automatically

    $(window).scroll(function () {
        var num = $(document).scrollTop();
        console.log(num);

        if (num >= 2531) {
            $(".progress-bar").loading();
        }
    });

    $(".scroll").click(function () {
        $("html,body").animate({ scrollTop: "0px" });
    });
});
