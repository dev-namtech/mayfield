jQuery(document).ready(function() {
    new WOW().init();
    jQuery('.wrapper-logo button.navbar-toggler').click(function() {
        jQuery('.main-menu-mobile').addClass('show');
        jQuery('.overlay').addClass('show');
        jQuery('body').addClass('show-menu');
    });
    jQuery('.main-header .overlay').click(function() {
        jQuery('.main-menu-mobile').removeClass('show');
        jQuery('.overlay').removeClass('show');
        jQuery('body').removeClass('show-menu');
    });

    setTimeout(function(){
        $('.collapse:not(.show)').css('display', 'none');
    },500); 

    if ($(window).width() < 992) {
        jQuery('.sub-header').slick({
            dots: false,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            auto: true,
        });
    }

    // Search link
    if ($(window).width() > 992) {
        $('.nav-link.search-link').click(function(e){
            e.preventDefault();
            if($('.header-search').hasClass('d-none')){
                $('.header-search').removeClass('d-none');
            }
        });
        $('.close-search').click(function(e){
            if(!$('.header-search').hasClass('d-none')){
                $('.header-search').addClass('d-none');
            }
        });
    }
    if ($(window).width() < 992) {
        $('.menu-mobile .nav-link.search-link').click(function(e){
            e.preventDefault();
            if($('.header-search-mb').hasClass('d-none')){
                $('.header-search-mb').removeClass('d-none');
            }
        });
        $('.close-search').click(function(e){
            if(!$('.header-search-mb').hasClass('d-none')){
                $('.header-search-mb').addClass('d-none');
            }
        });
        $('.main-menu-mobile .nav-link.search-link').click(function(e){
            e.preventDefault();
        });
    }

    jQuery('.section-top-seller .row').slick({
        dots: false,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        auto: true,
        looop: true,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    // var userFeed = new Instafeed({
    //     get: 'user',
    //     userId: '1417323441',
    //     accessToken: '1417323441.1677ed0.e34f1660a24949de9ecf5c9afd888816',
    //     resolution: 'standard_resolution',
    //     useHttp: "true",
    //     template: '<div class="col-instagram"><a href="{{link}}" target="_blank" id="{{id}}"><div class="drop"><i class="fa fa-instagram"></i></div><div style="background: url({{image}}); background-position: center; padding-top: 100%;"></div></a></div>',
    //     sortBy: 'most-recent',
    //     limit: 6,
    //     target: 'instafeed'
    //   });
    //   userFeed.run();

    // $('.wrapper-header nav.navbar li>a').on('click', function (e) {
    //     e.preventDefault();
    //     if(!$(this).parent().hasClass('show')) {
    //         $('header.wrapper-header').addClass('show');
    //     } else {
    //         $('header.wrapper-header').removeClass('show');
    //     }
    //     $(this).tab('show');
    // });
    // $('body').on('click', function (e) {
    //     if($('header.wrapper-header').hasClass('show')) {
    //         $('header.wrapper-header').removeClass('show');
    //     } else if($('header.wrapper-header .dropdown-menu').hasClass('show')) {
    //         $('header.wrapper-header').addClass('show');
    //     }
    // });

    jQuery('select.js').each(function() {
        var $this = jQuery(this),
            numberOfOptions = jQuery(this).children('option').length;
        var val = $(this).val();
        $this.addClass('select-hidden')
        $this.wrap('<div class="select"></div>')
        $this.after('<div class="select-styled"></div>')
        var $styledSelect = $this.next('div.select-styled');
        var $list = jQuery('<ul />', {
            'class': 'select-options'
        }).insertAfter($styledSelect)
        for (var i = 0; i < numberOfOptions; i++) {
            var html = $this.children('option').eq(i).text();
            if (val == $this.children('option').eq(i).val()) {
                $styledSelect.text($this.children('option').eq(i).text());
            }
            jQuery('<li />', {
                html: html,
                rel: $this.children('option').eq(i).val(),
                class: (val == $this.children('option').eq(i).val()) ? 'active' : '',
            }).appendTo($list)
        }
        var $listItems = $list.children('li')
        $styledSelect.click(function(e) {
            e.stopPropagation()
            jQuery('div.select-styled.active').not(this).each(function() {
                jQuery(this).removeClass('active').next('ul.select-options').hide()
            })
            jQuery(this).toggleClass('active').next('ul.select-options').toggle()
        })
        $listItems.click(function(e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            if ((val != $(this).attr('rel') || $(this).attr('rel') == '') && !$(this).hasClass('active')) {
                $list.children('li').removeClass('active');
                $(this).addClass('active');
                $this.val($(this).attr('rel'));
                $this.trigger('change');
            }
            $list.hide()
        })
        jQuery(document).click(function() {
            $styledSelect.removeClass('active')
            $list.hide()
        })
    });
    $('.section-banner-post').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:false,
        arrows: true,
    });
    $('.list-fabric-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.list-img-fabric'
    });

    changePositionElement();

    $(window).resize(function() {
        changePositionElement();
    });
        
    
    function changePositionElement() {
        let productRange = $('.lampshades-main-content .product-range')
        if (productRange.length && $(window).width() <= 991) {
            let listItem = productRange.find('.row');
            listItem.map(function(index, item, listItem) {
                if ($(item).find('.col-lg-4.col-sm-12 img').length) {
                    $(item).find('.info').after($(item).find('.col-lg-4.col-sm-12 img'));
                }
            })
        } else if (productRange.length && $(window).width() > 991) {
            let listItem = productRange.find('.row');
            listItem.map(function(index, item, listItem) {
                if ($(item).find('.col-slider > .img-fluid').length) {
                    $(item).find('.col-lg-4.col-sm-12').append($(item).find('.col-slider > .img-fluid'));
                }
            })
        }
    }

    $('.modal-reg-wholesale .btn-close').click(function(){
        $('.modal-reg-wholesale').removeClass('show');
    });

    // Submit
    $('#wholesaleSignUp').submit(function(e){
        e.preventDefault();
        $('.nactivity').addClass('open');
        var form = $('#wholesaleSignUp');
        var business = form.find('input[type="checkbox"]');
        var dataBusiness = '';
        business.each(function(index){
            if($(this).is(':checked') == true){
                dataBusiness += $(this).val() + ';';
            }
        });
        var customer= {
            "Customer": [
                {
                    "EmailAddress":form.find('input[name="reg_email"]').val(),
                    "Password":"123456",
                    "UserGroup":"Wholesale",
                    "ABN":form.find('input[name="reg_email"]').val(),
                    "WebsiteURL":form.find('input[name="reg_email"]').val(),
                    "UserCustom1":dataBusiness,
                    "UserCustom2":form.find('input[name="reg_mobile_phone"]').val(),
                    "BillingAddress": {
                        "BillFirstName":form.find('input[name="reg_first_name"]').val(),
                        "BillLastName":form.find('input[name="reg_last_name"]').val(),
                        "BillCompany":form.find('input[name="reg_company"]').val(),
                        "BillStreetLine1":form.find('input[name="reg_address1"]').val(),
                        "BillStreetLine2":form.find('input[name="reg_address2"]').val(),
                        "BillCity":form.find('input[name="reg_suburb"]').val(),
                        "BillState":form.find('input[name="reg_state"]').val(),
                        "BillPostCode":form.find('input[name="reg_postcode"]').val(),
                        "BillCountry":form.find('select[name="reg_bill_country"]').val(),
                        "BillPhone":form.find('input[name="reg_phone_number"]').val()
                    }
                }
            ]
        };
        $.ajax({
            async: true,
            crossDomain: true,
            url: 'https://mayfield.neto.com.au/do/WS/NetoAPI',
            headers: {
                'accept': 'application/json',
                'netoapi_action':'AddCustomer',
                'netoapi_key':'1gtxBpHMY89nGu0PnEfDuWnOa65qJFyd',
                'content-type': 'application/json',
                'cache-control': 'no-cache'
            },
            method: 'POST',
            dataType: 'json',
            processData: false,
            data: JSON.stringify(customer),
            success: function(response){
                $('.nactivity').removeClass('open');        
                if(response.Ack != 'Error'){
                    $('.p-status').html('');
                    $('.modal-reg-wholesale .content-modal').append('<h3>Thank you.</h3><p>We&#39;ll be in touch shortly to confirm your registration.</p><button class="btn btn-close">Done</button>');
                    $('.modal-reg-wholesale').addClass('show');
                } else {
                    $('.p-status').html('<p>'+response.Messages.Error.Message+'</p>');
                }
            }
        });
    });


    // $("#show").change(function(){
    //   valCate = $('#contentID').val();
    //   valCount = $(this).val();
    //   var dataStyle = {
    //     "Filter":{
    //       "CategoryID": valCate,
    //       "Limit": valCount,
    //       "OutputSelector": ["Name","ItemURL","Model","Images","PriceGroups","PromotionPrice","CostPrice","DefaultPrice","AvailableSellQuantity"]
    //     }
    //   };
    //   $.ajax({
    //     async: true,
    //     crossDomain: true,
    //     url: 'https://mayfield.neto.com.au/do/WS/NetoAPI',
    //     headers: {
    //       'accept': 'application/json',
    //       'netoapi_action':'GetItem',
    //       'netoapi_key':'1gtxBpHMY89nGu0PnEfDuWnOa65qJFyd',
    //       'content-type': 'application/json',
    //       'cache-control': 'no-cache'
    //     },
    //     method: 'POST',
    //     dataType: 'json',
    //     processData: false,
    //     data: JSON.stringify(dataStyle),
    //     success: function(response){
    //       $('#contentPro').hide();
    //       loadThumbProduct(response);
    //     }
    //   });
    // });

    $('.new-style-popup .npopup-body').bind("DOMSubtreeModified", function() {
        if ($('.new-style-popup .successaddmessageclear').length) {
            $('.noverlay').addClass('active');
        } else {
            $('.noverlay').removeClass('active');
        }
    });

    $('#zoomProIn').click(zoomProIn_click);
    $('#zoomProOut').click(zoomProOut_click);
    move_image();

    $('.lampshades-main-content .product-range > .container > .row').each(function(index) {
        $(this).find('.img-slider').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: $('.pro-range2-prev'),
            nextArrow: $('.pro-range2-next'),
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
    });

    if($('.list-fabric-main').length) {
        $('.list-fabric-main .fabric-item').each(function(index) {
            callApiLampShades($(this).data('sku'));
        });
        selectSlick();
    }

    $('.project-gallery-item img').click(function() {
        getPjGallery($(this).parent('div').data('sku'));
    });

    $('#modalMF .close').click(function() {
        $('#modalMF').removeClass('open');
        $('#modalMF .modal-mf-content .modal-mf-body').html('');
        $('#modalMF .modal-mf-content .modal-mf-header h4').remove();
    });
});

