(function($) {
  Drupal.behaviors.carousel = {
    attach: function (context, settings) {
      var carouselSettings = {
        members: {
          infinite: true,
          slidesToShow: 5,
          dots: true,
          arrows: false,
          responsive: [{
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 2,
            }
          }]
        },
        blog: {
          infinite: true,
          slidesToShow: 4,
          dots: false,
          arrows: true,
          responsive: [{
            breakpoint: 768,
            settings: {
              arrows: false,
              dots: true,
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 640,
            settings: {
              arrows: false,
              dots: true,
              slidesToShow: 2,
            }
          }]
        }
      };
      $('.member-content .view-content').slick(carouselSettings.members);
      $('.blog-content .view-content').slick(carouselSettings.blog);
    }
  };

  Drupal.behaviors.sticker = {
    attach: function (context, settings) {
      var stickySettings = {
        headerSticker: {
          topSpacing: 0
        }
      };
      $('.header').sticky(stickySettings.headerSticker);
    }
  };

  Drupal.behaviors.preloader = {
    attach: function (context, settings) {
      window.onload=function(){
        $('body').removeClass('ovh');
        $('.m-loading').remove();
      }
    }
  };


  Drupal.behaviors.smoothscroll = {
    attach: function (context, settings) {
      var $root = $('html, body');
      $('.main-menu a:not(.button)').click(function() {
        var headerHeight = $('.header').innerHeight();
        $root.animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top - headerHeight
        }, 500);
        return false;
      });
    }
  }
})(jQuery);
