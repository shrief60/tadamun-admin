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

		$('#contact1').click(function(event){
			var section = $(this).data('nav-section'),
				navbar = $('#myNavbar');

				if ( $('[data-section="' + section + '"]').length ) {
			    	$('html, body').animate({
			        	scrollTop: $('[data-section="' + section + '"]').offset().top + 20
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


		$('#partner1').click(function(event){
			var section = $(this).data('nav-section'),
				navbar = $('#myNavbar');

				if ( $('[data-section="' + section + '"]').length ) {
			    	$('html, body').animate({
			        	scrollTop: $('[data-section="' + section + '"]').offset().top + 20
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

		   	var header = $('#fh5co-header'),
				scrlTop = $(this).scrollTop();

			if ( scrlTop > 500 && scrlTop <= 2000 ) {
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
	var homeAnimate = function() {
		if ( $('#fh5co-home').length > 0 ) {	

										
			$('#fh5co-home .dot').hide();
			$('#fh5co-home .dot2').hide();
			$('#fh5co-home .dot3').hide();
					setTimeout(function() {
						$('#fh5co-home .to-animate-2').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInLeft animated');
							},  1000, 'easeInOutExpo' );
							
						});

					}, 200);

					setTimeout(function() {
						$('#fh5co-home .to-animate').each(function( k ) {
							var el = $(this);
					
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k* 1000, 'easeInOutExpo' );
						
						
						}


						);
						setTimeout ( function () {
							$('#fh5co-home .dot').show();
							$('#fh5co-home .dot2').show();
							$('#fh5co-home .dot3').show();
						},1400);
					}, 500);
					
			

		

		}
	};

	var exploreAnimate = function() {

		var explore = $('#fh5co-explore');
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
					}, 200);

					setTimeout(function() {
						explore.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInLeft animated');
							

							},  k * 200, 'easeInOutExpo' );

							
						});
					}, 700);
					
					setTimeout(function() {
						explore.find('.to-animate-3').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInRight animated');
							

							},  k * 200, 'easeInOutExpo' );

							
						});
					}, 700);

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


