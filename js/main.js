$('.item').click(function(){     
    $('.view').fadeIn();

    let imgHtml = $(this).find('.pic').html();
     $('.view').find('figure').html(imgHtml);
});

$('.close').click(function(){
    $('.view').fadeOut();
});