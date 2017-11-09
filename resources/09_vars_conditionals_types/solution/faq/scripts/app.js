function toggleAnswer1() {
  $('#answer1').slideToggle();
}
function toggleAnswer2() {
  $('#answer2').slideToggle();
}
function toggleAnswer3() {
  $('#answer3').slideToggle();
}
$('#answer1').hide();
$('#answer2').hide();
$('#answer3').hide();
$('#question1').click(toggleAnswer1);
$('#question2').click(toggleAnswer2);
$('#question3').click(toggleAnswer3);