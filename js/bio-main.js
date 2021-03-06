;(function () {
	
	'use strict';



	// iPad and iPod detection	
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) || 
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};

	// Parallax
	var parallax = function() {
		$(window).stellar();
	};



	// Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){

			event.preventDefault();

			if ( $('#navbar').is(':visible') ) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');	
			}

			
			
		});

	};


	var testimonialCarousel = function(){
		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 0,
			responsiveClass: true,
			nav: false,
			dots: true,
			smartSpeed: 500,
			autoHeight: true
		});
	};

	// Page Nav
	var clickMenu = function() {

		$('#navbar a:not([class="external"])').click(function(event){
			var section = $(this).data('nav-section'),
				navbar = $('#navbar');

				if ( $('[data-section="' + section + '"]').length ) {
			    	$('html, body').animate({
			        	scrollTop: $('[data-section="' + section + '"]').offset().top - 80
			    	}, 500);
			   }

		    if ( navbar.is(':visible')) {
		    	navbar.removeClass('in');
		    	navbar.attr('aria-expanded', 'false');
		    	$('.js-fh5co-nav-toggle').removeClass('active');
		    }

		    event.preventDefault();
		    return false;
		});


	};

	var clickMenu2 = function() {

		$('#home-nav a:not([class="external"])').click(function(event){
			var section = $(this).data('nav-section'),
				navbar = $('#navbar');

				if ( $('[data-section="' + section + '"]').length ) {
			    	$('html, body').animate({
			        	scrollTop: $('[data-section="' + section + '"]').offset().top + 10
			    	}, 500);
			   }

		    if ( navbar.is(':visible')) {
		    	navbar.removeClass('in');
		    	navbar.attr('aria-expanded', 'false');
		    	$('.js-fh5co-nav-toggle').removeClass('active');
		    }

		    event.preventDefault();
		    return false;
		});


	};

	// Reflect scrolling in navigation
	var navActive = function(section) {

		var $el = $('#navbar > ul');
		$el.find('li').removeClass('active');
		$el.each(function(){
			$(this).find('a[data-nav-section="'+section+'"]').closest('li').addClass('active');
		});

	};

	var navigationSection = function() {

		var $section = $('section[data-section]');
		
		$section.waypoint(function(direction) {
		  	
		  	if (direction === 'down') {
		    	navActive($(this.element).data('section'));
		  	}
		}, {
	  		offset: '150px'
		});

		$section.waypoint(function(direction) {
		  	if (direction === 'up') {
		    	navActive($(this.element).data('section'));
		  	}
		}, {
		  	offset: function() { return -$(this.element).height() + 155; }
		});

	};

	// Window Scroll
	var windowScroll = function() {
		var lastScrollTop = 0;

		$(window).scroll(function(event){

		   	var header = $('#indp-toolbar'),
				scrlTop = $(this).scrollTop();

			if ( scrlTop > 420 && scrlTop <= 2000 ) {
				header.addClass('navbar-fixed-top fh5co-animated slideInDown');
			} else if ( scrlTop <= 500) {
				if ( header.hasClass('navbar-fixed-top') ) {
					header.addClass('navbar-fixed-top fh5co-animated slideOutUp');
					setTimeout(function(){
						header.removeClass('navbar-fixed-top fh5co-animated slideInDown slideOutUp');
					}, 100 );
				}
			} 
			
		});
	};


	// Animations
	// Home
	var ymHomeAnimate = function() {
		if ( $('#ym-home').length > 0 ) {	

			$('#ym-home').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						$('#ym-home .to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);
					

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};

	var ymWeAreAnimate = function() {

		var explore = $('#ym-weare');
		if ( explore.length > 0 ) {	

			explore.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						explore.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 300);

					setTimeout(function() {
						explore.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInLeft animated');
							

							},  k * 300, 'easeInOutExpo' );

							
						});
					}, 1000);
					
					setTimeout(function() {
						explore.find('.to-animate-3').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInRight animated');
							

							},  k * 200, 'easeInOutExpo' );

							
						});
					}, 1200);

					/*setTimeout(function() {					
						$("#icon1").fadeIn(3000, function() {
        				$('#icon1').css('background-image', 'url(images/webdev2_hover.png)');}).fadeIn(3000);
					},2000);
					*/
					/*setTimeout(function() {					
						$("#icon2").fadeIn(3000, function() {
        				$('#icon2').css('background-image', 'url(images/mobile_dev_hover.png)');}).fadeIn(3000);
					},3000);
					

					setTimeout(function() {					
						$("#icon3").fadeIn(3000, function() {
        				$('#icon3').css('background-image', 'url(images/ai_dev_hover.png)');}).fadeIn(3000);
					},4000);
					

					setTimeout(function() {					
						$("#icon4").fadeIn(3000, function() {
        				$('#icon4').css('background-image', 'url(images/desktop_dev_hover.png)');}).fadeIn(3000);
					},5000);
					

					setTimeout(function() {
						explore.find('.to-animate-3').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInRight animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 1000);
					*/
					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};


