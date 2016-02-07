
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
    // startG: function(){
    //   startGame;
    // },
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
$('button').eq(0).on('click', function(){
  startGame();
} );
$('button').eq(0).on('click', function(){
  hide('start');
} );
$('button').eq(1).on('click', resultFieldUpdate );
$('button').eq(1).on('click', roundScore );
// >>>>>>> f30de5b5db9e83ba901c7bd8b822be16a20475b8





//console.log('document loaded');

});

//not used currently.
function miniaturize(clas){
  $('.' + clas + '').children().css('width', '50%').css('height','50%').css('font-size','50%');

}

function hide(classString){
  $('.' + classString + '').css('visibility','hidden');

}

function show(classString){
  $('.' + classString + '').css('visibility','visible');
}

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
//refactor this to functions. these two checks are identical except for player number. generalize when you have a minute. might be what was holding playerNumer back from completion.


if($('.p1Chooser')[0].value===$('.resultField').text()  ){

  game.score.player1Wins++;
  //console.log(game.score);
  $('.currentScore1').text(game.score.player1Wins);

} else{
  //console.log('p1 did not match. no points earned');
};


  if($('.p2Chooser')[0].value===$('.resultField').text()  ){

    game.score.player2Wins++;
    //console.log(game.score);
    $('.currentScore2').text(game.score.player2Wins);

  } else{
    //console.log('p2 did not match. no points earned');
  }
  winCheck();
}
//roundScore();
  //start of win check
  function winCheck(){
    // console.log('winCheck was called.');
    if( (game.score.player1Wins >= 3) && (game.score.player2Wins >= 3) ){
    // console.log('The game is over! You tied! The game will start over now.');
    // $('tie').css('visibility','visible'); //implement this later to avoid using alert. should have it's own "block" to color/border/style/etc. will need a button to close/hide.
    alert('The game is over! You tied! The game will start over now.');
    show('start');
    startGame();

  } else if( game.score.player1Wins >= 3 ){
    // console.log('Player 1 has won! Click the start button to play again.');
    // $('.player1win').css('visibility','visible'); //implement this later to avoid using alert. should have it's own "block" to color/border/style/etc. will need a button to close/hide.
    alert('Player 1 has won! Click the start button to play again');
    show('start');
  } else if( game.score.player2Wins >= 3 ){
    // console.log('Player 2 has won! Click the start button to play again');
    // $('.player2win').css('visibility','visible'); //implement this later to avoid using alert. should have it's own "block" to color/border/style/etc. will need a button to close/hide.
    alert('Player 2 has won! Click the start button to play again');
    show('start');
  //game victory check. this will need to scale when player number is editable.
  } else {
    //console.log('victory not yet achieved.');
    return;
  }
  //may want to 'show' a CSS element rather than use alert() to show win. would need to be able to 'hide' the WINdow (haha...) with a click somewhere, which would need an event listener.
  //could have 3 'hidden' elements, one for p1 win, one for p2 win, one for tie, and call each as appropriate in the above checks.
    //end of win check
  }





function resultFieldUpdate (){

  $('.resultField').css('background-color','#FFBF00');
  $('.resultField').text('' + roll());
  setTimeout(delay,50);//this is apparently vanilla javascript, but i couldn't get alternate functionality working through jQuery
}

//event listener for start button
//$('button').eq(0) returns a jquery object with 1 element. use this to make listeners. below may be wonky, improve.
function delay(){

  $('.resultField').css('background-color','#FA752A'),700;
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
