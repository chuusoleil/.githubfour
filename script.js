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

    $('#navi a').click(function(){
        $('#header').removeClass('open');
    });


    


    $('.pickup-items').slick({
        arrows: false,
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 3,
    });



    $(window).scroll(function(){
        $('.fadein').each(function(){
            let scroll = $(window).scrollTop();
            let target = $(this).offset().top;
            let windowHeight = $(window).height();

            if (scroll > target - windowHeight + 200){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        });
    });

});
