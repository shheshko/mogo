$(function () {
    $(".feature-item .feature-category").click(function () {
        $(".feature-item .feature-content").hide();
        $(".feature-item .feature-category").removeClass("active");

        $(this).next(".feature-content").show();
        $(this).addClass("active");
    });

    $(".slider").slick({
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        dots: true,
        prevArrow: '<div class="slider-btn btn-prev"></div>',
        nextArrow: '<div class="slider-btn btn-next"></div>'
    });
});