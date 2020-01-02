// 1. Find and store the element we want to listen to events on.    

// function getRandomInt(max) {
// return Math.floor(Math.random() * Math.floor(max));
// }

phaseOne = phase.slice(0);

var tokenModus = 0

function getRandomInt(max) {
return Math.floor(Math.random() * Math.floor(max));
}

function restart(){
    phaseOne = phase.slice(0);
    tokenModus = 0;
}

var randominox = getRandomInt (phaseOne.length);

var onButtonClick = function(){
if (tokenModus <= 9) {   
    $("#text1").text("RANDOM PHASE: ");
    $("#text2").fadeOut(50, function() {$(this).text((phaseOne[randominox].name))}).fadeIn(100);;     
    $("#text3").fadeOut(50, function() {$(this).text((phaseOne[randominox].task))}).fadeIn(100);;
    $("#cardIMG").fadeOut(50, function() {$(this).attr('src',(phaseOne[randominox].img))}).fadeIn(100);;
    // $("#cardIMG").attr('src', phaseOne[randominox].img);;    
    $(".StartButton").text("New");
    phaseOne.splice(randominox,1);
    getRandomInt();
    randominox = getRandomInt (phaseOne.length);
    tokenModus = tokenModus + 1;
    $("#round").fadeOut(50, function() {$(this).text(("Round: " + tokenModus))}).fadeIn(400);;
}    
else {
    $("#text1").fadeOut(0, function() {$(this).text(("Game Over"))}).fadeIn(100);;     
    $("#text3").fadeOut(0, function() {$(this).text((""))}).fadeIn(100);;     
    $("#text2").fadeOut(0, function() {$(this).text(("Play Again?"))}).fadeIn(100);;
    $("#cardIMG").fadeOut(0, function() {$(this).attr('src',('img/cards/empty.png'))}).fadeIn(100);;
    $(".StartButton").text("");
    $(".StartButton").text("Restart ");      
    $(".StartButton").append('<div <i style="float: center;" class="fas fa-sync-alt"></i>');  
    restart();    
    // $(".StartButton").click(restart);
}   
};
    $(".StartButton").click(onButtonClick);
