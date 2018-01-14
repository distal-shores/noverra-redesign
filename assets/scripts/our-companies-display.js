$(function () {
  $('#companies-select').change(function () {
    $('.companies-section').hide();
    $('#' + $(this).val()).show();
  });

  $('#companies-tabs-container .tab').on('click', function () {
    var stripped = $(this).attr('id').substring(0, $(this).attr('id').length - 4);
    $('.tab').removeClass('active');
    $(this).addClass('active');
    $('.companies-section').hide();
    $('#' + stripped).show();
  })
});