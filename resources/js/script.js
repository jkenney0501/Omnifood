
$(document).ready(function() {
//sticky navigation--line 160 on style.css, add class
    $('.js--section-features').waypoint(function(direction) {
      if (direction == "down") {
        $('nav').addClass('sticky');
      } else {
          $('nav').removeClass('sticky');
      }
    },{
      offset: '60px;'
    });

   //scroll on buttons
   $('.js--scroll-to-plans').click(function () {
      $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
   });

   $('.js--scroll-to-start').click(function () {
    $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
 });

  //animations on scroll
    $('.js--wp-1').waypoint(function (_direction) {
        $('.js--wp-1').addClass('animate__animated animate__fadeInUp');
    },{
      offset: '50%'
    });
    //image-phone
    $('.js--wp-2').waypoint(function (_direction) {
      $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
    },{
      offset: '50%'
    });
    //cities
    $('.js--wp-3').waypoint(function (_direction) {
      $('.js--wp-3').addClass('animate__animated animate__fadeIn');
    },{
      offset: '50%'
    });
    //pricing
    $('.js--wp-4').waypoint(function (_direction) {
      $('.js--wp-4').addClass('animate__animated animate__pulse');
    },{
      offset: '50%'
    });

});
    