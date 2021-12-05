$(function(){

    $('.toggle_btn').click(function(){
        if ($('#header').hasClass('open')) {
            $('#header').removeClass('open');
        } else {
            $('#header').addClass('open');
        }
    });

    $('#mask').click(function(){
        $('#header').removeClass('open');
    });


    $('.pickup-items').slick({
        arrows: false,
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 3,
    });

});
