(function($) {
    "use strict";
  
    const $documentOn = $(document);
    const $windowOn = $(window);
  
    $documentOn.ready( function() {
  
      //>> Mobile Menu Js Start <<//
      $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "1199",
        meanExpand: ['<i class="far fa-plus"></i>'],
    });
  
    $('#mobile-menus').meanmenu({
        meanMenuContainer: '.mobile-menus',
        meanScreenWidth: "1920",
        meanExpand: ['<i class="far fa-plus"></i>'],
      });
      
      //>> Sidebar Toggle Js Start <<//
      $(".offcanvas__close,.offcanvas__overlay").on("click", function () {
        $(".offcanvas__info").removeClass("info-open");
        $(".offcanvas__overlay").removeClass("overlay-open");
      });
      $(".sidebar__toggle").on("click", function () {
        $(".offcanvas__info").addClass("info-open");
        $(".offcanvas__overlay").addClass("overlay-open");
      });
  
      //>> Body Overlay Js Start <<//
      $(".body-overlay").on("click", function () {
        $(".offcanvas__area").removeClass("offcanvas-opened");
        $(".df-search-area").removeClass("opened");
        $(".body-overlay").removeClass("opened");
      });
  

    /* ================================
     Back To Top Button Js Start
    ================================ */

  // Function to toggle back-to-top button visibility
    function toggleBackTop() {
        if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
            $("#back-top").addClass("show");
        } else {
            $("#back-top").removeClass("show");
        }
    }

    // On scroll
    $windowOn.on('scroll', function() {
        toggleBackTop();
    });

    // On document ready, force hide the button
    $(document).ready(function() {
        $("#back-top").removeClass("show");
    });

    // On click
    $documentOn.on('click', '#back-top', function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

    
      //>> Sticky Header Js Start <<//
  
      $windowOn.on("scroll", function () {
        if ($(this).scrollTop() > 250) {
          $("#header-sticky").addClass("sticky");
        } else {
          $("#header-sticky").removeClass("sticky");
        }
      });      
      
      //>> Video Popup Start <<//
      $(".img-popup").magnificPopup({
        type: "image",
        gallery: {
          enabled: true,
        },
      });

      $(".img-popup2").magnificPopup({
        type: "image",
        gallery: {
          enabled: true,
        },
      });
  
      $(".video-popup").magnificPopup({
        type: "iframe",
        callbacks: {},
      });
  
      
      //>> Wow Animation Start <<//
      new WOW().init();
  
       //>> Nice Select Start <<//
        $('select').niceSelect();


      //>> Hero Slider Start <<//
      if($('.hero-slider').length > 0) {
        const HeroSlider = new Swiper(".hero-slider", {
            spaceBetween: 20,
            speed: 1300,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
             
           pagination: {
                el: ".dot",
                clickable: true,
            },
            breakpoints: {
                1199: {
                    slidesPerView: 3,
                },
                991: {
                    slidesPerView: 3,
                },
                767: {
                    slidesPerView: 3,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
      }

      //>> Room Slider Start <<//
      if($('.room-slider').length > 0) {
        const RoomSlider = new Swiper(".room-slider", {
            spaceBetween: 20,
            speed: 1300,
            loop: true,
             centeredSlides: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
           navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
            },
            breakpoints: {
                1199: {
                    slidesPerView: 5,
                },
                991: {
                    slidesPerView: 3.2,
                },
                767: {
                    slidesPerView: 2.1,
                },
                575: {
                    slidesPerView: 2.2,
                },
                0: {
                    slidesPerView: 1.2,
                },
            },
        });
      }

      //>> Room Slider-2 Start <<//
      if($('.room-slider-2').length > 0) {
        const RoomSlider2 = new Swiper(".room-slider-2", {
            spaceBetween: 20,
            speed: 1300,
            loop: true,
             centeredSlides: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
               navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
            },
            breakpoints: {
                1199: {
                    slidesPerView: 5,
                },
                991: {
                    slidesPerView: 3,
                },
                767: {
                    slidesPerView: 2.1,
                },
                575: {
                    slidesPerView: 2.2,
                },
                0: {
                    slidesPerView: 1.2,
                },
            },
        });
      }
     
      //>> Testimonial Slider Start <<//
      if($('.testimonial-slider').length > 0) {
        const TestimonialSlider = new Swiper(".testimonial-slider", {
            spaceBetween: 20,
            speed: 1300,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
             
            breakpoints: {
                1199: {
                    slidesPerView: 1,
                },
                991: {
                    slidesPerView: 1,
                },
                767: {
                    slidesPerView: 1,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
      }

       //>> Testimonial Slider Start <<//
      if($('.testimonial-slider-3').length > 0) {
        const TestimonialSlider3 = new Swiper(".testimonial-slider-3", {
            spaceBetween: 20,
            speed: 1300,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
             pagination: {
                el: ".dot",
                clickable: true,
            },
            breakpoints: {
                1199: {
                    slidesPerView: 7,
                },
                991: {
                    slidesPerView: 3,
                },
                767: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
      }

    //>> Offer Slider Start <<//
      if($('.offer-slider').length > 0) {
        const OfferSlider = new Swiper(".offer-slider", {
            direction: "vertical",
            spaceBetween: 20,
            speed: 1300,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
          
            breakpoints: {
                1199: {
                    slidesPerView: 3,
                },
                991: {
                    slidesPerView: 3,
                },
                767: {
                    slidesPerView: 3,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 3,
                },
            },
        });
      }

      //>> Offer Slider Start <<//
         if($('.offer-slider-2').length > 0) {
        const OfferSlider2 = new Swiper(".offer-slider-2", {
            spaceBetween: 30,
            speed: 1300,
            loop: true,
            centeredSlides: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".dot2",
                clickable: true,
            },
            breakpoints: {
                1199: {
                    slidesPerView: 3,
                },
                991: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
    }

    //>> Linked Details Sliders Start <<//
    if ($('.details-slider').length > 0 && $('.details-slider-2').length > 0) {

        // Thumbnail Slider (details-slider-2)
        const DetailsSlider2 = new Swiper('.details-slider-2', {
            spaceBetween: 30,
            speed: 1000,
            loop: true,
            slidesPerView: 4,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            breakpoints: {
                1199: { slidesPerView: 4 },
                991: { slidesPerView: 3 },
                767: { slidesPerView: 2 },
                575: { slidesPerView: 2 },
                0: { slidesPerView: 2 },
            },
        });

        // Main Slider (details-slider)
        const DetailsSlider = new Swiper('.details-slider', {
            spaceBetween: 30,
            speed: 1300,
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            thumbs: {
                swiper: DetailsSlider2, // <-- linking thumbnail slider
            },
        });

        // Click sync (optional for stronger link)
        DetailsSlider2.on('click', function (swiper) {
            const clickedIndex = swiper.clickedIndex;
            if (typeof clickedIndex !== 'undefined') {
                DetailsSlider.slideToLoop(clickedIndex);
            }
        });
    }


    //>> Text Scroll Start <<//
    $documentOn.ready(function () {

        let device_width = $(window).width();

        if (device_width > 767) {
            const portfolioArea = document.querySelector(".portfolio__area");
            const portfolioText = document.querySelector(".portfolio__text");

            if (portfolioArea && portfolioText) {
                let portfolioline = gsap.timeline({
                    scrollTrigger: {
                        trigger: portfolioArea,
                        start: "top center-=200",
                        pin: portfolioText,
                        end: "bottom bottom+=10",
                        markers: false,
                        pinSpacing: false,
                        scrub: 1,
                    }
                });

                portfolioline.to(portfolioText, { scale: 1, duration: 1 });
                portfolioline.to(portfolioText, { scale: 1, duration: 1 });
                portfolioline.to(portfolioText, { scale: 1, duration: 1 }, "+=2");

                gsap.to(portfolioText, {
                    scrollTrigger: {
                        trigger: portfolioArea,
                        start: "top center-=100",
                        end: "bottom bottom+=10",
                        scrub: 1
                    },
                    opacity: 0
                });
            }
        }

    });

    
      //>> Instagram Slider Start <<//
         const instagramBannerSlider = new Swiper(".instagram-banner-slider", {
            spaceBetween: 30,
            speed: 1500,
            loop: true,
            autoplay: {
                delay: 1000,
                disableOnInteraction: false,
            },
            breakpoints: {
                1399: {
                    slidesPerView: 6,
                },
                1199: {
                    slidesPerView: 5,
                },
                991: {
                    slidesPerView: 4,
                },
                767: {
                    slidesPerView: 3,
                },
                650: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });

        
            /* ================================
       Service List Js Start
    ================================ */
    $(".news-list .news-service").on("mouseenter", function (e) {
		var index = $(this).index();
		// Remove the 'active' class from all image list items
		$(".news-img-group li").removeClass("active");
		// Add the 'active' class to the corresponding image list item
		$(".news-img-group li:eq(" + index + ")").addClass("active");
	});


     /* ================================
      Brand Slider Js Start
    ================================ */

    if($('.brand-slider').length > 0) {
        const BrandSlider = new Swiper(".brand-slider", {
            spaceBetween: 30,
            speed: 1300,
            loop: true,
             
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            breakpoints: {
               1399: {
                    slidesPerView: 6,
                },
               
                1199: {
                    slidesPerView: 5,
                },
                 991: {
                    slidesPerView: 5,
                },
                767: {
                    slidesPerView: 4,
                },
                575: {
                    slidesPerView: 3,
                },
                400: {
                    slidesPerView: 3,
                },
                0: {
                    slidesPerView: 2,
                },
            },
        });
    }

     /* ================================
      Dining And Hotel Slider Js Start
    ================================ */
    

    if ($('.dining-slider').length > 0 && $('.hotel-slider').length > 0) {

        // Dining Slider
        const DiningSlider = new Swiper(".dining-slider", {
            spaceBetween: 20,
            speed: 1000,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".array-next",
                prevEl: ".array-prev",
            },
            breakpoints: {
                1199: { slidesPerView: 4 },
                991: { slidesPerView: 3 },
                767: { slidesPerView: 3 },
                575: { slidesPerView: 3 },
                0: { slidesPerView: 2 },
            },
        });

        // Hotel Slider (slide effect)
        const HotelSlider = new Swiper(".hotel-slider", {
            spaceBetween: 20,
            speed: 800,
            loop: true,
            slidesPerView: 1,
            effect: "slide",
        });

        // Click dining slide → animate hotel slider
        $('.dining-slider .swiper-slide').on('click', function () {
            const realIndex = Number(this.getAttribute('data-swiper-slide-index'));
            HotelSlider.slideToLoop(realIndex, 800); // 800ms animation
        });

        // Optional: sync hotel slider with dining autoplay
        DiningSlider.on('slideChange', function () {
            HotelSlider.slideToLoop(DiningSlider.realIndex, 800);
        });
    }

    //>> Gallery Slider Start <<//
      if($('.gallery-slider').length > 0) {
        const GallerySlider = new Swiper(".gallery-slider", {
            spaceBetween: 20,
            speed: 1300,
            loop: true,
             centeredSlides: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
               navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
            },
            breakpoints: {
                1199: {
                    slidesPerView: 3,
                },
                991: {
                    slidesPerView: 2.3,
                },
                767: {
                    slidesPerView: 2.1,
                },
                575: {
                    slidesPerView: 2.1,
                },
                0: {
                    slidesPerView: 1.2,
                },
            },
        });
      }

       //>> Team Slider Start <<//
      if($('.team-slider').length > 0) {
        const TeamSlider = new Swiper(".team-slider", {
            spaceBetween: 20,
            speed: 1300,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
             
           pagination: {
                el: ".dot",
                clickable: true,
            },
            breakpoints: {
                1199: {
                    slidesPerView: 4,
                },
                991: {
                    slidesPerView: 3,
                },
                767: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
      }


    // Service Main Item animation
    const serviceItems = document.querySelectorAll(".service-main-item");

    serviceItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
        // Remove active from all
        serviceItems.forEach((el) => el.classList.remove("active"));
        // Add active to current hovered item
        item.classList.add("active");
    });
    });


      /* ================================
       Custom Accordion Js Start
    ================================ */
		$(".accordion-single .header-area").on("click", function () {
			if ($(this).closest(".accordion-single").hasClass("active")) {
				$(this).closest(".accordion-single").removeClass("active");
				$(this).next(".content-area").slideUp();
			} else {
				$(".accordion-single").removeClass("active");
				$(this).closest(".accordion-single").addClass("active");
				$(".content-area").not($(this).next(".content-area")).slideUp();
				$(this).next(".content-area").slideToggle();
			}
		});

    //>> Counter Js Start <<//
    $(window).on("scroll", function () {
    $(".odometer").each(function () {
      var el = $(this);
      if (el.offset().top < $(window).scrollTop() + $(window).height()) {
        if (!el.hasClass("counted")) {
          el.addClass("counted");
          el.html(el.attr("data-count"));
        }
      }
    });
    });


    /* ==================================================
    Image Scale
    ================================================== */
    var width = $(window).width();
    if (width > 1023) {
        if (document.querySelectorAll(".image-scale-animation").length > 0) {

            // plugin register করতে হবে একবার শুরুতেই
            gsap.registerPlugin(ScrollTrigger);

            var step1 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".image-scale-animation",
                    scrub: 4,
                    start: "top 100%",
                    end: "bottom 70%",
                },
            });

            step1.from(".image-scale-animation .image-scale-animation-item", {
                scale: 0.1,
                duration: 2, // অতিরিক্ত বড় duration দরকার নেই
            });
            step1.to(".image-scale-animation .image-scale-animation-item", {
                scale: 1,
                duration: 1.5,
                transformOrigin: "center bottom",
            });
        }
    }

    
/* ==================================================
    GSAP Image Reveal
  ================================================== */

   const visibleSlowlyRight = document.querySelectorAll('.sec-title, .title-anim');

    const setInitialStyles = (chars, animationType) => {
        chars.forEach((char) => {
            char.style.display = 'inline-block';
            char.style.opacity = '0';
            char.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

            switch (animationType) {
                case 'slide-down':
                    char.style.transform = 'translateY(-20px)';
                    break;
                case 'rotate':
                    char.style.transform = 'rotate(-90deg)';
                    break;
                case 'zoom-in':
                    char.style.transform = 'scale(0)';
                    break;
                case 'fade-up':
                    char.style.transform = 'translateY(20px)';
                    break;
                case 'bounce-in':
                    char.style.transform = 'scale(0.5)';
                    break;
                case 'flip':
                    char.style.transform = 'rotateY(90deg)';
                    break;
                default: // slide-right
                    char.style.transform = 'translateX(20px)';
            }
        });
    };


    const revealChars = (element, animationType) => {
      const splitChar = new SplitType(element, {
          types: 'chars'
      });
      setInitialStyles(splitChar.chars, animationType);

      splitChar.chars.forEach((char, index) => {
          setTimeout(() => {
              char.style.opacity = '1';
              char.style.transform =
                  animationType === 'rotate' ? 'rotate(0deg)' :
                  animationType === 'zoom-in' ? 'scale(1)' :
                  animationType === 'fade-up' ? 'translateY(0)' :
                  animationType === 'bounce-in' ? 'scale(1)' :
                  animationType === 'flip' ? 'rotateY(0deg)' :
                  'translateX(0)';
          }, index * 30);
      });
  };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const animationType = entry.target.getAttribute('data-animation') || 'slide-right';
              revealChars(entry.target, animationType);
          } else {
              const splitChar = new SplitType(entry.target, {
                  types: 'chars'
              });
              setInitialStyles(splitChar.chars, entry.target.getAttribute('data-animation') || 'slide-right');
          }
      });
  }, {
      threshold: 0.1
  });

  visibleSlowlyRight.forEach((element) => {
      observer.observe(element);
  });



     /* ================================
       Smooth Scroller And Title Animation Js Start
    ================================ */

	if ($('#smooth-wrapper').length && $('#smooth-content').length) {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

    gsap.config({
        nullTargetWarn: false,
    });

    // Initialize ScrollSmoother
    let smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 2,
        effects: true,
        smoothTouch: 0.1,
        normalizeScroll: false,
        ignoreMobileResize: true,
    });


    // Update ScrollTrigger when smoother refreshes
    ScrollTrigger.addEventListener("refresh", () => smoother.refresh());
    }
   
     gsap.utils.toArray(".bw-img-anim-left").forEach((img) => {
    gsap.to(img, {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
        trigger: img,
        start: "top 80%",
        toggleActions: "play none none reverse",
        },
    });
    });

    gsap.utils.toArray(".tm-gsap-img-parallax").forEach(function(container) {
      let image = container.querySelector("img");

      let tl = gsap.timeline({
          scrollTrigger: {
              trigger: container,
              scrub: .5,
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

    /* ================================
       Tp-Fad Animation Js Start
    ================================ */
    if ($(".tp_fade_anim").length > 0) {
        gsap.utils.toArray(".tp_fade_anim").forEach((item) => {
            let tp_fade_offset = item.getAttribute("data-fade-offset") || 40,
                tp_duration_value = item.getAttribute("data-duration") || 0.75,
                tp_fade_direction = item.getAttribute("data-fade-from") || "bottom",
                tp_onscroll_value = item.getAttribute("data-on-scroll") || 1,
                tp_delay_value = item.getAttribute("data-delay") || 0.15,
                tp_ease_value = item.getAttribute("data-ease") || "power2.out",
                tp_anim_setting = {
                    opacity: 0,
                    ease: tp_ease_value,
                    duration: tp_duration_value,
                    delay: tp_delay_value,
                    x: (tp_fade_direction == "left" ? -tp_fade_offset : (tp_fade_direction == "right" ? tp_fade_offset : 0)),
                    y: (tp_fade_direction == "top" ? -tp_fade_offset : (tp_fade_direction == "bottom" ? tp_fade_offset : 0)),
                };
            if (tp_onscroll_value == 1) {
                tp_anim_setting.scrollTrigger = {
                    trigger: item,
                    start: "top 85%",
                };
            }
            gsap.from(item, tp_anim_setting);
        });
    }


    // Gallery scroll
       gsap.registerPlugin(ScrollTrigger);

        if (document.querySelector(".gallery")) {
        const pr = ScrollTrigger.matchMedia();

        pr.add("(min-width: 1199px)", () => {
           
            const galleries = document.querySelectorAll(".gallery");
            const wrapper = document.querySelector(".aminities-wrapper");

            if (!galleries.length || !wrapper) return;

            galleries.forEach((gallery, index) => {
            const isLast = index === galleries.length - 1;

            
            gsap.to(gallery, {
                scale: isLast ? 1 : 0.85, 
                opacity: isLast ? 1 : 0,
                ease: "none",
                scrollTrigger: {
                trigger: gallery,
                start: "top top",
                end: "bottom 80%",
                scrub: true,
                pin: true,
                pinSpacing: false,
                endTrigger: wrapper,
                markers: false,
                },
            });
            });

            // Cleanup on resize condition change
            return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
            };
        });
        }


    // approach-area
  if (document.querySelectorAll(".approach-area").length > 0) {

    const boxes = document.querySelectorAll(".approach-area .approach-box");

    gsap.from(boxes, {
      x: "100%",
      duration: 1,
      stagger: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        scrub: 2,
        trigger: ".approach-wrapper-box",
        start: "top 100%",
        end: "bottom 40%",
        toggleActions: "play none none reverse",
      }
    });
  }


  /* ==================================================
    Image Scale
    ================================================== */
   var width = $(window).width();

    if (width > 1023) {
        if (document.querySelectorAll(".scale-animation").length > 0) {

            gsap.registerPlugin(ScrollTrigger);

            gsap.utils.toArray(".scale-animation").forEach(function (section) {

                gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        scrub: 3,
                        start: "top 90%",
                        end: "bottom 70%",
                    },
                })
                .from(section, {
                    scale: 0.8,
                    opacity: 0,
                    transformOrigin: "center bottom",
                    duration: 1.5,
                    ease: "power2.out",
                })
                .to(section, {
                    scale: 1,
                    opacity: 1,
                    transformOrigin: "center bottom",
                    duration: 1.2,
                    ease: "power2.out",
                });
            });
        }
    }


    // image animation
    let revealContainers = document.querySelectorAll(".reveal");

    revealContainers.forEach((container) => {
        let image = container.querySelector("img");
        let tl = gsap.timeline({
        scrollTrigger: {
            trigger: container,
            toggleActions: "restart none none reset"
        }
        });

        tl.set(container, { autoAlpha: 1 });
        tl.from(container, 1.5, {
        xPercent: -100,
        ease: Power2.out
        });
        tl.from(image, 1.5, {
        xPercent: 100,
        scale: 1.3,
        delay: -1.5,
        ease: Power2.out
        });
    });

    // Hero animation
    jQuery(document).ready(function($){
    $('.hero-section-1').ripples({
        resolution: 512,     
        dropRadius: 20,      
        perturbance: 0.04,  
        interactive: true  
    });
   });


    // advance card animation
    gsap.registerPlugin(ScrollTrigger);

    if (window.innerWidth > 768) {
      const cards = document.querySelectorAll(".news-section-2 .news-card-items-2");
      if (cards.length === 0) return;

      gsap.set(cards, { opacity: 1, xPercent: 0, rotate: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".news-section-2",
          start: "top 80%",   
          end: "bottom 20%",  
          scrub: 1,           
          markers: false,     
        },
        defaults: {
          ease: "power3.out",
          duration: 1,
        }
      });

      // staggered slide from side effect
      tl.from(cards[0], { xPercent: 100, rotate: -8 })
        .from(cards[1], { xPercent: 30, rotate: 4.13 }, "<")
        .from(cards[2], { xPercent: -30, rotate: -6.42 }, "<");

      if (cards[3]) tl.from(cards[3], { xPercent: -60, rotate: -12.15 }, "<");
      if (cards[4]) tl.from(cards[4], { xPercent: -100, rotate: 12 }, "<");
    }

    
    //    gsap.registerPlugin(ScrollTrigger);

    // const panels = document.querySelectorAll(".tp-panel-pin");

    // panels.forEach((panel, i) => {
    //     ScrollTrigger.create({
    //         trigger: panel,
    //         pin: true,
    //         start: "top 14%",
    //         end: "+=100%",
    //          pinSpacing: false,
    //         scrub: true,
    //         markers: false
    //     });
    // });


