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

		$('body').on('click', '.ym-nav-toggle', function(event){

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

		$('#section04 a:not([class="external"])').click(function(event){
			var section = $(this).data('nav-section'),
				navbar = $('#section04');

				if ( $('[data-section="' + section + '"]').length ) {
			    	$('html, body').animate({
			        	scrollTop: $('[data-section="' + section + '"]').offset().top + 20
			    	}, 500);
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





	var homeSectionAnimate = function() {

		var explore = $('#home-sec');
		if ( explore.length > 0 ) {	

			explore.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					$(".ym-nav-toggle strong").css("color", "#333");

					setTimeout(function() {
						explore.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});

						$(".orange-header").addClass("active");
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
							

							},  k * 400, 'easeInOutExpo' );

							
						});
					}, 700);
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};


	var aboutSectionAnimation = function() {

		var explore = $('.about-1');
		if ( explore.length > 0 ) {	

			explore.waypoint( function( direction ) {
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					setTimeout(function() {
						$('.about-1 .text').addClass("active");
					}, 200);

					setTimeout(function() {
						explore.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInLeft animated');
							},  k * 600, 'easeInOutExpo' );
							
						});

					}, 200);


						setTimeout(function() {
						explore.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 300, 'easeInOutExpo' );
							
						});

					}, 500);

					setTimeout(function() {
						explore.find('.to-animate-3').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInRight animated');
							},  k * 300, 'easeInOutExpo' );
							
						});

					}, 500);

				$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}


		//Section 2 ---
		var explore2 = $('.about-2');
		if ( explore2.length > 0 ) {	

			explore2.waypoint( function( direction ) {
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

				setTimeout(function() {
					explore2.addClass("active");
				}, 700);
					setTimeout(function() {
						explore2.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInLeft animated');
							},  k * 600, 'easeInOutExpo' );
							
						});
						
						
					
					}, 200);


					setTimeout(function() {
						explore2.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 300, 'easeInOutExpo' );
							
						});

					}, 500);

					setTimeout(function() {
						explore2.find('.to-animate-3').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInRight animated');
							},  k * 300, 'easeInOutExpo' );
							
						});

					}, 500);

				$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}



		//Section 3 ---
		var explore3 = $('.about-3');
		if ( explore3.length > 0 ) {	
			
			explore3.waypoint( function( direction ) {
			
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

				setTimeout(function() {
					explore3.addClass("active");
				}, 700);
					setTimeout(function() {
						explore3.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInLeft animated');
							},  k * 600, 'easeInOutExpo' );
							
						});
						
						
					
					}, 200);


					setTimeout(function() {
						explore3.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 300, 'easeInOutExpo' );
							
						});

					}, 300);

					setTimeout(function() {
						explore3.find('.to-animate-3').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInRight animated');
							},  k * 300, 'easeInOutExpo' );
							
						});

					}, 300);

				$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}

	};


