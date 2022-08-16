(function ($) {
    'use strict';

    var imJs = {
        m: function (e) {
            imJs.d();
            imJs.methods();
        },
        d: function (e) {
            this._window = $(window),
            this._document = $(document),
            this._body = $('body'),
            this._html = $('html')

        },

        methods: function (e) {
            imJs.featherAtcivation();
            imJs.backToTopInit();
            imJs.mobileMenuActive();
            imJs.vedioActivation();
            imJs.stickyHeader();
            imJs.smothScroll();
            imJs.smothScroll_Two();
            imJs.stickyAdjust();
            imJs.testimonialActivation();
            imJs.contactForm();
            imJs.wowActive();
            imJs.awsActivation();
            // imJs.demoActive();
            // imJs.activePopupDemo();
            
        },

        
        

        contactForm: function () {
            $('.rwt-dynamic-form').on('submit', function (e) {
				e.preventDefault();
				var _self = $(this);
				var __selector = _self.closest('input,textarea');
				_self.closest('div').find('input,textarea').removeAttr('style');
				_self.find('.error-msg').remove();
				_self.closest('div').find('button[type="submit"]').attr('disabled', 'disabled');
				var data = $(this).serialize();
				$.ajax({
					url: 'mail.php',
					type: "post",
					dataType: 'json',
					data: data,
					success: function (data) {
						_self.closest('div').find('button[type="submit"]').removeAttr('disabled');
						if (data.code == false) {
							_self.closest('div').find('[name="' + data.field + '"]');
							_self.find('.rn-btn').after('<div class="error-msg"><p>*' + data.err + '</p></div>');
						} else {
							$('.error-msg').hide();
							$('.form-group').removeClass('focused');
							_self.find('.rn-btn').after('<div class="success-msg"><p>' + data.success + '</p></div>');
							_self.closest('div').find('input,textarea').val('');

							setTimeout(function () {
								$('.success-msg').fadeOut('slow');
							}, 5000);
						}
					}
				});
			});

        },

        
        
        wowActive: function () {
            new WOW().init();
        },

        smothScroll: function () {
            $(document).on('click', '.smoth-animation', function (event) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: $($.attr(this, 'href')).offset().top - 50
                }, 300);
            });
        },
        // two scroll spy
        smothScroll_Two: function () {
            $(document).on('click', '.smoth-animation-two', function (event) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: $($.attr(this, 'href')).offset().top - 0
                }, 300);
            });
        },


        stickyAdjust: function (e) {
            // Sticky Top Adjust..,
            $('.rbt-sticky-top-adjust').css({
                top: 120
            });

            $('.rbt-sticky-top-adjust-two').css({
                top: 200
            });
            $('.rbt-sticky-top-adjust-three').css({
                top: 25
            });
        },

        testimonialActivation: function () {
            $('.testimonial-activation').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
                adaptiveHeight: true,
                cssEase: 'linear',
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>'
            });

            $('.testimonial-item-one').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
                adaptiveHeight: true,
                cssEase: 'linear',
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="feather-chevron-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="feather-chevron-right"></i></button>',
                responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        arrows: false,
                    }
                }]
            });


            $('.portfolio-slick-activation').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                cssEase: 'linear',
                adaptiveHeight: true,
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>',
                responsive: [{
                        breakpoint: 1124,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 868,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: true,
                            arrows: false,
                        }
                    }
                ]
            });


            $('.blog-slick-activation').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                cssEase: 'linear',
                adaptiveHeight: true,
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>',
                responsive: [{
                        breakpoint: 1124,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 868,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: true,
                            arrows: false,
                        }
                    }
                ]
            });

            $('.testimonial-activation-item-3').slick({
                arrows: true,
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1,
                adaptiveHeight: true,
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="feather-chevron-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="feather-chevron-right"></i></button>',
                responsive: [{
                        breakpoint: 1124,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            arrows: false,
                        }
                    },
                    {
                        breakpoint: 577,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: false,
                        }
                    }
                ]
            });

            $('.brand-activation-item-5').slick({
                arrows: true,
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 1,
                adaptiveHeight: true,
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="feather-chevron-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="feather-chevron-right"></i></button>',
                responsive: [{
                        breakpoint: 1124,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 868,
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

        },

        featherAtcivation: function () {
            feather.replace()
        },


        backToTopInit: function () {
            // declare variable
            var scrollTop = $('.backto-top');
            $(window).scroll(function () {
                // declare variable
                var topPos = $(this).scrollTop();
                // if user scrolls down - show scroll to top button
                if (topPos > 100) {
                    $(scrollTop).css('opacity', '1');

                } else {
                    $(scrollTop).css('opacity', '0');
                }
            });
            
            //Click event to scroll to top
            $(scrollTop).on('click', function () {
                $('html, body').animate({
                    scrollTop: 0,
                    easingType: 'linear',
                }, 500);
                return false;
            });

        },

        stickyHeader: function (e) {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 250) {
                    $('.header--sticky').addClass('sticky')
                } else {
                    $('.header--sticky').removeClass('sticky')
                }
            })
        },

        vedioActivation: function (e) {
            $('#play-video').on('click', function (e) {
                e.preventDefault();
                $('#video-overlay').addClass('open');
                $("#video-overlay").append('<iframe width="80%" height="80%" src="https://www.youtube.com/embed/7e90gBu4pas" frameborder="0" allowfullscreen></iframe>');
            });

            $('.video-overlay, .video-overlay-close').on('click', function (e) {
                e.preventDefault();
                close_video();
            });

            $(document).keyup(function (e) {
                if (e.keyCode === 27) {
                    close_video();
                }
            });

            function close_video() {
                $('.video-overlay.open').removeClass('open').find('iframe').remove();
            };
        },

        mobileMenuActive: function (e) {
            $('.humberger-menu').on('click', function (e) {
                e.preventDefault();
                $('.popup-mobile-menu').addClass('menu-open');
                imJs._html.css({
                    overflow: 'hidden'
                })
            });

            $('.close-menu-activation, .popup-mobile-menu .primary-menu .nav-item a').on('click', function (e) {
                e.preventDefault();
                $('.popup-mobile-menu').removeClass('menu-open');
                $('.has-droupdown > a').removeClass('open').siblings('.submenu').removeClass('active').slideUp('400');
                imJs._html.css({
                    overflow: ''
                })
            });

            $('.popup-mobile-menu').on('click', function (e) {
                e.target === this && $('.popup-mobile-menu').removeClass('menu-open');
                imJs._html.css({
                    overflow: ''
                })
            });


            $('.has-droupdown > a').on('click', function (e) {
                e.preventDefault();
                $(this).siblings('.submenu').toggleClass('active').slideToggle('400');
                $(this).toggleClass('open');
                imJs._html.css({
                    overflow: ''
                })
            });


            $('.nav-pills .nav-link').on('click', function (e) {
                $('.rn-popup-mobile-menu').removeClass('menu-open');
                imJs._html.css({
                    overflow: ''
                })
            })


        },

        awsActivation:function(e){
            AOS.init();
        },

    }
    imJs.m();


})(jQuery, window)