var ymAboutAnimate = function() {

		var explore = $('#ym-about');
		if ( explore.length > 0 ) {	

			explore.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

				setTimeout(function() {
						explore.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInLeft animated');
							

							},  k * 200, 'easeInOutExpo' );

							
						});
					}, 200);

		
					setTimeout(function() {
						explore.find('.to-animate-3').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 300, 'easeInOutExpo' );
							
						});
					}, 700);

			
				setTimeout(function() {
						explore.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('swing animated');
							},  k * 900, 'easeInOutExpo' );
							
						});
					}, 1000);
					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};


var unischoolAnimate1 = function() {

		var explore = $('#fh5co-unischoolwhat');
		if ( explore.length > 0 ) {	

			explore.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


			setTimeout(function() {
						explore.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 300, 'easeInOutExpo' );
							
						});
					}, 400);

			
				setTimeout(function() {
						explore.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInLeft animated');
							

							},  k * 1000, 'easeInOutExpo' );

							
						});
					}, 1000);

				setTimeout(function() {
						explore.find('.to-animate-3').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInRight animated');
							

							},  k * 1000, 'easeInOutExpo' );

							
						});
					}, 1000);

				
					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};


	var testimonyAnimate = function() {
		var testimony = $('#fh5co-testimony');
		if ( testimony.length > 0 ) {	

			testimony.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						testimony.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

						setTimeout(function() {
						testimony.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInLeft animated');
							

							},  k * 1000, 'easeInOutExpo' );

							
						});
					}, 700);

				setTimeout(function() {
						testimony.find('.to-animate-3').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInRight animated');
							

							},  k * 1000, 'easeInOutExpo' );

							
						});
					}, 700);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};

	var testimonyAnimate2 = function() {
		var testimony = $('#fh5co-testimony2');
		if ( testimony.length > 0 ) {	

			testimony.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						testimony.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

						setTimeout(function() {
						testimony.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInLeft animated');
							

							},  k * 1000, 'easeInOutExpo' );

							
						});
					}, 700);

				setTimeout(function() {
						testimony.find('.to-animate-3').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInRight animated');
							

							},  k * 1000, 'easeInOutExpo' );

							
						});
					}, 700);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};


	var gettingStartedAnimate = function() {
		var started = $('.getting-started-1');
		if ( started.length > 0 ) {	

			started.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						started.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					setTimeout(function() {
						started.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInRight animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};

	var gettingStarted2Animate = function() {
		var started = $('.getting-started-2');
		if ( started.length > 0 ) {	

			started.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						started.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					setTimeout(function() {
						started.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInRight animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};

	var pricingAnimate = function() {
		var pricing = $('#fh5co-pricing');
		if ( pricing.length > 0 ) {	

			pricing.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						pricing.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeIn animated');
							},  k * 500, 'easeInOutExpo' );
							
						});
					}, 900);

					setTimeout(function() {
						pricing.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 500, 'easeInOutExpo' );
							
						});
					}, 900);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};


	var servicesAnimate = function() {
		var services = $('#fh5co-services');
		if ( services.length > 0 ) {	

			services.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					var sec = services.find('.to-animate').length,
						sec = parseInt((sec * 200) + 400);

					setTimeout(function() {
						services.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					setTimeout(function() {
						services.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('bounceIn animated');
							},  k * 1000, 'easeInOutExpo' );
							
						});
					}, 600);

								setTimeout(function() {
						services.find('.to-animate-4').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInLeft animated');
							

							},  k * 1000, 'easeInOutExpo' );

							
						});
					}, 700);

					setTimeout(function() {
						services.find('.to-animate-3').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInRight animated');
							

							},  k * 1000, 'easeInOutExpo' );

							
						});
					}, 900);


					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};


	var teamAnimate = function() {
		var team = $('#fh5co-team');
		if ( team.length > 0 ) {	

			team.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					var sec = team.find('.to-animate').length,
						sec = parseInt((sec * 200) + 400);

					setTimeout(function() {
						team.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeIn animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					setTimeout(function() {
						team.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					
						setTimeout(function() {
						team.find('.to-animate-3').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInLeft animated');
							

							},  k * 1000, 'easeInOutExpo' );

							
						});
					}, 700);

				setTimeout(function() {
						team.find('.to-animate-4').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInRight animated');
							

							},  k * 1000, 'easeInOutExpo' );

							
						});
					}, 900);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};

	
	var faqAnimate = function() {
		var faq = $('#fh5co-faq');
		if ( faq.length > 0 ) {	

			faq.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					var sec = faq.find('.to-animate').length,
						sec = parseInt((sec * 200) + 400);
						
					setTimeout(function() {
						faq.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeIn animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					setTimeout(function() {
						faq.find('.to-animate-1').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 500, 'easeInOutExpo' );
							
						});
					}, sec);

						setTimeout(function() {
						faq.find('.to-animate-3').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInRight animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};

	var trustedAnimate = function() {
		var trusted = $('#fh5co-trusted');
		if ( trusted.length > 0 ) {	

			trusted.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					var sec = trusted.find('.to-animate').length,
						sec = parseInt((sec * 200) + 400);
						
					setTimeout(function() {
						trusted.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeIn animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					setTimeout(function() {
						trusted.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('bounceIn animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, sec);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};


	var footerAnimate = function() {
		var footer = $('#fh5co-footer');
		if ( footer.length > 0 ) {	

			footer.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					setTimeout(function() {
						footer.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeIn animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};

	var footerAnimate = function() {
		var footer = $('#fh5co-footer');
		if ( footer.length > 0 ) {	

			footer.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					setTimeout(function() {
						footer.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeIn animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};

	var moveUniEd = function() {

		  $('.gallery').each(function() {

		    var $gal     = $(this),
		        $movable = $(".movable", $gal), 
		        $slides  = $(">*", $movable),
		        N        = $slides.length,
		        C        = 0,
		        itv      = null,
		        flag	 = false,
		        j  = 0 ;
		    
		    function play() { itv = setInterval(anim, 3000); }
		    function stop() { clearInterval(itv); }
		    function anim() {
		    	
		    	/*if( j == 2) {C = 0; flag=true;} 
		    	if (j == 4 && flag == true){
		    		C = 3;
		    		flag = false;
		    	}*/
		    	//else{
		          C = ($(this).is(".prev") ? --C : ++C) <0 ? N-1 : C%N;
		        //}
		        console.log(j);
		        console.log("C = " + C);
		      $movable.css({transform: "translateX(-"+ (C*100) +"%)"});
		      j++;
		      if(j == 9){ j=0;}
		    
		    }
		    
		    $(".prev, .next", this).on("click", anim);
		    $gal.hover(stop, play);
		    play();

		  });

};


	// Document on load.
	$(function(){
		parallax();
		clickMenu();
		clickMenu2();
		windowScroll();
		navigationSection();
	/*	parallax();
		burgerMenu();
		clickMenu();
		windowScroll();
		navigationSection();
		testimonialCarousel();
		
		// Animations
		homeAnimate();
		exploreAnimate();
		whoAnimate();
		testimonyAnimate();
		gettingStartedAnimate();
		gettingStarted2Animate();
		pricingAnimate();
		servicesAnimate();
		teamAnimate();
		faqAnimate();
		trustedAnimate();
		footerAnimate();
		moveUniEd();
		unischoolAnimate1();
	testimonyAnimate2();
*/
ymHomeAnimate();
ymWeAreAnimate();

	// Flexslider
	$('.flexslider').flexslider({
		animation: "fade",
		directionNav: false,
	});
	$('.flexslider2').flexslider({
		animation: "fadeInRight",
		directionNav: false,
	});
	
		$("#service1").hide();
		$("#box-service1").hover(function(){
    			$("#service1").fadeIn();
  		},function(){
    			$("#service1").hide();
  		}

  		);

  		$("#service2").hide();
		$("#box-service2").hover(function(){
    			$("#service2").fadeIn();
  		},function(){
    			$("#service2").hide();
  		}

  		);
		
		$("#service3").hide();
		$("#box-service3").hover(function(){
    			$("#service3").fadeIn();
  		},function(){
    			$("#service3").hide();
  		}

  		);

  		$("#service4").hide();
		$("#box-service4").hover(function(){
    			$("#service4").fadeIn();
  		},function(){
    			$("#service4").hide();
  		}

  		);

  		$("#service5").hide();
		$("#box-service5").hover(function(){
    			$("#service5").fadeIn();
  		},function(){
    			$("#service5").hide();
  		}

  		);
		
		$("#service6").hide();
		$("#box-service6").hover(function(){
    			$("#service6").fadeIn();
  		},function(){
    			$("#service6").hide();
  		}

  		);


/* 		$("#card").click(function(){
    			$("#card").toggleClass('flipped');
  		});

		$("#card2").click(function(){
    			$("#card2").toggleClass('flipped');
  		});


  		$("#card3").click(function(){
    			$("#card3").toggleClass('flipped');
  		});
  		

  		$("#card4").click(function(){
    			$("#card4").toggleClass('flipped');
  		});
  		
		$("#subtitle2").hide();
		$("#subtitle3").hide();
		$("#subtitle4").hide();

		$("#icon1").click(function(){
				setTimeout(function() {					
						$("#icon1").fadeIn(300, function() {
        				$('#icon1').css('background-image', 'url(images/webdev2_hover.png)');
        				$('#icon1').css('background-color', '#ECE9E6');}).fadeIn(300);
					},100);

    			setTimeout(function() {					
						$("#icon2").fadeIn(300, function() {
        				$('#icon2').css('background-image', 'url(images/mobile_dev.png)');
        				$('#icon2').css('background-color', '#ECE9E6');}).fadeIn(300);
					},100);

    			setTimeout(function() {					
						$("#icon3").fadeIn(300, function() {
        				$('#icon3').css('background-image', 'url(images/ai_dev.png)');
        				$('#icon3').css('background-color', '#ECE9E6');}).fadeIn(300);
					},100);


				setTimeout(function() {					
						$("#icon4").fadeIn(300, function() {
        				$('#icon4').css('background-image', 'url(images/desktop_dev.png)');
        				$('#icon4').css('background-color', '#ECE9E6');}).fadeIn(300);
					},100);
			
			$("#subtitle1").show(1000);
			$("#subtitle2").hide(1000);
			$("#subtitle3").hide(1000);
			$("#subtitle4").hide(1000);
					
			});	

		$("#icon2").click(function(){
				setTimeout(function() {					
						$("#icon1").fadeIn(300, function() {
        				$('#icon1').css('background-image', 'url(images/webdev2.png)');
        				$('#icon1').css('background-color', '#ECE9E6');}).fadeIn(300);
					},100);

    			setTimeout(function() {					
						$("#icon2").fadeIn(300, function() {
        				$('#icon2').css('background-image', 'url(images/mobile_dev_hover.png)');
        				$('#icon2').css('background-color', '#ECE9E6');}).fadeIn(300);
					},100);

    			setTimeout(function() {					
						$("#icon3").fadeIn(300, function() {
        				$('#icon3').css('background-image', 'url(images/ai_dev.png)');
        				$('#icon3').css('background-color', '#ECE9E6');}).fadeIn(300);
					},100);


				setTimeout(function() {					
						$("#icon4").fadeIn(300, function() {
        				$('#icon4').css('background-image', 'url(images/desktop_dev.png)');
        				$('#icon4').css('background-color', '#ECE9E6');}).fadeIn(300);
					},100);
 			$("#subtitle1").hide(1000);
			$("#subtitle2").show(1000);
			$("#subtitle3").hide(1000);
			$("#subtitle4").hide(1000);
					
			});

			$("#icon3").click(function(){
				setTimeout(function() {					
						$("#icon1").fadeIn(300, function() {
        				$('#icon1').css('background-image', 'url(images/webdev2.png)');
        				$('#icon1').css('background-color', '#ECE9E6');}).fadeIn(300);
					},100);

    			setTimeout(function() {					
						$("#icon2").fadeIn(300, function() {
        				$('#icon2').css('background-image', 'url(images/mobile_dev.png)');
        				$('#icon2').css('background-color', '#ECE9E6');}).fadeIn(300);
					},100);

    			setTimeout(function() {					
						$("#icon3").fadeIn(300, function() {
        				$('#icon3').css('background-image', 'url(images/ai_dev_hover.png)');
        				$('#icon3').css('background-color', '#ECE9E6');}).fadeIn(300);
					},100);


				setTimeout(function() {					
						$("#icon4").fadeIn(300, function() {
        				$('#icon4').css('background-image', 'url(images/desktop_dev.png)');
        				$('#icon4').css('background-color', '#ECE9E6');}).fadeIn(300);
					},100);

			$("#subtitle1").hide(1000);
			$("#subtitle2").hide(1000);
			$("#subtitle3").show(1000);
			$("#subtitle4").hide(1000);
					
			});		

			$("#icon4").click(function(){
				setTimeout(function() {					
						$("#icon1").fadeIn(300, function() {
        				$('#icon1').css('background-image', 'url(images/webdev2.png)');
        				$('#icon1').css('background-color', '#ECE9E6');}).fadeIn(300);
					},100);

    			setTimeout(function() {					
						$("#icon2").fadeIn(300, function() {
        				$('#icon2').css('background-image', 'url(images/mobile_dev.png)');
        				$('#icon2').css('background-color', '#ECE9E6');}).fadeIn(300);
					},100);

    			setTimeout(function() {					
						$("#icon3").fadeIn(300, function() {
        				$('#icon3').css('background-image', 'url(images/ai_dev.png)');
        				$('#icon3').css('background-color', '#ECE9E6');}).fadeIn(300);
					},100);


				setTimeout(function() {					
						$("#icon4").fadeIn(300, function() {
        				$('#icon4').css('background-image', 'url(images/desktop_dev_hover.png)');
        				$('#icon4').css('background-color', '#ECE9E6');}).fadeIn(300);
					},100);
			$("#subtitle1").hide(1000);
			$("#subtitle2").hide(1000);
			$("#subtitle3").hide(1000);
			$("#subtitle4").show(1000);
					
			});				
*/

	});


}());

