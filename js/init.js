(function($){
    $(function(){
        $('.button-collapse').sideNav();
        $('.parallax').parallax();
    })
})(jQuery);

$(document).ready(function(){
    $('.materialboxed').materialbox();
});

$('#bg1-arrow').addClass('animated fadeOutDown infinite')

// tooltips
$(document).ready(function(){
    $('.tooltipped').tooltip({delay: 50});
});

// scroll spy
$(document).ready(function(){
    $('.scrollspy').scrollSpy();
});

$(".sidenav").hide();
$(window).scroll(function() {
    if ($(this).scrollTop()>400)
    {
        $('.sidenav').fadeIn();
    }
    else
    {
        $('.sidenav').fadeOut();
    }
});

$(document).ready(function() {
    $(window).scroll(function() {
        if ($('body').height() <= ($(window).height() + $(window).scrollTop())) {
            $(".sidenav").fadeOut();
        }
    });
});

$(document).ready(function(){
    $('.slider').slider({full_width: true});
});