// =============================================================================
// LightGallery
// =============================================================================

// -----------------------------------------------------------------------------
// 01 - Turn Technologies
// -----------------------------------------------------------------------------
document.getElementById('lightgallery1').addEventListener('click', function() {
    console.log('gallery')
    lightGallery(document.getElementById('lightgallery1'), {
        dynamic: true,
        dynamicEl: [{
            "src": 'assets/images/portfolio/project_01/02.png',
            'thumb': 'assets/images/portfolio/project_01/02.png',
            'subHtml': '<h4>Turn Technologies</h4><p>Here I have used technologies such as: React, NextJS, Redux, GraphQL, Apollo, TailwindCSS, ESLint, Prettify, AWS, Python, among others.</p>'
        }, {
            'src': 'assets/images/portfolio/project_01/03.png',
            'thumb': 'assets/images/portfolio/project_01/03.png',
            'subHtml': '<h4>Turn Technologies</h4><p>Here I have used technologies such as: React, NextJS, Redux, GraphQL, Apollo, TailwindCSS, ESLint, Prettify, AWS, Python, among others.</p>'
        }, {
            'src': 'assets/images/portfolio/project_01/04.png',
            'thumb': 'assets/images/portfolio/project_01/04.png',
            'subHtml': '<h4>Turn Technologies</h4><p>Here I have used technologies such as: React, NextJS, Redux, GraphQL, Apollo, TailwindCSS, ESLint, Prettify, AWS, Python, among others.</p>'
        }, {
            'src': 'assets/images/portfolio/project_01/05.png',
            'thumb': 'assets/images/portfolio/project_01/05.png',
            'subHtml': '<h4>Turn Technologies</h4><p>Here I have used technologies such as: React, NextJS, Redux, GraphQL, Apollo, TailwindCSS, ESLint, Prettify, AWS, Python, among others.</p>'
        }, {
            'src': 'assets/images/portfolio/project_01/06.png',
            'thumb': 'assets/images/portfolio/project_01/06.png',
            'subHtml': '<h4>Turn Technologies</h4><p>Here I have used technologies such as: React, NextJS, Redux, GraphQL, Apollo, TailwindCSS, ESLint, Prettify, AWS, Python, among others.</p>'
        }, {
            'src': 'assets/images/portfolio/project_01/07.png',
            'thumb': 'assets/images/portfolio/project_01/07.png',
            'subHtml': '<h4>Turn Technologies</h4><p>Here I have used technologies such as: React, NextJS, Redux, GraphQL, Apollo, TailwindCSS, ESLint, Prettify, AWS, Python, among others.</p>'
        }, {
            'src': 'assets/images/portfolio/project_01/08.png',
            'thumb': 'assets/images/portfolio/project_01/08.png',
            'subHtml': '<h4>Turn Technologies</h4><p>Here I have used technologies such as: React, NextJS, Redux, GraphQL, Apollo, TailwindCSS, ESLint, Prettify, AWS, Python, among others.</p>'
        }, {
            'src': 'assets/images/portfolio/project_01/09.png',
            'thumb': 'assets/images/portfolio/project_01/09.png',
            'subHtml': '<h4>Turn Technologies</h4><p>Here I have used technologies such as: React, NextJS, Redux, GraphQL, Apollo, TailwindCSS, ESLint, Prettify, AWS, Python, among others.</p>'
        }, {
            'src': 'assets/images/portfolio/project_01/10.png',
            'thumb': 'assets/images/portfolio/project_01/10.png',
            'subHtml': '<h4>Turn Technologies</h4><p>Here I have used technologies such as: React, NextJS, Redux, GraphQL, Apollo, TailwindCSS, ESLint, Prettify, AWS, Python, among others.</p>'
        }, {
            'src': 'assets/images/portfolio/project_01/11.png',
            'thumb': 'assets/images/portfolio/project_01/11.png',
            'subHtml': '<h4>Turn Technologies</h4><p>Here I have used technologies such as: React, NextJS, Redux, GraphQL, Apollo, TailwindCSS, ESLint, Prettify, AWS, Python, among others.</p>'
        }]
    })
 
});

