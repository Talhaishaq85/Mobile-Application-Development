var num;

num=Math.floor(Math.random()*11);

console.log("Guess The Number between 0-10: ");
var guessnum=window.prompt("Guess The Number between 0-10: ");


if(num==guessnum){
    console.log("You Win!");
}
else{
    console.log("Not Matched");
}