function getPjGallery(sku){
    $('.nactivity').addClass('open');
    var data = {
        "Filter":{
          "SKU": sku,
          "OutputSelector": ["Name","Images","Description"]
        }
    };
    $.ajax({
        async: true,
        crossDomain: true,
        url: 'https://mayfield.neto.com.au/do/WS/NetoAPI',
        headers: {
          'accept': 'application/json',
          'netoapi_action':'GetItem',
          'netoapi_key':'1gtxBpHMY89nGu0PnEfDuWnOa65qJFyd',
          'content-type': 'application/json',
          'cache-control': 'no-cache'
        },
        method: 'POST',
        dataType: 'json',
        processData: false,
        data: JSON.stringify(data),
        success: function(response){
            $('#modalMF .modal-mf-content .modal-mf-header').append('<h4 class="modal-title">'+response.Item[0].Name+'</h4>')
            $('#modalMF .modal-mf-content .modal-mf-body').append('<div class="row"><div class="col-xl-8 col-lg-12 col-md-12 col-sm-12"><div class="content-slide-img"></div></div><div class="col-xl-4 col-lg-12 col-md-12 col-sm-12"><div class="content-des"></div></div></div>');
            response.Item[0].Images.forEach(item => {
                $('#modalMF .modal-mf-content .content-slide-img').append('<img class="img-fluid" src="'+item.URL+'"/>');
            });
            $('#modalMF .modal-mf-content .content-des').append(response.Item[0].Description);
            $('#modalMF .modal-mf-content .content-des').append('<a href="#">Enquire</a>');
            $('.nactivity').removeClass('open');
            $('#modalMF').addClass('open');
            $('#modalMF .modal-mf-content .content-slide-img').slick({
                dots: false,
                arrows: true,
                loop: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                auto: false,
            });
        }
    });
}

