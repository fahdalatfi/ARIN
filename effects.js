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

