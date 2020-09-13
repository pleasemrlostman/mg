$(function () {
    $(".btn_down1").click(function () {
        $("body,html").animate({ scrollTop: 1277 }, 1000);
    });
    $(".btn_down2").click(function () {
        $("body,html").animate({ scrollTop: 2302 }, 1000);
    });
    $(".btn_down3").click(function () {
        $("body,html").animate({ scrollTop: 3302 }, 1000);
    });
    $(".btn_down4").click(function () {
        $("body,html").animate({ scrollTop: 4442 }, 1000);
    });
    $(".btn_down5").click(function () {
        $("body,html").animate({ scrollTop: 5482 }, 1000);
    });
    $(".btn_down6").click(function () {
        $("body,html").animate({ scrollTop: 6482 }, 1000);
    });
    $(".btn_down7").click(function () {
        $("body,html").animate({ scrollTop: 7482 }, 1000);
    });
    $(".btn_down8").click(function () {
        $("body,html").animate({ scrollTop: 8465 }, 1000);
    });
    $(".btn_down9").click(function () {
        $("body,html").animate({ scrollTop: 9615 }, 1000);
    });
    $(".btn_down10").click(function () {
        $("body,html").animate({ scrollTop: 10692 }, 1000);
    });
    $(".btn_down11").click(function () {
        $("body,html").animate({ scrollTop: 11832 }, 1000);
    });
    $(".btn_down12").click(function () {
        $("body,html").animate({ scrollTop: 0 }, 1000);
    });
    // $(".btn_down12").click(function () {
    //     $("body,html").animate({ scrollTop: 5482 }, 1000);
    // });
    // quick 메뉴의 리스트 버튼을 클릭했을 때
    $(".quick li").click(function () {
        var num = $(this).index();
        console.log(num);
        if (num == 0) {
            $("body,html").animate({ scrollTop: 0 }, 1000);
        } else if (num == 1) {
            $("body,html").animate({ scrollTop: 1277 }, 1000);
        } else if (num == 2) {
            $("body,html").animate({ scrollTop: 2302 }, 1000);
        } else if (num == 3) {
            $("body,html").animate({ scrollTop: 3302 }, 1000);
        } else if (num == 4) {
            $("body,html").animate({ scrollTop: 4442 }, 1000);
        } else if (num == 5) {
            $("body,html").animate({ scrollTop: 5482 }, 1000);
        } else if (num == 6) {
            $("body,html").animate({ scrollTop: 6482 }, 1000);
        } else if (num == 7) {
            $("body,html").animate({ scrollTop: 7482 }, 1000);
        } else if (num == 8) {
            $("body,html").animate({ scrollTop: 8465 }, 1000);
        } else if (num == 9) {
            $("body,html").animate({ scrollTop: 9615 }, 1000);
        } else if (num == 10) {
            $("body,html").animate({ scrollTop: 10692 }, 1000);
        } else if (num == 11) {
            $("body,html").animate({ scrollTop: 11832 }, 1000);
        } else {
            $("body,html").animate({ scrollTop: 0 }, 1000);
        }
        // $(".quick li").removeClass("on");
        // $(".quick li").eq(num).addClass("on");
        // $(this).addClass("on");
    });

    // 스크롤바의 위치를 알려주는 이벤트
    // 스크롤바의 이동으로 나타나는 이벤트이다
    $(window).scroll(function () {
        // num 변수는 스크롤바 위치값을 갖는 변수
        var num = $(document).scrollTop();
        console.log(num);

        if (num > 1277) {
            $(".header").addClass("on");
        } else {
            $(".header").removeClass("on");
        }

        if (num > 821 && num < 2302) {
            $(".mobile_case").addClass("on");
        } else {
            $(".mobile_case").removeClass("on");
        }

        if (num >= 0 && num <= 1277) {
            $(".quick li").removeClass("on");
            $(".quick li").eq(0).addClass("on");
        } else if (num >= 1277 && num < 2302) {
            $(".quick li").removeClass("on");
            $(".quick li").eq(1).addClass("on");
        } else if (num >= 2302 && num < 3302) {
            $(".quick li").removeClass("on");
            $(".quick li").eq(2).addClass("on");
        } else if (num >= 3302 && num < 4442) {
            $(".quick li").removeClass("on");
            $(".quick li").eq(3).addClass("on");
        } else if (num >= 4442 && num < 5482) {
            $(".quick li").removeClass("on");
            $(".quick li").eq(4).addClass("on");
        } else if (num >= 5482 && num < 6482) {
            $(".quick li").removeClass("on");
            $(".quick li").eq(5).addClass("on");
        } else if (num >= 6482 && num < 7482) {
            $(".quick li").removeClass("on");
            $(".quick li").eq(6).addClass("on");
        } else if (num >= 7482 && num < 8465) {
            $(".quick li").removeClass("on");
            $(".quick li").eq(7).addClass("on");
        } else if (num >= 8465 && num < 9615) {
            $(".quick li").removeClass("on");
            $(".quick li").eq(8).addClass("on");
        } else if (num >= 9615 && num < 10692) {
            $(".quick li").removeClass("on");
            $(".quick li").eq(9).addClass("on");
        } else if (num >= 10692 && num < 11832) {
            $(".quick li").removeClass("on");
            $(".quick li").eq(10).addClass("on");
        } else {
            $(".quick li").removeClass("on");
            $(".quick li").eq(11).addClass("on");
        }
    });

    // -----------------------------------헤더온클래스-----------------------------------------------------
});