// -----------------------------------------------------------------------------
// 02 - MyEvent
// -----------------------------------------------------------------------------
document.getElementById('lightgallery2').addEventListener('click', function() {
    console.log('gallery')
    lightGallery(document.getElementById('lightgallery2'), {
        dynamic: true,
        dynamicEl: [{
            "src": 'assets/images/portfolio/project_02/02.png',
            'thumb': 'assets/images/portfolio/project_02/02.png',
            'subHtml': '<h4>MyEvent</h4><p>I used PHP and Laravel 7 on the backend, implementing a RESTful API. On the frontend I used HTML, CSS with SASS as a precompiled, and vanilla Javascript. I implemented libraries like DomPDF and QR generator. NodeJS and npm were used to install some modules, too. Started working on the implementation of a QR code validation app using React Native.</p>'
        }, {
            'src': 'assets/images/portfolio/project_02/03.png',
            'thumb': 'assets/images/portfolio/project_02/03.png',
            'subHtml': '<h4>MyEvent</h4><p>I used PHP and Laravel 7 on the backend, implementing a RESTful API. On the frontend I used HTML, CSS with SASS as a precompiled, and vanilla Javascript. I implemented libraries like DomPDF and QR generator. NodeJS and npm were used to install some modules, too. Started working on the implementation of a QR code validation app using React Native.</p>'
        }, {
            'src': 'assets/images/portfolio/project_02/04.png',
            'thumb': 'assets/images/portfolio/project_02/04.png',
            'subHtml': '<h4>MyEvent</h4><p>I used PHP and Laravel 7 on the backend, implementing a RESTful API. On the frontend I used HTML, CSS with SASS as a precompiled, and vanilla Javascript. I implemented libraries like DomPDF and QR generator. NodeJS and npm were used to install some modules, too. Started working on the implementation of a QR code validation app using React Native.</p>'
        }, {
            'src': 'assets/images/portfolio/project_02/05.png',
            'thumb': 'assets/images/portfolio/project_02/05.png',
            'subHtml': '<h4>MyEvent</h4><p>I used PHP and Laravel 7 on the backend, implementing a RESTful API. On the frontend I used HTML, CSS with SASS as a precompiled, and vanilla Javascript. I implemented libraries like DomPDF and QR generator. NodeJS and npm were used to install some modules, too. Started working on the implementation of a QR code validation app using React Native.</p>'
        }, {
            'src': 'assets/images/portfolio/project_02/06.png',
            'thumb': 'assets/images/portfolio/project_02/06.png',
            'subHtml': '<h4>MyEvent</h4><p>I used PHP and Laravel 7 on the backend, implementing a RESTful API. On the frontend I used HTML, CSS with SASS as a precompiled, and vanilla Javascript. I implemented libraries like DomPDF and QR generator. NodeJS and npm were used to install some modules, too. Started working on the implementation of a QR code validation app using React Native.</p>'
        }, {
            'src': 'assets/images/portfolio/project_02/07.png',
            'thumb': 'assets/images/portfolio/project_02/07.png',
            'subHtml': '<h4>MyEvent</h4><p>I used PHP and Laravel 7 on the backend, implementing a RESTful API. On the frontend I used HTML, CSS with SASS as a precompiled, and vanilla Javascript. I implemented libraries like DomPDF and QR generator. NodeJS and npm were used to install some modules, too. Started working on the implementation of a QR code validation app using React Native.</p>'
        }, {
            'src': 'assets/images/portfolio/project_02/08.png',
            'thumb': 'assets/images/portfolio/project_02/08.png',
            'subHtml': '<h4>MyEvent</h4><p>I used PHP and Laravel 7 on the backend, implementing a RESTful API. On the frontend I used HTML, CSS with SASS as a precompiled, and vanilla Javascript. I implemented libraries like DomPDF and QR generator. NodeJS and npm were used to install some modules, too. Started working on the implementation of a QR code validation app using React Native.</p>'
        }, {
            'src': 'assets/images/portfolio/project_02/09.png',
            'thumb': 'assets/images/portfolio/project_02/09.png',
            'subHtml': '<h4>MyEvent</h4><p>I used PHP and Laravel 7 on the backend, implementing a RESTful API. On the frontend I used HTML, CSS with SASS as a precompiled, and vanilla Javascript. I implemented libraries like DomPDF and QR generator. NodeJS and npm were used to install some modules, too. Started working on the implementation of a QR code validation app using React Native.</p>'
        }, {
            'src': 'assets/images/portfolio/project_02/10.png',
            'thumb': 'assets/images/portfolio/project_02/10.png',
            'subHtml': '<h4>MyEvent</h4><p>I used PHP and Laravel 7 on the backend, implementing a RESTful API. On the frontend I used HTML, CSS with SASS as a precompiled, and vanilla Javascript. I implemented libraries like DomPDF and QR generator. NodeJS and npm were used to install some modules, too. Started working on the implementation of a QR code validation app using React Native.</p>'
        }, {
            'src': 'assets/images/portfolio/project_02/11.png',
            'thumb': 'assets/images/portfolio/project_02/11.png',
            'subHtml': '<h4>MyEvent</h4><p>I used PHP and Laravel 7 on the backend, implementing a RESTful API. On the frontend I used HTML, CSS with SASS as a precompiled, and vanilla Javascript. I implemented libraries like DomPDF and QR generator. NodeJS and npm were used to install some modules, too. Started working on the implementation of a QR code validation app using React Native.</p>'
        }, {
            'src': 'assets/images/portfolio/project_02/12.png',
            'thumb': 'assets/images/portfolio/project_02/12.png',
            'subHtml': '<h4>MyEvent</h4><p>I used PHP and Laravel 7 on the backend, implementing a RESTful API. On the frontend I used HTML, CSS with SASS as a precompiled, and vanilla Javascript. I implemented libraries like DomPDF and QR generator. NodeJS and npm were used to install some modules, too. Started working on the implementation of a QR code validation app using React Native.</p>'
        }]
    })
});


// -----------------------------------------------------------------------------
// 03 - Anqarapp
// -----------------------------------------------------------------------------
document.getElementById('lightgallery3').addEventListener('click', function() {
    console.log('gallery')
    lightGallery(document.getElementById('lightgallery3'), {
        dynamic: true,
        dynamicEl: [{
            "src": 'assets/images/portfolio/project_03/02.png',
            'thumb': 'assets/images/portfolio/project_03/02.png',
            'subHtml': '<h4>MyEvent</h4><p>I used PHP and Laravel 7 on the backend, implementing a RESTful API. On the frontend I used HTML, CSS with SASS as a precompiled, and vanilla Javascript. I implemented libraries like DomPDF and QR generator. NodeJS and npm were used to install some modules, too. Started working on the implementation of a QR code validation app using React Native.</p>'
        }, {
            'src': 'assets/images/portfolio/project_03/03.png',
            'thumb': 'assets/images/portfolio/project_03/03.png',
            'subHtml': '<h4>MyEvent</h4><p>I used PHP and Laravel 7 on the backend, implementing a RESTful API. On the frontend I used HTML, CSS with SASS as a precompiled, and vanilla Javascript. I implemented libraries like DomPDF and QR generator. NodeJS and npm were used to install some modules, too. Started working on the implementation of a QR code validation app using React Native.</p>'
        }, {
            'src': 'assets/images/portfolio/project_03/04.png',
            'thumb': 'assets/images/portfolio/project_03/04.png',
            'subHtml': '<h4>MyEvent</h4><p>I used PHP and Laravel 7 on the backend, implementing a RESTful API. On the frontend I used HTML, CSS with SASS as a precompiled, and vanilla Javascript. I implemented libraries like DomPDF and QR generator. NodeJS and npm were used to install some modules, too. Started working on the implementation of a QR code validation app using React Native.</p>'
        }, {
            'src': 'assets/images/portfolio/project_03/05.png',
            'thumb': 'assets/images/portfolio/project_03/05.png',
            'subHtml': '<h4>MyEvent</h4><p>I used PHP and Laravel 7 on the backend, implementing a RESTful API. On the frontend I used HTML, CSS with SASS as a precompiled, and vanilla Javascript. I implemented libraries like DomPDF and QR generator. NodeJS and npm were used to install some modules, too. Started working on the implementation of a QR code validation app using React Native.</p>'
        }, {
            'src': 'assets/images/portfolio/project_03/06.png',
            'thumb': 'assets/images/portfolio/project_03/06.png',
            'subHtml': '<h4>MyEvent</h4><p>I used PHP and Laravel 7 on the backend, implementing a RESTful API. On the frontend I used HTML, CSS with SASS as a precompiled, and vanilla Javascript. I implemented libraries like DomPDF and QR generator. NodeJS and npm were used to install some modules, too. Started working on the implementation of a QR code validation app using React Native.</p>'
        }, {
            'src': 'assets/images/portfolio/project_03/07.png',
            'thumb': 'assets/images/portfolio/project_03/07.png',
            'subHtml': '<h4>MyEvent</h4><p>I used PHP and Laravel 7 on the backend, implementing a RESTful API. On the frontend I used HTML, CSS with SASS as a precompiled, and vanilla Javascript. I implemented libraries like DomPDF and QR generator. NodeJS and npm were used to install some modules, too. Started working on the implementation of a QR code validation app using React Native.</p>'
        }, {
            'src': 'assets/images/portfolio/project_03/08.png',
            'thumb': 'assets/images/portfolio/project_03/08.png',
            'subHtml': '<h4>MyEvent</h4><p>I used PHP and Laravel 7 on the backend, implementing a RESTful API. On the frontend I used HTML, CSS with SASS as a precompiled, and vanilla Javascript. I implemented libraries like DomPDF and QR generator. NodeJS and npm were used to install some modules, too. Started working on the implementation of a QR code validation app using React Native.</p>'
        }]
    })
 
});