function callApiLampShades(sku){
    var data = {
        "Filter":{
          "SKU": sku,
          "OutputSelector": ["Name","Description"]
        }
    };
    $.ajax({
        async: true,
        crossDomain: true,
        url: 'https://mayfield.neto.com.au/do/WS/NetoAPI',
        headers: {
          'accept': 'application/json',
          'netoapi_action':'GetItem',
          'netoapi_key':'1gtxBpHMY89nGu0PnEfDuWnOa65qJFyd',
          'content-type': 'application/json',
          'cache-control': 'no-cache'
        },
        method: 'POST',
        dataType: 'json',
        processData: false,
        data: JSON.stringify(data),
        success: function(response){
            $('.list-fabric-main #fabric' + sku + ' .content-des').append(response.Item[0].Description);
        }
    });
}

function openModal(id) {
    if (!jQuery(id).hasClass('open')) {
        jQuery(id).addClass('open');
        jQuery('.modal-pendant.open .content-slide-img').slick({
            dots: false,
            arrows: true,
            loop: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            auto: false,
        });
    }
}

function closeModal(id) {
    if (jQuery(id).hasClass('open')) {
        jQuery(id).removeClass('open');
    }
}

function loadThumbProduct(data) {
    $('#contentProAjax').empty();
    if (data.Item.length > 0) {
        data.Item.forEach(element => {
            var article = document.createElement('article');
            cardProduct = document.createElement('div');
            $(cardProduct).addClass('card-product').attr('itemscope', '').attr('itemtype', 'http://schema.org/Product');
            $(cardProduct).append('<meta itemprop="mpn" content="' + element.SKU + '"/>');
            imgProduct = document.createElement('a');
            $(imgProduct).addClass('thumbnail-image').attr('href', '#');
            if (element.Images[0].URL)
                imgProSrc = element.Images[0].URL;
            else
                imgProSrc = 'https://cdn.neto.com.au/assets/neto-cdn/images/default_product.gif';
            $(imgProduct).append('<img src="' + imgProSrc + '" itemprop="image" class="product-image img-fluid">');
            $(imgProduct).appendTo(cardProduct);
            titleProduct = document.createElement('p');
            $(titleProduct).addClass('card-title').attr('itemprop', 'name');
            $(titleProduct).append('<a href="[@URL@]">' + element.Name + '</a>');
            $(titleProduct).appendTo(cardProduct);
            priceProduct = document.createElement('p');
            $(priceProduct).addClass('price');
            $(priceProduct).append('<span itemprop="price" content="' + element.DefaultPrice + '">' + element.DefaultPrice + '</span>');
            $(priceProduct).append('<meta itemprop="priceCurrency" content="AUD">');
            $(priceProduct).appendTo(cardProduct);
            formBuy = document.createElement('form');
            $(formBuy).addClass('form-inline buying-options');
            $(formBuy).append('<input type="hidden" id="sku' + element.SKU + '" name="sku' + element.SKU + '" value="' + element.SKU + '">');
            $(formBuy).append('<input type="hidden" id="modal' + element.SKU + '" name="modal' + element.SKU + '" value="' + element.Model + '">');
            $(formBuy).append('<input type="hidden" id="thumb' + element.SKU + '" name="thumb' + element.SKU + '" value="' + imgProduct + '">');
            $(formBuy).append('<input type="hidden" id="qty' + element.SKU + '" name="qty' + element.SKU + '" value="1" class="input-tiny">');
            $(formBuy).append('<button type="button" class="addtocart btn btn-block btn-loads" rel="' + element.SKU + '">Add to Cart</button>');
            $(formBuy).children('button').attr("data-loading-text", "<i class='fa fa-spinner fa-spin' style='font-size: 14px'></i>");
            $(formBuy).append('<span class="product-wishlist"><a class="wishlist_toggle" rel="' + element.SKU + '"><span class="add heart-icon" rel="wishlist_text' + element.SKU + '"></span></a></span>');
            $(formBuy).appendTo(cardProduct);

            $(article).append(cardProduct);
            $('#contentProAjax').append(article);
        });
    } else {
        $('#contentProAjax').append('Not found product!');
    }
}

