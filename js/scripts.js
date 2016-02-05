// console.log('scripts.js loaded');
//functions


var game;
var dice;




//outside onload

$(function(){
  //onload functions

  game = {
    rounds: 3,
    playerCount: 2,
    players: {
      1: {
        name: '',
        score: 0,
      }
    },
    //below probably goes dodo once "players" object is functional.
    player1: 'Player 1',
    player2: 'Player 2',
    score: {
      player1Wins: 0,
      player2Wins: 0,
    },
    startG: startGame,
    }


//code excised from Dice.
    // this.set = function(int){
    //    if(int<2){
    //     console.log('Dice with less than 2 sides not allowed. (Also impossible) Your dice is a coin now.');
    //     this.sides = 2;
    //   } else if(int>2){
    //     console.log('We set your dice side number to the nearest whole number to what you entered.')
    //     this.sides = Math.round(int);
    //   } else {
    //     console.log('looks like you did not enter a number.')
    //   }
    // }








  //
 ////
//EVENT LISTENERS START HERE
$('button').eq(0).on('click', game.startG );
$('button').eq(1).on('click', resultFieldUpdate );
$('button').eq(1).on('click', function(){
  roundScore(game.playerCount) ;
});




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
function Player(n,id) {
  //will need to set default players to 0 for the planned iteration to make sense.
  game.players.n.name = id;
  game.playerCount++;
}

function roundScore (playNum){
//check for wins, increment scores accordingly.

// if($('.p1Chooser')[0].value!==$('.resultField').text() ){
//   console.log(game.score);
//   console.log('p1 did not match. no points earned');
// } else if($('.p1Chooser')[0].value===$('.resultField').text()){
//   game.score.player1Wins++;
//   console.log(game.score);
//   $('.currentScore1').text(game.score.player1Wins);
// } else {
//   console.log('you done $^#%ed up.')
// };
for(var i=0;i<game.playerCount;i++){

//the checkers here are functionally identical except for player number. generalize p2 to make the player number check managable. p2 is better code than p1 check.

//   $('.playerSideChooser').append('<option>');
//   if(i===0){
//     $('.playerSideChooser option:first-child').attr('value',i);
//     $('.playerSideChooser option:first-child').text('')
//   } else{
//   $('.playerSideChooser option:nth-child('+(i+1)+')').attr('value',''+(i));
//   $('.playerSideChooser option:nth-child('+(i+1)+')').text(i);
//   console.log('adjustChoosers loop ' +i + 'th i');
//

  if($('.p2Chooser')[0].value===$('.resultField').text()  ){

    game.score.player2Wins++;
    console.log(game.score);
    $('.currentScore2').text(game.score.player2Wins);

  } else{
    console.log('p2 did not match. no points earned');
  };


  winCheck();
}
}
//roundScore();
//start of win check

function winCheck(){
  if( (game.score.player1Wins >= 3) && (game.score.player2Wins >= 3) ){
  console.log('The game is over! You tied! The game will start over now.');
  alert('The game is over! You tied! The game will start over now.');
  startGame();
} else if( game.score.player1Wins >= 3 ){
  console.log('Player 1 has won! Click the start button to play again.');
  alert('Player 1 has won! Click the start button to play again');
} else if( game.score.player2Wins >= 3 ){
  console.log('Player 2 has won! Click the start button to play again');
  alert('Player 2 has won! Click the start button to play again');
//game victory check. this will need to scale when player number is editable.
} else {
  console.log('victory not yet achieved.');
}
  //end of win check
}




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
     if(i===0){
       $('.playerSideChooser option:first-child').attr('value',i);
       $('.playerSideChooser option:first-child').text('')
     } else{
     $('.playerSideChooser option:nth-child('+(i+1)+')').attr('value',''+(i));
     $('.playerSideChooser option:nth-child('+(i+1)+')').text(i);
     console.log('adjustChoosers loop ' +i + 'th i');
   }
  }//getting double the number of options intended. may be due to 2 elements with class '.playerSideChooser'. may need to loop for something like var c=$('.playerSideChooser').length then loop inside of that? maybe divide the conditional by the .length?
  //use first-child and last-child?
}



//changing the number of players will require additional 'player containers'. I should be able to set up a player identifier interface to change labels, and scale to n. then can use these labels to dictate further item generation (chooser/scoreboard). ALSO win conditions will need to be generalized.

//omg. this win refactor for n-players is gunna SUUUUUUUUUUUCK. need to adjust roundScore().

//roundScore is unweildy. i should break it up into smaller functions.

function playerNumbers(){
  game.playerCount = $('.playerChooser')[0].value;
  //create more player container div elements, including p1dicechoice, p1chooser. also player columns in players score container

//removed code from below for loop// $('.row div:nth-child(3)').attr('test','test')
// if(i===0){
//   $('.row div:first-child').attr('value',i);
//   $('.playerSideChooser option:first-child').text('')
// } else{
  for(var i=1; i<(game.playerCount+1);i++){
    $('.row').append('<div>');
    console.log('appended div ' +i+ ' times');
    //code removed here
    $('.row div:nth-child('+i+')').append('<h2>').addClass("player player"+i+" container one-half column u-max-full-width ");
    console.log('appended h2 and added class names ' +i+ ' times');
    $('h2').eq((i-1)).text('Player '+i);
    console.log('changed the text on h2 ' +i+ ' times');
    //attr('value',i);
    // $('.row div:nth-child('+i+')').text(i);
    console.log('adjustChoosers loop ' +i + 'th i');
    //code removed here
}
// code removed from above for loop at bottom(just above closing brace)
// }


//   $('.playerSideChooser').append('<option>');
//   if(i===0){
//     $('.playerSideChooser option:first-child').attr('value',i);
//     $('.playerSideChooser option:first-child').text('')
//   } else{
//   $('.playerSideChooser option:nth-child('+(i+1)+')').attr('value',''+(i));
//   $('.playerSideChooser option:nth-child('+(i+1)+')').text(i);
//   console.log('adjustChoosers loop ' +i + 'th i');
//

}//end of playerNumbers


//changing the number of dice will require creation of additional Choosers(initially just playerChoosers, and possibly later size choosers. would also need to rework scoring, i think. to check for EACH match rather than A match. maybe stick with just one player number choice.)

//for dice animations, will probably have to skip 3d aspirations. use 2d imagines, with shifting placeholder characters like #%*@ before result is shown on top "edge"

function startGame() {
  console.log(game.score);
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
