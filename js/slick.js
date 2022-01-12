$('.img-carousel').slick({
	mobileFirst: true,
	dots: false,
	infinite: true,
	speed: 300,
	autoplay: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	adaptiveHeight: true,
	draggable: false,
	prevArrow: $('.prev'),
	nextArrow: $('.next'),
	responsive: [
        {
			breakpoint: 576,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			},
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
			},
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 4,
			},
		},
	],
});
$('.slick-pause').on('click', function () {
	$('.img-carousel').slick('slickPause');
});
$('.slick-play').on('click', function () {
	$('.img-carousel').slick('slickPlay');
});
