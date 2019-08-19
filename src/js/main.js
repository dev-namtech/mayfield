jQuery(document).ready(function() {
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

    if($(window).width() < 992){
        jQuery('.sub-header').slick({
          dots: false,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          auto: true,
        });
    }

    jQuery('.section-top-seller .row').slick({
      dots: false,
      arrows: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      auto: true,
      looop: true,
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

    jQuery('select.js').each(function () {
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
        $styledSelect.click(function (e) {
          e.stopPropagation()
          jQuery('div.select-styled.active').not(this).each(function () {
            jQuery(this).removeClass('active').next('ul.select-options').hide()
          })
          jQuery(this).toggleClass('active').next('ul.select-options').toggle()
        })
        $listItems.click(function (e) {
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
        jQuery(document).click(function () {
          $styledSelect.removeClass('active')
          $list.hide()
        })
    });
});