function openModalFabric(id) {
    $('#modalFabric .modal-fabric-body').html('<div class="row"><div class="col-md-6 col-img"></div><div class="col-md-6 col-description"><div class="container-description"></div></div></div></div>');
    $('#contentPro article').each(function(index) {
        $('#modalFabric .modal-fabric-body .col-img').append('<div class="content-image"><img class="img-fluid" width="264px" src="'+$(this).children().data('thumb')+'"></div>');
        $('#modalFabric .modal-fabric-body .container-description').append('<div class="content-description">'+$(this).children().data('description')+'</div>');
    });
    $('#modalFabric').addClass('open');
    var mainSlide = $(id).parent('article').data('stt');
    $('#modalFabric .modal-fabric-body .col-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        fade: true,
        initialSlide: mainSlide,
        asNavFor: '#modalFabric .modal-fabric-body .container-description'
    });
    $('#modalFabric .modal-fabric-body .container-description').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '#modalFabric .modal-fabric-body .col-img'
    });
    $('#modalFabric .modal-fabric-body .col-description').append('<a href="#">Enquire</a>');
}

function closeModalFabric(){
    $('#modalFabric').removeClass('open');
    $('#modalFabric .modal-fabric-body').html('');
}

var zoom = 0;
function zoomProIn_click(){
    if(zoom == 0){
        $('#main-image').css('transform','scale(1.2)');
        zoom ++;
        return;
    }
    if(zoom == 1){
        $('#main-image').css('transform','scale(1.4)');
        zoom ++;
        return;
    }
    if(zoom == 2){
        $('#main-image').css('transform','scale(1.6)');
        zoom ++;
        return;
    }
}

