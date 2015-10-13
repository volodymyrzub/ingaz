$(document).ready(function (){
   var nav = $('.navbar-default').offset().top;

    $(document).scroll(function(){
        if($(this).scrollTop() > nav)
        {
            $('.navbar-default').addClass('dark-nav');
        } else {
            $('.navbar-default').removeClass('dark-nav');
        }
    });
});
