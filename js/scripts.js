
// //console.log('scripts.js loaded');

//functions


var game;
var dice;




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










  //
 ////
//EVENT LISTENERS START HERE
// <<<<<<< HEAD
// $('button').eq(0).on('click', game.startG );
// $('button').eq(1).on('click', resultFieldUpdate );
// $('button').eq(1).on('click', function(){
//   roundScore(/*game.playerCount*/) ;
// });
// //$('button').eq(0).on('click', )
// =======
$('button').eq(0).on('click', game.startG );
$('button').eq(1).on('click', resultFieldUpdate );
$('button').eq(1).on('click', roundScore );
// >>>>>>> f30de5b5db9e83ba901c7bd8b822be16a20475b8





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

function Dice(int){

  //this.sides = 2;
  //need to design the page/js so only INT values are passed through, avoiding the need to check.
  this.sides = int;
}

function diceSizer(){
  dice = new Dice($('.diceChooser')[0].value)
  //needs to change .p1Chooser and .p2Chooser to allow for full dice size selection. added playerSideChooser to see if i can just use that.
  adjustChoosers() ;
}

function adjustChoosers(  ) {
  //var pChoose = $('.playerSideChooser')
  for(var i=0;i<( parseInt(dice.sides)+1 );i++){
     $('.playerSideChooser').append('<option>');
     if(i==0){
       $('.playerSideChooser option:first-child').attr('value',i);
       $('.playerSideChooser option:first-child').text('')
     } else{
     $('.playerSideChooser option:nth-child('+(i+1)+')').attr('value',''+(i));
     $('.playerSideChooser option:nth-child('+(i+1)+')').text(i);
     //console.log('adjustChoosers loop ' +i + 'th i');
   }
  }//getting double the number of options intended. may be due to 2 elements with class '.playerSideChooser'. may need to loop for something like var c=$('.playerSideChooser').length then loop inside of that? maybe divide the conditional by the .length?
  //use first-child and last-child?
}



//changing the number of players will require additional 'player containers'. I should be able to set up a player identifier interface to change labels, and scale to n. then can use these labels to dictate further item generation (chooser/scoreboard).

//changing the number of dice will require creation of additional Choosers(initially just playerChoosers, and possibly later size choosers. would also need to rework scoring, i think. to check for EACH match rather than A match. maybe stick with just one player number choice.)

function startGame() {
  //console.log(game.score);

  game.score.player1Wins=0;
  game.score.player2Wins=0;

  $('.currentScore1').text('0');
  $('.currentScore2').text('0');
  $('.resultField').text('ROLL AWAY');
  $('.playerSideChooser').empty();
  // $('.p1Chooser')[0].value=0;
  // $('.p2Chooser')[0].value=0;
  diceSizer();
  //select dice size. call function.
  //$('.p1Chooser')[0].value


  //dice = new Dice();
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
