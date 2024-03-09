/*

Author: themexriver
Version: 1.0

*/



(function ($) {
"use strict";

// smoooth scroll activation start
const lenis = new Lenis()
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)



// document.addEventListener("DOMContentLoaded", function () {
// 	let preloader = document.querySelector("#preloader");
// 	window.addEventListener('load', function(){
// 	  preloader.classList.add("preloaded");
// 	  setTimeout(function () {
// 			preloader.remove();

// 		});
// 	})
// });
  

// mobile-menu-start
if($('.mobile-main-navigation li.dropdown ul').length){
	$('.mobile-main-navigation li.dropdown').append('<div class="dropdown-btn"><i class="fa-solid fa-angle-right"></i></div>');
	$('.mobile-main-navigation li.dropdown .dropdown-btn').on('click', function() {
		$(this).prev('ul').slideToggle(500);
	});
}

$(".dropdown-btn").on("click", function () {
	$(this).toggleClass("toggle-open");
});




// gsap-start
gsap.registerPlugin(ScrollTrigger);



// mobile-menu-toggle-start

var menuToggle = document.getElementById("menuToggle")
var menuToggle2 = document.getElementById("menuToggle2")

if (menuToggle2) {

	var menuBar = gsap.timeline();
	menuBar.reverse();
	var menubgline = gsap.timeline({ paused: true });
	
	menubgline.to('.mobile-menu' , {
		duration: 0,
		display: "block",
		ease: 'Expo.easeInOut'
	});
	menubgline.to('.mobile-menu-bg span' , {
		duration: .5,
		height: "100%",
		stagger: 0.1,
		ease: 'Expo.easeInOut'
	});
	menubgline.from('.mobile-menu-logo' , {
		x: -50,
		opacity: 0,
		ease: 'Expo.easeInOut'
	});
	menubgline.to('.mobile-menu-close' , {
		duration: 0,
		x: 0,
		rotate: 0,
		opacity: 1,
		ease: 'Expo.easeInOut'
	}, "<");
	menubgline.from('.mobile-menu-navigation' , {
		opacity: 0,
		x: -50,
		ease: 'Expo.easeInOut'
	});
	menubgline.from('.mobile-menu-search-bar' , {
		opacity: 0,
		y: 50,
		ease: 'Expo.easeInOut'
	}, "<");
	menubgline.from('.mobile-menu-action-link' , {
		opacity: 0,
		x: 50,
		ease: 'Expo.easeInOut'
	}, "<");
	
	menubgline.from('.mobile-menu-socail-link ' , {
		opacity: 0,
		y: 50,
		ease: 'Expo.easeInOut'
	}, "<");
	
	menubgline.reverse();

	menuToggle.addEventListener('click', function(){
		menubgline.reversed(!menubgline.reversed());
	});
	menuToggle2.addEventListener('click', function(){
		menubgline.reversed(!menubgline.reversed());
	});
	
}

// class-add
const txaaddclass = gsap.utils.toArray('.add-class');
txaaddclass.forEach(img => {
	gsap.to(img, {
		scrollTrigger: {
			trigger: img,
			scrub: 1,
			start: "top 70%",
			toggleClass: "active",
			toggleActions: "play reverse play reverse",
		}
	});
});

// services-scetion
var gtbp1 = gsap.timeline({

	scrollTrigger: {
	  animation: gtbp1,
	  trigger: '.gly-services-1-area',
	  start: "top 90%",
	  end: "top -50%",
	  scrub: 2,
	  toggleActions: "play reverse play reverse",
	  markers: false
	}
});
	
gtbp1.fromTo( ".gly-services-1-icon-wrap" , { rotateZ: 0,  duration:1 } , {
	rotateZ: 400,
} )

// services-section-icon
var ardh9 = gsap.timeline({
		
	scrollTrigger: {
		animation: ardh9,
		trigger: '.gly-services-1-area',
		start: "top 70%",
		end: "bottom 0%",
		scrub: 1,
		// pin: true,
		// pinSpacing: true,
		markers: false
	}
});

ardh9.from( ".gly-services-1-icon-3" , { scale: .1, duration:1 })
	.from( ".gly-services-1-img img" , { scale: 1.5, duration:1 }, "<" )
	.from( ".gly-services-1-icon-2" , { scale: .1, duration:1 }, "<" )
	.from( ".gly-services-1-icon-1" , { scale: .1, duration:1 }, "<" )


// project-section-icon
var glypr1 = gsap.timeline({
		
	scrollTrigger: {
		animation: glypr1,
		trigger: '.gly-project-1-area',
		start: "top 80%",
		end: "top 30%",
		scrub: 2,
		// pin: true,
		// pinSpacing: true,
		markers: false
	}
});

glypr1.from( ".gly-project-1-curlc-icon svg" , { rotateZ: 360,  duration:1 })
glypr1.from( ".gly-project-1-curlc-icon i" , { yPercent: 100, xPercent: -100,  duration:1 }, "<")


// project-1-slider
let glyp1 = new Swiper('.gly-p1-slider-active', {
	loop: true,
	rtl: false,
	speed: 1000,
	autoplay: {
	  delay: 5000,
	},
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	},
	pagination: {
	el: ".gly-p1-pagination",
	clickable: true,
	},
	
});

