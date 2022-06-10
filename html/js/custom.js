/*
* File Name: Helper Js file
* File Author: Design Arc
* File Description: This is helper javascript file. Used for activating js plugins and Other javascript effects adding. Thanks
*/


/*-------------------------------------
--------- TABLE OF CONTENT ------------
---------------------------------------

SmoothMenuScroll
hiddenBarMenuConfig
customScrollBarHiddenSidebar
hiddenBarToggler
handlePreloader
Mobile Navigation
stickyHeader
Vertical slider
Testimonial slider
Room Suite slider
welcome four box slider
zebraDatePickerInit 
GalleryFilter
Family Fun Gallery
fancyboxInit
singleroomslider
counter number changer
Testimonial slider
full width home two slider
Room Suite slider
Select drop down

----------------------------------------
--------------------------------------*/

(function($) {
    "use strict";

	function bootstrapAnimatedLayer() {

		/* Demo Scripts for Bootstrap Carousel and Animate.css article
		 * on SitePoint by Maria Antonietta Perna
		 */

		if ($('#enquiry').length) {
			$('#enquiry').load(function(){
				console.log('sss');
				$('.tempHeadBdr.formRelative').hide();
				$('.brandingTextCont').hide();
			});
		}


		//Function to animate slider captions 
		function doAnimations(elems) {
			//Cache the animationend event in a variable
			var animEndEv = 'webkitAnimationEnd animationend';

			elems.each(function() {
				var $this = $(this),
					$animationType = $this.data('animation');
				$this.addClass($animationType).one(animEndEv, function() {
					$this.removeClass($animationType)
				})
			})
		}


		// 1.
		//Variables on page load 
		var $myCarousel = $('#minimal-bootstrap-carousel'),
			$firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");

		//Initialize carousel 
		$myCarousel.carousel({
			interval: 7000
		});

		//Animate captions in first slide on page load 
		doAnimations($firstAnimatingElems);

		//Pause carousel  
		$myCarousel.carousel('pause');


		//Other slides to be animated on carousel slide event 
		$myCarousel.on('slide.bs.carousel', function(e) {
			var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
			doAnimations($animatingElems)
		})

		// 2.
		//Variables on page load 
		var $myCarousel2 = $('#minimal-bootstrap-carousel2'),
			$firstAnimatingElems2 = $myCarousel2.find('.item:first').find("[data-animation ^= 'animated']");

		//Initialize carousel 
		$myCarousel2.carousel({
			interval: 7000
		});

		//Animate captions in first slide on page load 
		doAnimations($firstAnimatingElems2);

		//Pause carousel  
		$myCarousel2.carousel('pause');


		//Other slides to be animated on carousel slide event 
		$myCarousel2.on('slide.bs.carousel', function(e) {
			var $animatingElems2 = $(e.relatedTarget).find("[data-animation ^= 'animated']");
			doAnimations($animatingElems2)
		})

		// 3.
		//Variables on page load 
		var $myCarousel3 = $('#minimal-bootstrap-carousel3'),
			$firstAnimatingElems3 = $myCarousel3.find('.item:first').find("[data-animation ^= 'animated']");

		//Initialize carousel 
		$myCarousel3.carousel({
			interval: 7000
		});

		//Animate captions in first slide on page load 
		doAnimations($firstAnimatingElems3);

		//Pause carousel  
		$myCarousel3.carousel('pause');


		//Other slides to be animated on carousel slide event 
		$myCarousel3.on('slide.bs.carousel', function(e) {
			var $animatingElems3 = $(e.relatedTarget).find("[data-animation ^= 'animated']");
			doAnimations($animatingElems3)
		})

		// 4.
		//Variables on page load 
		var $myCarousel4 = $('#minimal-bootstrap-carousel4'),
			$firstAnimatingElems4 = $myCarousel4.find('.item:first').find("[data-animation ^= 'animated']");

		//Initialize carousel 
		$myCarousel4.carousel({
			interval: 7000
		});

		//Animate captions in first slide on page load 
		doAnimations($firstAnimatingElems4);

		//Pause carousel  
		$myCarousel4.carousel('pause');


		//Other slides to be animated on carousel slide event 
		$myCarousel4.on('slide.bs.carousel', function(e) {
			var $animatingElems4 = $(e.relatedTarget).find("[data-animation ^= 'animated']");
			doAnimations($animatingElems4)
		})

		// 5.
		//Variables on page load 
		var $myCarousel5 = $('#minimal-bootstrap-carousel5'),
			$firstAnimatingElems5 = $myCarousel5.find('.item:first').find("[data-animation ^= 'animated']");

		//Initialize carousel 
		$myCarousel5.carousel({
			interval: 7000
		});

		//Animate captions in first slide on page load 
		doAnimations($firstAnimatingElems5);

		//Pause carousel  
		$myCarousel5.carousel('pause');


		//Other slides to be animated on carousel slide event 
		$myCarousel5.on('slide.bs.carousel', function(e) {
			var $animatingElems5 = $(e.relatedTarget).find("[data-animation ^= 'animated']");
			doAnimations($animatingElems5)
		})

		// 6.
		//Variables on page load 
		var $myCarousel6 = $('#minimal-bootstrap-carousel6'),
			$firstAnimatingElems6 = $myCarousel6.find('.item:first').find("[data-animation ^= 'animated']");

		//Initialize carousel 
		$myCarousel6.carousel({
			interval: 7000
		});

		//Animate captions in first slide on page load 
		doAnimations($firstAnimatingElems6);

		//Pause carousel  
		$myCarousel6.carousel('pause');


		//Other slides to be animated on carousel slide event 
		$myCarousel6.on('slide.bs.carousel', function(e) {
			var $animatingElems6 = $(e.relatedTarget).find("[data-animation ^= 'animated']");
			doAnimations($animatingElems6)
		})

		// 7.
		//Variables on page load 
		var $myCarousel7 = $('#minimal-bootstrap-carousel7'),
			$firstAnimatingElems7 = $myCarousel7.find('.item:first').find("[data-animation ^= 'animated']");

		//Initialize carousel 
		$myCarousel7.carousel({
			interval: 7000
		});

		//Animate captions in first slide on page load 
		doAnimations($firstAnimatingElems7);

		//Pause carousel  
		$myCarousel7.carousel('pause');


		//Other slides to be animated on carousel slide event 
		$myCarousel7.on('slide.bs.carousel', function(e) {
			var $animatingElems7 = $(e.relatedTarget).find("[data-animation ^= 'animated']");
			doAnimations($animatingElems7)
		})
	}

	// 1. SmoothMenuScroll
	function SmoothMenuScroll () {
		// must install jquery easein plugin

		var anchor = $('.scrollToLink');		
		if(anchor.length){
			anchor.children('a').bind('click', function (event) {
				var target = $(this);
				var anchorHeight= target.height();
				$('html, body').stop().animate({
					scrollTop: $(target.attr('href')).offset().top - anchorHeight + 'px'
				}, 1200, 'easeInOutExpo');
				anchor.removeClass('current');
				target.parent().addClass('current');
				event.preventDefault()
			})
		}
	}

	// 2. hiddenBarMenuConfig
	function hiddenBarMenuConfig () {
		var menuWrap = $('.hidden-bar .main-menu');
		// appending expander button
		menuWrap.find('.dropdown').children('a').append(function () {
			return '<button type="button" class="btn expander"><i class="fa fa-chevron-down"></i></button>'
		});
		// hidding submenu 
		menuWrap.find('.dropdown').children('ul').hide();
		// toggling child ul
		menuWrap.find('.btn.expander').each(function () {
			$(this).on('click', function () {
				$(this).parent() // return parent of .btn.expander (a) 
					.parent() // return parent of a (li)
					.children('ul').slideToggle();

				// adding class to expander container
				$(this).parent().toggleClass('current');
				// toggling arrow of expander
				$(this).find('i').toggleClass('fa-chevron-up fa-chevron-down');			

				return false

			})
		})
	}
	// 3. customScrollBarHiddenSidebar
	function customScrollBarHiddenSidebar () {
		if ($('.hidden-bar-wrapper').length || $('.side-menu').length) {
			$('.hidden-bar-wrapper,.side-menu').mCustomScrollbar()
		}
	}
	// 4. hiddenBarToggler
	function hiddenBarToggler () {
		if ($('.hidden-bar-closer').length) {
			$('.hidden-bar-closer').on('click', function () {
				$('.hidden-bar').css({
					'right': '-150%'
				})
			})
		}
		if ($('.hidden-bar-opener').length) {
			$('.hidden-bar-opener').on('click', function () {
				$('.hidden-bar').css({
					'right': '0%'
				})
			})
		}
	}
	// 5. handlePreloader
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').fadeOut()
		}
	}
	// 6. Mobile Navigation
	function mobileNavToggler () {
		if ($('.nav-holder').length) {
			$('.nav-holder .nav-header button').on('click', function () {
				$('.nav-holder .nav-footer').slideToggle();
				return false
			});
			$('.nav-holder li.has-submenu').children('a').append(function () {
				return '<button class="dropdown-expander"><i class="fa fa-chevron-down"></i></button>'
			});
			$('.nav-holder .nav-footer .dropdown-expander').on('click', function () {
				$(this).parent().parent().children('.submenu').slideToggle();
				console.log($(this).parents('li'));
				return false
			})
		}
	}
	// 7. stickyHeader
	function stickyHeader () {
		if ($('.stricky').length) {
			var strickyScrollPos = 100;
			if($(window).scrollTop() > strickyScrollPos) {
				$('.stricky').removeClass('fadeIn animated');
				$('.stricky').addClass('stricky-fixed fadeInDown animated')
			}
			else if($(window).scrollTop() <= strickyScrollPos) {
				$('.stricky').removeClass('stricky-fixed fadeInDown animated');
				$('.stricky').addClass('slideIn animated')
			}
		}
	}


	// 8. Vertical slider
	var slidertestimonial = $('.bxslider');
	try{
		slidertestimonial.bxSlider({
			mode: 'vertical',
            auto: true,
            pause: 2000           
           
		})
	} catch(err) {}

	// 9. Testimonial slider	
	$('.testimonial-sliders').owlCarousel({
        loop: true,
   		autoplay:true,
        margin:30,
        items:2,
        //nav: true,
        //navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsiveClass:true,
        autoplayTimeout:3000,
		autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            992:{
                items:2
            }            
        }
    });
	
	// 10. Room Suite slider
	function roomsuiteslider (){
		$('.roomsuite-slider').owlCarousel({
			loop:true,
			margin:30,
			items:3,
			 dots:false,
			nav: true,
			navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
			responsiveClass:true,
			responsive:{
				0:{
					items:1
				},
				481:{
					items:2
				},
				700:{
					items:2
				},
				992:{
					items:3
				}
			}
		}) 
	}
 
	// 12. zebraDatePickerInit 
	function zebraDatePickerInit () {
		$('.datepicker-example8').Zebra_DatePicker({
			 format: 'M d, Y'
		})
	}
	
	// 13. GalleryFilter
	function GalleryFilter () {
		if ($('.image-gallery').length) {
			if ( $('.image-gallery').hasClass('ntracing-images') ){

				var tracing_images = $('.ntracing-images');

				tracing_images.imagesLoaded(function(){
					tracing_images.isotope({
						// options
						itemSelector: '.single-gallery',
						layoutMode: 'masonry',
						masonry: {
							columnWidth: 1
						}
					})
				})			

			}else{
				$('.image-gallery').each(function () {
					var filterSelector = $(this).data('filter-class');
					var showItemOnLoad = $(this).data('show-on-load');
					if (showItemOnLoad) {
						$(this).mixItUp({
							load: {
								filter: '.'+showItemOnLoad
							},
							selectors: {
								filter: '.'+filterSelector
							}
						})	
					};
					$(this).mixItUp({
						selectors: {
							filter: '.'+filterSelector
						}
					})
				})
			}
		}
	}

	// 14. Family Fun Gallery
	function projectMasonry(){
        if ( $('#projects').length ){
            $('#projects').imagesLoaded( function() {
              // images have loaded
                      // Activate isotope in container
                $("#projects").isotope({
                    itemSelector: ".project",
                    layoutMode: 'masonry',
                    masonry: {
                        columnWidth: '.grid-sizer'
                    }
                });

                // Add isotope click function
                $(".project_filter li").on('click',function(){
                    $(".project_filter li").removeClass("active");
                    $(this).addClass("active");

                    var selector = $(this).attr("data-filter");
                    $("#projects").isotope({
                        filter: selector
                    })
                })
            })
        }
    }


	// 15. fancyboxInit
	function fancyboxInit () {
		if ($('a.fancybox').length) {
			$('a.fancybox').fancybox()
		}
	}

	// 16. singleroomslider

	function singleroomslider (){
		$('.single-sl-room').owlCarousel({
			items:1,
			loop:false,
			center:true,
			nav: true,
			navText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
			dots:false,        
			URLhashListener:true,
			autoplayHoverPause:true,
			startPosition: 'URLHash'
		})
	}

	// 17. counter number changer
	function CounterNumberChanger () {
		var timer = $('.timer');
		if(timer.length) {
			timer.countTo({
                speed: 3000,
                refreshInterval: 50
			});	
		}
	}

	// 18. Testimonial slider	
	$('.testimonial-sliders-two').owlCarousel({
		loop: true,
		autoplay:true,
		margin:30,
		items:1,
		//nav: true,
		//navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		responsiveClass:true,
		autoplayTimeout:3000,
		autoplayHoverPause:true        
	});


	// 19. full width home two slider

	function fullwidthslider (){
		$('.fullwidth-slider').owlCarousel({
			loop:true,
			margin:30,
			items:5,
			 dots:false,
			nav: true,
			navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
			responsiveClass:true,
			responsive:{
				0:{
					items:1
				},
				481:{
					items:2
				},
				700:{
					items:2
				},
				992:{
					items:5
				}
			}
		})   
	}
	
	// 20. Room Suite slider
	function roomsuitesliderhometwo (){
		$('.roomsuite-slider-two').owlCarousel({
			loop:true,
			margin:30,
			items:4,
			 dots:false,
			nav: true,
			navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
			responsiveClass:true,
			responsive:{
				0:{
					items:1
				},
				481:{
					items:2
				},
				700:{
					items:2
				},
				992:{
					items:4
				}
			}
		})   
	}
	
	// 21. Select drop down
	function selectMenu() {
		if ($('.select-menu').length) $('.select-menu').selectmenu()
	}


	singleroomslider();
	roomsuiteslider();
	zebraDatePickerInit();
	hiddenBarMenuConfig();
	hiddenBarToggler();
	//DeadMenuConfig();
	GalleryFilter();
	fancyboxInit();
	CounterNumberChanger();
	fullwidthslider();
	roomsuitesliderhometwo();
	mobileNavToggler();
	selectMenu();
	projectMasonry();

	/*Home Slider*/
	bootstrapAnimatedLayer();


	if ( $('.nasir-home-slider').length ){
		$('.nasir-home-slider').each(function(){
			$('.nasir-home-slider').owlCarousel({
				items: 1,
				margin: 0,
				autoplay: 1,
				nav: false,
				dots: false
			})
		})
	}

	if ( $('a[data-imagelightbox]').length ){
		$('a[data-imagelightbox]').imageLightbox({
			activity: true,
			arrows: true,
			button: true,
			overlay: true,
			quitOnDocClick: false,
			selector: 'a[data-imagelightbox]'
		})
	}
		
	// instance of fuction while Window Load event
	$(window).on('load', function () {
		SmoothMenuScroll();
		customScrollBarHiddenSidebar();
		handlePreloader()
	});
	
	// instance of fuction while Window Scroll event
	$(window).on('scroll', function () {	
		stickyHeader()
	})

   
})(jQuery)