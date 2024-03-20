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


// preloader
document.addEventListener("DOMContentLoaded", function () {

	let preloader = document.querySelector("#preloader");

	window.addEventListener('load', function(){

		if (preloader) {
			preloader.classList.add("preloaded");
			setTimeout(function () {
				  preloader.remove();
	  
			  }, 1000 ) ;
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

		// home-1-hero-1-animation
		const h1tl = gsap.timeline();

		h1tl.from(".h1-fade-up" , { scale: 1.3 ,  y: 100, opacity: 0, stagger: .5, duration:2 });
		h1tl.fromTo(".gly-hero-1-title .gly-gd-color-1" , { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"}, 
					{        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }, "<1.5"
		);

		// home-2-hero-2-animation
		const h2tl = gsap.timeline();

		h2tl.from(".gly-hero-2-il-3" , { y: 200, duration: 1 });
		h2tl.from(".gly-hero-2-title" , { scale: 1.3 ,  y: 100, opacity: 0, stagger: .5, duration:1 });
		h2tl.fromTo(".gly-hero-2-title .gly-gd-color-1" , { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"}, 
					{        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" });
		h2tl.from(".gly-hero-2-il-2" , {  y: 200,  opacity: 0 });
		h2tl.from(".gly-hero-2-il-1" , {  y: -200, opacity: 0 });
		h2tl.from(".gly-project-2-area" , {  y: 200, opacity: 0 });

	})

});
  

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


// search-popup-start
$('.search_btn_toggle').on('click', function() {
	$('.overlay, .search_1_popup_active').addClass('active');
});
$('.overlay, .search_1_popup_close').on('click', function() {
	$('.search_1_popup_active').removeClass('active');
	$('.overlay').removeClass('active');
})



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
	menubgline.fromTo('.mobile-main-navigation  ul li' , {
		opacity: 0,
		y: 50,
		ease: 'Expo.easeInOut',
		stagger: 0.2,
	} , {
		opacity: 1,
		y: 0,
	}, "<");
	menubgline.from('.mobile-menu-search-bar' , {
		opacity: 0,
		y: 50,
		ease: 'Expo.easeInOut'
	}, "<");

	menubgline.from('.mobile-menu-socail-link' , {
		opacity: 0,
		x: 50,
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

// fadeinup-animation-start
gsap.utils.toArray('.title-ani ').forEach((el, index) => { 
	let tl1 = gsap.timeline({
	  scrollTrigger: {
		trigger: el,
		scrub: 1,
		start: "top 90%",
		end: "buttom 50%",
		toggleActions: "play none none reverse",
		 markers: false
	  }
	})
	
	tl1
	.from(el, { y: "+=100" , opacity: .8 }, {opacity: 1, scale: 1, y: 0, duration: 1, immediateRender: false})
  })


// fadeinleft-animation-start
gsap.utils.toArray('.fadeleft ').forEach((el, index) => { 
	let tl1 = gsap.timeline({
	  scrollTrigger: {
		trigger: el,
		scrub: 1,
		start: "top 90%",
		end: "buttom 50%",
		toggleActions: "play none none reverse",
		 markers: false
	  }
	})
	
	tl1
	.from(el, { x: "-=100" , opacity: .8 }, {opacity: 1, scale: 1, x: 0, duration: 1, immediateRender: false})
  })

// text-clipPath-animation-start
gsap.utils.toArray('.has-stoke ').forEach((el, index) => { 
	let tl1 = gsap.timeline({
	  scrollTrigger: {
		trigger: el,
		scrub: 1,
		start: "top 90%",
		end: "buttom 60%",
		toggleActions: "play none none reverse",
		 markers: false
	  }
	})
	
	tl1
	.fromTo(el , { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"}, 
						{        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" })
  })
  

// image-paralax-animation-start
  gsap.utils.toArray(".image-pllx").forEach(function(container) {
    let image = container.querySelector("img");
  
    let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          scrub: true,
          pin: false,
        },
      }); 
      tl.from(image, {
        yPercent: -30,
        ease: "none",
      }).to(image, {
        yPercent: 30,
        ease: "none",
      }); 
  });


// services-scetion
var gtbp1 = gsap.timeline({

	scrollTrigger: {
	  animation: gtbp1,
	  trigger: '.gly-services-1-area',
	  start: "top 100%",
	  end: "bottom 30%",
	  scrub: 2,
	  toggleActions: "play reverse play reverse",
	  markers: false
	}
});
	
gtbp1.from( ".gly-services-1-icon-wrap" , { rotateZ: -200,  duration:1 } )
gtbp1.from( ".gly-services-1-icon-3" , { scale: 0 ,  },"<")
gtbp1.from( ".gly-services-1-icon-2" , { scale: 0 , },"<=.1")
gtbp1.from( ".gly-services-1-icon-1" , { scale: 0 , },"<=.1")
gtbp1.from( ".gly-services-1-img img" , { scale: 1.5, duration:1 }, "<" )


// project-1-section-animation
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



// testimonial-2-animation
var glyt2g = gsap.timeline({
		
	scrollTrigger: {
		animation: glyt2g,
		trigger: '.gly-testimonial-2-area',
		start: "top 130%",
		end: "bottom 0%",
		scrub: 2,
		// pin: true,
		// pinSpacing: true,
		markers: false
	}
});

glyt2g.from( ".gly-earth" , { rotateZ: 360,  duration:1 })
glyt2g.from( ".gly-earth" , { yPercent: 100,   duration:1 }, "<")
glyt2g.fromTo( ".gly-earth img" , { filter: "drop-shadow(0px 0px  0px #1667A9)" ,   duration:1 }, {
	filter: "drop-shadow(0px -40px  50px #1667A9)"
}, "<.5" )


// project-3-animation
gsap.utils.toArray('.gly-project-3-item1 ').forEach((el, index) => { 
	let tl1 = gsap.timeline({
	  scrollTrigger: {
		trigger: el,
		scrub: 1,
		start: "top 90%",
		end: "buttom 50%",
		toggleActions: "play none none reverse",
		 markers: false
	  }
	})
	
	tl1
	.set(el, { perspective: 2000 , transformStyle: "preserve-3d" , transformOrigin: "0% 50%" })
	.from(el , { scaleX: .2  , opacity: 0})
  })


gsap.utils.toArray('.gly-project-3-item2 ').forEach((el, index) => { 
	let tl1 = gsap.timeline({
	  scrollTrigger: {
		trigger: el,
		scrub: 1,
		start: "top 90%",
		end: "buttom 50%",
		toggleActions: "play none none reverse",
		 markers: false
	  }
	})
	
	tl1
	.set(el, { perspective: 2000 , transformStyle: "preserve-3d" , transformOrigin: "100% 50%" })
	.from(el , { scaleX: .2  , opacity: 0})
  })


// footer-2-animation
var glyf2g = gsap.timeline({
		
	scrollTrigger: {
		animation: glyf2g,
		trigger: '.gly-footer-2-area',
		start: "top 100%",
		end: "bottom 90%",
		scrub: 1,
		// pin: true,
		// pinSpacing: true,
		markers: false
	}
});

glyf2g.from( ".gly-footer-2-area" , { yPercent: 20,  duration:1 })
.from( ".gly-footer-2-il-1" , { yPercent: -20, xPercent: 20,  duration:1 }, "<.3")
.from( ".gly-footer-2-il-2" , { yPercent: 20, xPercent: -20,  duration:1 }, "<.3")
.from( ".gly-footer-2-top-line" , { scaleX: .5 ,  duration:1 }, "<")


// title-animation
$(window).on('load',function(){
	var st = $(".gly-split-text");
	if(st.length == 0) return;
	gsap.registerPlugin(SplitText);
	st.each(function(index, el) {
	  el.split = new SplitText(el, { 
		type: "lines,words,chars",
		linesClass: "split-line"
	  });
	  gsap.set(el, { perspective: 400 });
	
	
	  if( $(el).hasClass('gly-split-in-clr') ){
		gsap.set(el.split.chars, {
		  opacity: 1,
			scale: .8,
			x: "100",
			ease: "Back.easeOut",
			color:'#a249ed',
		});
	  }
	  
	  el.anim = gsap.to(el.split.chars, {
		scrollTrigger: {
		  trigger: el,
		  start: "top 90%",
		},
		x: "0",
		y: "0",
		rotateX: "0",
		color: 'inherit',
		scale: 1,
		opacity: 1,
		duration: 1.5, 
		stagger: 0.02,
	  });
	});
})


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



// sponser-1-slider
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


// project-2-slider
let glyp2 = new Swiper('.gly-p2-active', {
	loop: true,
	spaceBetween: 25,
	speed: 2000,
	centeredSlides: true,
	autoplay: {
	  delay: 5000,
	},

	navigation: {
		nextEl: ".gly_p2_next",
		prevEl: ".gly_p2_prev",
	},

	breakpoints: {
		0: {
		  slidesPerView: 1,
		},
		576: {
		  slidesPerView: 1,
		},
		768: {
		  slidesPerView: 2,
		},
		992: {
		  slidesPerView: 2,
		},
		1200: {
		  slidesPerView: 3,
		},
	  },
});

// testimonial-2-slider
let glyt2 = new Swiper('.gly-t2-active', {
	loop: true,
	spaceBetween: 25,
	speed: 2000,
	centeredSlides: true,
	autoplay: {
	  delay: 5000,
	},

	navigation: {
		nextEl: ".gly_t2_next",
		prevEl: ".gly_t2_prev",
	},


});

// testimonial-3-slider-active
if($('.gly-t3-active'.length)) {
  
	var glyt3= new Swiper('.gly-t3-active', {
	  speed: 1000,
	  loop: true,
	  spaceBetween: 20,
	  direction: "vertical",
	  mousewheel: true,
	  slidesPerView: 3,
	  autoplay: {
		delay: 3000,
	  },
	
	  navigation: {
		nextEl: ".gly_t3_next",
		prevEl: ".gly_t3_prev",
	  },

	  breakpoints: {
		0: {
		  slidesPerView: 1,
		},
		576: {
		  slidesPerView: 1,
		},
		768: {
		  slidesPerView: 2,
		},
		992: {
		  slidesPerView: 2,
		},
		1200: {
		  slidesPerView: 3,
		},
	  },

	  
	});
  }

// team-3-slider-active
if($('.gly-t4-active'.length)) {
  
	var glyt4= new Swiper('.gly-t4-active', {
	  speed: 1000,
	  loop: true,
	  spaceBetween: 30,
	  slidesPerView: 4,
	  autoplay: {
		delay: 3000,
	  },


	  breakpoints: {
		0: {
		  slidesPerView: 1,
		},
		576: {
		  slidesPerView: 1,
		},
		768: {
		  slidesPerView: 2,
		},
		992: {
		  slidesPerView: 2,
		},
		1200: {
		  slidesPerView: 4,
		},
	  },

	  
	});
  }




// team-3-hover-class-add
const t3togglebtns = document.querySelectorAll(".gly-team-3-social .toggle-icon");

t3togglebtns.forEach(togglebtn => {
  const t3social = togglebtn.closest(".gly-team-3-social");

  togglebtn.addEventListener('click', function() {
    // Check if the t3social element has the 'active' class
    const isActive = t3social.classList.contains('active');

    if (isActive) {
      // If it's active, remove the 'active' class
      t3social.classList.remove('active');
    } else {
      // If it's not active, add the 'active' class
      t3social.classList.add('active');
    }
  });


});





/* mouse-move-animation */
document.addEventListener("mousemove" , parallax);
function parallax(e){

	document.querySelectorAll(".object").forEach(function(move){

		var moving_value = move.getAttribute("data-value");
		var x = (e.clientX * moving_value) /250;
		var y = (e.clientY * moving_value) /250;

		move.style.transform = "translateX(" + x + "px) translateY(" + y +"px)";
	})

}



/* faq-active-class */
$(document).on('click', '.gly-accordion-item', function(){
	$(this).addClass('faq_bg').siblings().removeClass('faq_bg')
})


/* back-to-top */
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



/* nice-selector */
var niceselect = document.querySelector(".nice-select");
if (niceselect) {
	$('.nice-select select').niceSelect();
}


/* counter */
$('.counter').counterUp({
	delay: 10,
	time: 3000
});

/* data-bg-activition */
$("[data-background]").each(function(){
	$(this).css("background-image","url("+$(this).attr("data-background") + ") ")
})


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

/* 
	fancybox-activation
*/

if($('a').length) {
	Fancybox.bind() 
}


})(jQuery);