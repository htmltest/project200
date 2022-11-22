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
    $('body').on('change', '.clip-val', function () {
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

$(window).on('load resize scroll', function() {
    var windowScroll = $(window).scrollTop();
    var windowWidth = $(window).width();
    $('body').append('<div id="body-test-height" style="position:fixed; left:0; top:0; right:0; bottom:0; z-index:-1"></div>');
    var windowHeight = $('#body-test-height').height();
    $('#body-test-height').remove();
    var headerHeight = 80;
    if (windowWidth < 768) {
        headerHeight = 70;
    }

    if (windowScroll > headerHeight) {
        $('html').addClass('header-fixed');
    } else {
        $('html').removeClass('header-fixed');
    }

    if ($('.up-link').length == 1) {
        if (windowScroll > windowHeight) {
            $('.up-link').addClass('visible');
        } else {
            $('.up-link').removeClass('visible');
        }

        if (windowScroll + windowHeight > $('.footer').offset().top) {
            $('.up-link').css({'margin-bottom': (windowScroll + windowHeight) - $('.footer').offset().top});
        } else {
            $('.up-link').css({'margin-bottom': 0});
        }
    }
});

$(document).ready(function() {
    $('body').on('click', '.window-link', function(e) {
        windowOpen($(this).attr('href'));
        e.preventDefault();
    });

    $('body').on('keyup', function(e) {
        if (e.keyCode == 27) {
            windowClose();
        }
    });

    $(document).click(function(e) {
        if ($(e.target).hasClass('window')) {
            windowClose();
        }
    });

    $('body').on('click', '.window-close, .window-close-btn', function(e) {
        windowClose();
        e.preventDefault();
    });

    $('.up-link').click(function(e) {
        $('html, body').animate({'scrollTop': 0});
        e.preventDefault();
    });

    $('body').on('click', '.form-files-list-item-remove', function(e) {
        var curLink = $(this);
        var curFiles = curLink.parents().filter('.form-files');
        $.ajax({
            type: 'GET',
            url: curLink.attr('href'),
            dataType: 'json',
            cache: false
        }).done(function(data) {
            curLink.parent().remove();
            if (curFiles.find('.form-files-list-item-progress, .form-files-list-item').length == 0) {
                curFiles.removeClass('full');
            }
            if (curFiles.find('.form-files-list-item').length == 0) {
                curFiles.find('.form-files-hidden').val('');
            }
        });
        e.preventDefault();
    });

    $('body').on('click', '.form-files-list-item-cancel', function(e) {
        var curLink = $(this);
        var curFile = curLink.parents().filter('.form-files');
        curLink.parent().remove();
        if (curFiles.find('.form-files-list-item-progress, .form-files-list-item').length == 0) {
            curFiles.removeClass('full');
        }
        if (curFiles.find('.form-files-list-item').length == 0) {
            curFiles.find('.form-files-hidden').val('');
        }
        e.preventDefault();
    });
});

function windowOpen(linkWindow, dataWindow) {
    if ($('.window').length == 0) {
        var curPadding = $('.wrapper').width();
        var curWidth = $(window).width();
        var curScroll = $(window).scrollTop();
        $('html').addClass('window-open');
        curPadding = $('.wrapper').width() - curPadding;
        $('body').css({'margin-right': curPadding + 'px'});

        $('body').append('<div class="window"><div class="window-loading"></div></div>')

        $('.wrapper').css({'top': -curScroll});
        $('.wrapper').data('curScroll', curScroll);
    } else {
        $('.window').append('<div class="window-loading"></div>')
        $('.window-container').addClass('window-container-preload');
    }

    $.ajax({
        type: 'POST',
        url: linkWindow,
        processData: false,
        contentType: false,
        dataType: 'html',
        data: dataWindow,
        cache: false
    }).done(function(html) {
        if ($('.window-container').length == 0) {
            $('.window').html('<div class="window-container window-container-preload">' + html + '<a href="#" class="window-close"></a></div>');
        } else {
            $('.window-container').html(html + '<a href="#" class="window-close"></a>');
            $('.window .window-loading').remove();
        }

        $('.window form').each(function() {
            initForm($(this));
        });

        window.setTimeout(function() {
            $('.window-container-preload').removeClass('window-container-preload');
        }, 100);

    });
}

function windowClose() {
    if ($('.window').length > 0) {
        $('.window').remove();
        $('html').removeClass('window-open');
        $('body').css({'margin-right': 0});
        $('.wrapper').css({'top': 0});
        $(window).scrollTop($('.wrapper').data('curScroll'));
    }
}

function initForm(curForm) {
    curForm.find('select').each(function() {
        var curSelect = $(this);
        var options = {
            minimumResultsForSearch: 20
        }

        if ($(window).width() > 1119) {
            options['dropdownAutoWidth'] = true;
        }

        if (curSelect.parents().filter('.window').length == 1) {
            options['dropdownParent'] = $('.window-content');
        }

        curSelect.select2(options);
    });

    curForm.find('.form-files').each(function() {
        var curFiles = $(this);
        var curInput = curFiles.find('.form-files-input input');

        var uploadURL = curInput.attr('data-uploadurl');
        var uploadFiles = curInput.attr('data-uploadfiles');
        var removeURL = curInput.attr('data-removeurl');
        curInput.fileupload({
            url: uploadURL,
            dataType: 'json',
            add: function(e, data) {
                curFiles.find('.form-files-list').append('<div class="form-files-list-item-progress"><span class="form-files-list-item-cancel"></span></div>');
                data.submit();
            },
            done: function (e, data) {
                curFiles.find('.form-files-list-item-progress').eq(0).remove();
                if (data.result.status == 'success') {
                    curFiles.find('.form-files-list').append('<div class="form-files-list-item"><div class="form-files-list-item-icon"></div><div class="form-files-list-item-name">' + data.result.path + '</div><div class="form-files-list-item-size">' + Number(data.result.size).toFixed(2) + ' Мб</div><a href="' + removeURL + '?file=' + data.result.path + '" class="form-files-list-item-remove"></a></div>');
                    curFiles.find('.form-files-hidden').val('true').removeClass('error');
                    curFiles.find('label.error').remove();
                } else {
                    curFiles.find('.form-files-list').append('<div class="form-files-list-item error"><div class="form-files-list-item-icon"></div><div class="form-files-list-item-error">' + data.result.text + '</div><div class="form-files-list-item-name">' + data.result.path + '</div><a href="' + removeURL + '?file=' + data.result.path + '" class="form-files-list-item-remove"></a></div>');
                }
            }
        });
    });

    curForm.validate({
        ignore: '',
        submitHandler: function(form) {
            var curForm = $(form);
            if (curForm.hasClass('ajax-form')) {
                if (curForm.hasClass('recaptcha-form')) {
                    grecaptcha.ready(function() {
                        grecaptcha.execute('6LdHSvgcAAAAAHfkqTliNRLNbN8n4oSa0UJfMCU3', {action: 'submit'}).then(function(token) {
                            $.ajax({
                                type: 'POST',
                                url: curForm.attr('data-captchaurl'),
                                dataType: 'json',
                                data: 'recaptcha_response=' + token,
                                cache: false
                            }).fail(function(jqXHR, textStatus, errorThrown) {
                                alert('Service down' + textStatus);
                                curForm.removeClass('loading');
                            }).done(function(data) {
                                if (data.status) {
                                    curForm.addClass('loading');
                                    var formData = new FormData(form);

                                    if (curForm.find('[type=file]').length != 0) {
                                        var file = curForm.find('[type=file]')[0].files[0];
                                        formData.append('file', file);
                                    }

                                    $.ajax({
                                        type: 'POST',
                                        url: curForm.attr('action'),
                                        processData: false,
                                        contentType: false,
                                        dataType: 'json',
                                        data: formData,
                                        cache: false
                                    }).done(function(data) {
                                        if (data.status) {
                                            curForm.html('<div class="message message-success"><div class="message-title">' + data.title + '</div><div class="message-text">' + data.message + '</div></div>')
                                            if (curForm.parents().filter('.window').length == 1) {
                                                curForm.append('<div class="window-btns"><button type="submit" class="btn --orange window-close-btn">OK</button></div>');
                                            }
                                        } else {
                                            curForm.prepend('<div class="message message-error"><div class="message-title">' + data.title + '</div><div class="message-text">' + data.message + '</div></div>')
                                        }
                                        curForm.removeClass('loading');
                                    });
                                } else {
                                    alert('Fail Google reCAPTCHA v3.');
                                    curForm.removeClass('loading');
                                }
                            });
                        });
                    });
                } else {
                    curForm.addClass('loading');
                    var formData = new FormData(form);

                    $.ajax({
                        type: 'POST',
                        url: curForm.attr('action'),
                        processData: false,
                        contentType: false,
                        dataType: 'json',
                        data: formData,
                        cache: false
                    }).done(function(data) {
                        curForm.find('.message').remove();
                        if (data.status) {
                            curForm.html('<div class="message message-success"><div class="message-title">' + data.title + '</div><div class="message-text">' + data.message + '</div></div>')
                            if (curForm.parents().filter('.window').length == 1) {
                                curForm.append('<div class="window-btns"><button type="submit" class="btn --orange window-close-btn">OK</button></div>');
                            }
                        } else {
                            curForm.prepend('<div class="message message-error"><div class="message-title">' + data.title + '</div><div class="message-text">' + data.message + '</div></div>')
                        }
                        curForm.removeClass('loading');
                    });
                }
            } else if (curForm.hasClass('window-form')) {
                if (curForm.hasClass('recaptcha-form')) {
                    grecaptcha.ready(function() {
                        grecaptcha.execute('6LdHSvgcAAAAAHfkqTliNRLNbN8n4oSa0UJfMCU3', {action: 'submit'}).then(function(token) {
                            $.ajax({
                                type: 'POST',
                                url: curForm.attr('data-captchaurl'),
                                dataType: 'json',
                                data: 'recaptcha_response=' + token,
                                cache: false
                            }).fail(function(jqXHR, textStatus, errorThrown) {
                                alert('Service down.' + textStatus);
                                curForm.removeClass('loading');
                            }).done(function(data) {
                                if (data.status) {
                                    curForm.addClass('loading');
                                    var formData = new FormData(form);

                                    if (curForm.find('[type=file]').length != 0) {
                                        var file = curForm.find('[type=file]')[0].files[0];
                                        formData.append('file', file);
                                    }

                                    $.ajax({
                                        type: 'POST',
                                        url: curForm.attr('action'),
                                        processData: false,
                                        contentType: false,
                                        dataType: 'json',
                                        data: formData,
                                        cache: false
                                    }).done(function(data) {
                                        if (data.status) {
                                            curForm.html('<div class="message message-success"><div class="message-title">' + data.title + '</div><div class="message-text">' + data.message + '</div></div>')
                                            if (curForm.parents().filter('.window').length == 1) {
                                                curForm.append('<div class="window-btns"><button type="submit" class="btn --orange window-close-btn">OK</button></div>');
                                            }
                                        } else {
                                            curForm.prepend('<div class="message message-success"><div class="message-title">' + data.title + '</div><div class="message-text">' + data.message + '</div></div>')
                                        }
                                    });
                                    curForm.removeClass('loading');
                                } else {
                                    alert('Fail Google reCAPTCHA v3.');
                                    curForm.removeClass('loading');
                                }
                            });
                        });
                    });
                } else {
                    var formData = new FormData(form);

                    windowOpen(curForm.attr('action'), formData);
                }
            } else if (curForm.hasClass('recaptcha-form')) {
                grecaptcha.ready(function() {
                    grecaptcha.execute('6LdHSvgcAAAAAHfkqTliNRLNbN8n4oSa0UJfMCU3', {action: 'submit'}).then(function(token) {
                        $.ajax({
                            type: 'POST',
                            url: curForm.attr('data-captchaurl'),
                            dataType: 'json',
                            data: 'recaptcha_response=' + token,
                            cache: false
                        }).fail(function(jqXHR, textStatus, errorThrown) {
                            alert('Service down.' + textStatus);
                        }).done(function(data) {
                            if (data.status) {
                                form.submit();
                            } else {
                                alert('Fail Google reCAPTCHA v3.');
                            }
                        });
                    });
                });
            } else {
                form.submit();
            }
        }
    });
}

$(document).ready(function() {

    if ($(window).width() < 1024) {
        $('.club-gallery').slick({
            slidesToShow: 1,
            adaptiveHeight: true,
            prevArrow: '<button type="button" class="slick-prev"><svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.66667 4.83685L10.62 5.76552L5.56667 10.8369H19V12.1702H5.56667L10.62 17.2189L9.66667 18.1702L3 11.5035L9.66667 4.83685Z" fill="white"/></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.3333 4.83685L11.38 5.76552L16.4333 10.8369H3V12.1702H16.4333L11.38 17.2189L12.3333 18.1702L19 11.5035L12.3333 4.83685Z" fill="white"/></svg></button>',
        });
    }

});