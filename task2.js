$(window).bind('scroll',function(e){
    parallaxScroll();
});

function parallaxScroll(){
   var scrolled = $(window).scrollTop(); 
   $('.layer-1').css('top',(0-(scrolled*.25))+'px');
   $('.layer-2').css('top',(0-(scrolled*.5))+'px');
   $('.layer-3').css('top',(0-(scrolled*.75))+'px');
   $('.rock-1').css('top',(400-(scrolled*.8))+'px');
   $('.rock-2').css('top',(200-(scrolled*.6))+'px');
   $('.rock-3').css('top',(500-(scrolled*.4))+'px'); 
   $('.rock-4').css('top',(600-(scrolled*.5))+'px'); 
   $('.rock-5').css('top',(600-(scrolled*.7))+'px'); 
   $('.rock-6').css('top',(400-(scrolled*.7))+'px'); 
   $('.rock-7').css('top',(600-(scrolled*.5))+'px'); 
   $('.rock-8').css('top',(200-(scrolled*.2))+'px');
   $('.rock-9').css('top',(200-(scrolled*.4))+'px');
}

$(document).ready(function() {
    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    // Parallax effect
    $(window).scroll(function() {
        var scrolled = $(this).scrollTop();
        $('.parallax-0').css('background-position-y', -(scrolled * 0.25) + 'px');
        $('.parallax-1').css('background-position-y', -(scrolled * 0.5) + 'px');
        $('.parallax-2').css('background-position-y', -(scrolled * 0.75) + 'px');
        $('.parallax-3').css('background-position-y', -(scrolled * 1) + 'px');
    });

    // Fade in and scale elements
    $(window).scroll(function() {
        var scrolled = $(this).scrollTop();
        $('.overlay-text, h1').css({
            'opacity': function() {
                return 1 - (scrolled * 0.002);
            },
            'transform': function() {
                return 'scale(' + (1 - scrolled * 0.0005) + ')';
            }
        });
    });

    // Rotate elements
    $(window).scroll(function() {
        var scrolled = $(this).scrollTop();
        $('.parallax-inner').css('transform', 'rotate(' + (scrolled * 0.05) + 'deg)');
    });
});
