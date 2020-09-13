$(function () {
    $(".gnb li").click(function () {
        // 기준점을 어디로 잡느냐에 따라서 / 어떤 함수식을 쓰느냐에 따라서 다양한 식이 나온다

        $(this)
            .find(".depth2")
            .slideToggle()
            .closest(".gnb li")
            .siblings()
            .find(".depth2")
            .slideUp();

        // $(this)
        //     .children(".depth2")
        //     .slideToggle()
        //     .prev()
        //     .parent()
        //     .siblings()
        //     .find(".depth2")
        //     .slideUp();
    });

    // $(".gnb li a").click(function () {
    //     $(this)
    //         .next()
    //         .slideToggle()
    //         .parents()
    //         .siblings()
    //         .children(".depth2")
    //         .slideUp();

    //     $(this)
    //         .next()
    //         .slideToggle()
    //         .parent()
    //         .siblings()
    //         .find(".depth2")
    //         .slideUp();
    // });
});