var whoAnimate = function() {

		var explore = $('#fh5co-who');
		if ( explore.length > 0 ) {	

			explore.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

				setTimeout(function() {
						explore.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInLeft animated');
							

							},  k * 200, 'easeInOutExpo' );

							
						});
					}, 200);


					setTimeout(function() {
						explore.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 300, 'easeInOutExpo' );
							
						});
					}, 700);

			
					
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
							},  k * 1200, 'easeInOutExpo' );
							
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
		
		$(".s2-product-desc").slideUp();
		var opened= false;
		var opened2= false;
		var opened3= false;
		var opened4= false;
		var opened5= false;
		
		$("#circleTop1").hover(function(){
        		$("#circleTop1").css({ background: "#00bcd4"});
        	}, function(){
        		if(opened == false) $("#circleTop1").css({ background: "#333"});
        });

		$("#circleBottom1").hover(function(){
        		$("#circleBottom1").css({ background: "#e61f2b"});
        	}, function(){
        		if(opened == false) $("#circleBottom1").css({ background: "#333"});
        });


		$("#circleTop1").click(function(){
        		if(opened == false) 
        		{
        			$("#product1").slideDown();
        			$("#circleTop1").css({ background: "#00bcd4"});
        			$("#circleBottom1").css({ background: "#e61f2b"});
        			opened=true;
        		}
        		else 
        		{
        			$("#product1").slideUp(); 
        			$("#circleTop1").css({ background: "#333"});
        			$("#circleBottom1").css({ background: "#333"});
        			opened=false;
        		}
    	});
    	$("#circleBottom1").click(function(){
        		if(opened == false) 
        		{
        			$("#product1").slideDown();
        			$("#circleTop1").css({ background: "#00bcd4"});
        			$("#circleBottom1").css({ background: "#e61f2b"});
        			opened=true;
        		}
        		else 
        		{
        			$("#product1").slideUp(); 
        			$("#circleTop1").css({ background: "#333"});
        			$("#circleBottom1").css({ background: "#333"});
        			opened=false;
        		}
    	});


	


		$("#circleTop2").hover(function(){
        		$("#circleTop2").css({ background: "#00bcd4"});
        	}, function(){
        		if(opened2 == false) $("#circleTop2").css({ background: "#333"});
        });

		$("#circleBottom2").hover(function(){
        		$("#circleBottom2").css({ background: "#e61f2b"});
        	}, function(){
        		if(opened2 == false) $("#circleBottom2").css({ background: "#333"});
        });


		$("#circleTop2").click(function(){
        		if(opened2 == false) 
        		{
        			$("#product2").slideDown();
        			$("#circleTop2").css({ background: "#00bcd4"});
        			$("#circleBottom2").css({ background: "#e61f2b"});
        			opened2=true;
        		}
        		else 
        		{
        			$("#product2").slideUp(); 
        			$("#circleTop2").css({ background: "#333"});
        			$("#circleBottom2").css({ background: "#333"});
        			opened2=false;
        		}
    	});
    	$("#circleBottom2").click(function(){
        		if(opened2 == false) 
        		{
        			$("#product2").slideDown();
        			$("#circleTop2").css({ background: "#00bcd4"});
        			$("#circleBottom2").css({ background: "#e61f2b"});
        			opened2=true;
        		}
        		else 
        		{
        			$("#product2").slideUp(); 
        			$("#circleTop2").css({ background: "#333"});
        			$("#circleBottom2").css({ background: "#333"});
        			opened2=false;
        		}
    	});

    	/////////////////////////////////////////////////////////////
    	$("#circleTop3").hover(function(){
        		$("#circleTop3").css({ background: "#00bcd4"});
        	}, function(){
        		if(opened3 == false) $("#circleTop3").css({ background: "#333"});
        });

		$("#circleBottom3").hover(function(){
        		$("#circleBottom3").css({ background: "#e61f2b"});
        	}, function(){
        		if(opened3 == false) $("#circleBottom3").css({ background: "#333"});
        });


		$("#circleTop3").click(function(){
        		if(opened3 == false) 
        		{
        			$("#product3").slideDown();
        			$("#circleTop3").css({ background: "#00bcd4"});
        			$("#circleBottom3").css({ background: "#e61f2b"});
        			opened3=true;
        		}
        		else 
        		{
        			$("#product3").slideUp(); 
        			$("#circleTop3").css({ background: "#333"});
        			$("#circleBottom3").css({ background: "#333"});
        			opened3=false;
        		}
    	});
    	$("#circleBottom3").click(function(){
        		if(opened3 == false) 
        		{
        			$("#product3").slideDown();
        			$("#circleTop3").css({ background: "#00bcd4"});
        			$("#circleBottom3").css({ background: "#e61f2b"});
        			opened3=true;
        		}
        		else 
        		{
        			$("#product3").slideUp(); 
        			$("#circleTop3").css({ background: "#333"});
        			$("#circleBottom3").css({ background: "#333"});
        			opened3=false;
        		}
    	});
       /////////////////////////////////////////////////////////////////////
       $("#circleTop4").hover(function(){
        		$("#circleTop4").css({ background: "#00bcd4"});
        	}, function(){
        		if(opened4 == false) $("#circleTop4").css({ background: "#333"});
        });

		$("#circleBottom4").hover(function(){
        		$("#circleBottom4").css({ background: "#e61f2b"});
        	}, function(){
        		if(opened4 == false) $("#circleBottom4").css({ background: "#333"});
        });


		$("#circleTop4").click(function(){
        		if(opened4 == false) 
        		{
        			$("#product4").slideDown();
        			$("#circleTop4").css({ background: "#00bcd4"});
        			$("#circleBottom4").css({ background: "#e61f2b"});
        			opened4=true;
        		}
        		else 
        		{
        			$("#product4").slideUp(); 
        			$("#circleTop4").css({ background: "#333"});
        			$("#circleBottom4").css({ background: "#333"});
        			opened4=false;
        		}
    	});
    	$("#circleBottom4").click(function(){
        		if(opened4 == false) 
        		{
        			$("#product4").slideDown();
        			$("#circleTop4").css({ background: "#00bcd4"});
        			$("#circleBottom4").css({ background: "#e61f2b"});
        			opened4=true;
        		}
        		else 
        		{
        			$("#product4").slideUp(); 
        			$("#circleTop4").css({ background: "#333"});
        			$("#circleBottom4").css({ background: "#333"});
        			opened4=false;
        		}
    	});
      //////////////////////////////////////////////////////////////////
        $("#circleTop5").hover(function(){
        		$("#circleTop5").css({ background: "#00bcd4"});
        	}, function(){
        		if(opened5 == false) $("#circleTop5").css({ background: "#333"});
        });

		$("#circleBottom5").hover(function(){
        		$("#circleBottom5").css({ background: "#e61f2b"});
        	}, function(){
        		if(opened5 == false) $("#circleBottom5").css({ background: "#333"});
        });


		$("#circleTop5").click(function(){
        		if(opened5 == false) 
        		{
        			$("#product5").slideDown();
        			$("#circleTop5").css({ background: "#00bcd4"});
        			$("#circleBottom5").css({ background: "#e61f2b"});
        			opened5=true;
        		}
        		else 
        		{
        			$("#product5").slideUp(); 
        			$("#circleTop5").css({ background: "#333"});
        			$("#circleBottom5").css({ background: "#333"});
        			opened5=false;
        		}
    	});
    	$("#circleBottom5").click(function(){
        		if(opened5 == false) 
        		{
        			$("#product5").slideDown();
        			$("#circleTop5").css({ background: "#00bcd4"});
        			$("#circleBottom5").css({ background: "#e61f2b"});
        			opened5=true;
        		}
        		else 
        		{
        			$("#product5").slideUp(); 
        			$("#circleTop5").css({ background: "#333"});
        			$("#circleBottom5").css({ background: "#333"});
        			opened5=false;
        		}
    	});



		/*Products*/
		var openedRapidList = [false, false, false,false, false, false];
		$(".product-details-section").slideUp();
