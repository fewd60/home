var humanScore = 0;
var computerScore = 0;

$(document).ready(function(){
  $('#rock').click(playRock);
  $('#paper').click(playPaper);
  $('#scissors').click(playScissors);
});

function playRock() {
  play("rock");
}
function playPaper() {
  play("paper");
}
function playScissors() {
  play("scissors");
}

function play(humanPlay) {
  
  computerPlay = getComputerPlay();
  
  $('#status').html("<p>You played <strong>" + humanPlay + "</strong>. The bot played <strong>" + computerPlay + "</strong>.</p>");
  
  if(humanPlay == 'rock') {
    if(computerPlay == 'rock') {
      updateStatus("You tied. :|");
    } else if (computerPlay == 'paper') {
      updateStatus("You lose. :(");
      computerScore++;
    } else if (computerPlay == 'scissors') {
      updateStatus("You win! :)");
      humanScore++;
    }
  } else if (humanPlay == 'paper') {
    if(computerPlay == 'rock') {
      updateStatus("You win! :)");
      humanScore++;
    } else if (computerPlay == 'paper') {
      updateStatus("You tied. :|");
    } else if (computerPlay == 'scissors') {
      updateStatus("You lose. :(");
      computerScore++;
    }  
  } else if (humanPlay == 'scissors') {
    if(computerPlay == 'rock') {
      updateStatus("You lose. :(");
      computerScore++;
    } else if (computerPlay == 'paper') {
      updateStatus("You win! :)");
      humanScore++;
    } else if (computerPlay == 'scissors') {
      updateStatus("You tied. :|");
    }  
  }
  
  $('#humanScore').html(humanScore);
  $('#computerScore').html(computerScore);
  
}

function updateStatus(statusText){
  $('#status').append("<p>"+statusText+"</p>");
}

function getComputerPlay() {
  var plays = ['rock', 'paper', 'scissors'];
  var play = plays[Math.floor(Math.random() * plays.length)];
  return play;
}