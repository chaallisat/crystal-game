//start JS
$(document).ready(function() {

//set variables
let win = 0;
let loss = 0;
let userScore = 0;
let comScore = 0;


//Start game function
function enemy(result) {

//computer shows a random number between 19-120
    const randomNumber = Math.floor(Math.random() * 102) + 19;
    
    comScore = randomNumber
  //  console.log(randomNumber);
    console.log(comScore);
    return $("#number-to-guess").append(comScore);
    
}
enemy();
const randomAm = Math.floor(Math.random() * 12) + 1;
const randomLa = Math.floor(Math.random() * 12) + 1;
const randomPerry = Math.floor(Math.random() * 12) + 1;
const randomPearl = Math.floor(Math.random() * 12) + 1;
const amGem = randomAm;
const laGem = randomLa;
const perryGem = randomPerry;
const pearlGem = randomPearl;

//crystal is assigned a random number between 1-12

//$(".score").html("<h2>Our fire power is: " + userScore + "</h2>");

$(".amethyst").on("click", function(){
    console.log(amGem);
    userScore = amGem + userScore;
    return $(".score").html("<h2>Our fire power is: " + userScore + "</h2>");

});

$(".lapis").on("click", function(){
    console.log(laGem);
    userScore = laGem + userScore;
    return $(".score").html("<h2>Our fire power is: " + userScore + "</h2>");

});

$(".peridot").on("click", function(){
    console.log(perryGem);
    userScore = perryGem + userScore;
    return $(".score").html("<h2>Our fire power is: " + userScore + "</h2>");

});

$(".pearl").on("click", function(){
    console.log(pearlGem);
    userScore = pearlGem + userScore;
    return $(".score").html("<h2>Our fire power is: " + userScore + "</h2>");

});

if (comScore === userScore){
    alert("We did it......I think!");
    win++
    $(".score").append("<h4>Wins: " + win + "</h4>");
}
if (userScore > comScore){
    alert("Oh no!! Our tummies hurt and White Diamond wins.");
    alert("Let's try again.");
    loss++
    $(".score").append("<h4>Losses: " + loss + "</h4>");
}










})
//player's score starts at 0
//each click will add to player's score
//if computer number = player score, player wins
//if player score > computer number, player loses
//game ends
//game restarts
//new random numbers
//count total wins and losses