// testimonial scroll
	let pr = gsap.matchMedia();
	pr.add("(min-width: 991px)", () => {
		let tl = gsap.timeline();
		let projectpanels = document.querySelectorAll('.tp-panel-pin')
		projectpanels.forEach((section, index) => {
			tl.to(section, {
				scrollTrigger: {
					trigger: section,
					pin: section,
					scrub: 1,
					start: 'top 14%',
					end: "bottom 80%",
					endTrigger: '.tp-panel-pin-area',
					pinSpacing: false,
					markers: false,
				},
			})
		})
	});

    // Testimonial-Content scroll
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".testimonial-content-2", {
    scrollTrigger: {
        trigger: ".testimonial-content-2",
        start: "top 100px", 
        end: "bottom top",  
        pin: true,
        pinSpacing: false,
        scrub: true,       
        markers: false 
    }
    });

    
    }); // End Document Ready Function

    
     //>> Counterup Start <<//
     
      window.addEventListener("load", function() {
    const preloader = document.getElementById("preloader");
    // Wait 1.5 seconds before hiding
    setTimeout(() => {
      preloader.classList.add("hidden");
    }, 1500);
  });

   
    //>> MouseCursor Start <<//
    if ($(".mouseCursor").length > 0) {
        function itCursor() {
            var myCursor = jQuery(".mouseCursor");
            if (myCursor.length) {
                if ($("body")) {
                    const e = document.querySelector(".cursor-inner"),
                        t = document.querySelector(".cursor-outer");
                    let n,
                        i = 0,
                        o = !1;
                    (window.onmousemove = function(s) {
                        o ||
                            (t.style.transform =
                                "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                            (e.style.transform =
                                "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                            (n = s.clientY),
                            (i = s.clientX);
                    }),
                    $("body").on(
                            "mouseenter",
                            "button, a, .cursor-pointer",
                            function() {
                                e.classList.add("cursor-hover"),
                                    t.classList.add("cursor-hover");
                            }
                        ),
                        $("body").on(
                            "mouseleave",
                            "button, a, .cursor-pointer",
                            function() {
                                ($(this).is("a", "button") &&
                                    $(this).closest(".cursor-pointer").length) ||
                                (e.classList.remove("cursor-hover"),
                                    t.classList.remove("cursor-hover"));
                            }
                        ),
                        (e.style.visibility = "visible"),
                        (t.style.visibility = "visible");
                }
            }
        }
        itCursor();
    }
    
  
  })(jQuery); // End jQuery


  










  document.addEventListener("DOMContentLoaded", function () {
    const commentList = document.getElementById("comment-list");
    const commentForm = document.querySelector(".comment-form");
    if (!commentList || !commentForm) return;

    const pageKey = "comments_" + location.pathname;
    let comments = JSON.parse(localStorage.getItem(pageKey)) || [];

    function randomAvatar() {
        const id = Math.floor(Math.random() * 70) + 1;
        return `https://i.pravatar.cc/100?img=${id}`;
    }

    function renderComments() {
        commentList.innerHTML = "";

        if (comments.length === 0) {
            commentList.innerHTML = `<p class="no-comment">Chưa có bình luận nào</p>`;
            return;
        }

        comments.forEach((cmt, index) => {
            commentList.innerHTML += `
              <div class="comment-item">
                <div class="comment-avatar">
                  <img src="${cmt.avatar}" alt="avatar">
                </div>
                <div class="comment-content">
                  <div class="comment-head">
                    <div>
                      <div class="comment-name">${cmt.name}</div>
                      <div class="comment-time">${cmt.time}</div>
                    </div>
                    <button class="comment-delete" data-index="${index}">✖</button>
                  </div>
                  <div class="comment-text">${cmt.message}</div>
                </div>
              </div>
            `;
        });
    }

    commentList.addEventListener("click", function (e) {
        if (!e.target.classList.contains("comment-delete")) return;
        const index = e.target.dataset.index;
        if (!confirm("Xóa bình luận này?")) return;
        comments.splice(index, 1);
        localStorage.setItem(pageKey, JSON.stringify(comments));
        renderComments();
    });

    commentForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = commentForm.querySelector('input[name="name"]').value.trim();
        const message = commentForm.querySelector('textarea[name="message"]').value.trim();

        if (!name || !message) {
            alert("Vui lòng nhập đầy đủ thông tin");
            return;
        }

        comments.unshift({
            name,
            message,
            time: new Date().toLocaleString("vi-VN"),
            avatar: randomAvatar(),
        });

        localStorage.setItem(pageKey, JSON.stringify(comments));
        renderComments();
        commentForm.reset();
    });

    renderComments();
});






