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
    }

    // выбор файла
    $('body').on('change', '.clip-val', function () {
        var val = $(this).val().replace(/.*\\/, "");
        $('.clip-file').text(val);
    });

    $('.content__nav-open').on('click', function () {
        $(this).toggleClass('--active');
        $(this).parents('.content__nav-item').find('.content__nav-hidden').slideToggle(150);
    });

    // мобильное меню ссылки
    $('.mobile__nav-btn').on('click', function () {
        $(this).parents('.mobile__nav-item').find('.mobile__nav-list').slideToggle(150);
    });
    $('.content__nav-open').on('click', function () {
        $(this).toggleClass('--active');
        $(this).parents('.content__nav-item').find('.content__nav-hidden').slideToggle(150);
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
    var headerHeight = 42;

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
        var isEmptyForm = true;
        $('.window input[type="text"], .window textarea, .window select').each(function() {
            if ($(this).val() != '') {
                isEmptyForm = false;
            }
        });
        if (isEmptyForm) {
            $('.window').remove();
            $('html').removeClass('window-open');
            $('body').css({'margin-right': 0});
            $('.wrapper').css({'top': 0});
            $(window).scrollTop($('.wrapper').data('curScroll'));
        } else {
            if (confirm('Закрыть форму?')) {
                $('.window input[type="text"], .window textarea, .window select').val('');
                windowClose();
            }
        }
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

    curForm.find('.captcha-container').each(function() {
        if (!window.smartCaptcha) {
            return;
        }
        var curID = window.smartCaptcha.render(this, {
            sitekey: 'uahGSHTKJqjaJ0ezlhjrbOYH4OxS6zzL9CZ47OgY',
            callback: smartCaptchaCallback,
            invisible: true,
            hideShield: true,
            hl: 'en'
        });
        $(this).attr('data-smartid', curID);
    });

    curForm.validate({
        ignore: '',
        submitHandler: function(form) {
            var curForm = $(form);

            var smartCaptchaWaiting = false;
            curForm.find('.captcha-container').each(function() {
                if (curForm.attr('form-smartcaptchawaiting') != 'true') {
                    var curBlock = $(this);
                    var curInput = curBlock.find('input[name="smart-token"]');
                    curInput.removeAttr('value');
                    smartCaptchaWaiting = true;
                    $('form[form-smartcaptchawaiting]').removeAttr('form-smartcaptchawaiting');
                    curForm.attr('form-smartcaptchawaiting', 'false');

                    if (!window.smartCaptcha) {
                        return;
                    }
                    var curID = $(this).attr('data-smartid');
                    window.smartCaptcha.execute(curID);
                } else {
                    curForm.removeAttr('form-smartcaptchawaiting');
                }
            });

            if (!smartCaptchaWaiting) {

                if (curForm.hasClass('ajax-form')) {
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
                } else if (curForm.hasClass('window-form')) {
                    var formData = new FormData(form);
                    windowOpen(curForm.attr('action'), formData);
                } else {
                    form.submit();
                }
            }
        }
    });
}

function smartCaptchaLoad() {}

function smartCaptchaCallback(token) {
    $('form[form-smartcaptchawaiting]').attr('form-smartcaptchawaiting', 'true');
    $('form[form-smartcaptchawaiting] [type="submit"]').trigger('click');
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

    function popupCenter(url, title) {
        var dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left;
        var dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top;
        var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
        var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
        var left = ((width / 2) - (480 / 2)) + dualScreenLeft;
        var top = ((height / 3) - (360 / 3)) + dualScreenTop;
        var newWindow = window.open(url, title, 'scrollbars=yes, width=' + 480 + ', height=' + 360 + ', top=' + top + ', left=' + left);
        if (window.focus) {
            newWindow.focus();
        }
    }

    $('body').on('click', '.window-photo-social-item-vk', function(e) {
        var curTitle = encodeURIComponent($('title').html());
        var curUrl = encodeURIComponent(window.location.href);

        popupCenter('https://vk.com/share.php?url=' + curUrl + '&description=' + curTitle, curTitle);

        e.preventDefault();
    });

    $('body').on('click', '.window-photo-social-item-link', function(e) {
        e.preventDefault();
    });

    var clipboardPhoto = new ClipboardJS('.window-photo-social-item-link')
    clipboardPhoto.on('success', function(e) {
        alert('OK');
    });

    $('body').on('click', '[data-lightbox]', function(e) {
        var curItem = $(this);
        var curGroup = curItem.attr('data-lightbox');
        if (curGroup == '') {
            var curGallery = curItem;
        } else {
            var curGallery = $('[data-lightbox="' + curGroup + '"]');
        }
        var curIndex = curGallery.index(curItem);

        var curWidth = $(window).width();

        var curPadding = $('.wrapper').width();
        var curScroll = $(window).scrollTop();
        $('html').addClass('window-photo-open');
        curPadding = $('.wrapper').width() - curPadding;
        $('body').css({'margin-right': curPadding + 'px'});

        var windowHTML =    '<div class="window-photo">';

        windowHTML +=           '<div class="window-photo-preview">' +
                                    '<div class="window-photo-preview-inner">' +
                                        '<div class="window-photo-preview-list">';

        var galleryLength = curGallery.length;

        for (var i = 0; i < galleryLength; i++) {
            var curGalleryItem = curGallery.eq(i);
            windowHTML +=                   '<div class="window-photo-preview-list-item"><a href="#"><img src="' + curGalleryItem.find('img').attr('src') + '" alt="" /></a></div>';
        }
        windowHTML +=                   '</div>' +
                                    '</div>' +
                                '</div>';

        windowHTML +=           '<a href="#" class="window-photo-close"><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" /></svg></a>';
        windowHTML +=           '<a href="#" class="window-photo-download" target="_blank" download><svg viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5996 9.625V12.25H2.09961V9.625H0.349609V12.25C0.349609 13.2125 1.13711 14 2.09961 14H12.5996C13.5621 14 14.3496 13.2125 14.3496 12.25V9.625H12.5996ZM11.7246 6.125L10.4909 4.89125L8.22461 7.14875V0H6.47461V7.14875L4.20836 4.89125L2.97461 6.125L7.34961 10.5L11.7246 6.125Z" /></svg></a>';
        windowHTML +=           '<div class="window-photo-social">';
        windowHTML +=               '<div class="window-photo-social-icon"><svg viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.8918 9.89558C10.3576 9.89558 9.87973 10.1064 9.51427 10.4367L4.50322 7.52008C4.53836 7.35843 4.56648 7.19679 4.56648 7.02811C4.56648 6.85944 4.53836 6.69779 4.50322 6.53614L9.45804 3.64759C9.83756 3.999 10.3366 4.21687 10.8918 4.21687C12.0584 4.21687 13.0002 3.2751 13.0002 2.10843C13.0002 0.941767 12.0584 0 10.8918 0C9.72511 0 8.78334 0.941767 8.78334 2.10843C8.78334 2.27711 8.81146 2.43875 8.8466 2.6004L3.89178 5.48896C3.51226 5.13755 3.01326 4.91968 2.45804 4.91968C1.29138 4.91968 0.349609 5.86145 0.349609 7.02811C0.349609 8.19478 1.29138 9.13655 2.45804 9.13655C3.01326 9.13655 3.51226 8.91867 3.89178 8.56727L8.89579 11.491C8.86065 11.6386 8.83957 11.7932 8.83957 11.9478C8.83957 13.0793 9.76025 14 10.8918 14C12.0233 14 12.944 13.0793 12.944 11.9478C12.944 10.8163 12.0233 9.89558 10.8918 9.89558ZM10.8918 1.40562C11.2783 1.40562 11.5946 1.72189 11.5946 2.10843C11.5946 2.49498 11.2783 2.81124 10.8918 2.81124C10.5052 2.81124 10.189 2.49498 10.189 2.10843C10.189 1.72189 10.5052 1.40562 10.8918 1.40562ZM2.45804 7.73092C2.0715 7.73092 1.75523 7.41466 1.75523 7.02811C1.75523 6.64157 2.0715 6.3253 2.45804 6.3253C2.84459 6.3253 3.16085 6.64157 3.16085 7.02811C3.16085 7.41466 2.84459 7.73092 2.45804 7.73092ZM10.8918 12.6647C10.5052 12.6647 10.189 12.3484 10.189 11.9618C10.189 11.5753 10.5052 11.259 10.8918 11.259C11.2783 11.259 11.5946 11.5753 11.5946 11.9618C11.5946 12.3484 11.2783 12.6647 10.8918 12.6647Z" /></svg></div>';
        windowHTML +=               '<div class="window-photo-social-window">';
        windowHTML +=                   '<a href="#" class="window-photo-social-item window-photo-social-item-link"><svg viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.667 14.6667C12.9533 15.0495 13.3186 15.3662 13.738 15.5954C14.1575 15.8245 14.6213 15.9608 15.0981 15.9949C15.5749 16.0291 16.0534 15.9603 16.5012 15.7932C16.9491 15.6262 17.3557 15.3648 17.6937 15.0267L19.6937 13.0267C20.3009 12.3981 20.6368 11.556 20.6292 10.6821C20.6216 9.80806 20.2711 8.97202 19.6531 8.354C19.035 7.73597 18.199 7.38541 17.325 7.37781C16.451 7.37022 15.609 7.7062 14.9803 8.31339L13.8337 9.45339" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M15.3335 13.3333C15.0472 12.9506 14.6819 12.6339 14.2624 12.4047C13.843 12.1755 13.3791 12.0392 12.9024 12.0051C12.4256 11.971 11.9471 12.0397 11.4992 12.2068C11.0514 12.3739 10.6447 12.6353 10.3068 12.9733L8.3068 14.9733C7.69961 15.602 7.36363 16.444 7.37122 17.318C7.37881 18.192 7.72938 19.028 8.3474 19.646C8.96543 20.2641 9.80147 20.6146 10.6755 20.6222C11.5495 20.6298 12.3915 20.2938 13.0201 19.6867L14.1601 18.5467" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg></a>';
        windowHTML +=                   '<a href="#" class="window-photo-social-item window-photo-social-item-vk"><svg viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 -0.000244141C6.49187 -0.000244141 0 6.49163 0 14.4998C0 22.5079 6.49187 28.9998 14.5 28.9998C22.5081 28.9998 29 22.5079 29 14.4998C29 6.49163 22.5081 -0.000244141 14.5 -0.000244141ZM21.7269 9.7408C22.2855 9.7408 22.4116 10.0407 22.2855 10.453C22.0886 11.3979 20.4539 13.9044 19.9476 14.6808C19.8514 14.8283 19.7959 14.9134 19.7988 14.9134C19.6006 15.2507 19.5285 15.4006 19.7988 15.7754C19.8965 15.914 20.1037 16.1255 20.3405 16.3671C20.584 16.6157 20.8589 16.8962 21.0782 17.1623C21.871 18.0993 22.4837 18.8865 22.6458 19.43C22.79 19.9735 22.5377 20.2546 21.9972 20.2546H20.1412C19.6493 20.2546 19.3958 19.9608 18.8555 19.3347C18.6238 19.0662 18.3394 18.7367 17.9609 18.343C16.8617 17.2373 16.3752 17.0873 16.1049 17.0873C15.7265 17.0873 15.6184 17.181 15.6184 17.7433V19.4862C15.6184 19.9547 15.4742 20.2358 14.2849 20.2358C12.3209 20.2358 10.1405 18.9989 8.6089 16.6938C6.30245 13.3204 5.67177 10.7716 5.67177 10.2656C5.67177 9.98443 5.76187 9.72206 6.30245 9.72206H8.17644C8.64494 9.72206 8.82513 9.92821 9.00532 10.4717C9.9243 13.2267 11.4559 15.6443 12.0866 15.6443C12.3209 15.6443 12.429 15.5318 12.429 14.9134V12.0647C12.3845 11.255 12.1135 10.9022 11.9125 10.6406C11.7879 10.4784 11.6902 10.3512 11.6902 10.1718C11.6902 9.94695 11.8704 9.72206 12.1587 9.72206H15.0778C15.4742 9.72206 15.6184 9.94695 15.6184 10.4342V14.2762C15.6184 14.6885 15.7805 14.8384 15.9067 14.8384C16.1409 14.8384 16.3391 14.6885 16.7716 14.2387C18.105 12.6832 19.06 10.2843 19.06 10.2843C19.1862 10.0032 19.4024 9.7408 19.8709 9.7408H21.7269Z" /></svg></a>';
        windowHTML +=               '</div>';
        windowHTML +=           '</div>';

        windowHTML +=           '<div class="window-photo-slider">' +
                                    '<div class="window-photo-slider-list">';

        for (var i = 0; i < galleryLength; i++) {
            var curGalleryItem = curGallery.eq(i);
            windowHTML +=               '<div class="window-photo-slider-list-item">' +
                                            '<div class="window-photo-slider-list-item-inner zoom"><img alt="" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0ibWFyZ2luOiBhdXRvOyBiYWNrZ3JvdW5kOiBub25lOyBkaXNwbGF5OiBibG9jazsgc2hhcGUtcmVuZGVyaW5nOiBhdXRvOyIgd2lkdGg9IjM4cHgiIGhlaWdodD0iMzhweCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIj4KPGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRkY2NTE1IiBzdHJva2Utd2lkdGg9IjEwIiByPSIzNSIgc3Ryb2tlLWRhc2hhcnJheT0iMTY0LjkzMzYxNDMxMzQ2NDE1IDU2Ljk3Nzg3MTQzNzgyMTM4Ij4KICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMXMiIHZhbHVlcz0iMCA1MCA1MDszNjAgNTAgNTAiIGtleVRpbWVzPSIwOzEiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9jaXJjbGU+Cjwvc3ZnPg==" data-src="' + curGalleryItem.attr('href') + '" /></div>' +
                                        '</div>';
        }
        windowHTML +=               '</div>' +
                                '</div>';

        windowHTML +=       '</div>';

        $('.window-photo').remove();
        $('body').append(windowHTML);

        $('.wrapper').css({'top': -curScroll});
        $('.wrapper').data('curScroll', curScroll);

        $('.window-photo').each(function() {
            var marginPhoto = 166;
            if ($(window).width() < 1200 && $(window).width() < $(window).height()) {
                marginPhoto = 253;
            }
            if ($(window).width() < 1200 && $(window).width() > $(window).height()) {
                marginPhoto = 20;
            }

            var newHeight = marginPhoto;
            $('.window-photo-slider-list-item-inner').css({'height': 'calc(100vh - ' + newHeight + 'px)', 'line-height': 'calc(100vh - ' + newHeight + 'px)'});
        });

        if ($(window).width() > 1199 || $(window).width() > $(window).height()) {
            $('.window-photo-preview-inner').mCustomScrollbar({
                axis: 'y',
                scrollButtons: {
                    enable: true
                }
            });
        } else {
            $('.window-photo-preview-inner').mCustomScrollbar({
                axis: 'x',
                scrollButtons: {
                    enable: true
                }
            });
        }

        zoom();

        var curIMG = $('.window-photo-slider-list-item').eq(curIndex).find('img');
        curIMG.attr('src', curIMG.attr('data-src'));
        $('.window-photo-preview-list-item').eq(curIndex).addClass('active');
        $('.window-photo-download').attr('href', $('.window-photo-slider-list-item').eq(curIndex).find('img').attr('data-src'));
        $('.window-photo-social-item-link').attr('data-clipboard-text', $('.window-photo-slider-list-item').eq(curIndex).find('img').attr('data-src'));

        $('.window-photo-slider-list').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<button type="button" class="slick-prev"><svg viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.8627 1.22449L1.87988 6.5L6.8627 11.7755" stroke-width="2" /></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.1373 11.7755L6.12012 6.49999L1.1373 1.22448" stroke-width="2" /></svg></button>',
            dots: false,
            speed: 250,
            initialSlide: curIndex,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        arrows: false
                    }
                }
            ]
        }).on('setPosition', function(event, slick) {
            var currentSlide = $('.window-photo-slider-list').slick('slickCurrentSlide');
            $('.window-photo-preview-list-item.active').removeClass('active');
            $('.window-photo-preview-list-item').eq(currentSlide).addClass('active');
            $('.window-photo-preview-inner').mCustomScrollbar('scrollTo', $('.window-photo-preview-list-item').eq(currentSlide));
            $('.window-photo-download').attr('href', $('.window-photo-slider-list-item').eq(currentSlide).find('img').attr('data-src'));
            $('.window-photo-social-item-link').attr('data-clipboard-text', $('.window-photo-slider-list-item').eq(currentSlide).find('img').attr('data-src'));
            var curIMG = $('.window-photo-slider-list-item').eq(currentSlide).find('img');
            if (curIMG.attr('src') !== curIMG.attr('data-src')) {
                var newIMG = $('<img src="" alt="" style="position:fixed; left:-9999px; top:-9999px" />');
                $('body').append(newIMG);
                newIMG.one('load', function(e) {
                    curIMG.attr('src', curIMG.attr('data-src'));
                    newIMG.remove();
                });
                newIMG.attr('src', curIMG.attr('data-src'));
                window.setTimeout(function() {
                    curIMG.attr('src', curIMG.attr('data-src'));
                    if (newIMG) {
                        newIMG.remove();
                    }
                }, 3000);
            }

        });

        e.preventDefault();
    });

    $('body').on('click', '.window-photo-preview-list-item a', function(e) {
        var curIndex = $('.window-photo-preview-list-item').index($(this).parent());
        $('.window-photo-slider-list').slick('slickGoTo', curIndex);
        e.preventDefault();
    });

    $('body').on('click', '.window-photo-close', function(e) {
        $('.window-photo').remove();
        $('html').removeClass('window-photo-open');
        $('body').css({'margin-right': 0});
        $('.wrapper').css({'top': 0});
        $(window).scrollTop($('.wrapper').data('curScroll'));
        e.preventDefault();
    });

    $('body').on('keyup', function(e) {
        if (e.keyCode == 27) {
            if ($('.window-photo').length > 0) {
                $('.window-photo-close').trigger('click');
            }
        }
    });

});

