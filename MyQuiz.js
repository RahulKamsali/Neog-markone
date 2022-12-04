var readlineSync = require("readline-sync");

var score = 0;
function play(question,answer) {
  var ans = readlineSync.question(question);
  if(answer.toUpperCase() === ans.toUpperCase()) {
    console.log("you are right");
    score++
  }else console.log('No');
  console.log("your score:",score)
}

var questions = [{
  question : "what is my fav colour? ",
  answer : "Black",
},
{
  question : "what is my fav letter? ",
  answer : "R",
},
{
  question : "what is my fav sport? ",
  answer : "volleyball",
},
{
  question : "what is my blachelor? ",
  answer : "civil",
},
{
  question : "what is my fav place? ",
  answer : "home",
},
]


for(var i=0; i<questions.length; i++){
  var currentQn = questions[i];
  play(currentQn.question, currentQn.answer)
}

console.log('\n \n your final score:',score,'😉');
