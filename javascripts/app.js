/* Foundation v2.2 http://foundation.zurb.com */
jQuery(document).ready(function ($) {

	/* Use this js doc for all application specific JS */

	/* TABS --------------------------------- */
	/* Remove if you don't need :) */

	function activateTab($tab) {
		var $activeTab = $tab.closest('dl').find('a.active'),
				contentLocation = $tab.attr("href") + 'Tab';

		//Make Tab Active
		$activeTab.removeClass('active');
		$tab.addClass('active');

    	//Show Tab Content
		$(contentLocation).closest('.tabs-content').children('li').hide();
		$(contentLocation).css('display', 'block');
	}

	$('dl.tabs').each(function () {
		//Get all tabs
		var tabs = $(this).children('dd').children('a');
		tabs.click(function (e) {
			activateTab($(this));
		});
	});

	if (window.location.hash) {
		activateTab($('a[href="' + window.location.hash + '"]'));
	}

	/* ALERT BOXES ------------ */
	$(".alert-box").delegate("a.close", "click", function(event) {
    event.preventDefault();
	  $(this).closest(".alert-box").fadeOut(function(event){
	    $(this).remove();
	  });
	});


	/* PLACEHOLDER FOR FORMS ------------- */
	/* Remove this and jquery.placeholder.min.js if you don't need :) */

	$('input, textarea').placeholder();

	/* TOOLTIPS ------------ */
	$(this).tooltips();



	/* UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE6/7/8 SUPPORT AND ARE USING .block-grids */
//	$('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'left'});
//	$('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'left'});
//	$('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'left'});
//	$('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'left'});



	/* DROPDOWN NAV ------------- */

	var lockNavBar = false;
	$('.nav-bar a.flymove').live('click', function(e) {
		e.preventDefault();
		var flyout = $(this).siblings('.flyout');
		if (lockNavBar === false) {
			$('.nav-bar .flyout').not(flyout).slideUp(500);
			flyout.slideToggle(500, function(){
				lockNavBar = false;
			});
		}
		lockNavBar = true;
	});


  if (Modernizr.touch) {
    $('.nav-bar>li.has-flyout>a.main').css({
      'padding-right' : '75px'
    });
    $('.nav-bar>li.has-flyout>a.flyout-toggle').css({
      'border-left' : '1px dashed #eee'
    });
  } else {
    $('.nav-bar>li.has-flyout').hover(function() {
      $(this).children('.flyout').show();
    }, function() {
      $(this).children('.flyout').hide();
    })
  }


	/* DISABLED BUTTONS ------------- */
	/* Gives elements with a class of 'disabled' a return: false; */
  

});

//$("ul.toggle1").prev().click(function () {
//      $("ul.toggle1").slideToggle("slow");
//    });
//	
//	$("ul.toggle2").prev().click(function () {
//      $("ul.toggle2").slideToggle("slow");
//    });

$('#featured').orbit({
     animation: 'horizontal-slide',       // fade, horizontal-slide, vertical-slide, horizontal-push
     animationSpeed: 1000,                // how fast animtions are
     timer: true, 			              // true or false to have the timer
     resetTimerOnClick: true,            // true resets the timer instead of pausing slideshow progress
     advanceSpeed: 4000, 		          // if timer is enabled, time between transitions 
     pauseOnHover: true, 		          // if you hover pauses the slider
     startClockOnMouseOut: true, 	      // if clock should start on MouseOut
     startClockOnMouseOutAfter:1000, 	  // how long after MouseOut should the timer start again
     directionalNav: false, 		          // manual advancing directional navs
     captions: false, 			          // do you want captions?
     captionAnimation: 'fade', 		      // fade, slideOpen, none
     captionAnimationSpeed: 800, 	      // if so how quickly should they animate in
     bullets: false,			          // true or false to activate the bullet navigation
     bulletThumbs: false,		          // thumbnails for the bullets
     bulletThumbLocation: '',		      // location from this file where thumbs will be
     afterSlideChange: function(){}, 	  // empty function 
     fluid: true,                         // or set a aspect ratio for content slides (ex: '4x3') 
});
