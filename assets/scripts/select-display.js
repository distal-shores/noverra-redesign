$(function () {
  $('#about-select').change(function () {
    console.log("changed");
    $('.about-section').hide();
    $('#' + $(this).val()).show();
  });
});