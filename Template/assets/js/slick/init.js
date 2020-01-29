
// if mobile jumping, remove this from slick.js:: $target.children().trigger('focus');
(function ($) {
    'use strict';

    $(document).ready(function () {

        // Responsive Breakpoints
        var $width_lg = 1200,
            $width_md 	= 992,
            $width_sm 	= 768,
            $width_xs 	= 480,
            $slick = $('.ct-js-slick');


        if ($().slick) {

            if ($slick.length > 0) {
                $slick.each(function () {
                    var $this = $(this),

                    // Items Settings
                        ctslidesToShow 			=  	parseInt(validatedata($this.attr("data-items"), 1), 10), // Non Responsive
                        slides_xs 					= 	parseInt(validatedata($this.attr("data-items-xs"), ctslidesToShow), 10),
                        slides_sm 					= 	parseInt(validatedata($this.attr("data-items-sm"), slides_xs), 10), // Default Item from smaller Device;
                        slides_md 					= 	parseInt(validatedata($this.attr("data-items-md"), slides_sm), 10), // Default Item from smaller Device;
                        slides_lg 					= 	parseInt(validatedata($this.attr("data-items-lg"), slides_md), 10), // Default Item from smaller Device;

                        ctaccessibility 		= 	parseBoolean($this.attr("data-accessibility"), true),
                        ctadaptiveHeight 		= 	parseBoolean($this.attr("data-adaptiveHeight"), false),
                        ctautoplay 					= 	parseBoolean($this.attr("data-autoplay"), false),
                        ctarrows 						= 	parseBoolean($this.attr("data-arrows"), true),
                        ctcenterMode 				= 	parseBoolean($this.attr("data-centerMode"), false),
                        ctdots 							= 	parseBoolean($this.attr("data-dots"), false),
                        ctdraggable 				= 	parseBoolean($this.attr("data-draggable"), true),
                        ctfade 							= 	parseBoolean($this.attr("data-fade"), false),
                        ctfocusOnSelect 		= 	parseBoolean($this.attr("data-focusOnSelect"), false),
                        ctinfinite 					= 	parseBoolean($this.attr("data-infinite"), true),
                        ctmobileFirst 			= 	parseBoolean($this.attr("data-mobileFirst"), true),
                        ctpauseOnHover 			= 	parseBoolean($this.attr("data-pauseOnHover"), true),
                        ctpauseOnDotsHover 	= 	parseBoolean($this.attr("data-pauseOnDotsHover"), false),
                        ctswipe 						=		parseBoolean($this.attr("data-swipe"), true),
                        ctswipeToSlide 			=  	parseBoolean($this.attr("data-swipeToSlide"), true),
                        cttouchMove 				= 	parseBoolean($this.attr("data-touchMove"), true),
                        ctuseCSS 						= 	parseBoolean($this.attr("data-useCSS"), true),
                        ctvariableWidth 		= 	parseBoolean($this.attr("data-variableWidth"), false),
                        ctvertical 					= 	parseBoolean($this.attr("data-vertical"), false),
                        ctrtl 							= 	parseBoolean($this.attr("data-rtl"), false),
                        ctasNavFor 					=		validatedata($this.attr("data-asNavFor")),
                        ctappendArrows 			= 	validatedata($this.attr("data-appendArrows")),
                        ctprevArrow 				= 	validatedata($this.attr("data-prevArrow"), '<button type="button" class="slick-nav slick-prev"></button>'),
                        ctnextArrow 				= 	validatedata($this.attr("data-nextArrow"), '<button type="button" class="slick-nav slick-next"></button>'),
                        ctcenterPadding 		= 	validatedata($this.attr("data-centerPadding"), '50px'),
                        ctcssEase 					= 	validatedata($this.attr("data-cssEase"), 'ease'),
                        cteasing 						= 	validatedata($this.attr("data-easing"), 'linear'),
                        ctlazyLoad 					= 	validatedata($this.attr("data-lazyLoad"), 'ondemand'),
                        ctrespondTo 				= 	validatedata($this.attr("data-respondTo"), 'window'),
                        ctslide 						= 	validatedata($this.attr("data-slide")),
                        ctanimations 				= 	validatedata($this.attr("data-animations"), true),
                        ctedgeFriction 			= 	parseInt(validatedata($this.attr("data-edgeFriction"), 0.15), 10),
                        ctinitialSlide 			= 	parseInt(validatedata($this.attr("data-initialSlide"), 0), 10),
                        ctautoplaySpeed 		= 	parseInt(validatedata($this.attr("data-autoplaySpeed"), 5000), 10),
                        ctslidesToScroll 		= 	parseInt(validatedata($this.attr("data-slidesToScroll"), 1), 10),
                        ctspeed 						= 	parseInt(validatedata($this.attr("data-speed"), 300), 10),
                        cttouchThreshold 		= 	parseInt(validatedata($this.attr("data-touchThreshold"), 5), 10);

                    $this.slick({
                        slidesToShow: 			ctslidesToShow,					// Number of slides to show
                        accessibility: 			ctaccessibility,      	// Enables tabbing and arrow key navigation
                        adaptiveHeight: 		ctadaptiveHeight,    		// Enables adaptive height for single slide horizontal carousels.
                        autoplay: 					ctautoplay,             // Enables Autoplay
                        autoplaySpeed: 			ctautoplaySpeed,      	// Autoplay Speed in milliseconds
                        arrows: 						ctarrows,               // Prev/Next Arrows
                        asNavFor: 					ctasNavFor,             // Set the slider to be the navigation of other slider (Class or ID Name)
                        appendArrows: 			ctappendArrows,        	// Change where the navigation arrows are attached (Selector, htmlString, Array, Element, jQuery object)
                        prevArrow: 					ctprevArrow,            // Allows you to select a node or customize the HTML for the "Previous" arrow.
                        nextArrow: 					ctnextArrow,            // Allows you to select a node or customize the HTML for the "Next" arrow.
                        centerMode: 				ctcenterMode,           // Enables centered view with partial prev/next slides. Use with odd numbered slidesToShow counts.
                        centerPadding: 			ctcenterPadding,      	// Side padding when in center mode (px or %)
                        cssEase: 						ctcssEase,              // CSS3 Animation Easing
                        dots:	 							ctdots,                 // Show dot indicators
                        draggable: 					ctdraggable,            // Enable mouse dragging
                        fade: 							ctfade,                 // Enable fade
                        focusOnSelect: 			ctfocusOnSelect,      	// Enable focus on selected element (click)
                        easing: 						cteasing,               // Add easing for jQuery animate. Use with easing libraries or default easing methods
                        edgeFriction: 			ctedgeFriction,        	// Resistance when swiping edges of non-infinite carousels
                        infinite: 					ctinfinite,             // Infinite loop sliding
                        initialSlide: 			ctinitialSlide,        	// Slide to start on
                        lazyLoad: 					ctlazyLoad,             // Set lazy loading technique. Accepts 'ondemand' or 'progressive'
                        mobileFirst: 				ctmobileFirst,          // Responsive settings use mobile first calculation
                        pauseOnHover: 			ctpauseOnHover,        	// Pause Autoplay On Hover
                        pauseOnDotsHover: 	ctpauseOnDotsHover,			// Pause Autoplay when a dot is hovered
                        respondTo: 					ctrespondTo,            // Width that responsive object responds to. Can be 'window', 'slider' or 'min' (the smaller of the two)
                        slide: 							ctslide,                // Element query to use as slide
                        slidesToScroll: 		ctslidesToScroll,    		// Number of slides to scroll
                        speed: 							ctspeed,                // Slide/Fade animation speed
                        swipe: 							ctswipe,                // Enable swiping
                        swipeToSlide: 			ctswipeToSlide,        	// Allow users to drag or swipe directly to a slide irrespective of slidesToScroll
                        touchMove: 					cttouchMove,            // Enable slide motion with touch
                        touchThreshold: 		cttouchThreshold,    		// To advance slides, the user must swipe a length of (1/touchThreshold) * the width of the slide
                        useCSS: 						ctuseCSS,               // Enable/Disable CSS Transitions
                        variableWidth: 			ctvariableWidth,      	// Variable width slides
                        vertical: 					ctvertical,             // Vertical slide mode
                        rtl: 								ctrtl                  // Change the slider's direction to become right-to-left
                        // Responsive Breakpoints

                        // end Responsive Breakpoints

                    }); // end slick initialize

                    $this.slick('setOption', 'responsive', [{
                        breakpoint: $width_lg,
                        settings: { slidesToShow: slides_lg }
                    }], true)

                    $this.slick('setOption', 'responsive', [{
                        breakpoint: $width_md,
                        settings: { slidesToShow: slides_md }
                    }], true)

                    $this.slick('setOption', 'responsive', [{
                        breakpoint: $width_sm,
                        settings: { slidesToShow: slides_sm }
                    }], true)

                    $this.slick('setOption', 'responsive', [{
                        breakpoint: $width_xs,
                        settings: { slidesToShow: slides_xs }
                    }], true)

                    /* Data Attributes Refresh for Responsive */
                    $this.on('setPosition', function () {
                        // Text Color //
                        set_text_color();
                        // Font Size //
                        set_font_size();
                        // Background Color //
                        set_background();
                        // Height //
                        set_height();
                    });

                }); // end each loop
            } // end if length
        } // end Slick

    }); // end Ready

})(jQuery);
