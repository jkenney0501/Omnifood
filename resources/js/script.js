
$(document).ready(function() {
//sticky navigation--line 160 on style.css, add class
    

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
    
//mobile responsive nav js
$('.js--nav-icon').click(function() {
  var nav = $('.js--main-nav');
 
 nav.slideToggle(200);
  var icon = $('.js--nav-icon i');
  if (icon.hasClass('ion-navicon-round')) {
      icon.addClass('ion-close-round');
      icon.removeClass('ion-navicon-round');
  } else {
      icon.addClass('ion-navicon-round');
      icon.removeClass('ion-close-round');
  }
});