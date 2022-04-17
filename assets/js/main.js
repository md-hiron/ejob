(function($){
  $('.menu-toggle i').on('click', function(){
    $('ul.main-menu').toggleClass('active-menu');
  });

  $(window).scroll(function(){
    if($(this).scrollTop() > 50){
      $('.header').addClass('sticy-header');
      $('.main-body').css('margin-top','108px');
    }else{
      $('.header').removeClass('sticy-header');
      $('.content-body-sec').css('margin-top','0');
    }
  });
})(jQuery);