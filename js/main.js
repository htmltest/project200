$(document).ready(function () {
    // подсказки
    $('.tooltip').tooltipster({
        theme: 'my-custom-theme',
        maxWidth: 140
    });

    // календарь
    $(function () {
        var dateFormat = "mm/dd/yy",
            from = $("#from")
                .datepicker({
                    defaultDate: "+1w",
                    //changeMonth: true,
                    numberOfMonths: 1
                })
                .on("change", function () {
                    to.datepicker("option", "minDate", getDate(this));
                }),
            to = $("#to").datepicker({
                defaultDate: "+1w",
                //changeMonth: true,
                numberOfMonths: 1
            })
                .on("change", function () {
                    from.datepicker("option", "maxDate", getDate(this));
                });

        function getDate(element) {
            var date;
            try {
                date = $.datepicker.parseDate(dateFormat, element.value);
            } catch (error) {
                date = null;
            }

            return date;
        }
    });

    // карта
    $('.world__item').each(function () {
        var flag = $(this).attr('data-flag');
        var country = $(this).attr('data-country');
        var students = $(this).attr('data-students');
        var partners = $(this).attr('data-partners');
        var color = $(this).attr('data-color');

        $(this).on('click', function () {
            $('.world__flag').attr('src', 'images/ico/flags/' + flag + '.png');
            $('.world__country').text(country);
            $('.world__students span').text(students);
            $('.world__partners span').text(partners);
            $('.world__partners').attr('data-href', flag);
        });
    });
    $('.world__switch-btn').on('click', function () {
        var slideToggle = $('.world__students, .world__value');

        $(this).toggleClass('--active');
        $('.world__map, [data-partners]').toggleClass('--active');
        slideToggle.slideToggle(0);
    });
    $('body').on('click', '[data-href]', function () {
        var anchor = $(this).data('href');

        $("html, body").stop().animate({
                scrollTop: $('[data-anchor=' + anchor + ']').offset().top
            },
            700);
        $('.hidden-title').removeClass('--active');
        $('.hidden-inner').slideUp(150);
        $('[data-anchor=' + anchor + ']').find('.hidden-title').trigger('click');
    });

    // модалка
    $('.modal').click(function (event) {
        if ($(event.target).closest(".modal__block").length)
            return;
        $(".modal__block, .modal").fadeOut(150);
        event.stopPropagation();
    });
    $('.modal__close').click(function () {
        $('.modal, .modal__block').hide();
    });
    $('[data-modal]').on('click', function () {
        var dataModal = $(this).attr('data-modal'),
            dataId = $('#' + dataModal);
        dataId.fadeIn(150);
        $(dataId).find('.modal__block').fadeIn(150);
    });

    // только на мобильном
    if ($(window).width() < 699) {
        // найти программу
        $('.programs__grid').slick({
            slidesToShow: 1,
            //arrows: false,
            variableWidth: true,
            prevArrow: $('.department__educational-prev'),
            nextArrow: $('.department__educational-next'),
        });

        // кафедра - слайдреы внизу на мобиле
        $('.department__slider').each(function (idx) {
            $(this).attr("class", "slider__" + idx).slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: $(this).parents('.department__slider-wrap').find('.prev'),
                nextArrow: $(this).parents('.department__slider-wrap').find('.next'),
            });
        });

        // скролл
        $(window).on('scroll', function () {
            var scroll = $(this).scrollTop();

            if (scroll > 1) {
                $('.header.--index').addClass('--scroll');
            } else {
                $('.header.--index').removeClass('--scroll');
            }
            ;
        });
    }

    // выбор файла
    $('.clip-val').on('change', function () {
        var val = $(this).val().replace(/.*\\/, "");
        $('.clip-file').text(val);
    });

    // мобильное меню
    $('.hamburger').on('click', function () {
        var items = $('body, html, .header, .mobile__menu');

        items.toggleClass('--open');

        if ($('.header').hasClass('--index')) {
            $('.header').addClass('--scroll');
        }
    });

    // мобильное меню ссылки
    $('.mobile__nav-btn').on('click', function () {
        $(this).parents('.mobile__nav-item').find('.mobile__nav-list').slideToggle(150);
    });
    $('.content__nav-open').on('click', function () {
        $(this).toggleClass('--active');
        $(this).parents('.content__nav-item').find('.content__nav-hidden').slideToggle(150);
    });

    // карта сайта
    $('.header__hamburger').on('click', function () {
        $('.site-map').show();
    });
    $('.site-map__close').on('click', function () {
        $('.site-map').hide();
    });

    // прилипающая навигация
    var sticky = new Sticky('.sticky');
    sticky.update();

    // staff.html фильтр
    $('.staff__filter-title').on('click', function () {

        var parent = $(this).parents('.staff__filter');

        parent.toggleClass('--active');
        parent.find('.staff__filter-hidden').slideToggle(0);
    });

    // FAQ
    $('.instruction__item-header').on('click', function () {
        $(this).toggleClass('--active');
        $(this).parents('.instruction__item').find('.instruction__item-hidden').slideToggle(150);
    });

    // фильтр
    $('.filter__reset').on('click', function () {
        $('[type="checkbox"]').prop('checked', false);
    });
    $('.filter__btn').on('click', function () {
        $(this).parents('.filter').find('.filter__inner').slideToggle(150);
        $('.feedback__search-inner').slideToggle(150);
    });

    // раскрыть список
    $('.hidden-title').on('click', function () {
        $(this).toggleClass('--active');
        $(this).parents('.hidden-parent').find('.hidden-inner').slideToggle(150)
    });

    // аккордеон
    $('.accordion__header').click(function (e) {
        e.preventDefault();

        var $this = $(this);

        $this.toggleClass('--active')

        if ($this.next().hasClass('--active')) {
            $this.next().removeClass('--active');
            $this.next().slideUp(350);
        } else {
            $this.next().toggleClass('--active');
            $this.next().slideToggle(350);
        }
    });

    // read more
    $('.read-more__btn').on('click', function () {
        var parent = $(this).parents('.read-more');
        var text = parent.find('.read-more__text');

        if ($(this).text() === 'Read more') {
            text.addClass('--active');
            $(this).addClass('--active').text('Read less');
        } else {
            text.removeClass('--active');
            $(this).removeClass('--active').text('Read more');
        }
    });

    // табы
    $('.tab__link').click(function (e) {
        var a = $(this),
            parent = a.parents('.tab'),
            //nav = parent.children('.tab__header').children('.tab__link'),
            box = parent.children('.tab__container').children('.tab__block');

        if (!a.hasClass('active')) {
            a.addClass('active')
                .siblings().removeClass('active');

            box.eq(a.index()).addClass('active')
                .siblings().removeClass('active');
        }

        e.preventDefault();
    });

    // табы сотрудника на мобильном
    $('.employee__title').on('click', function () {
        $(this).toggleClass('--active');
        $(this).parents('.tab__block').find('.employee__hidden').slideToggle(150);
    });

    $('.feedback__slider').each(function (idx) {
        $(this).attr("class", "slider__" + idx).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: $(this).parents('.feedback__slider-wrap').find('.feedback__slider-prev'),
            nextArrow: $(this).parents('.feedback__slider-wrap').find('.feedback__slider-next'),
        });
    });

    // галерея
    $('[data-fancybox]').fancybox({
        buttons: [
            "close"
        ]
    });

    // галерея
    $('.gallery__main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.gallery__thumbs'
    });
    $('.gallery__thumbs').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.gallery__main',
        prevArrow: $('.gallery__prev'),
        nextArrow: $('.gallery__next'),
        centerPadding: 0,
        centerMode: true,
        focusOnSelect: true,

        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 4
                }
            }
        ]
    });

    // слайдер учителей
    $('.department__teachers').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        //infinite: false,
        prevArrow: $('.department__teachers-prev'),
        nextArrow: $('.department__teachers-next'),
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    // curriculum slider (educational.html)
    $('.educational__curriculum-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow: $('.educational__curriculum-prev'),
        nextArrow: $('.educational__curriculum-next'),
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false
                }
            },
        ]
    });

    // профессоры
    $('.educational__professors').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: $('.educational__professors-prev'),
        nextArrow: $('.educational__professors-next'),
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    // баннер
    var $bannerSlider = $('.banner__slider');

    $bannerSlider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        arrows: false,
        dots: true,
        appendDots: $('.banner__dots'),
        dotsClass: 'slider-dots',
        pauseOnHover: false,
    });

    $('.banner__dots li').each(function () {
        $(this).find('button').attr('data-index', $(this).index() + 1);
    });

    $bannerSlider.on('beforeChange', function () {
        $('.banner__dots .slick-active button').html('');
    }).trigger('beforeChange');

    $bannerSlider.on('afterChange', function () {
        $('.banner__dots .slick-active button').html(`<svg class="progress-svg"><g transform="translate(20,20)"><circle class="circle-go" r="19" cx="0" cy="0"></circle></g></svg>`);
    }).trigger('afterChange');

    // отзывы
    var $reviewsSlider = $('.reviews__slider');

    $reviewsSlider.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.reviews__prev'),
        nextArrow: $('.reviews__next'),
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 699,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    variableWidth: true
                }
            },
        ]
    });

    $reviewsSlider.on('afterChange', function (event, slick, currentSlide, nextSlide) {
        var calc = ((currentSlide) / (slick.slideCount - 1)) * 100;
        // счетчик
        $('.reviews__counter-current').html(slick.slickCurrentSlide() + 1);
        $('.reviews__counter-total').html(slick.slideCount);
        // прогресс бар
        $('.reviews__progress').css('background-size', calc + '% 100%')
    });

    $('.reviews__prev').trigger('click');
    setTimeout(function () {
        $('.reviews__next').trigger('click');
    }, 1000);
});
