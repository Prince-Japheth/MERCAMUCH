;(function($){

$(document).ready(function(){

//========== HEADER ACTIVE STRATS ============= //
  var windowOn = $(window);
  windowOn.on('scroll', function () {
    var scroll = windowOn.scrollTop();
    if (scroll < 100) {
      $("#vl-header-sticky").removeClass("header-sticky");
    } else {
      $("#vl-header-sticky").addClass("header-sticky");
    }
  });
  
//========== HEADER ACTIVE ENDS ============= //

//========== PAGE PROGRESS STARTS ============= // 
var progressPath = document.querySelector(".progress-wrap path");

if (progressPath) {
  var pathLength = progressPath.getTotalLength();

  progressPath.style.transition =
    progressPath.style.WebkitTransition = "none";

  progressPath.style.strokeDasharray = pathLength + " " + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();

  progressPath.style.transition =
    progressPath.style.WebkitTransition = "stroke-dashoffset 10ms linear";

  var updateProgress = function () {
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var progress = pathLength - (scroll * pathLength) / height;
    progressPath.style.strokeDashoffset = progress;
  };

  updateProgress();
  $(window).on("scroll", updateProgress);

  var offset = 50;
  var duration = 550;

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > offset) {
      $(".progress-wrap").addClass("active-progress");
    } else {
      $(".progress-wrap").removeClass("active-progress");
    }
  });

  $(".progress-wrap").on("click", function (event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, duration);
    return false;
  });
}
//========== PAGE PROGRESS ENDS ============= // 

//========== MOBILE MENU STARTS ============= //
function initOffcanvasMenu() {
  var vlMenuWrap = $('.vl-mobile-menu-active > ul').clone();
  var vlSideMenu = $('.vl-offcanvas-menu nav');
  vlSideMenu.append(vlMenuWrap);

  if ($(vlSideMenu).find('.sub-menu, .vl-mega-menu').length !== 0) {
    $(vlSideMenu).find('.sub-menu, .vl-mega-menu').parent().append('<button class="vl-menu-close"><i class="fas fa-chevron-right"></i></button>');
  }

  var sideMenuList = $('.vl-offcanvas-menu nav > ul > li button.vl-menu-close, .vl-offcanvas-menu nav > ul li.has-dropdown > a');
  $(sideMenuList).on('click', function (e) {
    e.preventDefault();
    if (!$(this).parent().hasClass('active')) {
      $(this).parent().addClass('active');
      $(this).siblings('.sub-menu, .vl-mega-menu').slideDown();
    } else {
      $(this).siblings('.sub-menu, .vl-mega-menu').slideUp();
      $(this).parent().removeClass('active');
    }
  });

  $(".vl-offcanvas-toggle").on('click', function () {
    $(".vl-offcanvas").addClass("vl-offcanvas-open");
    $(".vl-offcanvas-overlay").addClass("vl-offcanvas-overlay-open");
  });

  $(".vl-offcanvas-close-toggle, .vl-offcanvas-overlay").on('click', function () {
    $(".vl-offcanvas").removeClass("vl-offcanvas-open");
    $(".vl-offcanvas-overlay").removeClass("vl-offcanvas-overlay-open");
  });
}

initOffcanvasMenu();
//========== MOBILE MENU ENDS ============= //

});

//========== SIDEBAR/SEARCH AREA ============= //
$(".header-search-btn").on("click", function (e) {
  e.preventDefault();
  $(".header-search-form-wrapper").addClass("open");
  $('.header-search-form-wrapper input[type="search"]').focus();
  $('.body-overlay').addClass('active');
});

$(".tx-search-close, .body-overlay").on("click", function (e) {
  e.preventDefault();
  $(".header-search-form-wrapper").removeClass("open");
  $('.body-overlay').removeClass('active');
});
//========== SIDEBAR/SEARCH AREA ============= //

  //========== VIDEO POPUP STARTS ============= //
   if ($(".popup-youtube").length > 0) {
    $(".popup-youtube").magnificPopup({
    type: "iframe",
    });
    }
//========== VIDEO POPUP ENDS ============= //
//========== COUNTER UP============= //
const ucounter = $('.counter');
if (ucounter.length > 0) {
  ucounter.countUp();
};

// NICE SELECT  //
  $('select').niceSelect();

  // text slide 

AOS.init;
AOS.init({disable: 'mobile'});

