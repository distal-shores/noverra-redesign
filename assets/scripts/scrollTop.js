$(function () {
  var $scrollTop = $(".scrollTop");

  $( window ).scroll(function() {
    if( $(document).scrollTop() > 300 ) {
        $scrollTop.show();
    } else {
        $scrollTop.hide();
    }
  });


  $($scrollTop).click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 300);
    return false;
  });

});