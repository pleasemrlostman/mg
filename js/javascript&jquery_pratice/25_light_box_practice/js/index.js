$(function () {
    $(".gallery li a").lightBox({
        verlayBgColor: "#FFF",
        overlayOpacity: 0.8,
        imageLoading: "images/lightbox-ico-loading.gif",
        imageBtnClose: "images/lightbox-btn-close.gif",
        imageBtnPrev: "images/lightbox-btn-prev.gif",
        imageBtnNext: "images/lightbox-btn-next.gif",
        containerResizeSpeed: 350,
        txtImage: "lightBox 복습",
        txtOf: "/",
    });
});
