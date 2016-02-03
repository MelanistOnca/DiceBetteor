// console.log('scripts.js loaded');
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
//$('button').eq(1).on('click', roundWin);

console.log('document loaded');
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
//stuff

  if($('.p1Chooser')[0].value===parseInt($('.resultField').text() ) ){
    game.score.player1Wins++;
    if( $('.currentScore2').text('SCORE') ){
      console.log('test SCORE check')
    } else {
      $('.currentScore2').text('' +0); //THIS SHOULD BE INCREMENT, THIS IS FOR TESTING, IS BAD, AND YOU SHOULD FEEL BAD
    }
  }
  if($('.p2Chooser')[0].value===parseInt($('.resultField').text() ) ){
    game.score.player2Wins++;
  }

}
roundScore();

function resultFieldUpdate (){
  $('.resultField').css('background-color','orange');
  $('.resultField').text('' + roll());
  setTimeout(delay,50);//this is apparently vanilla javascript, but i couldn't get alternate functionality working through jQuery
}

//event listener for start button
//$('button').eq(0) returns a jquery object with 1 element. use this to make listeners. below may be wonky, improve.
function delay(){
  $('.resultField').css('background-color','grey'),700;

  console.log('background should be grey');
}

function startGame() {
  console.log(game.score);
  game.score.player1Wins=0;
  game.score.player2Wins=0;
  console.log('scores set to 0, callback');
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