// -----------------------------------------------------------------------------
// 04 - Masa
// -----------------------------------------------------------------------------
document.getElementById('lightgallery4').addEventListener('click', function() {
    console.log('gallery')
    lightGallery(document.getElementById('lightgallery4'), {
        dynamic: true,
        dynamicEl: [{
            "src": 'assets/images/portfolio/project_04/02.png',
            'thumb': 'assets/images/portfolio/project_04/02.png',
            'subHtml': '<h4>Masa</h4><p>Masa is the first media center in Peru. I was in charge of designing, developing and deploying their website. Also, implement a cloud architecture that allowed the company to work remotely.</p>'
        }, {
            'src': 'assets/images/portfolio/project_04/03.png',
            'thumb': 'assets/images/portfolio/project_04/03.png',
            'subHtml': '<h4>Masa</h4><p>Masa is the first media center in Peru. I was in charge of designing, developing and deploying their website. Also, implement a cloud architecture that allowed the company to work remotely.</p>'
        }, {
            'src': 'assets/images/portfolio/project_04/04.png',
            'thumb': 'assets/images/portfolio/project_04/04.png',
            'subHtml': '<h4>Masa</h4><p>Masa is the first media center in Peru. I was in charge of designing, developing and deploying their website. Also, implement a cloud architecture that allowed the company to work remotely.</p>'
        }, {
            'src': 'assets/images/portfolio/project_04/05.png',
            'thumb': 'assets/images/portfolio/project_04/05.png',
            'subHtml': '<h4>Masa</h4><p>Masa is the first media center in Peru. I was in charge of designing, developing and deploying their website. Also, implement a cloud architecture that allowed the company to work remotely.</p>'
        }, {
            'src': 'assets/images/portfolio/project_04/06.png',
            'thumb': 'assets/images/portfolio/project_04/06.png',
            'subHtml': '<h4>Masa</h4><p>Masa is the first media center in Peru. I was in charge of designing, developing and deploying their website. Also, implement a cloud architecture that allowed the company to work remotely.</p>'
        }, {
            'src': 'assets/images/portfolio/project_04/07.png',
            'thumb': 'assets/images/portfolio/project_04/07.png',
            'subHtml': '<h4>Masa</h4><p>Masa is the first media center in Peru. I was in charge of designing, developing and deploying their website. Also, implement a cloud architecture that allowed the company to work remotely.</p>'
        }]
    })
 
});

// -----------------------------------------------------------------------------
// 05 - Cepeban
// -----------------------------------------------------------------------------
document.getElementById('lightgallery5').addEventListener('click', function() {
    console.log('gallery')
    lightGallery(document.getElementById('lightgallery5'), {
        dynamic: true,
        dynamicEl: [{
            "src": 'assets/images/portfolio/project_05/02.png',
            'thumb': 'assets/images/portfolio/project_05/02.png',
            'subHtml': '<h4>Cepeban School Website</h4><p>I designed, coded and deployed this website using HTML, CSS and Vanilla JS</p>'
        }, {
            'src': 'assets/images/portfolio/project_05/03.png',
            'thumb': 'assets/images/portfolio/project_05/03.png',
            'subHtml': '<h4>Cepeban School Website</h4><p>I designed, coded and deployed this website using HTML, CSS and Vanilla JS</p>'
        }, {
            'src': 'assets/images/portfolio/project_05/04.png',
            'thumb': 'assets/images/portfolio/project_05/04.png',
            'subHtml': '<h4>Cepeban School Website</h4><p>I designed, coded and deployed this website using HTML, CSS and Vanilla JS</p>'
        }, {
            'src': 'assets/images/portfolio/project_05/05.png',
            'thumb': 'assets/images/portfolio/project_05/05.png',
            'subHtml': '<h4>Cepeban School Website</h4><p>I designed, coded and deployed this website using HTML, CSS and Vanilla JS</p>'
        }, {
            'src': 'assets/images/portfolio/project_05/06.png',
            'thumb': 'assets/images/portfolio/project_05/06.png',
            'subHtml': '<h4>Cepeban School Website</h4><p>I designed, coded and deployed this website using HTML, CSS and Vanilla JS</p>'
        }, {
            'src': 'assets/images/portfolio/project_05/07.png',
            'thumb': 'assets/images/portfolio/project_05/07.png',
            'subHtml': '<h4>Cepeban School Website</h4><p>I designed, coded and deployed this website using HTML, CSS and Vanilla JS</p>'
        }]
    })
});



