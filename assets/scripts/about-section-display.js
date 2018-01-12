$(function () {
  $('#about-select').change(function () {
    $('.about-section').hide();
    $('#' + $(this).val()).show();
  });

  $('#about-tabs-container .about-tab').on('click', function(){
    var stripped = $(this).attr('id').substring(0, $(this).attr('id').length - 4);
    $('.about-tab').removeClass('active');
    $(this).addClass('active');
    $('.about-section').hide();
    $('#' + stripped).show();
  })

  $('.read-more').on('click', function(){
    var hiddenParagraphs = $(this).siblings('p.hidden');
    hiddenParagraphs.removeClass('hidden');
    $(this).addClass('hidden');
  });

});