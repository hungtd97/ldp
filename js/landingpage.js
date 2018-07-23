$(function(){
	$('.match-height-1 .box').matchHeight({
			byRow: true,
	    	property: 'height',
		});
	$('.match-height-2 .box').matchHeight({
			byRow: true,
	    	property: 'height',
		});
	
	$('.navbar-nav li').hover(function(){
		$(this).children('.link-box').css({
			'border-top': '4px solid #5bbc2e', 'border-bottom-left-radius': '3px', 'border-bottom-right-radius': '3px'});	
	}, function(){
    $(this).children('.link-box').css("border-top", "none");
	});


});

$(document).ready(function(){
	 $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("in");
        console.log(_opened);
        if (_opened === true && !clickover.hasClass("navbar-toggle")) {
            $("button.navbar-toggle").click();
        }
    });

	$('.slides').slick({
		  infinite: true,
		  slidesToShow: 3,
		  slidesToScroll: 1, 
		  autoplay: true,
		  autoplaySpeed: 3000,
		 arrows: false,
		 centerMode: true,
		 centerPadding: '0',
		 responsive: [
		 	{
		 		 breakpoint: 1024,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2,
     		}
		 	}
		 ]
		  
	});
	$('#left-slick').click(function(){
		$('.slides').slick('slickPrev');
	});
	$('#right-slick').click(function(){
		$('.slides').slick('slickNext');
	});

	$('.slides .slides-item').mouseout(function(){
		$(this).find('.title').css('color', '#000');
	});

	$('.slides .slides-item').mouseover(function(){
		$(this).find('.title').css('color', '#5bbc2e');
		$(this).find('.arrow')
	});

	

	$('.match-height-1').mouseover(function(){
		$(this).find('img').css('box-shadow', '0 0px 20px rgba(0, 0, 0, 0.4)');
		$(this).find('a').css('color','#5bbc2e');
	});

	$('.match-height-1').mouseout(function(){
		$(this).find('img').css('box-shadow', '0 0px 20px rgba(0, 0, 0, 0)');
		$(this).find('a').css('color','#000');
	});
	$('.match-height-2').mouseover(function(){
		$(this).find('img').css('box-shadow', '0 0px 20px rgba(0, 0, 0, 0.4)');
		$(this).find('a').css('color','#5bbc2e');
	});

	$('.match-height-2').mouseout(function(){
		$(this).find('img').css('box-shadow', '0 0px 20px rgba(0, 0, 0, 0)');
		$(this).find('a').css('color','#000');
	});

	$('.slides-2').slick({
		  infinite: true,
		  slidesToShow: 2,
		  slidesToScroll: 1, 
		  autoplaySpeed: 3000,
		 arrows: false,
		 centerMode: true,
		 centerPadding: '0',
		responsive: [
				 	{
				 		 breakpoint: 1024,
					      settings: {
					        slidesToShow: 1,
					        slidesToScroll: 1,
		     		}
				 	}
				 ]
		  
	});
	$('#left-slick-2').click(function(){
		$('.slides-2').slick('slickPrev');
	});
	$('#right-slick-2').click(function(){
		$('.slides-2').slick('slickNext');
	});

	$('.slides-3').slick({
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  autoplay: true,
		 asNavFor: '.slides-4',
		 focusOnSelect: true,
		  centerMode: true,
		  infinite:true,
		  arrows:false,
	});

	$('.slides-4').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  asNavFor: '.slides-3',
		  centerPadding: '0',
		  centerMode: true,
		  focusOnSelect: true,
		  arrows:false,
		  infinite:true
	});
	$(window).scroll(function (event) {
    	var scroll = $(window).scrollTop();
    	var windowHeight = $(window).height() / 2;   	
    	var header = $("#first-class").offset().top - windowHeight;
    	var register = $("#register-form").offset().top - windowHeight;
    	var whybox = $("#why-box").offset().top - windowHeight;;
    	var program = $("#program-box").offset().top - windowHeight;
    	var funixway = $("#funixway-box").offset().top - windowHeight;
    	var contact = $("#contact-box").offset().top - windowHeight;
    	if(scroll > header && scroll < whybox){
    		removeClass();
    		$('#home-link').parent().addClass('active');
    	}else if(scroll > whybox && scroll < register){
    		removeClass();
    		$('#why-link').parent().addClass('active');
    	}else if(scroll > register && scroll < program){
    		removeClass();
    		$('#register-link').parent().addClass('active');
    	}else if(scroll > program && scroll < funixway){
    		removeClass();
    		$('#program-link').parent().addClass('active');
    	}else if(scroll > funixway && scroll < contact){
    		removeClass();
    		$('#funixway-link').parent().addClass('active');
    	}else if(scroll > contact){
    		removeClass();
    		$('#contact-link').parent().addClass('active');
    	}
	});

	$('#left-slick-3').click(function(){
		$('.slides-4').slick('slickPrev');
	});
	$('#right-slick-3').click(function(){
		$('.slides-4').slick('slickNext');
	});

	$('#register-link').click(function(){
		goToByScroll('register-form');
	});
	$('#home-link').click(function(){
		goToByScroll('first-class');
	});
	$('#why-link').click(function(){
		goToByScroll('why-box');
	});
	$('#program-link').click(function(){
		goToByScroll('program-box');
	});
	$('#funixway-link').click(function(){
		goToByScroll('funixway-box');
	});
	$('#contact-link').click(function(){
		goToByScroll('contact-box');
	});


});

function removeClass(){
	$( ".navbar-nav li" ).each(function( index ) {
	  	if($(this).hasClass('active')){
	  		$(this).removeClass('active');
	  	}
	});
}

function goToByScroll(id){
        id = id.replace("link", "");
        $('html,body').animate({
            scrollTop: $("#"+id).offset().top},
            'slow');
    }