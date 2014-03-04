$(document).ready(function() {
  console.log('here');
  $('#top_menu').on('click', 'a', function(event) {
    event.preventDefault();
    $('#title1')[0].innerText = $(this)[0].innerText;
    $('#top_section').css("background", "url('" + $(this)[0].href + "') no-repeat");
    $('#top_section').css("background-size", "100% 100%");
  });
  $('.menu').on('click', function(event) {
    $('.sub').toggle();
  });
});
