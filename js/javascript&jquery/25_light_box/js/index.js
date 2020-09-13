$(function () {
    $("#gallery a").lightBox({
        overlayBgColor: "#FFF",
        overlayOpacity: 0.6,
        imageLoading: "images/lightbox-ico-loading.gif",
        imageBtnClose: "images/lightbox-btn-close.gif",
        imageBtnPrev: "images/lightbox-btn-prev.gif",
        imageBtnNext: "images/lightbox-btn-next.gif",
        containerResizeSpeed: 350,
        txtImage: "작품",
        txtOf: "of",
    });
});
