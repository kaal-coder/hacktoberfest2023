var level = 0;
var userClickedPattern = [];
var gamePattern = [];
var randomChosenColour;
var buttonColours = ['red', 'blue', 'green', 'yellow'];




function nextSequence() {
    var randomNumber = Math.floor((Math.random()) * 4);
  
    randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);
    $('#' + randomChosenColour).fadeOut(1).fadeIn();
    playSound(randomChosenColour);
    animatePress(randomChosenColour);
    level++;
    $('h1').text('level ' + level);
    userClickedPattern= [];
}


var userChosenColour;

$('div.btn').click(function () {

    userChosenColour = $(this).attr('id');
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
});

function playSound(Name) {
    var audio = new Audio("./sounds/" + Name + ".mp3");
    audio.play();
}


function animatePress(currentColour) {

    $('div#' + currentColour).addClass('pressed');
    setInterval(function () {
        $('div#' + currentColour).removeClass('pressed');
    }, 200);

}

var nm = 0;
$(document).on('click' , function (event) { 
    nm++;
    if (nm == 1) {
        nextSequence();
    }
 });
$(document).keydown(function (event) {

    nm++;
    if (nm == 1) {
        nextSequence();
    }

});



function checkAnswer(currentLevel) {

    if(userClickedPattern[currentLevel] == gamePattern[currentLevel]){

        if(userClickedPattern.length == gamePattern.length){
            setTimeout(nextSequence , 500);
        }
       
    }
    else
    {
       
       console.log('fail');
       $('body').addClass('game-over');
       $('h1').text('Game Over! Press F5 To Play Again');
    }
    
    
}


// var ans = 'n'

// function checkAnswer(currentLevel) {

//     if(userClickedPattern[currentLevel] == gamePattern[currentLevel]){
//      console.log('s');
//        ans = 's';
       
//     }else{
//        ans = 'fail';
//        console.log('fail');
//     }
//     if(ans == 's' && userClickedPattern.length == gamePattern.length){
//         setTimeout(nextSequence , 500);
//     }
    
// }











