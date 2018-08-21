'use strict';


// SLICK SLIDER
// $('.slick-slider').slick({
// 	dots: true,
// 	infinite: true,
// 	speed: 300
// 	// prevArrow: '<span class="icon-arrow-left"></span>',
// 	// nextArrow: '<span class="icon-arrow-right"></span>'
// });


$('.Gallery-slickFor').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	lazyLoad: 'progressive',
	asNavFor: '.Gallery-slickNav',
	responsive: [
		{
		breakpoint: 640,
		settings: {
			arrows: false,
			dots: true
		}
	}]
});

$('.Gallery-slickNav').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	asNavFor: '.Gallery-slickFor',
	dots: true,
	focusOnSelect: true,
	arrows: true,
	fade: true,
	adaptiveHeight: true,
	appendArrows: $('.Gallery'),
	prevArrow: '<div class="glyph fs1 Gallery-arrow Gallery-prevArrow"><div class="clearfix pbs"><svg class="icon icon-arrow-left"><use xlink:href="#icon-arrow-left"></use></svg></div></div>',
	nextArrow: '<div class="glyph fs1 Gallery-arrow Gallery-nextArrow"><div class="clearfix pbs"><svg class="icon icon-arrow-right"><use xlink:href="#icon-arrow-right"></use></svg></div></div>',
	responsive: [{
		breakpoint: 640,
		settings: {
			arrows: false,
			dots: false
		}
	}]
});
