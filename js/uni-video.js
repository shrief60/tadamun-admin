;(function () {
	
	'use strict';


var openAnimation = function() {

		var explore = $('#home_ID1');

				setTimeout(function() {
						explore.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeIn animated');

							

							},  k * 400, 'easeInOutExpo' );

							
						});
					}, 200);
					
					
						

	};


	var homeAnimate = function() {
		if ( $('#loader').length > 0 ) {	

			$('#loader').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						$('#loader .to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeIn animated');

							},  k * 5000, 'easeInOutExpo' );
							
						});


					}, 10);
				setTimeout(function() {
					$('#loader .to-animate-2').each(function( ka ) {
								var ele = $(this);
							
								setTimeout ( function () {
									ele.addClass('fadeIn animated');
									setTimeout ( function () {
										ele.removeClass('fadeIn animated');
										ele.addClass('fadeOut');
							
										},   2000, 'easeInOutExpo' );

								},  ka * 1400, 'easeInOutExpo' );
								
								
							
							});

					},4000);
				
				setTimeout(function() {
						$('#loader .to-animate-3').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeIn animated');

							},  k * 1400, 'easeInOutExpo' );
							
						});


					}, 7000);

					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};


		function linePage(){

			var splitMe = $('.sentence');

			splitMe.each(function(index){

				var text = $(this).html();
				var output = '';

				//split all letters into spans
				for (var i = 0, len = text.length; i < len; i++) {
				  
				  	output += '<span data-index="'+i+'">' + text[i] + '</span>';
					
				}

				//put it in the html
				$(this).html(output);

				//check the offset of each letter to figure out where the line breaks
				var prev = 0;
				var parts = [];
				$(this).find('span').each(function(i){
					if ($(this).offset().top > prev){
						parts.push(i);
						prev = $(this).offset().top;
					}
				})

				parts.push(text.length);

				//create final 
				var finalOutput = ''

				parts.forEach(function(endPoint, i){
					if (endPoint > 0){
						finalOutput += '<span data-line="'+i+'" class="line-wrap"><span class="line-inner">' + text.substring(parts[i-1],parts[i]) + '</span></span>';
					}
				})

				$(this).html(finalOutput);
				$(this).addClass("lined");

			})

		}

		function cycleText(){

			setTimeout(function(){
				$('.sentence').toggleClass('sentence--show');
			}, 4000)

			setTimeout(function(){
				$('.sentence').toggleClass('sentence--show'); 
			},3000)

		}


		function linePage3(){

			var splitMe = $('.sentence3');

			splitMe.each(function(index){

				var text = $(this).html();
				var output = '';

				//split all letters into spans
				for (var i = 0, len = text.length; i < len; i++) {
				  
				  	output += '<span data-index="'+i+'">' + text[i] + '</span>';
					
				}

				//put it in the html
				$(this).html(output);

				//check the offset of each letter to figure out where the line breaks
				var prev = 0;
				var parts = [];
				$(this).find('span').each(function(i){
					if ($(this).offset().top > prev){
						parts.push(i);
						prev = $(this).offset().top;
					}
				})

				parts.push(text.length);

				//create final 
				var finalOutput = ''

				parts.forEach(function(endPoint, i){
					if (endPoint > 0){
						finalOutput += '<span data-line="'+i+'" class="line-wrap"><span class="line-inner">' + text.substring(parts[i-1],parts[i]) + '</span></span>';
					}
				})

				$(this).html(finalOutput);
				$(this).addClass("lined");

			})

		}

		function cycleText3(){

			setTimeout(function(){
				$('.sentence3').toggleClass('sentence--show');
			}, 11000)

			setTimeout(function(){
				$('.sentence3').toggleClass('sentence--show'); 
			},13000)

		}


	// Document on load.
	$(function(){



		var isMobile = false; //initiate as false
		// device detection
		if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    	|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;


		homeAnimate();
	 

		linePage();
		cycleText();

		linePage3();
		cycleText3();
	
		//$('#letsID1').slideUp("slow");;
		//$('#letsID2').slideUp("slow");;
		
		setTimeout(function(){
			$('body').addClass('loaded');
			$('h1').css('color','#eee');
			/*openAnimation();
			setTimeout(function(){
				$('#clientsID').slideUp("slow");
				$('#letsID1').slideDown(500, function(){
					$('#letsID2').slideDown(500);
				});

			},4000);	*/	 
		}, 13200); //13200
		



		var owl = jQuery('.owl-carousel');
			owl.owlCarousel({
			    items:2,
			    loop:true,
			    margin:10,
			    autoplay:true,
			    autoplayTimeout:2000,
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
		

		$("#start-btn").hover(function(){
			
			$(".customer-container").animate({opacity: "0"}, 200,function(){
				$(".lets-box").css('display', 'block');
				$(".customer-container").css('display','none');
				
			});
			

		},function(){
			$(".lets-box").css('display', 'none');
			
			$(".customer-container").animate({opacity: "1"}, 200,function(){
				$(".customer-container").css('display','block');
				
			});
		} );


		//---------------------------------Tadamun Case Study
		$('#tad_case_btn').click(function(){
				$("#tad_case_btn").addClass('button-expand');
				$("#tad_case_txt").css('display', 'block');
				$("#tad_close_btn").css('opacity', '.8');
		});

		$('#tad_case_a').click(function(){
				$("#tad_case_btn").addClass('button-expand');
				$("#tad_case_txt").css('display', 'block');
				$("#tad_close_btn").css('opacity', '.8');
		});

		$('#tad_close_btn').click(function(){
 			$("#tad_case_txt").css('display', 'none');
			$("#tad_case_btn").removeClass('button-expand');
			$("#tad_close_btn").css('opacity', '0');
		});


		//-----------------------------------MTBI Case Study
		$('#mtbi_case_btn').click(function(){
				$("#mtbi_case_btn").addClass('button-expand');
				$("#mtbi_case_txt").css('display', 'block');
				$("#mtbi_close_btn").css('opacity', '.8');
		});

		$('#mtbi_case_a').click(function(){
				$("#mtbi_case_btn").addClass('button-expand');
				$("#mtbi_case_txt").css('display', 'block');
				$("#mtbi_close_btn").css('opacity', '.8');
		});

		$('#mtbi_close_btn').click(function(){
 			$("#mtbi_case_txt").css('display', 'none');
			$("#mtbi_case_btn").removeClass('button-expand');
			$("#mtbi_close_btn").css('opacity', '0');
		});


		//----------------------------Face Detection Case Study
		$('#face_case_btn').click(function(){
				$("#face_case_btn").addClass('button-expand');
				$("#face_case_txt").css('display', 'block');
				$("#face_close_btn").css('opacity', '.8');
		});

		$('#face_case_a').click(function(){
				$("#face_case_btn").addClass('button-expand');
				$("#face_case_txt").css('display', 'block');
				$("#face_close_btn").css('opacity', '.8');
		});

		$('#face_close_btn').click(function(){
 			$("#face_case_txt").css('display', 'none');
			$("#face_case_btn").removeClass('button-expand');
			$("#face_close_btn").css('opacity', '0');
		});



		//----------------------------Soccer Case Study
		$('#soccer_case_btn').click(function(){
				$("#soccer_case_btn").addClass('button-expand');
				$("#soccer_case_txt").css('display', 'block');
				$("#soccer_close_btn").css('opacity', '.8');
		});

		$('#soccer_case_a').click(function(){
				$("#soccer_case_btn").addClass('button-expand');
				$("#soccer_case_txt").css('display', 'block');
				$("#soccer_close_btn").css('opacity', '.8');
		});

		$('#soccer_close_btn').click(function(){
 			$("#soccer_case_txt").css('display', 'none');
			$("#soccer_case_btn").removeClass('button-expand');
			$("#soccer_close_btn").css('opacity', '0');
		});



		//----------------------------Bionostix Case Study
		$('#bionostix_case_btn').click(function(){
				$("#bionostix_case_btn").addClass('button-expand');
				$("#bionostix_case_txt").css('display', 'block');
				$("#bionostix_close_btn").css('opacity', '.8');
		});

		$('#bionostix_case_a').click(function(){
				$("#bionostix_case_btn").addClass('button-expand');
				$("#bionostix_case_txt").css('display', 'block');
				$("#bionostix_close_btn").css('opacity', '.8');
		});

		$('#bionostix_close_btn').click(function(){
 			$("#bionostix_case_txt").css('display', 'none');
			$("#bionostix_case_btn").removeClass('button-expand');
			$("#bionostix_close_btn").css('opacity', '0');
		});

		//----------------------------Itcan Case Study
		$('#itcan_case_btn').click(function(){
				$("#itcan_case_btn").addClass('button-expand');
				$("#itcan_case_txt").css('display', 'block');
				$("#itcan_close_btn").css('opacity', '.8');
		});

		$('#itcan_case_a').click(function(){
				$("#itcan_case_btn").addClass('button-expand');
				$("#itcan_case_txt").css('display', 'block');
				$("#itcan_close_btn").css('opacity', '.8');
		});

		$('#itcan_close_btn').click(function(){
 			$("#itcan_case_txt").css('display', 'none');
			$("#itcan_case_btn").removeClass('button-expand');
			$("#itcan_close_btn").css('opacity', '0');
		});

		$("#proj1_id").hover(function(){
			$(".navbar-brand").css('color', '#fff');

		},function(){
			$(".navbar-brand").css('color', '#333');

		} );


	});


}());