$(window).on('resize', function() {
    $('.window-photo').each(function() {
        var marginPhoto = 166;
        if ($(window).width() < 1200 && $(window).width() < $(window).height()) {
            marginPhoto = 253;
        }
        if ($(window).width() < 1200 && $(window).width() > $(window).height()) {
            marginPhoto = 20;
        }

        var newHeight = marginPhoto;
        $('.window-photo-slider-list-item-inner').css({'height': 'calc(100vh - ' + newHeight + 'px)', 'line-height': 'calc(100vh - ' + newHeight + 'px)'});

        if ($(window).width() > 1199 || $(window).width() > $(window).height()) {
            $('.window-photo-preview-inner').mCustomScrollbar('destroy');
            $('.window-photo-preview-inner').mCustomScrollbar({
                axis: 'y',
                scrollButtons: {
                    enable: true
                }
            });
        } else {
            $('.window-photo-preview-inner').mCustomScrollbar('destroy');
            $('.window-photo-preview-inner').mCustomScrollbar({
                axis: 'x',
                scrollButtons: {
                    enable: true
                }
            });
        }
    });
});

$(document).ready(function() {

    $('.header-new-nav-add').click(function(e) {
        $('html').removeClass('header-new-search-open');
        if ($('html').hasClass('header-new-nav-add-open')) {
            $('html').removeClass('header-new-nav-add-open');
            $(window).scrollTop($('.wrapper').data('curScroll'));
        } else {
            var curScroll = $(window).scrollTop();
            $('.wrapper').data('curScroll', curScroll);
            $('html').addClass('header-new-nav-add-open');
        }
        e.preventDefault();
    });

    $('.header-new-nav-search').click(function(e) {
        if ($('html').hasClass('header-new-nav-add-open')) {
            $('html').removeClass('header-new-nav-add-open');
            $(window).scrollTop($('.wrapper').data('curScroll'));
        }
        $('html').toggleClass('header-new-search-open');
        e.preventDefault();
    });

    $('.programs-new-group-title').click(function() {
        $(this).parent().toggleClass('open');
    });

    $('.programs-new-list-more a').click(function(e) {
        $(this).parent().parent().find('.programs-new-list').toggleClass('open');
        e.preventDefault();
    });

    $('.educational-curriculum-new-group-title').click(function() {
        $(this).parent().toggleClass('open');
    });

    $('.educational-curriculum-new-list-more a').click(function(e) {
        $(this).parent().parent().toggleClass('open');
        e.preventDefault();
    });

    $('.header-new-add-menu > ul > li > a').click(function(e) {
        if ($(window).width() < 1220) {
            $('html').toggleClass('header-new-nav-add-sub-open');
            $(this).parent().toggleClass('open');
            e.preventDefault();
        }
    });

    $('.distance-courses-group-title').click(function() {
        $(this).parent().toggleClass('open');
    });

});

$(window).on('load resize', function() {

    $('.distance-media-list').each(function() {
        var curList = $(this);

        curList.find('.distance-media-item a').css({'min-height': '0px'});

        curList.find('.distance-media-item a').each(function() {
            var curBlock = $(this);
            var curHeight = curBlock.outerHeight();
            var curTop = curBlock.parents().filter('.distance-media-item').offset().top;

            curList.find('.distance-media-item a').each(function() {
                var otherBlock = $(this);
                if (otherBlock.parents().filter('.distance-media-item').offset().top == curTop) {
                    var newHeight = otherBlock.outerHeight();
                    if (newHeight > curHeight) {
                        curBlock.css({'min-height': newHeight + 'px'});
                    } else {
                        otherBlock.css({'min-height': curHeight + 'px'});
                    }
                }
            });
        });
    });

});