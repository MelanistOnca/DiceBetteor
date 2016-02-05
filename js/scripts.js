// //console.log('scripts.js loaded');
//functions


var game;
var dice;

//outside onload
// var startGame = function () {
//   game.score.player1Wins=0;
//   game.score.player2Wins=0;
//   //loop for n players? keys.game.score.'player'+i+'Wins = 0;
// }



//outside onload

$(function(){
  //onload functions?

  game = {
    rounds: 3,
    player1: 'Player 1',
    player2: 'Player 2',
    score: {
      player1Wins: 0,
      player2Wins: 0,
    },
    startG: startGame,
    }

function Dice(){
  this.sides = 2;
}

  dice = new Dice();


  //
 ////
//EVENT LISTENERS START HERE
$('button').eq(0).on('click', game.startG);
$('button').eq(1).on('click', resultFieldUpdate);
$('button').eq(1).on('click', roundScore);




//console.log('document loaded');
});

//EVENT LISTENERS END HERE
 ////
  //

  //$('.p1Chooser')[0].value
  // returns "2"
  //which was the value selected from the dropdown

  //when roll button is clicked, store the above value in a p1 variable, p2's pick in a p2 variable, then compare with roll result. tally win/loss.

  //on roll, compare result to pNChooser, modify scores
  // $('button').eq(0).on('click',)
function roundScore (){
//check for wins, increment scores accordingly.

//indented pegged for removal
        // if( $('.currentScore1').text() !== 'SCORE'){
        //   // //console.log('.currentScore1 is not equal to SCORE');
        // } else{
        //
        //   $('.currentScore1').text('0');
        // }
  //what i think i'm doing with these functions is setting the currentScore fields to 0. almost certainly a better way to do this. In fact, after just typing this, I should initialize them to 0 in the html. but now i want to see if my logic works, so i'll do that later.
        // if( $('.currentScore2').text() !== 'SCORE'){
        //   // //console.log('.currentScore2 is not equal to SCORE');
        // } else{
        //   $('.currentScore2').text('0');
        // }

  if($('.p1Chooser')[0].value!==$('.resultField').text() ){//the condition here pops an error on load.

    //console.log(game.score);
    //console.log('p1 did not match. no points earned');
  } else if($('.p1Chooser')[0].value===$('.resultField').text()){
    game.score.player1Wins++;
    //console.log(game.score);
    $('.currentScore1').text(game.score.player1Wins);
  } else {
    //console.log('you are in the player1 score check land of the dead, where the living should not be.');
  }
//using if (!not thing){nothing} else if (thing){do stuff} else{the world is broken}

  if($('.p2Chooser')[0].value===$('.resultField').text()  ){

    game.score.player2Wins++;
    //console.log(game.score);
    $('.currentScore2').text(game.score.player2Wins);

  } else{
    //console.log('p2 did not match. no points earned');
  }
  //start of win check in roundScore
if( (game.score.player1Wins >= 3) && (game.score.player2Wins >= 3) ){
  //console.log('The game is over! You tied! The game will start over now.');
  alert('The game is over! You tied! The game will start over now.');
  startGame();
} else if( game.score.player1Wins >= 3 ){
  //console.log('Player 1 has won! Click the start button to play again.');
  alert('Player 1 has won! Click the start button to play again');
} else if( game.score.player2Wins >= 3 ){
  //console.log('Player 2 has won! Click the start button to play again');
  alert('Player 2 has won! Click the start button to play again');
//game victory check. this will need to scale when player number is editable.
} else {
  //console.log('victory not yet achieved.');
}
  //end of win check in roundScore
}
//roundScore();



function resultFieldUpdate (){
  $('.resultField').css('background-color','orange');
  $('.resultField').text('' + roll());
  setTimeout(delay,50);//this is apparently vanilla javascript, but i couldn't get alternate functionality working through jQuery
}

//event listener for start button
//$('button').eq(0) returns a jquery object with 1 element. use this to make listeners. below may be wonky, improve.
function delay(){
  $('.resultField').css('background-color','grey'),700;
} //flashes the result background-color to indicate new result/successful roll

function startGame() {
  //console.log(game.score);
  game.score.player1Wins=0;
  game.score.player2Wins=0;
  $('.currentScore1').text('0');
  $('.currentScore2').text('0');
  $('.resultField').text('ROLL AWAY');
  $('.p1Chooser')[0].value=0;
  $('.p2Chooser')[0].value=0;


  //console.log('scores set to 0, callback');
}

 // $('button').eq(0).on('click', game.startG);


// var roll = function(){
//    return Math.ceil( (Math.random()*dice.sides) );
//  };
  //above also not being recognized


  //below not being recognized when called from console.
function roll(){
  return Math.ceil( (Math.random()*dice.sides) );
  } //RNG inspired by khr055 at http://stackoverflow.com/questions/4959975/generate-random-value-between-two-numbers-in-javascript






//});
