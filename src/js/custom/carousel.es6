(function ($) {

    $(".carousel-container").each(function () {

        const _this = $(this);

        $(this).on("init breakpoint", function (event, slick) {

            const $slick_dots = $(this).find(".slick-dots");
            const $slick_prev = $(this).find(".slick-prev");
            const $slick_next = $(this).find(".slick-next");

            $($slick_dots).wrap("<div class='slick-nav'></div>");

            $(this).find(".slick-nav").prepend($slick_prev).append($slick_next);

        }).slick({
            dots: true,
            slidesPerRow: 3,
            rows: 2,
            //autoplay: true,
            //autoplaySpeed: 3000,
            prevArrow: "<span class='slick-prev'><i class='icon-angle-left'></i></span>",
            nextArrow: "<span class='slick-next'><i class='icon-angle-right'></i></span>",
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

    }); // document.ready

})(jQuery);