// -----------------------------------------------------------------------------
// 06 - AmbarTravel
// -----------------------------------------------------------------------------
document.getElementById('lightgallery6').addEventListener('click', function() {
    console.log('gallery')
    lightGallery(document.getElementById('lightgallery6'), {
        dynamic: true,
        dynamicEl: [{
            "src": 'assets/images/portfolio/project_06/02.png',
            'thumb': 'assets/images/portfolio/project_06/02.png',
            'subHtml': '<h4>AmbarTravel</h4><p>Development of a multiplatform system in the cloud using AWS services (S3, RDS & EC2). The software implemented Laravel 8, PHP, JavaScript, CSS, HTML, Livewire, TailwindCSS, SASS, AlpineJS, MySQL, and libraries like Voyager, Debugbar, etc. Implementation of the NodeJS and Costamar API to quote packages in real-time.</p>'
        }, {
            'src': 'assets/images/portfolio/project_06/03.png',
            'thumb': 'assets/images/portfolio/project_06/03.png',
            'subHtml': '<h4>AmbarTravel</h4><p>Development of a multiplatform system in the cloud using AWS services (S3, RDS & EC2). The software implemented Laravel 8, PHP, JavaScript, CSS, HTML, Livewire, TailwindCSS, SASS, AlpineJS, MySQL, and libraries like Voyager, Debugbar, etc. Implementation of the NodeJS and Costamar API to quote packages in real-time.</p>'
        }, {
            'src': 'assets/images/portfolio/project_06/04.png',
            'thumb': 'assets/images/portfolio/project_06/04.png',
            'subHtml': '<h4>AmbarTravel</h4><p>Development of a multiplatform system in the cloud using AWS services (S3, RDS & EC2). The software implemented Laravel 8, PHP, JavaScript, CSS, HTML, Livewire, TailwindCSS, SASS, AlpineJS, MySQL, and libraries like Voyager, Debugbar, etc. Implementation of the NodeJS and Costamar API to quote packages in real-time.</p>'
        }, {
            'src': 'assets/images/portfolio/project_06/05.png',
            'thumb': 'assets/images/portfolio/project_06/05.png',
            'subHtml': '<h4>AmbarTravel</h4><p>Development of a multiplatform system in the cloud using AWS services (S3, RDS & EC2). The software implemented Laravel 8, PHP, JavaScript, CSS, HTML, Livewire, TailwindCSS, SASS, AlpineJS, MySQL, and libraries like Voyager, Debugbar, etc. Implementation of the NodeJS and Costamar API to quote packages in real-time.</p>'
        }, {
            'src': 'assets/images/portfolio/project_06/06.png',
            'thumb': 'assets/images/portfolio/project_06/06.png',
            'subHtml': '<h4>AmbarTravel</h4><p>Development of a multiplatform system in the cloud using AWS services (S3, RDS & EC2). The software implemented Laravel 8, PHP, JavaScript, CSS, HTML, Livewire, TailwindCSS, SASS, AlpineJS, MySQL, and libraries like Voyager, Debugbar, etc. Implementation of the NodeJS and Costamar API to quote packages in real-time.</p>'
        }, {
            'src': 'assets/images/portfolio/project_06/07.png',
            'thumb': 'assets/images/portfolio/project_06/07.png',
            'subHtml': '<h4>AmbarTravel</h4><p>Development of a multiplatform system in the cloud using AWS services (S3, RDS & EC2). The software implemented Laravel 8, PHP, JavaScript, CSS, HTML, Livewire, TailwindCSS, SASS, AlpineJS, MySQL, and libraries like Voyager, Debugbar, etc. Implementation of the NodeJS and Costamar API to quote packages in real-time.</p>'
        }, {
            'src': 'assets/images/portfolio/project_06/08.png',
            'thumb': 'assets/images/portfolio/project_06/08.png',
            'subHtml': '<h4>AmbarTravel</h4><p>Development of a multiplatform system in the cloud using AWS services (S3, RDS & EC2). The software implemented Laravel 8, PHP, JavaScript, CSS, HTML, Livewire, TailwindCSS, SASS, AlpineJS, MySQL, and libraries like Voyager, Debugbar, etc. Implementation of the NodeJS and Costamar API to quote packages in real-time.</p>'
        }, {
            'src': 'assets/images/portfolio/project_06/09.png',
            'thumb': 'assets/images/portfolio/project_06/09.png',
            'subHtml': '<h4>AmbarTravel</h4><p>Development of a multiplatform system in the cloud using AWS services (S3, RDS & EC2). The software implemented Laravel 8, PHP, JavaScript, CSS, HTML, Livewire, TailwindCSS, SASS, AlpineJS, MySQL, and libraries like Voyager, Debugbar, etc. Implementation of the NodeJS and Costamar API to quote packages in real-time.</p>'
        }, {
            'src': 'assets/images/portfolio/project_06/10.png',
            'thumb': 'assets/images/portfolio/project_06/10.png',
            'subHtml': '<h4>AmbarTravel</h4><p>Development of a multiplatform system in the cloud using AWS services (S3, RDS & EC2). The software implemented Laravel 8, PHP, JavaScript, CSS, HTML, Livewire, TailwindCSS, SASS, AlpineJS, MySQL, and libraries like Voyager, Debugbar, etc. Implementation of the NodeJS and Costamar API to quote packages in real-time.</p>'
        }, {
            'src': 'assets/images/portfolio/project_06/11.png',
            'thumb': 'assets/images/portfolio/project_06/11.png',
            'subHtml': '<h4>AmbarTravel</h4><p>Development of a multiplatform system in the cloud using AWS services (S3, RDS & EC2). The software implemented Laravel 8, PHP, JavaScript, CSS, HTML, Livewire, TailwindCSS, SASS, AlpineJS, MySQL, and libraries like Voyager, Debugbar, etc. Implementation of the NodeJS and Costamar API to quote packages in real-time.</p>'
        }]
    })
});


// -----------------------------------------------------------------------------
// 07 - VacunaTravel
// -----------------------------------------------------------------------------
document.getElementById('lightgallery7').addEventListener('click', function() {
    console.log('gallery')
    lightGallery(document.getElementById('lightgallery7'), {
        dynamic: true,
        dynamicEl: [{
            "src": 'assets/images/portfolio/project_07/02.png',
            'thumb': 'assets/images/portfolio/project_07/02.png',
            'subHtml': '<h4>VacunaTravel</h4><p>VacunaTravel was my second start-up focused on helping families from all over Latin America get vaccinated in the US during the pandemic.</p>'
        }, {
            'src': 'assets/images/portfolio/project_07/03.png',
            'thumb': 'assets/images/portfolio/project_07/03.png',
            'subHtml': '<h4>VacunaTravel</h4><p>VacunaTravel was my second start-up focused on helping families from all over Latin America get vaccinated in the US during the pandemic.</p>'
        }, {
            'src': 'assets/images/portfolio/project_07/04.png',
            'thumb': 'assets/images/portfolio/project_07/04.png',
            'subHtml': '<h4>VacunaTravel</h4><p>VacunaTravel was my second start-up focused on helping families from all over Latin America get vaccinated in the US during the pandemic.</p>'
        }, {
            'src': 'assets/images/portfolio/project_07/05.png',
            'thumb': 'assets/images/portfolio/project_07/05.png',
            'subHtml': '<h4>VacunaTravel</h4><p>VacunaTravel was my second start-up focused on helping families from all over Latin America get vaccinated in the US during the pandemic.</p>'
        }, {
            'src': 'assets/images/portfolio/project_07/06.png',
            'thumb': 'assets/images/portfolio/project_07/06.png',
            'subHtml': '<h4>VacunaTravel</h4><p>VacunaTravel was my second start-up focused on helping families from all over Latin America get vaccinated in the US during the pandemic.</p>'
        }, {
            'src': 'assets/images/portfolio/project_07/07.png',
            'thumb': 'assets/images/portfolio/project_07/07.png',
            'subHtml': '<h4>VacunaTravel</h4><p>VacunaTravel was my second start-up focused on helping families from all over Latin America get vaccinated in the US during the pandemic.</p>'
        }, {
            'src': 'assets/images/portfolio/project_07/08.png',
            'thumb': 'assets/images/portfolio/project_07/08.png',
            'subHtml': '<h4>VacunaTravel</h4><p>VacunaTravel was my second start-up focused on helping families from all over Latin America get vaccinated in the US during the pandemic.</p>'
        }, {
            'src': 'assets/images/portfolio/project_07/09.png',
            'thumb': 'assets/images/portfolio/project_07/09.png',
            'subHtml': '<h4>VacunaTravel</h4><p>VacunaTravel was my second start-up focused on helping families from all over Latin America get vaccinated in the US during the pandemic.</p>'
        }, {
            'src': 'assets/images/portfolio/project_07/10.png',
            'thumb': 'assets/images/portfolio/project_07/10.png',
            'subHtml': '<h4>VacunaTravel</h4><p>VacunaTravel was my second start-up focused on helping families from all over Latin America get vaccinated in the US during the pandemic.</p>'
        }, {
            'src': 'assets/images/portfolio/project_07/11.png',
            'thumb': 'assets/images/portfolio/project_07/11.png',
            'subHtml': '<h4>VacunaTravel</h4><p>VacunaTravel was my second start-up focused on helping families from all over Latin America get vaccinated in the US during the pandemic.</p>'
        }, {
            'src': 'assets/images/portfolio/project_07/12.png',
            'thumb': 'assets/images/portfolio/project_07/12.png',
            'subHtml': '<h4>VacunaTravel</h4><p>VacunaTravel was my second start-up focused on helping families from all over Latin America get vaccinated in the US during the pandemic.</p>'
        }]
    })
});


