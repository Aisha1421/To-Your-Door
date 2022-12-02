$(document).ready(function(){
    /*----sticky-navigation----*/
$('.js--section-features').waypoint(function(direction){
    if (direction == "down")
        {
          $('nav').addClass('sticky-nav'); 
          
        }
    else{
        $('nav').removeClass('sticky-nav');
        }
    
},{
    offset: '80px'
})
    /*----scroll-on button----*/
    $('.js--scroll-to-plan').click(function(){
        $('html,body').animate({scrollTop: $('#signup').offset().top},1000);
    })
    
    $('.js--scroll-to-feature').click(function(){
        $('html,body').animate({scrollTop: $('.js--section-features').offset().top},1000);
    })
    
    
    /*----scroll-link-vendor-script----*/
    
    
    $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
    
    /*----animation-on-scroll----*/
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeIn finite');
    },{
        offset: '50%'
    })
    
    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated fadeInUp finite');
    },{
        offset: '50%'
    })
    
    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animated fadeIn finite');
    },{
        offset: '50%'
    })
    
    $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animated pulse finite');
    },{
        offset: '50%'
    })
    /*---------------------------------*/
    /*--------responsiv button---------*/
    /*---------------------------------*/
    $('.js--responsiv-nav').click(function(){
        var nav=$('.main-nav');
        var icon=$('.js--responsiv-nav  i')
        nav.slideToggle(200);
       
        if(icon.hasClass('ion-navicon-round'))
            {
                icon.addClass('ion-close-round');
                icon.removeClass('ion-navicon-round')
            }
        else{
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    })
    
    /*gmaps*/
  var map=  new GMaps({
  div: '.map',
  lat: 72.3310,
  lng: 72.8517
});
    
    map.addMarker({
  lat: 24.3310,
  lng: 72.845,
  title: 'Ambaji Temple',
  infoWindow: {
  content: '<p>Ambaji Temple In Gujrat</p>'
}
});

})
