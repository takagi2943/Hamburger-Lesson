$(function() {
  $('.menu-trigger').on('click', function(event) {
    //menu-triggerクリック時に行われる
    $(this).toggleClass('active');
    $('#sp-menu').fadeToggle();
    event.preventDefault();
  });
});