// -----------------------------------------------------------------------------
// 08 - Mentores
// -----------------------------------------------------------------------------
document.getElementById('lightgallery8').addEventListener('click', function() {
    console.log('gallery')
    lightGallery(document.getElementById('lightgallery8'), {
        dynamic: true,
        dynamicEl: [{
            "src": 'assets/images/portfolio/project_08/02.png',
            'thumb': 'assets/images/portfolio/project_08/02.png',
            'subHtml': '<h4>Mentores</h4><p>Software development of a multiplatform web system using PHP, Laravel 8, AlpineJS, TailwindCSS, SASS, JavaScript, HTML, CSS, Composer, Voyager, MySQL, and DomPDF. QR code validation. Use of APIs from Facebook, Google, LinkedIn, Vimeo, Paypal, and MercadoPago. Development of a 5-tier architecture using Route53, RDS, EC2 with Ubuntu, S3 with IAM credentials & security policies and external services. Development of algorithms for uploading heavy files by chunks to avoid overloading servers.</p>'
        }, {
            'src': 'assets/images/portfolio/project_08/03.png',
            'thumb': 'assets/images/portfolio/project_08/03.png',
            'subHtml': '<h4>Mentores</h4><p>Software development of a multiplatform web system using PHP, Laravel 8, AlpineJS, TailwindCSS, SASS, JavaScript, HTML, CSS, Composer, Voyager, MySQL, and DomPDF. QR code validation. Use of APIs from Facebook, Google, LinkedIn, Vimeo, Paypal, and MercadoPago. Development of a 5-tier architecture using Route53, RDS, EC2 with Ubuntu, S3 with IAM credentials & security policies and external services. Development of algorithms for uploading heavy files by chunks to avoid overloading servers.</p>'
        }, {
            'src': 'assets/images/portfolio/project_08/04.png',
            'thumb': 'assets/images/portfolio/project_08/04.png',
            'subHtml': '<h4>Mentores</h4><p>Software development of a multiplatform web system using PHP, Laravel 8, AlpineJS, TailwindCSS, SASS, JavaScript, HTML, CSS, Composer, Voyager, MySQL, and DomPDF. QR code validation. Use of APIs from Facebook, Google, LinkedIn, Vimeo, Paypal, and MercadoPago. Development of a 5-tier architecture using Route53, RDS, EC2 with Ubuntu, S3 with IAM credentials & security policies and external services. Development of algorithms for uploading heavy files by chunks to avoid overloading servers.</p>'
        }, {
            'src': 'assets/images/portfolio/project_08/05.png',
            'thumb': 'assets/images/portfolio/project_08/05.png',
            'subHtml': '<h4>Mentores</h4><p>Software development of a multiplatform web system using PHP, Laravel 8, AlpineJS, TailwindCSS, SASS, JavaScript, HTML, CSS, Composer, Voyager, MySQL, and DomPDF. QR code validation. Use of APIs from Facebook, Google, LinkedIn, Vimeo, Paypal, and MercadoPago. Development of a 5-tier architecture using Route53, RDS, EC2 with Ubuntu, S3 with IAM credentials & security policies and external services. Development of algorithms for uploading heavy files by chunks to avoid overloading servers.</p>'
        }, {
            'src': 'assets/images/portfolio/project_08/06.png',
            'thumb': 'assets/images/portfolio/project_08/06.png',
            'subHtml': '<h4>Mentores</h4><p>Software development of a multiplatform web system using PHP, Laravel 8, AlpineJS, TailwindCSS, SASS, JavaScript, HTML, CSS, Composer, Voyager, MySQL, and DomPDF. QR code validation. Use of APIs from Facebook, Google, LinkedIn, Vimeo, Paypal, and MercadoPago. Development of a 5-tier architecture using Route53, RDS, EC2 with Ubuntu, S3 with IAM credentials & security policies and external services. Development of algorithms for uploading heavy files by chunks to avoid overloading servers.</p>'
        }, {
            'src': 'assets/images/portfolio/project_08/07.png',
            'thumb': 'assets/images/portfolio/project_08/07.png',
            'subHtml': '<h4>Mentores</h4><p>Software development of a multiplatform web system using PHP, Laravel 8, AlpineJS, TailwindCSS, SASS, JavaScript, HTML, CSS, Composer, Voyager, MySQL, and DomPDF. QR code validation. Use of APIs from Facebook, Google, LinkedIn, Vimeo, Paypal, and MercadoPago. Development of a 5-tier architecture using Route53, RDS, EC2 with Ubuntu, S3 with IAM credentials & security policies and external services. Development of algorithms for uploading heavy files by chunks to avoid overloading servers.</p>'
        }, {
            'src': 'assets/images/portfolio/project_08/08.png',
            'thumb': 'assets/images/portfolio/project_08/08.png',
            'subHtml': '<h4>Mentores</h4><p>Software development of a multiplatform web system using PHP, Laravel 8, AlpineJS, TailwindCSS, SASS, JavaScript, HTML, CSS, Composer, Voyager, MySQL, and DomPDF. QR code validation. Use of APIs from Facebook, Google, LinkedIn, Vimeo, Paypal, and MercadoPago. Development of a 5-tier architecture using Route53, RDS, EC2 with Ubuntu, S3 with IAM credentials & security policies and external services. Development of algorithms for uploading heavy files by chunks to avoid overloading servers.</p>'
        }, {
            'src': 'assets/images/portfolio/project_08/09.png',
            'thumb': 'assets/images/portfolio/project_08/09.png',
            'subHtml': '<h4>Mentores</h4><p>Software development of a multiplatform web system using PHP, Laravel 8, AlpineJS, TailwindCSS, SASS, JavaScript, HTML, CSS, Composer, Voyager, MySQL, and DomPDF. QR code validation. Use of APIs from Facebook, Google, LinkedIn, Vimeo, Paypal, and MercadoPago. Development of a 5-tier architecture using Route53, RDS, EC2 with Ubuntu, S3 with IAM credentials & security policies and external services. Development of algorithms for uploading heavy files by chunks to avoid overloading servers.</p>'
        }, {
            'src': 'assets/images/portfolio/project_08/10.png',
            'thumb': 'assets/images/portfolio/project_08/10.png',
            'subHtml': '<h4>Mentores</h4><p>Software development of a multiplatform web system using PHP, Laravel 8, AlpineJS, TailwindCSS, SASS, JavaScript, HTML, CSS, Composer, Voyager, MySQL, and DomPDF. QR code validation. Use of APIs from Facebook, Google, LinkedIn, Vimeo, Paypal, and MercadoPago. Development of a 5-tier architecture using Route53, RDS, EC2 with Ubuntu, S3 with IAM credentials & security policies and external services. Development of algorithms for uploading heavy files by chunks to avoid overloading servers.</p>'
        }, {
            'src': 'assets/images/portfolio/project_08/11.png',
            'thumb': 'assets/images/portfolio/project_08/11.png',
            'subHtml': '<h4>Mentores</h4><p>Software development of a multiplatform web system using PHP, Laravel 8, AlpineJS, TailwindCSS, SASS, JavaScript, HTML, CSS, Composer, Voyager, MySQL, and DomPDF. QR code validation. Use of APIs from Facebook, Google, LinkedIn, Vimeo, Paypal, and MercadoPago. Development of a 5-tier architecture using Route53, RDS, EC2 with Ubuntu, S3 with IAM credentials & security policies and external services. Development of algorithms for uploading heavy files by chunks to avoid overloading servers.</p>'
        }, {
            'src': 'assets/images/portfolio/project_08/12.png',
            'thumb': 'assets/images/portfolio/project_08/12.png',
            'subHtml': '<h4>Mentores</h4><p>Software development of a multiplatform web system using PHP, Laravel 8, AlpineJS, TailwindCSS, SASS, JavaScript, HTML, CSS, Composer, Voyager, MySQL, and DomPDF. QR code validation. Use of APIs from Facebook, Google, LinkedIn, Vimeo, Paypal, and MercadoPago. Development of a 5-tier architecture using Route53, RDS, EC2 with Ubuntu, S3 with IAM credentials & security policies and external services. Development of algorithms for uploading heavy files by chunks to avoid overloading servers.</p>'
        }, {
            'src': 'assets/images/portfolio/project_08/13.png',
            'thumb': 'assets/images/portfolio/project_08/13.png',
            'subHtml': '<h4>Mentores</h4><p>Software development of a multiplatform web system using PHP, Laravel 8, AlpineJS, TailwindCSS, SASS, JavaScript, HTML, CSS, Composer, Voyager, MySQL, and DomPDF. QR code validation. Use of APIs from Facebook, Google, LinkedIn, Vimeo, Paypal, and MercadoPago. Development of a 5-tier architecture using Route53, RDS, EC2 with Ubuntu, S3 with IAM credentials & security policies and external services. Development of algorithms for uploading heavy files by chunks to avoid overloading servers.</p>'
        }]
    })
});


