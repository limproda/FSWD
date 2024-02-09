const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = []

function nextSequence(){
    const minCeiled = Math.ceil(0);
    const maxFloored = Math.floor(3);
    let randomNumber = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    return randomNumber;
}

function animation(color){
    $(`#${color}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound("sounds/" + color + ".mp3");
}

function playSound(source){
    var audio = new Audio(source);
    audio.play();
}

let randomChosenColor = buttonColors[nextSequence()];
gamePattern.push(randomChosenColor);

animation(randomChosenColor);

$("#green").click(function () {
    playSound("sounds/green.mp3");
})
$("#red").click(function () {
    playSound("sounds/red.mp3");
})
$("#yellow").click(function () {
    playSound("sounds/yellow.mp3");
})
$("#blue").click(function () {
    playSound("sounds/blue.mp3");
})


