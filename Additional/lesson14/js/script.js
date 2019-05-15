$(document).ready(function () {

    $('.main_btna').on('click', function() {
        $('.overlay').animate({opacity: 'show'}, 1000);
        $('.modal').animate({
            height: 'show', 
            opacity: 'show'
        }, {
            duration: 1000,
            specialEasing: {
                height: 'swing',
                opacity: 'linear'
            }
        });
    });

    $('.main_btn').on('click', function() {
        $('.overlay').animate({opacity: 'show'}, 1000);
        $('.modal').animate({
            height: 'show', 
            opacity: 'show'
        }, {
            duration: 1000,
            specialEasing: {
                height: 'swing',
                opacity: 'linear'
            }
        });
    });

    $('nav > ul > li:eq(1)').on('click', function() {
        $('.overlay').animate({opacity: 'show'}, 1000);
        $('.modal').animate({
            height: 'show', 
            opacity: 'show'
        }, {
            duration: 1000,
            specialEasing: {
                height: 'swing',
                opacity: 'linear'
            }
        });
    });

    $('.close').on('click', function(){
        $('.overlay').animate({opacity: 'hide'}, 1000);
        $('.modal').animate({
            height: 'hide', 
            opacity: 'hide'
        }, {
            duration: 1000,
            specialEasing: {
                height: 'swing',
                opacity: 'linear'
            }
        });
    });

// POST запрос
    let thanks = $('.thanks');
    
    $('.form').on('submit', function(event) {
        let name = $('.contactform_name').val(),
            phone = $('.contactform_phone:not(div)').val(),
            mail = $('.contactform_mail:not(div').val(),   
            message = $('textarea').val(),
            modal = $('.modal');
        event.preventDefault();
        $.ajax({
        url: "/Additional/lesson14/server.php",
        type: "POST",
        data: {
            name: name,
            phone: phone,
            mail: mail,
            message: message
        },
        success: function() {    
                modal.hide();
                thanks.show();
            }
        });
    });

    let back = $('.back').on('click', function() {
        thanks.hide();
        $('.overlay').animate({opacity: 'hide'}, 1000);
    });

});