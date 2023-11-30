$(function(){
    $('.burg h2').click(function(){
        var el = $('.sidebar');
        if(el.is(':visible'))
        {
            el.hide();
            $('.main').css('left','0');
        }else{
            el.show();
            $('.main').css('left','270px');
        }
    })
})