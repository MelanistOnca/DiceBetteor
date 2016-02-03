// console.log('scripts.js loaded');
//functions


//$('.p1Chooser')[0].value
// returns "2"
//which was the value selected from the dropdown

//when roll button is clicked, store the above value in a p1 variable, p2's pick in a p2 variable, then compare with roll result. tally win/loss.

//outside onload
var startGame = function () {
  game.score.player1Wins=0;
  game.score.player2Wins=0;
  //loop for n players? keys.game.score.'player'+i+'Wins = 0;
}

var game = {
  rounds: 3,
  player1: 'Player 1',
  player2: 'Player 2',
  score: {
    player1Wins: 0,
    player2Wins: 0,
  },
  startGame : function () {
    game.score.player1Wins=0;
    game.score.player2Wins=0;
    //loop for n players? keys.game.score.'player'+i+'Wins = 0;
    console.log('scores set to 0');
  },
}


  console.log(game);
  console.log('that was game obj');

//outside onload

$(function(){
  //onload functions?

//event listener for start button
//$('button').eq(0) returns a jquery object with 1 element. use this to make listeners. below may be wonky, improve.
$('button').eq(0).on('click', function(){ game.startGame();

   });
// $('button').eq(0).onclick= /*game.startGame*/ console.log('$(\'button\').eq(0).onclick= worked');
// startListener

//on click, start game



  console.log('document loaded')
});
