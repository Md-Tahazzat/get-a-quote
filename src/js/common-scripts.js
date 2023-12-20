
(function($){
	$(function(){



        // Phone nav click function
        $('.hamburger-wrap').click(function () {
            $("body").toggleClass("navShown");
        });
        $('.navbar-wrap').click(function () {
            $("body").removeClass("navShown");
        });
        $('.navbar').click(function (e) {
            e.stopPropagation();
        });



        if ($('.testimonial-component-wrap').length) {
            $('.testimonial-component-wrap').slick({
                autoplay: false,
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true,
                dots:false,
                infinite: true,
                responsive: [
                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 557,
                        settings: {
                            slidesToShow: 1,
                        }
                    }
                ]
            })
        
            $(window).on('resize', function () {
                $('.testimonial-component-wrap').slick('resize');
            });
        }

        var $window = $(window);

        if ($window.width() < 769) {
            $('.find-us-item-wrap').marquee({
                direction: 'left',
                speed: 60,
                gap: 50,
                delayBeforeStart: 0,
                duplicated: true,
                startVisible: true
            });
        }


        // Start Pricing JS
        $('.satisfied-clients-item-wrap').marquee({
            direction: 'left',
            speed: 60,
            gap: 50,
            delayBeforeStart: 0,
            duplicated: true,
            startVisible: true
        });

        $('.pricing-about-component-first').marquee({
            direction: 'left',
            speed: 60,
            gap: 50,
            delayBeforeStart: 0,
            duplicated: true,
            startVisible: true
        });
        $('.pricing-about-component-second').marquee({
            direction: 'right',
            speed: 60,
            gap: 50,
            delayBeforeStart: 0,
            duplicated: true,
            startVisible: true
        });
        $('.pricing-about-component-third').marquee({
            direction: 'left',
            speed: 70,
            gap: 50,
            delayBeforeStart: 0,
            duplicated: true,
            startVisible: true
        });


        $(".faq-accordion-item").each(function () {
            var $this = $(this);
            $this.find(".faq-accordion-item-title").on("click touch", function () {
                $(".faq-accordion-item").removeClass("active")
                $(".faq-accordion-item-content").slideUp();
                if ($this.find(".faq-accordion-item-content:visible").length) {
                    $(".faq-accordion-item").removeClass("active")
                    $(".faq-accordion-item-content").slideUp();
                } else {
                    $this.addClass("active")
                    $(".faq-accordion-item-content").slideUp();
                    $this.find(".faq-accordion-item-content").slideDown();
                }
            })
        });

        $('.contact-tab-trigger ul li').click(function(){
            $('.contact-tab-trigger ul li').removeClass('active');
            $(this).addClass('active');
            $('.contact-tab-item-wrap .contact-tab-item').hide();

            var activeTab = $(this).find('a').attr('href');
            $(activeTab).fadeIn();
            return false;
        });

        // End Pricing JS

        
        
        $('.counter em').each(function () {
            var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
            $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
            }, {
            duration: 5000,
            step: function (func) {
                $(this).text(parseFloat(func).toFixed(size));
            }
            });
        });

        $(function () {
            $(".team-component").slice(0, 6).show();
            $(".team-btn a").on('click touchstart', function (e) {
                e.preventDefault();
                $(".team-component:hidden").slice(0, 3).slideDown();
                if ($(".team-component:hidden").length == 0) {
                    $(".team-btn").fadeOut();
                }
                // $('html,body').animate({
                //     scrollTop: $(this).offset().top
                // }, 1000);
            });
        });
		
	})// End ready function.
   

    var $animation_elements = $('.animate-from-bottom');
    var $window = $(window);

    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);
        $.each($animation_elements, function () {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);
            if (element_top_position <= window_bottom_position) {
                $element.addClass('in-view');
            } else {}
        });
    }
    $window.on('scroll resize',check_if_in_view);$window.trigger('scroll');
	

})(jQuery)

