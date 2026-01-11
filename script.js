$(function () {
  // DOM is ready

  $('.toggle').on('click', function () {
    $(this).next().slideToggle();
  });
});