function zoomProOut_click(){
    if(zoom == 3){
        $('#main-image').css('transform','scale(1.4)');
        zoom --;
        return;
    }
    if(zoom == 2){
        $('#main-image').css('transform','scale(1.2)');
        zoom --;
        return;
    }
    if(zoom == 1){
        $('#main-image').css('transform','scale(1.0)');
        zoom --;
        return;
    }
}

function move_image(){
    var x=0;
    var y=0;
    var tx=0;
    var ty=0;
    var click=false;
    $('#main-image').mousedown(function(event){
        x = event.pageX;
        y = event.pageY;
        click = true;       
    });

    $('#main-image').mousemove(function(event){
    if(click == false) return;
        let cy = event.pageY,cx = event.pageX;
        $('#main-image').css('top',(cy-y+ty));
        $('#main-image').css('left',(cx-x+tx));
    });

    $('#main-image').mouseup(function(event){
        let cy = event.pageY,cx = event.pageX;
        tx += cx-x;
        ty +=cy-y;
        $('#main-image').css('top',ty);
        $('#main-image').css('left',tx);
        //$('#main-image').css('transform','translate(0px, 0px)');
        click=false;
    });
}

function selectSlick(){
    var countElements = $(".list-img-fabric .fabric-item").length;
    if (countElements > 10)
    {
        $('.list-img-fabric').slick({
        slidesToShow: countElements-1,
        slidesToScroll: 1, 
        asNavFor: '.list-fabric-main',
        centerMode:false,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: countElements-3,
                slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: countElements-5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: countElements-8,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    } else {
        $('.list-img-fabric').slick({
            slidesToShow: countElements,
            slidesToScroll: 1, 
            asNavFor: '.list-fabric-main',
            centerMode:false,
            focusOnSelect: true
            });
    }
};