// -----------------------------------------------------------------------------
// 09 - Eventify
// -----------------------------------------------------------------------------
document.getElementById('lightgallery9').addEventListener('click', function() {
    console.log('gallery')
    lightGallery(document.getElementById('lightgallery9'), {
        dynamic: true,
        dynamicEl: [{
            "src": 'assets/images/portfolio/project_09/02.png',
            'thumb': 'assets/images/portfolio/project_09/02.png',
            'subHtml': '<h4>Eventify</h4><p>3-tier architecture development using AWS (EC2, RDS, S3). Software development under the Deming cycle methodology and the SCRUM agile methodology. Graphic line design and brand identity. Development of a multiplatform web system using Laravel 6, using Composer and NodeJS. Interface design using Adobe XD and sketches in HTML, CSS, and JavaScript. Use of VueJS for the frontend and PHP for the backend using the Laravel framework and queries via RESTful API. Implementation of a WordPress blog within the website for SEM. Implementation of SEO positioning.</p>'
        }, {
            'src': 'assets/images/portfolio/project_09/03.png',
            'thumb': 'assets/images/portfolio/project_09/03.png',
            'subHtml': '<h4>Eventify</h4><p>3-tier architecture development using AWS (EC2, RDS, S3). Software development under the Deming cycle methodology and the SCRUM agile methodology. Graphic line design and brand identity. Development of a multiplatform web system using Laravel 6, using Composer and NodeJS. Interface design using Adobe XD and sketches in HTML, CSS, and JavaScript. Use of VueJS for the frontend and PHP for the backend using the Laravel framework and queries via RESTful API. Implementation of a WordPress blog within the website for SEM. Implementation of SEO positioning.</p>'
        }, {
            'src': 'assets/images/portfolio/project_09/04.png',
            'thumb': 'assets/images/portfolio/project_09/04.png',
            'subHtml': '<h4>Eventify</h4><p>3-tier architecture development using AWS (EC2, RDS, S3). Software development under the Deming cycle methodology and the SCRUM agile methodology. Graphic line design and brand identity. Development of a multiplatform web system using Laravel 6, using Composer and NodeJS. Interface design using Adobe XD and sketches in HTML, CSS, and JavaScript. Use of VueJS for the frontend and PHP for the backend using the Laravel framework and queries via RESTful API. Implementation of a WordPress blog within the website for SEM. Implementation of SEO positioning.</p>'
        }]
    })
});


// -----------------------------------------------------------------------------
// 10 - Eventify
// -----------------------------------------------------------------------------
document.getElementById('lightgallery10').addEventListener('click', function() {
    console.log('gallery')
    lightGallery(document.getElementById('lightgallery10'), {
        dynamic: true,
        dynamicEl: [{
            "src": 'assets/images/portfolio/project_10/02.png',
            'thumb': 'assets/images/portfolio/project_10/02.png',
            'subHtml': '<h4>AccesoDirecto</h4><p>Design of a multiplatform web system in the cloud using a two-tier architecture and Azure services. I used PHP and Laravel 6 on the backend and on the frontend, I used VueJS, HTML, CSS with SASS as precompiled, and vanilla Javascript.</p>'
        }, {
            'src': 'assets/images/portfolio/project_10/03.png',
            'thumb': 'assets/images/portfolio/project_10/03.png',
            'subHtml': '<h4>AccesoDirecto</h4><p>Design of a multiplatform web system in the cloud using a two-tier architecture and Azure services. I used PHP and Laravel 6 on the backend and on the frontend, I used VueJS, HTML, CSS with SASS as precompiled, and vanilla Javascript.</p>'
        }, {
            'src': 'assets/images/portfolio/project_10/04.png',
            'thumb': 'assets/images/portfolio/project_10/04.png',
            'subHtml': '<h4>AccesoDirecto</h4><p>Design of a multiplatform web system in the cloud using a two-tier architecture and Azure services. I used PHP and Laravel 6 on the backend and on the frontend, I used VueJS, HTML, CSS with SASS as precompiled, and vanilla Javascript.</p>'
        }, {
            'src': 'assets/images/portfolio/project_10/05.png',
            'thumb': 'assets/images/portfolio/project_10/05.png',
            'subHtml': '<h4>AccesoDirecto</h4><p>Design of a multiplatform web system in the cloud using a two-tier architecture and Azure services. I used PHP and Laravel 6 on the backend and on the frontend, I used VueJS, HTML, CSS with SASS as precompiled, and vanilla Javascript.</p>'
        }, {
            'src': 'assets/images/portfolio/project_10/06.png',
            'thumb': 'assets/images/portfolio/project_10/06.png',
            'subHtml': '<h4>AccesoDirecto</h4><p>Design of a multiplatform web system in the cloud using a two-tier architecture and Azure services. I used PHP and Laravel 6 on the backend and on the frontend, I used VueJS, HTML, CSS with SASS as precompiled, and vanilla Javascript.</p>'
        }]
    })
});

