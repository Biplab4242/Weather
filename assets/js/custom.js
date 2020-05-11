// Stick Up

jQuery(function($) {
  $(document).ready( function() {
    //enabling stickUp on the '.navbar-wrapper' class
    $('.navbar-wrapper').stickUp();
  });
});



//   Stick Up 

$(document).ready( function() {
    //enabling stickUp on the '.navbar-wrapper' class
    $('.navbar-wrapper').stickUp({
                  parts: {
                    0:'home',
                    1:'feature',
                    2: 'review',
                    3: 'download'
                  },
                  itemClass: 'menuItem',
                  itemHover: 'active'
                });
  });



// 3d Slider
$(function() {
  $('#dg-container').gallery();
});