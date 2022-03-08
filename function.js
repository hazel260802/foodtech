$('li').on('click', function(){
    $('li').removeClass('active');
    $(this).toggleClass('active');
 })