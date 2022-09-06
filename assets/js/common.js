$(document).ready(function() {
  $(".specialists__list").slick({
    slidesToShow: 3,
    swipe: false,
    dots: true,
    infinite: false,
    arrows: false,
    slidesToScroll: 1,
    responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
          autoplay: true,
				}
			},
			{
				breakpoint: 728,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
          autoplay: true,
					infinite: true
				}
			}
		]
  });
  $(".about__advantages").slick({
    slidesToShow: 5,
    swipe: false,
    dots: true,
    arrows: false,
    slidesToScroll: 1,
    responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
          swipe: true,
          infinite: true,
          autoplaySpeed: 4000,
          autoplay: true
				}
			},
			{
				breakpoint: 728,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
          swipe: true,
          infinite: true,
          autoplaySpeed: 4000,
          autoplay: true
				}
			}
		]
  });
  if( window.innerWidth <= 1025 ){
    $(".service__list").slick({
      slidesToShow: 2,
      infinite: true,
      autoplaySpeed: 4000,
      autoplay: true,
      dots: true,
      arrows: false,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 901,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }
  $(".works__block-work").slick({
    slidesToShow: 1,
    dots: true,
    arrows: true,
    slidesToScroll: 1,
    prevArrow: '<div class="arrow-wrp"><svg class="arrow arrow-left" viewBox="0 0 40 40"><path d="M22.131 27.4697C22.6227 26.9315 22.6212 26.1068 22.1277 25.5704L16.8192 19.8007L22.1292 14.0167C22.6216 13.4804 22.6211 12.6563 22.1282 12.1206C21.5732 11.5174 20.6211 11.5174 20.0662 12.1206L13 19.8007L20.0594 27.4733C20.6174 28.0798 21.5751 28.0782 22.131 27.4697Z" /></svg></div>',
    nextArrow: '<div class="arrow-wrp"><svg class="arrow arrow-right" viewBox="0 0 40 40"><path d="M17.869 12.5303C17.3773 13.0685 17.3788 13.8932 17.8723 14.4296L23.1808 20.1993L17.8708 25.9833C17.3784 26.5196 17.3789 27.3437 17.8718 27.8794C18.4268 28.4826 19.3789 28.4826 19.9338 27.8794L27 20.1993L19.9406 12.5267C19.3826 11.9202 18.4249 11.9218 17.869 12.5303Z" /></svg></div>'
  });

  let $prices_nav_button = $('.prices__navigation__mobile');
  $prices_nav_button.on('click', function () {
    $(this).parent().toggleClass('shown');
    $(this).next().toggle();
    $(document).mouseup( function(e){
      if ( !$prices_nav_button.is(e.target) && $prices_nav_button.has(e.target).length === 0 ) { 
        $(".prices-info__sidebar__navigation").hide();
        $($prices_nav_button).parent().removeClass('shown');
      }
    });
  }); 

  function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    if ($('.prices-info__sidebar').length) {
      var $side_nav_wrapper = $('.prices-info__sidebar__navigation-wrapper'),
          side_nav_top      = $('.prices-info__sidebar').offset().top,
          side_nav_height   = $('.prices-info__sidebar').height() - 55,
          side_nav_offset   = side_nav_top + side_nav_height;
      if ($(window).width() < 1025) {
        if (scrollPos >= side_nav_offset) {
            $side_nav_wrapper.addClass('sticky');
        } else {
            $side_nav_wrapper.removeClass('sticky');
        }
      } else {
        $side_nav_wrapper.removeClass('sticky');
      }
    }
  }
  $(document).on('scroll', onScroll);
});