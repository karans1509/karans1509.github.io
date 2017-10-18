$(document).ready(function(){
	console.log("working");
    var n = $('header').height();
	$('header').animate({ opacity:"1"}, 750);
	$('.intro').animate({ opacity:"1"}, 750);
 
	$('header .fa').click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: n }, 1000);
    });

    $('.intro .fa-chevron-down').click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: n+n }, 1000);
    });

    $('.intro .fa-chevron-up').click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 1000);
    });

     $('.pitch .fa-chevron-down').click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: n+n+n }, 1000);
    });

    $('.pitch .fa-chevron-up').click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: n }, 1000);
    });

     $('.experience .fa-chevron-down').click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 4*n }, 1000);
    });

    $('.experience .fa-chevron-up').click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 2*n }, 1000);
    });

     $('.skills .fa-chevron-down').click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 5*n }, 1000);
    });

    $('.skills .fa-chevron-up').click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 3*n }, 1000);
    });

     $('.strength .fa-chevron-down').click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 6*n }, 1000);
    });

    $('.strength .fa-chevron-up').click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 4*n }, 1000);
    });

     $('.values .fa-chevron-down').click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 7*n }, 1000);
    });

    $('.values .fa-chevron-up').click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 5*n }, 1000);
    });

     $('.academics .fa-chevron-down').click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 8*n }, 1000);
    });

    $('.academics .fa-chevron-up').click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 6*n }, 1000);
    });

    $('.thanks .fa-chevron-up').click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 1000);
    });

    $(window).on('scroll resize' , function() {

		var w_height = $(window).height();
		var w_top = $(window).scrollTop();
		var w_bottom = w_height + w_top - 50;

		$.each($('.content') , function() {

			var e_height = $(this).outerHeight();
			var e_top = $(this).offset().top;
			var e_bottom = e_height + e_top;

			if((e_bottom>= w_top) && (e_top<=w_bottom)) {
				$(this).addClass('increase');
			} 
		});
	});

	// $('.content').animate({ height:"100vh", width:"100%"}, 1000);
})
