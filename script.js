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




    $('a[href^="#"]').click(function(){
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? 'html' : href);
        let position = target.offset().top;

        $("html, body").animate({scrollTop:position}, 600, "swing");
        return false;
    });


    


    $('.pickup-items').slick({
        arrows: false,
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerPadding: '50px',
                    slidesToShow: 1,
                }
            }
        ]
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