// tab story 
const tabs = document.querySelectorAll(".tab2");
const texts = document.querySelectorAll(".timeline-content .text");
let tabInterval;

function activateTab(tab, isManual = false) {
  tabs.forEach(t => t.classList.remove("active"));
  tab.classList.add("active");

  const year = tab.dataset.year;
  texts.forEach(text => {
    text.classList.remove("active");
    if (text.dataset.year === year) {
      text.classList.add("active");
    }
  });

  // Center the tab in the scrollable view on mobile, but ONLY if clicked manually
  if (isManual) {
    tab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }
}

function nextTab() {
  if (tabs.length === 0) return;
  let activeIndex = Array.from(tabs).findIndex(t => t.classList.contains('active'));
  let nextIndex = (activeIndex + 1) % tabs.length;
  activateTab(tabs[nextIndex], false);
}

function startTabAutoplay() {
  if (tabInterval) clearInterval(tabInterval);
  tabInterval = setInterval(nextTab, 4000); // Auto-change every 4 seconds
}

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    activateTab(tab, true);
    startTabAutoplay(); // Reset autoplay timer when manually clicked
  });
});

if (tabs.length > 0) {
  startTabAutoplay();
}



    /* ================================
        Mouse Cursor Animation Js Start
    ================================ */

    if ($(".mouseCursor").length > 0) {
        function itCursor() {
            var myCursor = jQuery(".mouseCursor");
            if (myCursor.length) {
                if ($("body")) {
                    const e = document.querySelector(".cursor-inner"),
                        t = document.querySelector(".cursor-outer");
                    let n, i = 0, o = !1;
                    window.onmousemove = function(s) {
                        if (!o) {
                            t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)";
                        }
                        e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)";
                        n = s.clientY;
                        i = s.clientX;
                    };
                    $("body").on("mouseenter", "button, a, .cursor-pointer", function() {
                        e.classList.add("cursor-hover");
                        t.classList.add("cursor-hover");
                    });
                    $("body").on("mouseleave", "button, a, .cursor-pointer", function() {
                        if (!($(this).is("a", "button") && $(this).closest(".cursor-pointer").length)) {
                            e.classList.remove("cursor-hover");
                            t.classList.remove("cursor-hover");
                        }
                    });
                    e.style.visibility = "visible";
                    t.style.visibility = "visible";
                }
            }
        }
        itCursor();
    }

// slider 




// home 04 hero 
  var swiper = new Swiper(".myhm4-hero", {
    loop:true,
     speed:2000,
     effect: "fade",
    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
    });




//  hero 
 var swiper = new Swiper(".myhm1-hero", {  
     loop:true,
     speed:2000,
     effect: "fade",
     autoplay: {
     delay: 2500,
     disableOnInteraction: false,
     },
      navigation: {
        nextEl: ".next-arrow",
        prevEl: ".prev-arrow",
      },
      
    });

  //  gallery1
    var swiper = new Swiper(".mygallery1", {
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 3000, 
        disableOnInteraction: false,
       },
       // Breakpoints
      breakpoints: {
        375: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1000: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    }); 


//  home 2 

    var swiper = new Swiper(".mySwipertest", {
       slidesPerView: 1,
      spaceBetween: 20,
      freeMode: true,
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 3000, 
        disableOnInteraction: false,
       },
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
      },
        navigation: {
        nextEl: ".prev_arrow",
        prevEl: ".next_arrow",
      },
    });

// home 3 

 var swiper = new Swiper(".myproject3", {
      slidesPerView: 3,
      spaceBetween: 30,
       loop: true,
        speed: 900,
        autoplay: {
        delay: 3000, 
        disableOnInteraction: false,
        },
        navigation: {
        nextEl: ".next-arrow",
        prevEl: ".prev-arrow",
      },
      breakpoints: {
        375: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // when window width is >= 640px
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1000: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });



// testimonial hm1 


var swiper = new Swiper(".mytestihm1", {
      effect: "cards",
      grabCursor: true,
      speed:1000,
      autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      },
    });


// testimonial hm4 
var swiper = new Swiper(".testimonial04", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 5000,
      },
      navigation: {
        nextEl: ".arrow-btn-next",
        prevEl: ".arrow-btn-prev",
      },
    });

 // testimonial hm5 
