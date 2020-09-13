$(function () {
    $(".grid").isotope({
        // set itemSelector so .grid-sizer is not used in layout
        itemSelector: ".grid-item",
        percentPosition: true,
        masonry: {
            // use element for option
            columnWidth: 15,
        },
    });
    $(".all_btn").click(function () {
        $(".grid").isotope({ filter: ".grid-item" });
    });
    $(".a_btn").click(function () {
        $(".grid").isotope({ filter: ".a" });
    });
    $(".b_btn").click(function () {
        $(".grid").isotope({ filter: ".b" });
    });
    $(".c_btn").click(function () {
        $(".grid").isotope({ filter: ".c" });
    });
});
