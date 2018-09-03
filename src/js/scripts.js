$(document).ready(function() {
	$(document).on('click','.js-play-training',function() {

		var $video = $('#training-video')[0]; 

		$('.js-play-training').hide();
		$video.play();

	});

	$(document).on('click','.js-play-perfect',function() {

		var $video = $('#perfect-video')[0];
			
		$('.js-play-perfect').hide();
		$video.play();

	});

	$(document).on('click','.js-play-inner',function() {

		var $video = $('#inner-video')[0];
			
		$('.js-play-inner').hide();
		$video.play();
		
	});


	$(function() {

		$(".interior-item").fancybox({
			'transitionIn'	:	'elastic',
			'transitionOut'	:	'elastic',
			'speedIn'		:	600, 
			'speedOut'		:	200, 
			'overlayShow'	:	false
		});

		$(".js-oky").fancybox();
		$(".js-call-pop").fancybox();
		$(".js-finance-pop").fancybox();
		$("#btn-buy").fancybox();
		$(".js-pop").fancybox();
		$(".js-pop").fancybox();

	});


	$(window).resize(function() {

		if ($(window).width() < 960) {
			$(".js-pop").fancybox({
				afterClose: function( instance, clicked ) {
					$('body').removeClass('body-fixed'); 
				}
		 	});

			$('.js-pop').on('click', function() {
				$('body').addClass('body-fixed');
			});
		};
	});


	$(function() {

		$("#my-menu").mmenu({
			onClick: {
						close: true,
						setSelected : false,
						preventDefault:false
				},

			extensions: [ 'widescreen', 'theme-black', 'effect-menu-slide', 'position-right' ],
			navbar: {
					title: '' 
				},
			},
				{
					offCanvas: {
					pageSelector: '#body-wrap',
				}
					
		});

		var api = $('#my-menu').data('mmenu');

		api.bind('open:start', function() {
			$('.hamburger').addClass('is-active');
		});	

		api.bind('close:finish', function() {
			$('.hamburger').removeClass('is-active');
		});

		$('.js-scroll').on('click', 'a', function() {
			event.preventDefault();

			var id  = $(this).attr('href'),
				top = $(id).offset().top;

			setTimeout(function(){
	 
				$('body,html').animate({scrollTop: top}, 1500);
			}, 900);

		});
	});


	function hideLoad() {

		var $preloader = $('#p_prldr'),
		$svg_anm   = $preloader.find('.svg_anm');

		$svg_anm.fadeOut();
		$preloader.fadeOut();
	}


	function showLoad() {

		var $preloader = $('#p_prldr'),
		$svg_anm   = $preloader.find('.svg_anm');

		$svg_anm.show();
		$preloader.show();
	} 

	$(window).on('load', hideLoad); 


	$(function(){
		$(".js-slide").on("click","a", function (event) {
			event.preventDefault();

			var id  = $(this).attr('href'),
				top = $(id).offset().top;

			$('body,html').animate({scrollTop: top}, 1500);
		});
	});

	function isFormValid($form) {
		var is_correct = true, bln, $input, input_value, email_regex = /^([a-z0-9]|_){1}((\-|\.|_*)?[a-z0-9]+)*@[a-z0-9]{1}((\-|\.)?[a-z0-9]+)*\.[a-z]{2,}$/i;

		$form.find('.js-valid').each(function(){

			$input = $(this);
				input_value = $input.val();
				bln = true;

			if(!input_value) { bln = false }

			else{ if ($input.attr('type') == 'email' && !email_regex.test(input_value)){ bln = false } }

			if(!bln){
				$input.addClass('errorInput');
				$input.parent().addClass('error');
				is_correct = false;
			}
		});
		return is_correct;
	};
	
	$('form .js-valid').on('keyup', function(e) {
				
		var $proc_form = $(this).parents('form');

			if(isFormValid($proc_form)) {
				$(this).parent().removeClass('error');
			}

			if( $(this).val() !='' ) {
				$(this).removeClass('errorInput');
			}; 
	});

	$(".js-form-template").submit(function(e) {
		e.preventDefault();

		var  $proc_form = $(this);
		
		if(isFormValid($proc_form) && checkValid($proc_form)) {

			showLoad();

			$.ajax({
				type: "GET",
				url: "mail.php",
				data: $(this).serialize()
				}).done(function() {
					$.fancybox.close({ src: '.js-pop' });
					hideLoad();
					$(this).find("input").val("");
					$.fancybox.open({ src: '#oky' });
					$(".js-form-template").trigger("reset");
				});
		}
		return false;
	});

});