var swiper = new Swiper(".testimonial05", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 5000,
      },
       navigation: {
        nextEl: ".arrow-btn-next-hm5",
        prevEl: ".arrow-btn-prev-hm5",
      },
    });   

 // home 05 

  var swiper = new Swiper(".myteam5", {
      slidesPerView: 3,
      spaceBetween: 30,
      breakpoints: {
        375: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // when window width is >= 640px
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1000: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
        autoplay: {
        delay: 3000,
      },
       navigation: {
        nextEl: ".next_arrow",
        prevEl: ".prev_arrow",
      },
      
    });


// home 06
      var swiper = new Swiper(".myproduct6", {
        loop: true,
        speed: 900,
        breakpoints: {
        375: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // when window width is >= 640px
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1000: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
       autoplay: {
        delay: 3000, 
        disableOnInteraction: false,
      },
      
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
       navigation: {
        nextEl: ".next-arrow",
        prevEl: ".prev-arrow",
      },
    });


   var swiper = new Swiper(".mytestimo6", {
      slidesPerView: 1,
      spaceBetween: 14,
        loop: true,
        speed: 1000,
       autoplay: {
        delay: 4000, 
        disableOnInteraction: false,
      },
      cssMode: true,
      navigation: {
        nextEl: ".prev-arrow",
        prevEl: ".next-arrow",
      },
      
      mousewheel: true,
      keyboard: true,
    });




    var swiper = new Swiper(".myteam6", {
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
      loop: true,
      speed: 1000,
        autoplay: {
        delay: 3000, 
        disableOnInteraction: false,
       },
      navigation: {
        nextEl: ".prev-arrow",
        prevEl: ".next-arrow",
      },
      breakpoints: {
        375: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // when window width is >= 640px
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1000: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });


  //  service hm6  
    var swiper = new Swiper(".myservicehm6", {
      slidesPerView: 3,
      spaceBetween: 30,
        loop: true,
        speed: 900,
         breakpoints: {
        375: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // when window width is >= 640px
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1000: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
       autoplay: {
        delay: 3000, 
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".next-arrow",
        prevEl: ".prev-arrow",
      },

       
    });

//  service hm7 

    var swiper = new Swiper(".myservice7", {
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
      breakpoints: {
        375: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // when window width is >= 640px
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1000: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
      speed: 900,
       autoplay: {
        delay: 3000, 
        disableOnInteraction: false,
      },
       navigation: {
        nextEl: ".next-arrow",
        prevEl: ".prev-arrow",
      },
    });




// home 06 end 


   var swiper = new Swiper(".our_services1", {
      slidesPerView: 3,
      spaceBetween: 30,
         navigation: {
        nextEl: ".prev-arrow",
        prevEl: ".next-arrow",
      },
      
          // Breakpoints
      breakpoints: {
        375: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
      
    });


   var swiper = new Swiper(".mySwipertestimo1", {
      slidesPerView: 1,
      speed:1000,
      autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".next-arrow",
        prevEl: ".prev-arrow",
      },
        breakpoints: {
        375: {
        },
       }, 
    });


    var swiper = new Swiper(".vlservice3", {
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
      
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
      350:  { slidesPerView: 1, spaceBetween: 20 },  // small phones: show a peek
      640:  { slidesPerView: 2,    spaceBetween: 14 },  // larger phones
      900:  { slidesPerView: 2,    spaceBetween: 20 },  // tablets / small desktops
      1200: { slidesPerView: 3,    spaceBetween: 30 }   // large desktops
     }



    });


       var swiper = new Swiper(".testimonials3", {
      slidesPerView: 2,
      spaceBetween: 30,
       autoplay: {
        delay: 3000,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
       breakpoints: {
      355:  { slidesPerView: 1, spaceBetween: 12 },  // small phones: show a peek
      640:  { slidesPerView: 1,    spaceBetween: 14 },  // larger phones
      1000:  { slidesPerView: 1,    spaceBetween: 20 },  // tablets / small desktops
      1100:  { slidesPerView: 2,    spaceBetween: 20 },  // tablets / small desktops
     }

    });



  var swiper = new Swiper(".mytesti-hm4", {
      slidesPerView: 3,
      spaceBetween: 30,
        autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
       navigation: {
        nextEl: ".next-arrow",
        prevEl: ".prev-arrow",
      },
       breakpoints: {
      355:  { slidesPerView: 1, spaceBetween: 12 },  // small phones: show a peek
      640:  { slidesPerView: 1,    spaceBetween: 14 },  // larger phones
      1000:  { slidesPerView: 2,    spaceBetween: 30 },  // tablets / small desktops
      1200:  { slidesPerView: 3,    spaceBetween: 30 }, 
     }
    });



   var swiper = new Swiper(".mySwipertesti9", {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        loop: true,
        speed: 1000,
        breakpoints: {
        375: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
        autoplay: {
        delay: 3000, 
        disableOnInteraction: false,
       },
       navigation: {
        nextEl: ".next-arrow",
        prevEl: ".prev-arrow",
      },
    });


  var swiper = new Swiper(".myproduct9", {
      slidesPerView: 7,
      spaceBetween: 30,
      freeMode: true,
      loop: true,
      speed: 1000,
      breakpoints: {
        375: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      },
        autoplay: {
        delay: 3000, 
        disableOnInteraction: false,
       },
      
    });



   var swiper = new Swiper(".mytesti10", {
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
      loop: true,
      speed: 1000,
      breakpoints: {
        375: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
     autoplay: {
        delay: 3000, 
        disableOnInteraction: false,
       },
        navigation: {
        nextEl: ".next-arrow",
        prevEl: ".prev-arrow", 
      },
    });



// home 10 

  var swiper = new Swiper(".mybestseller10", {
      slidesPerView: 4,
      spaceBetween: 20,
       speed: 1000,
       loop: true,

       breakpoints: {
        375: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
      autoplay: {
          delay: 3000, 
          disableOnInteraction: false,
        },
       navigation: {
        nextEl: ".next-arrow",
        prevEl: ".prev-arrow", 
      },
    
    });




// home 3 
     var swiper = new Swiper(".tpcauses-text-slider-active", {
        slidesPerView: 'auto',
        spaceBetween: 40,
        freemode: true,
        centeredSlides: true,
        loop: true,
        speed: 4000,
        allowTouchMove: false,
        autoplay: {
            delay: 1,
            disableOnInteraction: true,
        }
    });


      $('.tpcauses-text-slider-active').on('hover',function(){
        swiper_text.autoplay.stop();
      }, function(){
        swiper_text.autoplay.start();
    });


// home 4 

         var swiper_text = new Swiper(".tpcauses-text-slider-active-2", {
        slidesPerView: 'auto',
        spaceBetween: 40,
        freemode: true,
        centeredSlides: true,
        loop: true,
        speed: 4000,
        allowTouchMove: false,
        autoplay: {
            delay: 1,
            disableOnInteraction: true,
        }
    });


      $('.tpcauses-text-slider-active-2').on('hover',function(){
        swiper_text.autoplay.stop();
      }, function(){
        swiper_text.autoplay.start();
    });

     

    // SLIDER //
$(".testimonial_main-content_boxarea").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: ".testimonial_3_slider_click",
  dots: false,
  arrows: false,
  centerMode: false,
  focusOnSelect: true,
  loop: true,
  autoplay:true,
  autoplaySpeed:2000,
  speed:2000,
  infinite: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$(".testimonial_3_slider_click").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  autoplay:true,
  autoplaySpeed:2000,
  speed:2000,
  loop: true,
  focusOnSelect: true,
  vertical:true,
  asNavFor: ".testimonial_main-content_boxarea",
  infinite: true,
  arrows: false,
});


$(".hero_bottom_slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 10000,
      cssEase: 'linear',
      infinite: true,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      pauseOnFocus: false,
      draggable: false
  });
// SLIDER //
var rev = $('.rev_slider');
rev.on('init', function(event, slick, currentSlide) {
  var
    cur = $(slick.$slides[slick.currentSlide]),
    next = cur.next(),
    prev = cur.prev();
  prev.addClass('slick-sprev');
  next.addClass('slick-snext');
  cur.removeClass('slick-snext').removeClass('slick-sprev');
  slick.$prev = prev;
  slick.$next = next;
}).on('beforeChange', function(event, slick, currentSlide, nextSlide) {

  var
    cur = $(slick.$slides[nextSlide]);

  slick.$prev.removeClass('slick-sprev');
  slick.$next.removeClass('slick-snext');
  next = cur.next(),
    prev = cur.prev();
  prev.prev();
  prev.next();
  prev.addClass('slick-sprev');
  next.addClass('slick-snext');
  slick.$prev = prev;
  slick.$next = next;
  cur.removeClass('slick-next').removeClass('slick-sprev');
});

rev.slick({
  speed: 1000,
  arrows: true,
  dots: false,
  focusOnSelect: true,
  prevArrow: '<button class="prev-next"><i class="fa-solid fa-angle-left"></i></button>',
  nextArrow: '<button class="next-prev"> <i class="fa-solid fa-angle-right"></i></button>',
  infinite: true,
  centerMode: true,
  slidesPerRow: 1,
  slidesToShow: 5,
  slidesToScroll: 1,
  centerPadding: '0',
  swipe: true,
  autoplaySpeed:2500,
  speed:1500,
  autoplay:false,
  customPaging: function(slider, i) {
    return '';
  },

});
  // peralax 

  
  var $window = $(window);
var $parallaxie = $('.parallaxie');

if ($parallaxie.length && ($window.width() > 991)) {
    if ($window.width() > 768) {
        $parallaxie.parallaxie({
            speed: 0.55,
            offset: 0,
        });
    }
}
    
//========== PRELOADER ============= //
  $(window).on("load", function (event) {
    setTimeout(function () {
      $(".preloader").fadeToggle();
    }, 500);
  
  });

  // Text Animation Gsap //
if($('.text-effect').length) {
    var textheading = $(".text-effect");

    if(textheading.length === 0) return; gsap.registerPlugin(SplitText); textheading.each(function(index, el) {

        el.split = new SplitText(el, { 
            type: "lines,words,chars",
            linesClass: "split-line"
        });

        if( $(el).hasClass('text-effect') ){
            gsap.set(el.split.chars, {
                opacity: .3,
                x: "-7",
            });
        }
        el.anim = gsap.to(el.split.chars, {
            scrollTrigger: {
                trigger: el,
                start: "top 92%",
                end: "top 60%",
                markers: false,
                scrub: 1,
            },

            x: "0",
            y: "0",
            opacity: 1,
            duration: .7,
            stagger: 0.2,
        });

    });
}


})(jQuery);



//========== GSAP AREA ============= //
if ($('.text-anime-style-1').length) {
  let staggerAmount 	= 0.05,
  translateXValue = 0,
  delayValue 		= 0.5,
   animatedTextElements = document.querySelectorAll('.text-anime-style-1');

  animatedTextElements.forEach((element) => {
  let animationSplitText = new SplitText(element, { type: "chars, words" });
    gsap.from(animationSplitText.words, {
    duration: 1,
    delay: delayValue,
    x: 20,
    autoAlpha: 0,
    stagger: staggerAmount,
    scrollTrigger: { trigger: element, start: "top 85%" },
    });
  });
  }

  // Text Animation 02 //
  if ($('.text-anime-style-2').length) {
  let	 staggerAmount 		= 0.05,
   translateXValue	= 20,
   delayValue 		= 0.5,
   easeType 			= "power2.out",
   animatedTextElements = document.querySelectorAll('.text-anime-style-2');

  animatedTextElements.forEach((element) => {
  let animationSplitText = new SplitText(element, { type: "chars, words" });
    gsap.from(animationSplitText.chars, {
      duration: 1,
      delay: delayValue,
      x: translateXValue,
      autoAlpha: 0,
      stagger: staggerAmount,
      ease: easeType,
      scrollTrigger: { trigger: element, start: "top 85%"},
    });
  });
  }

  // Text Animation 03 //
  if ($('.text-anime-style-3').length) {
  let	animatedTextElements = document.querySelectorAll('.text-anime-style-3');

  animatedTextElements.forEach((element) => {
  //Reset if needed
  if (element.animation) {
    element.animation.progress(1).kill();
    element.split.revert();
  }

  element.split = new SplitText(element, {
    type: "lines,words,chars",
    linesClass: "split-line",
  });
  gsap.set(element, { perspective: 400 });

  gsap.set(element.split.chars, {
    opacity: 0,
    x: "50",
  });

  element.animation = gsap.to(element.split.chars, {
    scrollTrigger: { trigger: element,	start: "top 90%" },
    x: "0",
    y: "0",
    rotateX: "0",
    opacity: 1,
    duration: 1,
    ease: Back.easeOut,
    stagger: 0.02,
  });
  });
  }


// Image Animation //
  if($('.reveal').length){gsap.registerPlugin(ScrollTrigger);let revealContainers=document.querySelectorAll(".reveal");revealContainers.forEach((container)=>{let image=container.querySelector("img");let tl=gsap.timeline({scrollTrigger:{trigger:container,toggleActions:"play none none none"}});tl.set(container,{autoAlpha:1});tl.from(container,1.5,{xPercent:-100,ease:Power2.out});tl.from(image,1.5,{xPercent:100,scale:1.3,delay:-1.5,ease:Power2.out});});}


      //image cliping effect
    document.addEventListener("DOMContentLoaded", () => {
        const initialClipPaths = [
            "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)",
            "polygon(33.33% 0%, 33.33% 0%, 33.33% 0%, 33.33% 0%)",
            "polygon(65.66% 0%, 66.66% 0%, 66.66% 0%, 66.66% 0%)",
            "polygon(0% 33.33%, 0% 33.33%, 0% 33.33%, 0% 33.33%)",
            "polygon(33.33% 33.33%, 33.33% 33.33%, 33.33% 33.33%, 33.33% 33.33%)",
            "polygon(65.66% 33.33%, 66.66% 33.33%, 66.66% 33.33%, 66.66% 33.33%)",
            "polygon(0% 66.66%, 0% 66.66%, 0% 66.66%, 0% 66.66%)",
            "polygon(33.33% 66.66%, 33.33% 66.66%, 33.33% 66.66%, 33.33% 66.66%)",
            "polygon(65.66% 66.66%, 66.66% 66.66%, 66.66% 66.66%, 66.66% 66.66%)"
        ];

        const finalClipPaths = [
            "polygon(0% 0%, 34.33% 0%, 34.33% 34.33%, 0% 34.33%)",
            "polygon(32.33% 0%, 66.66% 0%, 66.66% 33.33%, 33.33% 34.33%)",
            "polygon(65.66% 0%, 100% 0%, 100% 33.33%, 65.66% 34.33%)",
            "polygon(0% 33.33%, 33.33% 33.33%, 33.33% 66.66%, 0% 66.66%)",
            "polygon(30.33% 33.33%, 66.66% 33.33%, 66.66% 66.66%, 33.33% 66.66%)",
            "polygon(65.66% 33.33%, 100% 32.33%, 100% 66.66%, 65.66% 66.66%)",
            "polygon(0% 65.66%, 33.33% 66.66%, 33.33% 100%, 0% 100%)",
            "polygon(30.33% 66.66%, 66.66% 65.66%, 66.66% 100%, 33.33% 100%)",
            "polygon(65.66% 66.66%, 100% 65.66%, 100% 100%, 65.66% 100%)"
        ];

        // Create mask divs for each wrapper
        document.querySelectorAll(".vl-clip-anim").forEach(wrapper => {
            const img = wrapper.querySelector(".vl-anim-img[data-animate='true']");
            if (!img) return;
            const url = img.src;

            // Remove old masks if any (reuse safe)
            wrapper.querySelectorAll(".mask").forEach(m => m.remove());

            for (let i = 0; i < 9; i++) {
                const mask = document.createElement("div");
                mask.className = `mask mask-${i + 1}`;
                Object.assign(mask.style, {
                    backgroundImage: `url(${url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "absolute",
                    inset: "0"
                });
                wrapper.appendChild(mask);
            }
        });

        // Animate masks
        gsap.utils.toArray(".vl-clip-anim").forEach(wrapper => {
            const masks = wrapper.querySelectorAll(".mask");
            if (!masks.length) return;

            gsap.set(masks, { clipPath: (i) => initialClipPaths[i] });

            const order = [
                [".mask-1"],
                [".mask-2", ".mask-4"],
                [".mask-3", ".mask-5", ".mask-7"],
                [".mask-6", ".mask-8"],
                [".mask-9"]
            ];

            const tl = gsap.timeline({
                scrollTrigger: { trigger: wrapper, start: "top 75%" }
            });

            order.forEach((targets, i) => {
                const validTargets = targets
                    .map(c => wrapper.querySelector(c))
                    .filter(el => el); // filter out nulls

                if (validTargets.length) {
                    tl.to(validTargets, {
                        clipPath: (j, el) => finalClipPaths[Array.from(masks).indexOf(el)],
                        duration: 1,
                        ease: "power4.out",
                        stagger: 0.1
                    }, i * 0.125);
                }
            });
        });
    });

 
// test 

const tabs = document.querySelectorAll(".tab");
const images = document.querySelectorAll(".tab-img");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    images.forEach(img => img.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.img).classList.add("active");
  });
});

