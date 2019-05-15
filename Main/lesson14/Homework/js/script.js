$(document).ready(function () {

    $('.main_btna').on('click', function() {
        $('.overlay').animate({opacity: 'toggle'}, 2000);
        $('.modal').animate({height: 'toggle'}, 2000);
    });

    $('.main_btn').on('click', function() {
        $('.overlay').animate({opacity: 'toggle'}, 2000);
        $('.modal').animate({height: 'toggle'}, 2000);
    });

    $('nav > ul > li:eq(1)').on('click', function() {
        $('.overlay').animate({opacity: 'toggle'}, 2000);
        $('.modal').animate({height: 'toggle'}, 2000);
    });

    $('.close').on('click', function(){
        $('.overlay').animate({opacity: 'hide'}, 2000);
        $('.modal').animate({height: 'hide'}, 2000);
    });

});