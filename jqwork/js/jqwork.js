$(document).ready(function() {
	/*最右上font圖*/
	$('a[href$=".fb"]').addClass('fa fa-facebook-official');
	$('a[href$=".tw"]').addClass('fa fa-twitter-square');

	/*hexlogo with Animate.css*/
	$('.jq-logo').hover(function() {
    $(this).addClass("pulse");
  	},
  	function () {
    $(this).removeClass("pulse");
  	});


	/*點擊第一層li，出現第二層ol
	$('.jq-drop').click(function(event) {
		event.preventDefault();
		$(this).siblings('ol').slideToggle().parent().siblings().find('ol').slideUp();
	});
	*/

	





	/*slider*/
	$(window).load(function() {
        $('#slider').nivoSlider();
    });

	/*html5圖片*/
	$('.xjqhtml5').hover(function() {
    $('.jq-html5').addClass("pulse");
  	},
  	function () {
    $('.jq-html5').removeClass("pulse");
  	});
	/*RWD圖片*/
	$('.xRWD').hover(function() {
    $('.jq-RWD').addClass("pulse");
  	},
  	function () {
    $('.jq-RWD').removeClass("pulse");
  	});
	/*jQuery圖片*/
	$('.xjQuery').hover(function() {
    $('.jq-jQuery').addClass("pulse");
  	},
  	function () {
    $('.jq-jQuery').removeClass("pulse");
  	});


	/*選字大*/
	$('.wordb').click(function(event) {
		event.preventDefault();
		$('tr,td,th').css('font-size', '19Px');
		$(this).addClass('addcolor').parent().siblings().find('a').removeClass('addcolor');
	});
	/*選字中*/
	$('.wordm').click(function(event) {
		event.preventDefault();
		$('tr,td,th').css('font-size', '16Px');
		$(this).addClass('addcolor').parent().siblings().find('a').removeClass('addcolor');
	});
	/*選字小*/
	$('.words').click(function(event) {
		event.preventDefault();
		$('tr,td,th').css('font-size', '13Px');
		$(this).addClass('addcolor').parent().siblings().find('a').removeClass('addcolor');
	});

	/*footer-box fontword*/
	$('a[href$="person"]').addClass('fa fa-address-card');

	/*footer-cover*/
	$('.person').click(function(event) {
		event.preventDefault();
		$('.footer-cover').toggleClass('cover');
	});

	$('a[href$=".arrow"]').addClass('fa fa-arrow-circle-o-up');
	/*scroll往上*/
	$('.arrow').click(function(event) {
		event.preventDefault();
		$('html,body').animate({scrollTop: 0}, 700);
	});


	$(window).scroll(function(event) {
		$('.arrow').show();
		
	});



















});