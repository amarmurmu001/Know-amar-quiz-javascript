var readlineSync = require("readline-sync");

fullScore = 5;
console.log("Full score: "+ fullScore);
score = 0;

var userName = readlineSync.question("Enter your name: ");
console.log("Welcome "+userName+" to do you know Amar?")
console.log("-----------------------------------------")

//function

function play(question,ans){
  var userAns = readlineSync.question(question);

  if(userAns === ans){
    console.log("You are right");
    score++
  }else{
    console.log("you are wrong")
  }
  console.log("score: "+ score);
  console.log("-----------------------------------------")

  
}

//array

var questions = [
  {
    question: "Where do amar live? ",
    ans: "dhanbad"
  },
  {
    question: "Who is amar's fav superhero? ",
    ans: "ironman"
  },
  {
    question: "What is amar's instagram id? ",
    ans: "itsofficialamar"
  },
  {
    question: "Who is amar's real love? ",
    ans: "seema"
  }
];

//for loop

for (let i=0;i<questions.length;i++){
  play(questions[i].question,questions[i].ans)
}