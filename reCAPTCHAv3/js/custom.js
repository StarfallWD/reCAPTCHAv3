/* =====================================
All JavaScript fuctions Start
======================================*/
(function ($) {
	
    'use strict';
/*--------------------------------------------------------------------------------------------
	document.ready ALL FUNCTION START
---------------------------------------------------------------------------------------------*/	

// > Video responsive function by = custom.js ========================= //	
	function video_responsive(){	
		jQuery('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
		jQuery('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');	
	}  


 // > LIGHTBOX Gallery Popup function	by = lc_lightbox.lite.js =========================== //      
 	function lightbox_popup(){
        lc_lightbox('.elem', {
            wrap_class: 'lcl_fade_oc',
            gallery : true,	
            thumb_attr: 'data-lcl-thumb', 
            
            skin: 'minimal',
            radius: 0,
            padding	: 0,
            border_w: 0,
        });
	}			

// > magnificPopup for video function	by = magnific-popup.js ===================== //	
	function magnific_video(){	
		jQuery('.mfp-video').magnificPopup({
			type: 'iframe',
		});
	}

// > Top cart list Show Hide function by = custom.js =================== //	
	function cart_block(){
	jQuery('.cart-btn').on('click', function () { 
		jQuery( ".cart-dropdown-item-wraper" ).slideToggle( "slow" );
		});  
	}	

// Vertically center Bootstrap modal popup function by = custom.js ==============//
	function popup_vertical_center(){	
		jQuery(function() {
			function reposition() {
				var modal = jQuery(this),
				dialog = modal.find('.modal-dialog');
				modal.css('display', 'block');
				
				// Dividing by two centers the modal exactly, but dividing by three 
				// or four works better for larger screens.
				dialog.css("margin-top", Math.max(0, (jQuery(window).height() - dialog.height()) / 2));
			}
			// Reposition when a modal is shown
			jQuery('.modal').on('show.bs.modal', reposition);
			// Reposition when the window is resized
			jQuery(window).on('resize', function() {
				jQuery('.modal:visible').each(reposition);
			});
		});
	}

// > Main menu sticky on top  when scroll down function by = custom.js ========== //		
	function sticky_header(){
		if(jQuery('.sticky-header').length){
			var sticky = new Waypoint.Sticky({
			  element: jQuery('.sticky-header')
			});
		}
	}

	// > Sidebar sticky  when scroll down function by = theia-sticky-sidebar.js ========== //		
	function sticky_sidebar(){		
		$('.rightSidebar')
			.theiaStickySidebar({
				additionalMarginTop: 100
		});		
	}


// > page scroll top on button click function by = custom.js ===================== //	
	function scroll_top(){
		jQuery("button.scroltop").on('click', function() {
			jQuery("html, body").animate({
				scrollTop: 0
			}, 1000);
			return false;
		});

		jQuery(window).on("scroll", function() {
			var scroll = jQuery(window).scrollTop();
			if (scroll > 900) {
				jQuery("button.scroltop").fadeIn(1000);
			} else {
				jQuery("button.scroltop").fadeOut(1000);
			}
		});
	}
	
// > input type file function by = custom.js ========================== //	 	 
	function input_type_file_form(){
		jQuery(document).on('change', '.btn-file :file', function() {
			var input = jQuery(this),
				numFiles = input.get(0).files ? input.get(0).files.length : 1,
				label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
			input.trigger('fileselect', [numFiles, label]);
		});

		jQuery('.btn-file :file').on('fileselect', function(event, numFiles, label) {
			var input = jQuery(this).parents('.input-group').find(':text'),
				log = numFiles > 10 ? numFiles + ' files selected' : label;
			if (input.length) {
				input.val(log);
			} else {
				if (log) alert(log);
			}
		});	
	}

// > input Placeholder in IE9 function by = custom.js ======================== //	
	function placeholderSupport(){
	/* input placeholder for ie9 & ie8 & ie7 */
		jQuery.support.placeholder = ('placeholder' in document.createElement('input'));
		/* input placeholder for ie9 & ie8 & ie7 end*/
		/*fix for IE7 and IE8  */
		if (!jQuery.support.placeholder) {
			jQuery("[placeholder]").on('focus', function () {
				if (jQuery(this).val() === jQuery(this).attr("placeholder")) jQuery(this).val("");
			}).blur(function () {
				if (jQuery(this).val() === "") jQuery(this).val(jQuery(this).attr("placeholder"));
			}).blur();

			jQuery("[placeholder]").parents("form").on('submit', function () {
				jQuery(this).find('[placeholder]').each(function() {
					if (jQuery(this).val() === jQuery(this).attr("placeholder")) {
						 jQuery(this).val("");
					}
				});
			});
		}
		/*fix for IE7 and IE8 end */
	}	


// > footer fixed on bottom function by = custom.js ======================== //	
	function footer_fixed() {
	  jQuery('.site-footer').css('display', 'block');
	  jQuery('.site-footer').css('height', 'auto');
	  var footerHeight = jQuery('.site-footer').outerHeight();
	  jQuery('.footer-fixed > .page-wraper').css('padding-bottom', footerHeight);
	  jQuery('.site-footer').css('height', footerHeight);
	}
	
	
// > accordion active calss function by = custom.js ========================= //	
	function accordion_active() {
		$('.acod-head a').on('click', function() {
			$('.acod-head').removeClass('acc-actives');
			$(this).parents('.acod-head').addClass('acc-actives');
			$('.acod-title').removeClass('acc-actives'); //just to make a visual sense
			$(this).parent().addClass('acc-actives'); //just to make a visual sense
			($(this).parents('.acod-head').attr('class'));
		 });
	}	

	// > Nav submenu show hide on mobile by = custom.js
	function mobile_nav(){
		jQuery(".sub-menu").parent('li').addClass('has-child');
		jQuery("<div class='fa fa-angle-right submenu-toogle'></div>").insertAfter(".has-child > a");

		jQuery('.has-child a+.submenu-toogle').on('click',function(ev) {

			jQuery(this).parent().siblings(".has-child ").children(".sub-menu").slideUp(500, function(){
				jQuery(this).parent().removeClass('nav-active');
			});

			jQuery(this).next(jQuery('.sub-menu')).slideToggle(500, function(){
				jQuery(this).parent().toggleClass('nav-active');
			});

			ev.stopPropagation();
		});
	
	}
	

	//minus header height in slider function by = custom.js ========== //	

	function minus_header_height(){		
		var desiredHeight = jQuery(window).height() - jQuery('.header-style-2').height(); 
			jQuery(".twm-slider1-wrap").css("height", desiredHeight );	
	}	

	 
	// Mobile side drawer function by = custom.js
	function mobile_side_drawer(){
		jQuery('#mobile-side-drawer').on('click', function () { 
			jQuery('.mobile-sider-drawer-menu').toggleClass('active');
		});
	}	
	
//  > Top Search bar Show Hide function by = custom.js =================== //	

	function site_search(){
		jQuery('a[href="#search"]').on('click', function(event) {                    
		jQuery('#search').addClass('open');
		jQuery('#search > form > input[type="search"]').focus();
	});
				
	jQuery('#search, #search button.close').on('click keyup', function(event) {
		if (event.target === this || event.target.className === 'close') {
			jQuery(this).removeClass('open');
		}
	});  
 }	
	

// Home page Testimonial Slider function by = owl.carousel.js ========================== //
function testimonial_1_content(){
	jQuery('.testimonial-1-content').owlCarousel({
		loop:true,
		autoplay:true,
		nav:true,
		dots: false,	
		margin:30,
		navText: ['<i class="flaticon-angle-pointing-to-left"></i>', '<i class="flaticon-angle-arrow-pointing-to-right"></i>'],
		responsive:{
		
			0:{
				items:1,
			},
			1024:{
				items:2
     		}					
		}
	});
}

	//  Shop Product Price Range Slider function by = bootstrap-slider.min.js ========================== //
	function shop_product_price(){
		jQuery("#ex2").slider({});
	}	

	
// > TouchSpin box function by  = jquery.bootstrap-touchspin.js =============== // 
function input_number_vertical_form(){	
	jQuery("input[name='demo_vertical2']").TouchSpin({
	  verticalbuttons: true,
	  verticalupclass: 'fa fa-plus',
	  verticaldownclass: 'fa fa-minus'
	});	
}		

//  Counter Section function by = counterup.min.js
	function counter_section(){
		jQuery('.counter').counterUp({
			delay: 10,
			time: 3000
		});	
	}	
		
	jQuery('.nav-tabs a').on('click', function() {
		e.preventDefault();
		jQuery(this).tab('show');
	});
	
	jQuery('.wt-accordion a').on('click', function() {
		e.preventDefault();
		jQuery(this).tab('show');
	});	

	//  Client logo Carousel function by = owl.carousel.js ========================== //
	function home_client_carousel_2(){
		var swiper = new Swiper(".home-client-carousel2", {
		  slidesPerView: 1,
		  spaceBetween: 10,
		  loop:true,
		  autoplay: {
			delay: 1500,
			disableOnInteraction: false,
		  },
		  pagination: {
			el: ".swiper-pagination  .home-client-carousel2",
			clickable: true,
			dynamicBullets: true,
		  },
		  breakpoints: {
			0: {
				slidesPerView: 2,
			  },
			640: {
			  slidesPerView: 2,
			},
			768: {
			  slidesPerView: 4,
			},
			1024: {
			  slidesPerView: 5,
			  spaceBetween: 50,
			},
		  },
		});
	}

	//  Client logo Carousel function by = owl.carousel.js ========================== //
	function home_client_carousel(){
		var swiper = new Swiper(".home-client-carousel", {
		  slidesPerView: 1,
		  spaceBetween: 5,
		  loop:true,
		  autoplay: {
			delay: 1500,
			disableOnInteraction: false,
		  },
		  breakpoints: {
			0: {
				slidesPerView: 2,
			}, 
			480: {
			  slidesPerView: 3,
			},
			767: {
			  slidesPerView: 4,
			},
			1000: {
			  slidesPerView: 6,
			},
		  },
		});
	}	

	// Home page Testimonial Slider function by = owl.carousel.js ========================== //
	function testimonial_2_content(){
		var swiper = new Swiper(".testimonial-2-content", {
			slidesPerView: 3,
			spaceBetween:30,
			centeredSlides: false,
			loop:true,
			pagination: {
				el: ".swiper-pagination  .testimonial-2-content",
				clickable: true,
				dynamicBullets: true,
			},
			breakpoints: {
				0:{
					slidesPerView:1,
				},
				480:{
					slidesPerView:1,
				},
				767:{
					slidesPerView:2,
				},
				1200:{
					slidesPerView:3,
				}
			},
		});
	}	

	// > projects_carousel Full Screen with no margin function by = owl.carousel.js ========================== //
	function project_carousel_1(){
		var swiper = new Swiper(".project-carousel-1", {
			slidesPerView: 1,
			spaceBetween: 0,
			autoplay: {
				delay: 1500,
			},
			centeredSlides: false,
			loop:true,
			pagination: {
				el: ".swiper-pagination .project-carousel-1",
				clickable: true,
				dynamicBullets: true,
			},
			navigation:
			{
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			breakpoints: {
				0:{
					slidesPerView:1,
				},
				480:{
					slidesPerView:1,
				},
				640:{
					slidesPerView:1,
				},
				767:{
					slidesPerView:1,
				},
				991:{
					slidesPerView:1,
				},
				1366:{
					slidesPerView:1,
				}
			},
		});
	}	

	// > projects_carousel Full Screen with no margin function by = owl.carousel.js ========================== //
	function project_carousel(){
		var swiper = new Swiper(".project-carousel", {
			slidesPerView: 3,
			spaceBetween: 5,
			centeredSlides: true,
			autoplay:true,
			loop:true,
			pagination: {
				el: ".swiper-pagination .project-carousel",
				clickable: true,
				dynamicBullets: true,
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			breakpoints: {
				0:{
					slidesPerView:1,
				},
										
				767:{
					slidesPerView:2,
				},
				991:{
					slidesPerView:3,
				},			
				1366:{
					slidesPerView:3
				}	
			},
		});
	}


	// > projects Thumb SLider Full Screen with no margin function by = swiper-bundle.min.js ========================== //
	function product_thumb_slider(){
		var swiper = new Swiper(".product-SW-view", {
			loop: true,
			spaceBetween: 0,
			slidesPerView: 4,
			freeMode: true,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
		});
		var swiper2 = new Swiper(".product-SW-view2", {
			loop: true,
			spaceBetween: 10,
			navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
			},
			thumbs: {
			swiper: swiper,
			},
		});
	}	


//--------Home 2 Slider------------//
function slider_home_two(){
		var swiper = new Swiper(".twm-slider1-content", {
		slidesPerView: 1,
		speed: 3000,
		grabCursor: true,
		parallax: true,
		loop:true,
		//autoplay: false,
		autoplay: {delay: 2000,},
		});
		var swiper2 = new Swiper(".twm-slider1", {
		spaceBetween: 2,
		speed: 3000,
		loop:false,
		parallax: true,
			grabCursor: true,

		slidesPerView: 1,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		autoplay: {delay: 2000,},
		thumbs: {swiper: swiper,},
		scrollbar: {
			el: ".swiper-scrollbar",
			hide: false,
			
			},
		pagination: {
			el: ".swiper-pagination",
			type: "fraction",
		},
	});
}


/** ====================================================================END */	
	


/*--------------------------------------------------------------------------------------------
	Window on load ALL FUNCTION START
---------------------------------------------------------------------------------------------*/


// > masonry function function by = isotope.pkgd.min.js ========================= //	
function masonryBox() {
	if ( jQuery().isotope ) {      
		var $container = jQuery('.masonry-wrap');
			$container.isotope({
				itemSelector: '.masonry-item',
				transitionDuration: '1s',
				originLeft: true,
				stamp: '.stamp'
			});

		$container.imagesLoaded().progress( function() {
			$container.isotope('layout');
		});	

		jQuery('.masonry-filter li').on('click',function() {                           
			var selector = jQuery(this).find("a").attr('data-filter');
			jQuery('.masonry-filter li').removeClass('active');
			jQuery(this).addClass('active');
			$container.isotope({ filter: selector });
			return false;
		});
	}
}

// > page loader function by = custom.js ========================= //		
	function page_loader() {
		$('.loading-area').fadeOut(1000);
	}

/*--------------------------------------------------------------------------------------------
    Window on scroll ALL FUNCTION START
---------------------------------------------------------------------------------------------*/

    function color_fill_header() {
        var scroll = $(window).scrollTop();
        if(scroll >= 100) {
            $(".is-fixed").addClass("color-fill");
        } else {
            $(".is-fixed").removeClass("color-fill");
        }
    }
	

/*--------------------------------------------------------------------------------------------
	document.ready ALL FUNCTION START
---------------------------------------------------------------------------------------------*/
	jQuery(document).ready(function() {
		// > Top Search bar Show Hide function by = custom.js  		
		site_search(),	
		// > Video responsive function by = custom.js 
		video_responsive(),
		 // > LIGHTBOX Gallery Popup function	by = lc_lightbox.lite.js =========================== //      
		lightbox_popup(),
		// > magnificPopup for video function	by = magnific-popup.js
		magnific_video(),
		// > Top cart list Show Hide function by = custom.js =================== //	
		cart_block(),		
		// > Vertically center Bootstrap modal popup function by = custom.js
		popup_vertical_center();
		// > Main menu sticky on top  when scroll down function by = custom.js		
		sticky_header(),
	    // > Sidebar sticky  when scroll down function by = theia-sticky-sidebar.js ========== //		
		sticky_sidebar(),
		// > page scroll top on button click function by = custom.js	
		scroll_top(),
		// > input type file function by = custom.js	 	
		input_type_file_form(),
		// > input Placeholder in IE9 function by = custom.js		
		placeholderSupport(),
		// > footer fixed on bottom function by = custom.js	
		footer_fixed(),
		// > accordion active calss function by = custom.js ========================= //			
		accordion_active(),
		// > Nav submenu on off function by = custome.js ===================//
		mobile_nav(),
		//minus header height in slider function by = custom.js ========== //	
        minus_header_height(),
		// Mobile side drawer function by = custom.js
		mobile_side_drawer(),
		// Home page Testimonial Slider function by = owl.carousel.js ========================== //
		testimonial_2_content(),
		// Home page Testimonial Slider function by = owl.carousel.js ========================== //
		testimonial_1_content(),		
		//  Client logo Carousel function by = owl.carousel.js ========================== //
		home_client_carousel(),
		//  Client logo Carousel function by = owl.carousel.js ========================== //
	    home_client_carousel_2(),
		//  Shop Product Price Range Slider function by = bootstrap-slider.min.js ========================== //
	    shop_product_price(),		
		// > TouchSpin box function by  = jquery.bootstrap-touchspin.js =============== // 
		input_number_vertical_form(),
		//  Counter Section function by = counterup.min.js ========================== //
		counter_section(),
		// > projects_carousel Full Screen with no margin function by = owl.carousel.js ========================== //
	    project_carousel(),
		// > projects Thumb SLider Full Screen with no margin function by = swiper-bundle.min.js ========================== //
	    product_thumb_slider(),
		// > projects_carousel Full Screen with no margin function by = owl.carousel.js ========================== //
		project_carousel_1(),
		//Home 2 Slider------------//
		slider_home_two()
				
	}); 	

/*--------------------------------------------------------------------------------------------
	Window Load START
---------------------------------------------------------------------------------------------*/
jQuery(window).on('load', function () {
	//minus header height in slider function by = custom.js ========== //	
	minus_header_height(),
	// > masonry function function by = isotope.pkgd.min.js		
	masonryBox(),
	// > page loader function by = custom.js		
	page_loader();
});

 /*===========================
	Window Scroll ALL FUNCTION START
===========================*/

	jQuery(window).on('scroll', function () {
	// > Window on scroll header color fill 
		color_fill_header();
	});
	
/*===========================
	Window Resize ALL FUNCTION START
===========================*/

	jQuery(window).on('resize', function () {
	//minus header height in slider function by = custom.js ========== //	
        minus_header_height(),
	// > footer fixed on bottom function by = custom.js		 
	 	footer_fixed();
	});

/*===========================
	Document on  Submit FUNCTION START
===========================*/

	// > Contact form function by = custom.js	
	jQuery(document).on('submit', 'form.cons-contact-form', function(e){
		e.preventDefault();
		var form = jQuery(this);
		/* sending message */
		jQuery.ajax({
			url: 'http://pixelwebart.com/arkza/form-handler2.php',
			
			data: form.serialize() + "&action=contactform",
			type: 'POST',
			dataType: 'JSON',
			beforeSend: function() {
				jQuery('.loading-area').show();
			},

			success:function(data){
				jQuery('.loading-area').hide();
				if(data['success']){
				jQuery("<div class='alert alert-success'>"+data['message']+"</div>").insertBefore('form.cons-contact-form');
				}else{
				jQuery("<div class='alert alert-danger'>"+data['message']+"</div>").insertBefore('form.cons-contact-form');	
				}
			}
		});
		jQuery('.cons-contact-form').trigger("reset");
		return false;
	});

/*===========================
	Document on  Submit FUNCTION END
===========================*/	

})(window.jQuery);