/*
		$(".product-section .col-md-11").click(function(e){
					var target = $(e.target);
					if(target.is("#rapid1") )
        				{
        					if(!openedRapidList[0]){
        						$("#rapidList").slideDown();
        						openedRapidList[0] = true;
        					}else{
        						$("#rapidList").slideUp();
        						openedRapidList[0] = false;
        					}
        				}
        			if(target.is("#rapid2") )
        				{
        					if(!openedRapidList[1]){
        						$("#infectiousList").slideDown();
        						openedRapidList[1] = true;
        					}else{
        						$("#infectiousList").slideUp();
        						openedRapidList[1] = false;
        					}
        				}

					if(target.is("#rapid3") )
        				{
        					if(!openedRapidList[2]){
        						$("#drugList").slideDown();
        						openedRapidList[2] = true;
        					}else{
        						$("#drugList").slideUp();
        						openedRapidList[2] = false;
        					}
        				}	


					if(target.is("#rapid4") )
        				{
        					if(!openedRapidList[3]){
        						$("#cardiacList").slideDown();
        						openedRapidList[3] = true;
        					}else{
        						$("#cardiacList").slideUp();
        						openedRapidList[3] = false;
        					}
        				}	

        			if(target.is("#rapid5") )
        				{
        					if(!openedRapidList[4]){
        						$("#tumorList").slideDown();
        						openedRapidList[4] = true;
        					}else{
        						$("#tumorList").slideUp();
        						openedRapidList[4] = false;
        					}
        				}
					if(target.is("#rapid6") )
        				{
        					if(!openedRapidList[4]){
        						$("#miscellaneousList").slideDown();
        						openedRapidList[4] = true;
        					}else{
        						$("#miscellaneousList").slideUp();
        						openedRapidList[4] = false;
        					}
        				}
        			});
*/
		var openedELISAList = [false, false, false,false];
		$(".elisa-details-section").slideUp();

		/*$(".product-section .col-md-11").click(function(e){
					var target = $(e.target);
					if(target.is("#elisa1") )
        				{
        					if(!openedELISAList[0]){
        						$("#ELISAList1").slideDown();
        						openedELISAList[0] = true;
        					}else{
        						$("#ELISAList1").slideUp();
        						openedELISAList[0] = false;
        					}
        				}
        			if(target.is("#elisa2") )
        				{
        					if(!openedELISAList[1]){
        						$("#ELISAList2").slideDown();
        						openedELISAList[1] = true;
        					}else{
        						$("#ELISAList2").slideUp();
        						openedELISAList[1] = false;
        					}
        				}

					if(target.is("#elisa3") )
        				{
        					if(!openedELISAList[2]){
        						$("#ELISAList3").slideDown();
        						openedELISAList[2] = true;
        					}else{
        						$("#ELISAList3").slideUp();
        						openedELISAList[2] = false;
        					}
        				}	


					if(target.is("#elisa4") )
        				{
        					if(!openedELISAList[3]){
        						$("#ELISAList4").slideDown();
        						openedELISAList[3] = true;
        					}else{
        						$("#ELISAList4").slideUp();
        						openedELISAList[3] = false;
        					}
        				}	

        		
        			});
*/

});
}());