// =============================================================================
// AWARDS
// =============================================================================

// -----------------------------------------------------------------------------
// 01 - President & Congress
// -----------------------------------------------------------------------------
document.getElementById('awardGallery1').addEventListener('click', function() {
    console.log('gallery')
    lightGallery(document.getElementById('awardGallery1'), {
        dynamic: true,
        dynamicEl: [{
            "src": 'assets/images/awards/01/01.jpg',
            'thumb': 'assets/images/awards/01/01.jpg',
            'subHtml': '<h4>Academic Excellence Award by the Peruvian President and Congress</h4><p>After returning from China and before leaving for Harvard, the Government of Peru awarded me both on behalf of the President of the Republic and on behalf of the Congress of the Republic.</p>'
        }, {
            'src': 'assets/images/awards/01/02.jpg',
            'thumb': 'assets/images/awards/01/02.jpg',
            'subHtml': '<h4>Academic Excellence Award by the Peruvian President and Congress</h4><p>After returning from China and before leaving for Harvard, the Government of Peru awarded me both on behalf of the President of the Republic and on behalf of the Congress of the Republic.</p>'
        }, {
            'src': 'assets/images/awards/01/03.jpg',
            'thumb': 'assets/images/awards/01/03.jpg',
            'subHtml': '<h4>Academic Excellence Award by the Peruvian President and Congress</h4><p>After returning from China and before leaving for Harvard, the Government of Peru awarded me both on behalf of the President of the Republic and on behalf of the Congress of the Republic.</p>'
        }, {
            'src': 'assets/images/awards/01/04.jpg',
            'thumb': 'assets/images/awards/01/04.jpg',
            'subHtml': '<h4>Academic Excellence Award by the Peruvian President and Congress</h4><p>After returning from China and before leaving for Harvard, the Government of Peru awarded me both on behalf of the President of the Republic and on behalf of the Congress of the Republic.</p>'
        }]
    })
});

// -----------------------------------------------------------------------------
// 02 - Harvard
// -----------------------------------------------------------------------------
document.getElementById('awardGallery1').addEventListener('click', function() {
    console.log('gallery')
    lightGallery(document.getElementById('awardGallery1'), {
        dynamic: true,
        dynamicEl: [{
            "src": 'assets/images/awards/02/01.jpg',
            'thumb': 'assets/images/awards/02/01.jpg',
            'subHtml': '<h4>Harvard Student Leader for the 21st Century</h4><p>Being part of the student program and being recognized as a Student Leader for the 21st Century by Laspau, an organization affiliated with Harvard University, was not only an honor and a privilege, but also a sign of continuing to work for the good of my country.</p>'
        }, {
            'src': 'assets/images/awards/02/02.jpg',
            'thumb': 'assets/images/awards/02/02.jpg',
            'subHtml': '<h4>Harvard Student Leader for the 21st Century</h4><p>Being part of the student program and being recognized as a Student Leader for the 21st Century by Laspau, an organization affiliated with Harvard University, was not only an honor and a privilege, but also a sign of continuing to work for the good of my country.</p>'
        }, {
            'src': 'assets/images/awards/02/03.jpg',
            'thumb': 'assets/images/awards/02/03.jpg',
            'subHtml': '<h4>Harvard Student Leader for the 21st Century</h4><p>Being part of the student program and being recognized as a Student Leader for the 21st Century by Laspau, an organization affiliated with Harvard University, was not only an honor and a privilege, but also a sign of continuing to work for the good of my country.</p>'
        }]
    })
});

// -----------------------------------------------------------------------------
// 03 - Huawei
// -----------------------------------------------------------------------------
document.getElementById('awardGallery3').addEventListener('click', function() {
    console.log('gallery')
    lightGallery(document.getElementById('awardGallery3'), {
        dynamic: true,
        dynamicEl: [{
            "src": 'assets/images/awards/03/01.jpg',
            'thumb': 'assets/images/awards/03/01.jpg',
            'subHtml': "<h4>Huawei's Seeds for the Future 2019 Winner</h4><p>Being chosen as part of the winners of the 'Huawei's Seeds for the Future' program not only represented that my entire path as a young engineer was brilliant, but also allowed me to learn much more about cutting-edge technologies that are used today in our world.</p>"
        }, {
            'src': 'assets/images/awards/03/02.jpg',
            'thumb': 'assets/images/awards/03/02.jpg',
            'subHtml': "<h4>Huawei's Seeds for the Future 2019 Winner</h4><p>Being chosen as part of the winners of the 'Huawei's Seeds for the Future' program not only represented that my entire path as a young engineer was brilliant, but also allowed me to learn much more about cutting-edge technologies that are used today in our world.</p>"
        }, {
            'src': 'assets/images/awards/03/03.jpg',
            'thumb': 'assets/images/awards/03/03.jpg',
            'subHtml': "<h4>Huawei's Seeds for the Future 2019 Winner</h4><p>Being chosen as part of the winners of the 'Huawei's Seeds for the Future' program not only represented that my entire path as a young engineer was brilliant, but also allowed me to learn much more about cutting-edge technologies that are used today in our world.</p>"
        }, {
            'src': 'assets/images/awards/03/04.jpg',
            'thumb': 'assets/images/awards/03/04.jpg',
            'subHtml': "<h4>Huawei's Seeds for the Future 2019 Winner</h4><p>Being chosen as part of the winners of the 'Huawei's Seeds for the Future' program not only represented that my entire path as a young engineer was brilliant, but also allowed me to learn much more about cutting-edge technologies that are used today in our world.</p>"
        }, {
            'src': 'assets/images/awards/03/05.jpg',
            'thumb': 'assets/images/awards/03/05.jpg',
            'subHtml': "<h4>Huawei's Seeds for the Future 2019 Winner</h4><p>Being chosen as part of the winners of the 'Huawei's Seeds for the Future' program not only represented that my entire path as a young engineer was brilliant, but also allowed me to learn much more about cutting-edge technologies that are used today in our world.</p>"
        }]
    })
});
