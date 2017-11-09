$(document).ready(function(){
  $('#submit-button').click(function(event){
    event.preventDefault();
    // instead of just saying "button pressed"
    $('.message').html('button pressed')

    // make the message on the page say "you are legally
    // old enough to vote" if the person is 18 or older


    // and "you'll need to wait a few years to vote"
    // if they're under 18.


    // BONUS: if the person is unable to vote, tell them
    // how many more years until they'll be able to
    // for example, a person who reports that they are 15
    // would see the message
    // "you'll need to wait 3 more years to vote"
  })
});
