
//  make the “Do Something” button text blue
$('.actions p').css('color', 'blue');

// make the long paragraph collapse and uncollapse
// when you hit the “Do Something” button
$('.actions p').click(collapseAndUncollapse);

function collapseAndUncollapse(){
  $('.hipsterSpeak').slideToggle();
}

// make the long purple box disappear when you click the blue box
$('#blueBox').click(function purpleDisappear(){
  $('#purpleBox').hide()
});
// NOTE: You can combine the "listener" - the .click part
// and the "handler" - the function that performs the DOM manipulation
// The new syntax is above, the kind you're used to is below:

// purple box reappear when you click the red box.
$('#redBox').click(purpleAppear);

function purpleAppear(){
  $('#purpleBox').show()
}
