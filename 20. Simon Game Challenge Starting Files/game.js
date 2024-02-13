button = $('.btn');
title = $('#level-title');

let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let start = false;
let level = 0;

function playSound(color){
    var audio = new Audio('sounds/' + color + '.mp3');
    audio.play();
}

function animate(color){
    $("#" + color).fadeOut(100).fadeIn(100);
}


function nextSequence() {
    let randomInt = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColors[randomInt];

    title.text('Level '+ level);
    gamePattern.push(randomChosenColour);
    playSound(randomChosenColour);
    animate(randomChosenColour);
    
    level += 1;
}

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");

      if (userClickedPattern.length === gamePattern.length){

        setTimeout(function () {
            userClickedPattern = [];
            nextSequence();
        }, 1000);

      }

    } else {
        var audio = new Audio('sounds/wrong.mp3');
        audio.play();
        $('body').addClass('game-over');
        setTimeout(function () {
            $('body').removeClass('game-over');
        }, 100);
        title.text("Game Over, Press Any Key to Restart");
        startOver();
    }

}

function startOver(){
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    start = false;
}

button.on('click', function () {
    if (start) {
        let userChosenColor = this.id;
        userClickedPattern.push(userChosenColor);
        playSound(userChosenColor);

        $("#" + userChosenColor).addClass('pressed');
        setTimeout(function () {
            $("#" + userChosenColor).removeClass('pressed');
        }, 100);

        checkAnswer(userClickedPattern.length-1);
    }
});

$(document).on('keypress', function () {
    if (!start) {
        start = true;
        setTimeout(function (){
            nextSequence();
        }, 50);
    }
});