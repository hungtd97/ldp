$(function(){
		$(window).scroll(function (event) {
			if($(window).width() > 767){
					var currentScrollTop = $(window).scrollTop();
					if(currentScrollTop > 20){
						$('.navbar-fixed-top').css('position','fixed');
						$('.container-fluid').css('margin-top','0');
					}else{
						$('.navbar-fixed-top').css('position', 'absolute');
						$('.container-fluid').css('margin-top','20px');
					}
			}
		});
	var first_link = $('.panel-title > a[href="#collapse1"]').attr('img-data');
	$('.image-view').children('img').attr('src', first_link);
	$('.panel-body').children('.image-view-2').children('img').attr('src', first_link);
	$('a[href="#collapse1"]').parent().parent().css({'background': '#0e529f', 'color':'#fff'});
	$('a[href="#collapse1"]').parent().parent().addClass('active');
	$('.image-control').click(function(event){
		var link = $(this).attr('img-data');
		$('.image-view').children('img').attr('src', link);
		$('.panel-body').children('.image-view-2').children('img').attr('src', link);
		$('.panel-heading').css({'background': '#bcbdc0', 'color':'#000'});
		$('.panel-heading').removeClass('active');
		$(this).parent().parent().css({'background': '#0e529f', 'color':'#fff'});
		$(this).parent().parent().addClass('active');
	});
	$('.panel-title > a[data-toggle="collapse"]').click(function(e){
		target = $(this).attr('href')
		if ($(target).hasClass('in')) {
			e.preventDefault(); 
			e.stopPropagation()
		}
	})
});
function setHeightSlider(h){
	height = 0;
	$( ".slides .slides-item" ).each(function( index ) {
		currentHeight = $(this).height();
		if(height < currentHeight) height = currentHeight;
	});
	$('.st2-content-2 .box-slides').height(height/h);
}
function resizeSlider(){
	var slick_index = $('.slides .slick-current').attr('data-slick-index');
	var width = $('.slides .slides-item').width();
	var object = $('.slides .slick-active.slick-center');
	$('.slides .slides-item').css('max-width', '');
	$('.slides .slides-item').css('min-width', '');
	$('.slides .slick-active').css('max-width', width-100);
	object.css('min-width', width+200);
	object.find('.description').css('width','');
	object.find('.content').css('display','block');
	object.find('.image').css('display','block');
	index = ($('.slides .slick-active.slick-center').attr('data-slick-index'));
	index++;
	$(".slides .slick-active[data-slick-index='" + index +"']").css('text-align','right');
}
function hideContent(){
	var object = $('.slides .slides-item');
	object.find('.description').css('width','100%');
	object.find('.content').css('display','none');
	object.find('.image').css('display','none');
	index = ($('.slides .slick-active.slick-center').attr('data-slick-index'));
	index++;
	$("div[data-slick-index='" + index +"']").css('text-align','left');
}
$(document).ready(function(){
	$('.items .items-text').mouseover(function(){
		$(this).find('h2').css({'margin-top': '5px','margin-bottom': '15px'});
		$(this).find('img').css('box-shadow','0 0px 25px rgba(0, 0, 0, 0.7)');
	});
	$('.items .items-text').mouseout(function(){
		$(this).find('h2').css({'margin-top': '10px','margin-bottom': '10px'});
		$(this).find('img').css('box-shadow','none');
	});
	if($(window).width() > 1000){
		$(".slides").on("init", function (){
			hideContent();
			resizeSlider();
		});
		hideContent();
			resizeSlider();
	}
	$('.slides').slick({
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1, 
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: false,
		centerMode: true,
		centerPadding: '0',
		responsive: [
		{
			breakpoint: 1000,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}
		]
	});
	$('.slides-2 .slides-item').matchHeight({
			byRow: true,
	    	property: 'height',
	});
	var draw_flg = 0;
	if($(window).width() > 1000){
		$(".slides").on("beforeChange", function (){
			hideContent();
		});

		$(".slides").on("afterChange", function (){
			resizeSlider();
		});

	}
	$(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("in");
        if (_opened === true && !clickover.hasClass("navbar-toggle")) {
            $("button.navbar-toggle").click();
        }
        if($("#mySidebar").hasClass('active') && !clickover.hasClass("w3-sidebar") && !clickover.hasClass("navbar-toggle")&& !clickover.hasClass("icon-bar")){
        	w3_close();
        }
    });
	$('#prevBtn').click(function(){
		$('.slides').slick('slickPrev');
	});
	$('#nextBtn').click(function(){
		$('.slides').slick('slickNext');
	});
	$.fn.matchHeight._beforeUpdate = function(event, groups) {
		$( ".st3-content-1 .items" ).each(function( index ) {
			$(this).find('img').css('margin-top', '0');
		});
	}
	$('.st3-content-1 .items').matchHeight({
			byRow: true,
	    	property: 'height',
		});
	$.fn.matchHeight._afterUpdate = function(event, groups) {
		$( ".st3-content-1 .items" ).each(function( index ) {
			margin_top = $(this).height();
			margin_top-= $(this).find('.items-text').height();
			$(this).find('img').css('margin-top', margin_top);
		});
	}
	$(".slides-2").on("init",function(){
		$('.item-control[index-control=1]').css({
			'background':'#0e529f',
			'color':'#fff'
		});
		$('.item-control[index-control=1]').addClass('active');
		image = $('.item-control[index-control=1]').find('img').attr('src');
		image = image.replace('.png','-active.png');
		$('.item-control[index-control=1]').find('img').attr('src', image);
	});
	$('.slides-2').slick({
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1, 
		autoplay: true,
		autoplaySpeed: 7000,
		arrows: false,
		centerMode: true,
		centerPadding: '0',
	});	
	$('.item-control').click(function(){
		$('.item-control').css({
			'background':'',
			'color':'#0e529f'
		});
		$('.item-control').each(function( index ) {
			image = $(this).find('img').attr('src');
			image = image.replace('-active','');
			$(this).removeClass('active');
			$(this).find('img').attr('src', image);
		});
		index = $(this).attr('index-control');
		index--;
		$('.slides-2').slick('slickGoTo', index);
		$(this).css({
			'background':'#0e529f',
			'color':'#fff',
		});
		$(this).addClass('active');
		image = $(this).find('img').attr('src');
		image = image.replace('.png','-active.png');
		$(this).find('img').attr('src', image);
	});
	$(".slides-2").on("afterChange", function (){
		$('.item-control').css({
			'background':'',
			'color':'#0e529f'
		});
		$('.item-control').each(function( index ) {
			image = $(this).find('img').attr('src');
			image = image.replace('-active','');
			$(this).find('img').attr('src', image);
			$(this).removeClass('active');
		});
		index = $('.slides-2 .slick-center').attr('index-control');
		$(".item-control[index-control='" + index +"']").css({
			'background':'#0e529f',
			'color':'#fff',
		});
		 $(".item-control[index-control='" + index +"']").addClass('active');
		image = $(".item-control[index-control='" + index +"']").find('img').attr('src');
		image = image.replace('.png','-active.png');
		$(".item-control[index-control='" + index +"']").find('img').attr('src', image);
	});
	$('.slick-control .item-control').mouseover(function(){
		if(!$(this).hasClass('active')){
			image = $(this).find('img').attr('src');
			image = image.replace('.png','-active.png');
			$(this).find('img').attr('src', image);
			$(this).css({
			'background':'#0e529f',
			'color':'#fff',
		});
		}
	});
	$('.slides-2 .slides-item img').hover(function(){
		$('.slides-2 .slides-item .col-sm-12 a').toggleClass('changed');
	});
	$('.slick-control .item-control').mouseout(function(){
		if(!$(this).hasClass('active')){
		image = $(this).find('img').attr('src');
		image = image.replace('-active','');
		$(this).find('img').attr('src', image);
		$(this).css({
			'background':'',
			'color':'#0e529f'
		});
	}
	});
	$('#prevBtn-2').click(function(){
		$('.slides-2').slick('slickPrev');
	});
	$('#nextBtn-2').click(function(){
		$('.slides-2').slick('slickNext');
	});
	if($(window).width() > 1000){
			
		}
	$(window).resize(function(){
					
			$('.slides-2 .slides-item').matchHeight({
				byRow: true,
	    		property: 'height',
			}); 	
	});
}); 
function goToByScroll(id, distance = 0){
        id = id.replace("link", "");
          height = $("#"+id).offset().top + distance;
        $('html,body').animate({
            scrollTop: height},
            'slow');
    }
function w3_open() {
    $("#mySidebar").css('display', 'block');
    $(".navbar-brand img").css({'animation':'fadingout .2s forwards'});
    $(".ul-sidebar img").css({'animation':'fadingin .7s forwards'});
    $("#mySidebar").addClass('active');
    $('.overlay').css({'opacity':'1','visibility':'visible','-webkit-backface-visibility':'visible','backface-visibility':'visible'});
    $('html, body').css({
	    'overflow-y': 'hidden',
	});
	$('.navbar-header').css('transform','translateX(220px)');
}
function w3_close() {
    $("#mySidebar").css('display', 'none');
    $(".navbar-brand img").css('animation','unset');
    $(".ul-sidebar img").css({'animation':'unset'});
    $("#mySidebar").removeClass('active');
    $('.overlay').css({'opacity':'0','visibility':'hidden','-webkit-backface-visibility':'hidden','backface-visibility':'hidden'});
    $('html, body').css({
	    'overflow-y': 'auto',
	});
	$('.navbar-header').css('transform','unset');
	$('.navbar-fixed-top').css('position','');
}