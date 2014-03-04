$(document).ready(function() {
  console.log('here');
  $('#top_menu').on('click', 'a', function(event) {
    event.preventDefault();
    console.log(event);
    console.log($(this));
    console.log($('#title1'));
    $('#title1')[0].innerText = $(this)[0].innerText;
    console.log($('#top_section'));
    $('#top_section').css("background", "url('" + $(this)[0].href + "') no-repeat");
    $('#top_section').css("background-size", "100% 100%");
  });
});