function goBack() {
    window.history.back();
}




if (typeof emailjs !== "undefined") {
    emailjs.init("HquBnd_ll03ThbvuJ");
}

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    if (!contactForm) return;

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault(); // 🔥 CHẶN POST 100%

        emailjs.send("service_hongngu", "template_r15q17h", {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
        })
        .then(function () {
            alert("✅ Gửi thành công! Cảm ơn bạn đã liên hệ.");
            contactForm.reset();
        })
        .catch(function (error) {
            console.error(error);
            alert("❌ Gửi thất bại, vui lòng thử lại.");
        });
    });
});







if (typeof emailjs !== "undefined") {
    emailjs.init("HquBnd_ll03ThbvuJ");
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("experience-form");
    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.sendForm(
            "service_hongngu",
            "template_1adstjg",
            form
        )
        .then(function () {
            alert("✅ Gửi thành công! Nội dung đã được gửi về mail.");
            form.reset();
        })
        .catch(function (error) {
            console.error("EmailJS Error:", error);
            alert("❌ Gửi thất bại, vui lòng thử lại.");
        });
    });
});









  document.querySelectorAll('.video-hover').forEach(card => {
    const video = card.querySelector('video');
    if (!video) return;

    card.addEventListener('mouseenter', () => {
      video.play().catch(() => {});
    });

    card.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0;
    });
  });









gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1.5,          // 1 → 1.5 là đẹp nhất
    effects: true,
    normalizeScroll: true,
    smoothTouch: 0.1      // mobile KHÔNG bị lag
});