// testimonial-1-slider
let glyt1 = new Swiper('.gly-t1-active', {
	loop: true,
	speed: 1000,
	autoplay: {
	  delay: 5000,
	},
	// effect: 'fade',
	// fadeEffect: {
	// 	crossFade: true
	// },

	navigation: {
		nextEl: ".gly_t1_next",
		prevEl: ".gly_t1_prev",
	},

	pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
	
});

  



// testimonial-1-slider
let glysp1 = new Swiper('.gly-sponser-1-active', {
	loop: true,
	speed: 5000,
	autoplay: {
	  delay: 0,
	},

	breakpoints: {
		0: {
		  slidesPerView: 1,
		},
		480: {
		slidesPerView: 2,
		},
		576: {
		  slidesPerView: 2,
		},
		768: {
		  slidesPerView: 3,
		},
		992: {
		  slidesPerView: 4,
		},
		1200: {
		  slidesPerView: 5,
		},
	  },
});


// experience-1-slider
let glyexp1 = new Swiper('.gly-ex1-active', {
	loop: true,
	speed: 2000,

	direction: "vertical",
    mousewheel: true,

	autoplay: {
	  delay: 2000,
	},

});

  



/*
faq-active-class
====start====
*/
$(document).on('click', '.accordion-item', function(){
	$(this).addClass('faq_bg').siblings().removeClass('faq_bg')
})
/*
faq-active-class
====end====
*/


/*
back-to-top
=====start==== */
var backtotop = $('.scroll-top');

$(window).scroll(function() {
	if ($(window).scrollTop() > 300) {
	backtotop.addClass('show');
	} else {
	backtotop.removeClass('show');
	}
});

backtotop.on('click', function(e) {
	e.preventDefault();
	$('html, body').animate({scrollTop:0}, '700');
});
/*
back-to-top
=====end==== 
*/



/*
nice-selector-activiton
====start====
*/
var niceselect = document.querySelector(".nice-select");
if (niceselect) {
	$('.nice-select select').niceSelect();
}
/*
nice-selector-activiton
=====end==== 
*/



/*
counter-activition
====start====
*/
$('.counter').counterUp({
	delay: 10,
	time: 3000
});
/*
counter-activition
====end====
*/


/*
data-bg-activition
====start====
*/
$("[data-background]").each(function(){
	$(this).css("background-image","url("+$(this).attr("data-background") + ") ")
})
/*
data-bg-activition
====end====
*/

// wow-activation
if($('.wow').length){
	var wow = new WOW(
	{
		boxClass:     'wow',
		animateClass: 'animated',
		offset:       0,
		mobile:       true,
		live:         true
	}
	);
	wow.init();
};


})(jQuery);