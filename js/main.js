'use strict';
(function ($) {

    $('.block1__button').on('click', function (e) {
        e.preventDefault();
        var number = $('#number1').text() +  $('#number').text();
        var string = (number - 1);
        $('#number').text(string);
        $('#number1').text(0);
        if(string < 0){
            alert('Приносим свои извинения! Препарарата пока что нету в наличии!');
            $('#number').text(0)
        }
    });

})(jQuery);