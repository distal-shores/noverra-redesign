$(function () {
  $('#companies-select').change(function () {
    $('.companies-section').hide();
    $('#' + $(this).val()).show();
  });
});