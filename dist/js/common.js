;$(function() {

	$('.toggle-menu').click(function(){
		$(this).toggleClass('on');
		$('.menu-main').slideToggle();
		return false;
	});
	$('.footer .toggle-menu').click(function(){
		$('html, body').animate({
			scrollTop: $(document).height()
		}, 'slow');
		return false;
	});
	$('.top').click(function() {
		$("html, body").animate({ scrollTop: 0 }, 'slow');
		return false;
	});
	$('.arrow_bottom').click(function(){
		$('html, body').animate({
			scrollTop: $('.header').height()+165
		}, 'slow');
		return false;
	});

	$('.cards .card').equalHeights();
	$('.teams .team').equalHeights();
	$('.section4 h2').waypoint(function() {
		$('.section4 .card').each(function (index) {
			var ths = $(this);
			setInterval(function() {
				ths.removeClass('card--off').addClass('card--onn');
			}, 150*index);
		});
	}, {
		offset: '20%'
	});
	$('.section6 h2').waypoint(function() {
		$('.section6 .team').each(function (index) {
			var ths = $(this);
			setInterval(function() {
				ths.removeClass('card--off').addClass('card--on');
			}, 150*index);
		});
	}, {
		offset: '20%'
	});
	$('.section5').waypoint(function() {
		$('.section5 .arrow').each(function(index) {
			var ths = $(this);
			setTimeout(function() {
				var myAnimation = new DrawFillSVG({
					elementId: "arrow__svg" + index
				});
			}, 500*index);
		});
		this.destroy();
	}, {
		offset: '30%'
	});
	
	
	$('.s8 h2').waypoint(function() {
		$('.s8__item').each(function (index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass('on');
			}, 150*index);
		});
		this.destroy();
	}, {
		offset: '70%'
	});
	
	$('.h-header h2, .h-header p').animated('fadeIn');
	$('.h-item_info').animated('zoomIn');
	$('.slider .slide').animated('fadeIn');
	$('.form--bottom').animated('fadeInRight');
	$('.section2 h3').waypoint(function() {
		$('.s2-item').each(function (index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass('on');
			}, 150*index);
		});
	}, {
		offset: '70%'
	});
	$('.slider').owlCarousel({
		items: 1,
		nav: true,
		navText: "",
		smartSpeed: 800
	});

	$('.h-bottom .buttons').click(function(){
		$('#callback h4').html($(this).text());
	}).magnificPopup({
		type:'inline',
		mainClass: 'mfp__forms'
	});
	//SVG Fallback
	/*if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};*/

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$(".forms").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
});
