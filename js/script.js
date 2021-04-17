$(document).ready(function(){

// counter
	$('.counter').counterUp({
    delay: 10,
    time: 1000
    });
 // counter

 // owl carousel
    $(".owl-carousel").owlCarousel({
  	items: 5,
  	loop: true,
  	center: true,
  	nav: true,

   	responsive:{
        0:{
            items:1,
          },
        576:{
            items:2,
            margin:5,
          },
        768:{
            items:3,
            margin:5
          },

        992:{
            items:5,
            margin:5
          },
        1200:{
            items:5,
            margin:5
          }

   	 }

  });
 // slick
 $('.autoplay').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000
});

});
// wow js
new WOW().init();