var serviceSectionAnimation = function() {

		var explore = $('#services-sec');
		if ( explore.length > 0 ) {	
	

			explore.waypoint( function( direction ) {
				if( direction === 'down') 
				
					
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
				$(".arrow-head-2").addClass("active");
				
				setTimeout(function() {
						$('#services-sec .text').addClass("active");
						$('.bg-horz-bar').addClass("active");
						$('#services-sec .left-part-arrow ').addClass("active");
						
					}, 1200);
				

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
			} , { offset: '60%' } );

		}
	};


	var branchesSectionAnimate = function() {
		var testimony = $('#branches-sec');
		if ( testimony.length > 0 ) {	

			testimony.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					
					setTimeout(function() {
						$('#branches-sec .header-text').addClass("active");
					}, 1000);
						
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
								el.addClass('bounceIn animated');
							

							},  k * 800, 'easeInOutExpo' );

							
						});
					}, 2000);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};


	var gettingStartedAnimate = function() {
		var started = $('#news-sec-02');
		if ( started.length > 0 ) {	

			started.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					$(".arrow-head-2").addClass("active");
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
			} , { offset: '120%' } );

		}
	};

	var newsSectionAtHomeAnimate = function() {
		var started = $('#news-sec');
		if ( started.length > 0 ) {	

			started.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					setTimeout(function() {
						$("#news-sec .news-container").addClass("active");
					},400);	

					setTimeout(function() {
						$("#news-sec .high-news").addClass("active");
					},600);	

									
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

	var footerAnimate = function() {
		var pricing = $('#footer-sec');
		if ( pricing.length > 0 ) {	

			pricing.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					setTimeout(function() {
						$(".signature").addClass("active");
					} , 500);

					setTimeout(function() {
						pricing.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInRight animated');
							},  k * 100, 'easeInOutExpo' );
							
						});
					}, 20);

					setTimeout(function() {
						pricing.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInLeft animated');
							},  k * 100, 'easeInOutExpo' );
							
						});
					}, 100);

					


					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};


	var servicesAnimate = function() {
		var services = $('#about');
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


	var section1_aboutPage = function() {
		var team = $('#aman-about-home');
		if ( team.length > 0 ) {	

			team.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

						setTimeout(function() {
						team.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInRight animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 400);

					setTimeout(function() {
						team.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('slideInRight animated');
							},  k * 100, 'easeInOutExpo' );
							
						});
					}, 200);

					
						setTimeout(function() {
						team.find('.to-animate-3').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							

							},  k * 500, 'easeInOutExpo' );

							
						});
					}, 800);

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




	var section2_aboutPage = function(nameSection) {
		var team = $(nameSection);
		if ( team.length > 0 ) {	

			team.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


						setTimeout(function() {
						team.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInLeft animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 400);

					setTimeout(function() {
						team.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('slideInRight animated');
							},  k * 100, 'easeInOutExpo' );
							
						});
					}, 200);

					
						setTimeout(function() {
						team.find('.to-animate-3').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							

							},  k * 500, 'easeInOutExpo' );

							
						});
					}, 800);

				if(nameSection == "#about-page-s3 .s4"){
					setTimeout(function() {
						$("#about-page-s3 .s4").addClass('active');
					}, 300 );
				}

				if(nameSection == "#about-page-s4 .sec-4"){
					setTimeout(function() {
						$("#tab-3 h3").addClass('slideInRight animated');
						
					}, 800 ,'easeInOutExpo' );

					setTimeout(function() {
						$("#about-page-s4 .triangle-above").addClass('active');
					}, 1500 );
					setTimeout(function() {
						$("#about-page-s4 .right-corner").addClass('active');
					}, 900 );
					setTimeout(function() {
						$("#about-page-s4 .left-corner").addClass('active');
					}, 2400 );
				}
				if(nameSection == ".techno-sec"){
					setTimeout(function() {
						$(".techno-sec").addClass('active');
						
					}, 1800 ,'easeInOutExpo' );
				}
				if(nameSection == "#about-page-s5"){
					setTimeout(function() {
						$("#about-page-s5").addClass('active');
						
					}, 200 ,'easeInOutExpo' );
				}

				
					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '60%' } );

		}
	};


	var section2_aboutPage_waypointless = function(nameSection) {
		var team = $(nameSection);
		if ( team.length > 0 ) {	

			team.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


						setTimeout(function() {
						team.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInLeft animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 400);

					setTimeout(function() {
						team.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('slideInRight animated');
							},  k * 100, 'easeInOutExpo' );
							
						});
					}, 200);

					
						setTimeout(function() {
						team.find('.to-animate-3').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							

							},  k * 500, 'easeInOutExpo' );

							
						});
					}, 800);

				if(nameSection == "#about-page-s3 .s4"){
					setTimeout(function() {
						$("#about-page-s3 .s4").addClass('active');
					}, 300 );
				}

				if(nameSection == "#about-page-s4 .sec-4"){
					setTimeout(function() {
						$("#tab-3 h3").addClass('slideInRight animated');
						
					}, 800 ,'easeInOutExpo' );

					setTimeout(function() {
						$("#about-page-s4 .triangle-above").addClass('active');
					}, 1500 );
					setTimeout(function() {
						$("#about-page-s4 .right-corner").addClass('active');
					}, 900 );
					setTimeout(function() {
						$("#about-page-s4 .left-corner").addClass('active');
					}, 2400 );
				}

				


				
					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '20%' } );

		}
	};

	var whitesection_aboutPage = function() {
		var testimony = $('#white-section');
		if ( testimony.length > 0 ) {	

			testimony.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					$(".arrow-head-2").addClass("active");
					setTimeout(function() {
						$("#about-page-s3 .s1").addClass('active');
					}, 300 );
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
			} , { offset: '70%' } );

		}
	};

	var whitesection2_aboutPage = function() {
		var testimony = $('.img-row');
		if ( testimony.length > 0 ) {	

			testimony.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					
					setTimeout(function() {
						$(".img-row").addClass("active");
					}, 900 );
					

						setTimeout(function() {
						testimony.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInLeft animated');
							

							},  k * 500, 'easeInOutExpo' );

							
						});
					}, 200);

				

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '70%' } );

		}
	};

	
	var servicesPage = function(sectionName) {
		var faq = $(sectionName);
		if ( faq.length > 0 ) {	

			faq.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
				setTimeout ( function () {
				 $(sectionName).addClass('active');
						}, 200);
					setTimeout(function() {
						faq.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('slideInRight animated');
							},  k * 900, 'easeInOutExpo' );
							
						});
					}, 300);

					setTimeout(function() {
						faq.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('bounceIn animated');
							},  k * 800, 'easeInOutExpo' );
							
						});
					}, 200);

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

	var services2Page = function(sectionName) {
		var faq = $(sectionName);
		if ( faq.length > 0 ) {	

			faq.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
				setTimeout ( function () {
				 $(sectionName).addClass('active');
						}, 300);
					setTimeout(function() {
						faq.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInLeft animated');
							},  k * 900, 'easeInOutExpo' );
							
						});
					}, 300);

					setTimeout(function() {
						faq.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('bounceIn animated');
							},  k * 800, 'easeInOutExpo' );
							
						});
					}, 300);

						setTimeout(function() {
						faq.find('.to-animate-3').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInRight animated');
							},  k * 500, 'easeInOutExpo' );
							
						});
					}, 400);

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


	var footer_Animate = function() {
		var footer = $('#contactus');
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

	var newsPage = function() {
		var footer = $('.news-home');
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

					setTimeout(function() {
						footer.find('.to-animate-2').each(function( k ) {
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

		
	// Document on load.
	$(function(){

		parallax();
		burgerMenu();
		clickMenu();
		windowScroll();
		navigationSection();
		testimonialCarousel();
		
		// Animations
		homeSectionAnimate();
		aboutSectionAnimation();
		serviceSectionAnimation();




		branchesSectionAnimate();
		newsSectionAtHomeAnimate();

		section1_aboutPage();
		section2_aboutPage("#about-page-s2");
		
		section2_aboutPage("#about-page-s3 .left-tab");
		section2_aboutPage("#about-page-s3 .s1");
		whitesection_aboutPage();
		section2_aboutPage("#about-page-s3 .s4");
		section2_aboutPage_waypointless("#about-page-s4 .sec-4");
		whitesection2_aboutPage();
		section2_aboutPage(".techno-sec");
		section2_aboutPage("#about-page-s5");
		servicesPage("#sec1-1");
		services2Page("#sec1-2");
		servicesPage("#sec1-3");
		servicesPage("#sec1-4");
		servicesPage(".last-section");
		servicesPage("#services-sec2");
		newsPage();
		
		
		footerAnimate();
		




		var movementStrength = 25;
		var height = movementStrength / $(window).height();
		var width = movementStrength / $(window).width();
		$("#top-image-hover").mousemove(function(e){
          var pageX = e.pageX - ($(window).width() / 2);
          var pageY = e.pageY - ($(window).height() / 2);
          var newvalueX = width * pageX * -1 - 25;
          var newvalueY = height * pageY * -1 - 50;
          $('#top-image').css("background-position", newvalueX+"px     "+newvalueY+"px");
		});




		$("#section04").click(function(){
		$('html, body').animate({
			scrollTop: $('[data-section="' + "ytg-about" + '"]').offset().top + 20
		}, 500);
	});
		
		$('.triangle-btn').click(
			function(event)
			{
				
				
				if(  $(this).parent().hasClass("active"))
				{
					$(this).parent().removeClass("active");
				}else{
					$(this).parent().addClass("active");
				}


			}
		);		


		$('.branch-head').click(
			function(event){
				var id= event.target.id;
				console.log(id);
				if( $('#'+id).hasClass("active"))
				{	$('#'+id+"-box").removeClass("active");
					$('#'+id).removeClass("active");
					$('#'+id+"-c").find('li').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.css("transform","translateY(-80px)");
								el.css("opacity","0");
							},  k * 100, 'easeInOutExpo' );
							
						});
				}
				else
				{
					$('#'+id).addClass("active");
					$('#'+id+"-box").addClass("active");
					$('#'+id+"-c").find('li').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.css("transform","translateY(0)");
								el.css("opacity","1");
							},  k * 100, 'easeInOutExpo' );
							
						});
				}	
				
			}
		);


		$('.branch-head h2').click(
			function(event){
				var id= $(this).parent().attr('id');

				if( $('#'+id).hasClass("active"))
				{
					$('#'+id+"-box").removeClass("active");
					$('#'+id).removeClass("active");
					$('#'+id+"-c").find('li').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.css("transform","translateY(-80px)");
								el.css("opacity","0");
							},  k * 100, 'easeInOutExpo' );
							
						});
				}
				else
				{
					$('#'+id).addClass("active");
					$('#'+id+"-box").addClass("active");
					$('#'+id+"-c").find('li').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.css("transform","translateY(0)");
								el.css("opacity","1");
							},  k * 100, 'easeInOutExpo' );
							
						});
				}	
				
			}
		);



		//animatedHomePageImages(0);
			var owl2 = jQuery('.owl-carousel-2');
				owl2.owlCarousel({
			    items:3,
			    loop:true,
			    margin:0,
			    rtl:true,
			    autoplay:true,
			    autoplayTimeout:4990,
			    autoplayHoverPause:false,
			    responsiveClass:true,
			    animateOut: 'fadeOut',
			    navText:['◀','▶'],
			    mouseDrag:false,
			    touchDrag:false,
			    nav:true,
			    dots: false,
			    responsive:{
			        0:{
			            items:1,
			        },
			        300:{
			            items:1,
			        },
			        1000:{
			            items:1,

			        }
			    }
			});


			var owl2 = jQuery('.owl-carousel');
			
			owl2.owlCarousel({
			    items:5,
			    loop:true,
			    margin:0,
			    rtl:true,
			    autoplay:true,
			    autoplayTimeout:4000,
			    autoplayHoverPause:true,
			    responsiveClass:true,
			    nav:false,
			    dots: true,
			    responsive:{
			        0:{
			            items:1,
			        },
			        300:{
			            items:1,
			        },
			        1000:{
			            items:1,

			        }
			    }
			});


				var owl3 = jQuery('.owl-carousel-3');
			
			owl3.owlCarousel({
			    items:3,
			    loop:true,
			    margin:0,
			    rtl:true,
			    autoplay:true,
			    autoplayTimeout:2000,
			    autoplayHoverPause:false,
			    responsiveClass:true,
			    nav:false,
			    dots: false,
			    responsive:{
			        0:{
			            items:1,
			        },
			        300:{
			            items:1,
			        },
			        1000:{
			            items:3,

			        }
			    }
			});

		

	});


}());