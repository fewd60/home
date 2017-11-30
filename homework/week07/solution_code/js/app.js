$(document).ready(function() {
  $('header nav ul li:first-child').click(function(){
    $(this).parent().toggleClass('slideDown');
  });
});