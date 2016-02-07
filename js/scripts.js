<<<<<<< HEAD
// console.log('scripts.js loaded');
=======
// //console.log('scripts.js loaded');
>>>>>>> f30de5b5db9e83ba901c7bd8b822be16a20475b8
//functions


var game;
var dice;




//outside onload

$(function(){
<<<<<<< HEAD
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
=======
  //onload functions?

  game = {
    rounds: 3,
>>>>>>> f30de5b5db9e83ba901c7bd8b822be16a20475b8
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
<<<<<<< HEAD
    //     console.log('Dice with less than 2 sides not allowed. (Also impossible) Your dice is a coin now.');
    //     this.sides = 2;
    //   } else if(int>2){
    //     console.log('We set your dice side number to the nearest whole number to what you entered.')
    //     this.sides = Math.round(int);
    //   } else {
    //     console.log('looks like you did not enter a number.')
=======
    //     //console.log('Dice with less than 2 sides not allowed. (Also impossible) Your dice is a coin now.');
    //     this.sides = 2;
    //   } else if(int>2){
    //     //console.log('We set your dice side number to the nearest whole number to what you entered.')
    //     this.sides = Math.round(int);
    //   } else {
    //     //console.log('looks like you did not enter a number.')
>>>>>>> f30de5b5db9e83ba901c7bd8b822be16a20475b8
    //   }
    // }








  //
 ////
//EVENT LISTENERS START HERE
<<<<<<< HEAD
$('button').eq(0).on('click', game.startG );
$('button').eq(1).on('click', resultFieldUpdate );
$('button').eq(1).on('click', function(){
  roundScore(/*game.playerCount*/) ;
});
//$('button').eq(0).on('click', )
=======
$('button').eq(0).on('click', game.startG);
$('button').eq(1).on('click', resultFieldUpdate);
$('button').eq(1).on('click', roundScore);
>>>>>>> f30de5b5db9e83ba901c7bd8b822be16a20475b8




<<<<<<< HEAD
console.log('document loaded');
=======
//console.log('document loaded');
>>>>>>> f30de5b5db9e83ba901c7bd8b822be16a20475b8
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
<<<<<<< HEAD
        // function Player(n,id) {
        //   //will need to set default players to 0 for the planned iteration to make sense.
        //   game.players.n.name = id;
        //   game.playerCount++;
        // }
        //indented to check if source of 10x player number error

function roundScore (/*playNum*/){
//check for wins, increment scores accordingly.
console.log('roundScore was called.');
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
=======
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
>>>>>>> f30de5b5db9e83ba901c7bd8b822be16a20475b8

  if($('.p2Chooser')[0].value===$('.resultField').text()  ){

    game.score.player2Wins++;
<<<<<<< HEAD
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
  console.log('winCheck was called.');
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

=======
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
>>>>>>> f30de5b5db9e83ba901c7bd8b822be16a20475b8



function resultFieldUpdate (){
<<<<<<< HEAD
  console.log('resultFieldUpdate was called.');
=======
>>>>>>> f30de5b5db9e83ba901c7bd8b822be16a20475b8
  $('.resultField').css('background-color','orange');
  $('.resultField').text('' + roll());
  setTimeout(delay,50);//this is apparently vanilla javascript, but i couldn't get alternate functionality working through jQuery
}

//event listener for start button
//$('button').eq(0) returns a jquery object with 1 element. use this to make listeners. below may be wonky, improve.
function delay(){
<<<<<<< HEAD
  console.log('delay was called.');
=======
>>>>>>> f30de5b5db9e83ba901c7bd8b822be16a20475b8
  $('.resultField').css('background-color','grey'),700;
} //flashes the result background-color to indicate new result/successful roll

function Dice(int){
<<<<<<< HEAD
  console.log('Dice was called.');
=======
>>>>>>> f30de5b5db9e83ba901c7bd8b822be16a20475b8
  //this.sides = 2;
  //need to design the page/js so only INT values are passed through, avoiding the need to check.
  this.sides = int;
}

function diceSizer(){
<<<<<<< HEAD
  console.log('diceSizer was called.');
  dice = new Dice($('.diceChooser')[0].value);
  //needs to change .p1Chooser and .p2Chooser to allow for full dice size selection. added playerSideChooser to see if i can just use that.
   ;
}


/// adjustChoosers needs updated for the now function-generated player selection areas. numbers seem to be generating outside dropdown menu.

//from similar loop

  // $('label').eq( (i+1) ).attr('for','p'+i+'DiceChoice').text('Pick your result:');//i+1 is because of previous labels- playerNumber and selectDice. //add text to label
  // //attr('value',i);
  // console.log('player choice label added for iteration ' +i);
  // rowDiv.append('<select>');//adds select to div
  // $('label').eq( (i+1) ).addClass("p"+i+"Chooser playerSideChooser").attr('name','p'+i+'Drop');//i+1 is because of previous selects- playerChooser and diceChooser. //classes select and tries to add name attribute


function adjustChoosers(  ) {
  console.log($('select'));
  console.log('adjustChoosers was called.');
  //var pChoose = $('.playerSideChooser')
  $('.playerSideChooser').append('<select>');
  console.log('$(.playerSideChooser).append(<select>); happened - apostrophes removed from this message');
  console.log($('select'));
  for(var i=0;i<( parseInt(dice.sides)+1 );i++){
//changed roll button CSS tag to "whammy" and this seems to have broken.

     if(i===0){
      //  $('.playerSideChooser').append('<select>');
      console.log('adjustChoosers if i===0 start');
      console.log($('select'));
       $('.playerSideChooser select:first-child').append('<option>');
       $('.playerSideChooser option:first-child').attr('value',i);
       $('.playerSideChooser option:first-child').text('');
       console.log($('select'));
       console.log('adjustChoosers i===0 end');
     } else{
      //  $('.playerSideChooser').append('<select>');
      console.log(' i else start');
      console.log($('select'));
       $('.playerSideChooser select:first-child').append('<option>');
       $('.playerSideChooser option:nth-child('+(i+1)+')').attr('value',''+(i));
       $('.playerSideChooser option:nth-child('+(i+1)+')').text(i);
       console.log($('select'));
       console.log('i else end');
     console.log('adjustChoosers loop ' +i + 'th i');//something in playerNumbers is causing the first 2 blank selects to generate.
   }
  }
  //use first-child and last-child?
}

//begin original adjustChoosers
    // function adjustChoosers(  ) {
    //   console.log('adjustChoosers was called.');
    //   //var pChoose = $('.playerSideChooser')
    //   for(var i=0;i<( parseInt(dice.sides)+1 );i++){
    //      $('.playerSideChooser').append('<option>');
    //      if(i===0){
    //        $('.playerSideChooser option:first-child').attr('value',i);
    //        $('.playerSideChooser option:first-child').text('')
    //      } else{
    //      $('.playerSideChooser option:nth-child('+(i+1)+')').attr('value',''+(i));
    //      $('.playerSideChooser option:nth-child('+(i+1)+')').text(i);
    //      console.log('adjustChoosers loop ' +i + 'th i');
    //    }
    //   }
    //   //use first-child and last-child?
    // }
//end original adjustChoosers


//changing the number of players will require additional 'player containers'. I should be able to set up a player identifier interface to change labels, and scale to n. then can use these labels to dictate further item generation (chooser/scoreboard). ALSO win conditions will need to be generalized.

//omg. this win refactor for n-players is gunna SUUUUUUUUUUUCK. need to adjust roundScore().

//roundScore is unweildy. i should break it up into smaller functions.

function playerNumbers(){
  console.log('playerNumbers was called.');
  game.playerCount = $('.playerChooser')[0].value;
  //create more player container div elements, including p1dicechoice, p1chooser. also player columns in players score container
  var rowDiv;
  function addDiv(){
    console.log('addDiv called');
    $('.playersN').append('<div>').addClass('chooser');//adds div

    console.log($('.playersN'));//for testing
    console.log('appended div ');
  }
  function addH2AndClassIt(i){
    //var rowDiv =$('.row + div :nth-child(' +i+ ')');
    $( '.playersN div '/*:nth-child(' + i + ')'*/ ).append('<h2>').addClass("player player"+i+" container one-half column u-max-full-width ");//adds h2 to div and classes h2 //taking out nth child there did SOMETHING.
    console.log('appended h2 and added class names ' +i+ ' times');
    console.log($( '.playersN + div :nth-child(' + i + ')' ));
    console.log('row+div :nth-child call');
  }

  function putTextInH2(i){
    $('h2').eq( (i-1) ).text('Player '+i);//puts text inside the h2
    console.log('the following is the element call');
    $('h2').eq( (i-1) );
    console.log( $('h2').eq( (i-1) ) );
    console.log('changed the text on h2 ' +i+ ' times');
  }

  // $('label').eq( (i+1) ).attr('for','p'+i+'DiceChoice').text('Pick your result:');//i+1 is because of previous labels- playerNumber and selectDice. //add text to label
  // //attr('value',i);
  // console.log('player choice label added for iteration ' +i);
  // rowDiv.append('<select>');//adds select to div
  // $('label').eq( (i+1) ).addClass("p"+i+"Chooser playerSideChooser").attr('name','p'+i+'Drop');//i+1 is because of previous selects- playerChooser and diceChooser. //classes select and tries to add name attribute



  function addLabelAndTextItAndAttrIt(i){
    //var rowDiv =$('.row + div :nth-child(' +i+ ')');
    debugger
    $('.playersN div :nth-child(' +i+ ')').append('<label>');//adds label to div

    $('label').eq( (i+1) ).attr('for','p'+i+'DiceChoice').text('Pick your result:').attr('value',i);//i+1 is because of previous labels- playerNumber and selectDice. //add text to label
    //attr('value',i);
    $('.playersN div :nth-child(' +i+ ')').append('<select>');
    //var rowDiv =$('.row + div :nth-child(' +i+ ')');
    //may never have appended a label!!
    $('label').eq( (i+1) ).addClass("p"+i+"Chooser playerSideChooser").attr('name','p'+i+'Drop');
    console.log('player choice label added for iteration ' +i);
    //i+1 is because of previous selects- playerChooser and diceChooser. //classes select and tries to add name attribute
    //adds select to div
    console.log('this is where ths issue is - i think. starting');

    console.log($('label'));
    console.log('this shows labels after theyve been supposedly added');

  }

  for(var i=1; i<( parseInt(game.playerCount) +1);i++){
    console.log('playerNumers loop ran.');
    console.log('this is i' + i );
    // console.log('this is game.playerCount ' + game.playerCount);
    // console.log('this is (game.playerCount+1) ' +  (parseInt(game.playerCount)+1) );

    addDiv(i);
    addH2AndClassIt(i);
    putTextInH2(i);
    addLabelAndTextItAndAttrIt(i); //this should be adding the chooser display, but is not.




    // console.log('post function calls in playerNumbers loop');
    //code removed here

    // console.log('player chooser select added for iteration' +i);
    // $('.row div:nth-child('+i+')').text(i);
    // console.log('adjustChoosers loop ' +i + 'th i');
    //code removed here

    //think i need to insert chooser format stuff here
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
  console.log('startGame was called.');
  console.log(game.score);
=======

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
>>>>>>> f30de5b5db9e83ba901c7bd8b822be16a20475b8
  game.score.player1Wins=0;
  game.score.player2Wins=0;

  $('.currentScore1').text('0');
  $('.currentScore2').text('0');
  $('.resultField').text('ROLL AWAY');
  $('.playerSideChooser').empty();
  // $('.p1Chooser')[0].value=0;
  // $('.p2Chooser')[0].value=0;
<<<<<<< HEAD
  // console.log('startGame before diceSizer');
  // console.log($('select'));
  diceSizer();
  // console.log($('select'));
  // console.log('startGame after diceSizer');
  //select dice size. call function.
  //$('.p1Chooser')[0].value
  console.log('startGame before playerNumbers');
  console.log($('select'));
  playerNumbers(); //this is happening 10x for some reason.
  console.log($('select'));
  console.log('startGame after playerNumbers');
  // console.log('startGame before adjustChoosers called');
  // console.log($('select'));
  adjustChoosers();
  //dice = new Dice();
  console.log('scores set to 0, callback');
=======
  diceSizer();
  //select dice size. call function.
  //$('.p1Chooser')[0].value


  //dice = new Dice();
  //console.log('scores set to 0, callback');
>>>>>>> f30de5b5db9e83ba901c7bd8b822be16a20475b8
}

 // $('button').eq(0).on('click', game.startG);


// var roll = function(){
//    return Math.ceil( (Math.random()*dice.sides) );
//  };
  //above also not being recognized


  //below not being recognized when called from console.
function roll(){
<<<<<<< HEAD
  console.log('roll was called');
=======
>>>>>>> f30de5b5db9e83ba901c7bd8b822be16a20475b8
  return Math.ceil( (Math.random()*dice.sides) );
  } //RNG inspired by khr055 at http://stackoverflow.com/questions/4959975/generate-random-value-between-two-numbers-in-javascript






//});
