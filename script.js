$(document).ready(function() {
  var lenghtOfItems = $(".dotSlideWrapper > ul > li").length;
  for (var i = 0; i < lenghtOfItems; i++) {
    if(i == 0){
    $(".dot_wrapper").append("<div class='dot active_dot' item='"+i+"'></div>");
    }else{
    $(".dot_wrapper").append("<div class='dot' item='"+i+"'></div>");
    }
  }


  $('.dot').each(function(){
      $(this).on('click', function(){
            var itemNumber = $(this).attr('item');
            $('.dot').removeClass('active_dot');
            $(this).addClass('active_dot');
            $(".dotSlideWrapper > ul > li").css({'display':'none'});
            var contentSelected = $(".dotSlideWrapper > ul > li").eq(itemNumber).fadeIn('fast');
      });
  });

});
