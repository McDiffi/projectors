$(function(){
    
    $('#backtotop').click(function(){
        $('html, body').animate({scrollTop: '0px'},500)
    });
    
    $(window).scroll(function(){
        if($(this).scrollTop()){
            $('#backtotop:hidden').stop(true, true).fadeIn();
        } else {
            $('#backtotop').stop(true, true).fadeOut();
        }
    });
    
});