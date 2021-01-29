
// Animating the carousel
$('#templateCarousel').carousel()

// Adding background to the navbar when scrolled
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 500){
        $('.fixed-top').css('background', 'transparent');
    } else{
        $('.fixed-top').css('background', 'rgba(0, 0, 0, 0.9)');
    }
});

// Carousel caption animation 
$(function() {
  setTimeout(function() {
    $(".caption1").addClass("fadein");
  }, 100);
});

// Carousels main text animation 
$(function() {
  setTimeout(function() {
    $(".display-2").addClass("fadein");
  }, 100);
});

// Cards fading animation
$(function() {
    setTimeout(function() {
      $(".card").addClass("scalein");
    }, 100);
  });

// Scroll down animation (being tested)
  var $window = $(window);
  var $elem = $(".card")
  
  function isScrolledIntoView($elem, $window) {
      var docViewTop = $window.scrollTop();
      var docViewBottom = docViewTop + $window.height();
  
      var elemTop = $elem.offset().top;
      var elemBottom = elemTop + $elem.height();
  
      return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }
  $(document).on("scroll", function () {
      if (isScrolledIntoView($elem, $window)) {
          $elem.addClass("scalein")
      }
  });