(function ($) {

    $(".carousel-container").each(function () {

        const autoplay = $(this).data("autoplay") ? true : false;
        const rows = $(this).data("rows") ? $(this).data("rows") : 2;

        $(this).on("init breakpoint", function () {

            const $slick_dots = $(this).find(".slick-dots");
            const $slick_prev = $(this).find(".slick-prev");
            const $slick_next = $(this).find(".slick-next");

            $($slick_dots).wrap("<div class=\"slick-nav\"></div>");

            $(this).find(".slick-nav").prepend($slick_prev).append($slick_next);

        }).on("init afterChange", function () {
            $(this).find(".lazy").Lazy({
                imageBase: "assets/img/",
            });
        }).slick({
            dots: true,
            slidesPerRow: 3,
            rows: rows,
            autoplay: autoplay,
            infinite: autoplay,
            autoplaySpeed: 5000,
            prevArrow: "<span class=\"slick-prev\"><i class=\"icon-angle-left\"></i></span>",
            nextArrow: "<span class=\"slick-next\"><i class=\"icon-angle-right\"></i></span>",
            responsive: [
                {
                    breakpoint: 1190,
                    settings: {
                        slidesPerRow: 2,
                    }
                },
                {
                    breakpoint: 680,
                    settings: {
                        slidesPerRow: 1,
                        rows: 1,
                        arrows: false
                    }
                }
            ]
        });

    });

    $("body").on("click", ".carousel-item-inner", function (e) {
        const $slide = $(e.target).closest(".slick-slide");
        if (!$slide.hasClass("slick-active") && $(window).width() < 680) {
            e.preventDefault();
            const index = $slide.data("slick-index");
            $slide.closest($(".carousel-container")).slick("slickGoTo", index);
        }
    });

})(jQuery);