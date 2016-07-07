//TODO refactor our question into a function

var score = 0;
var userName = prompt("What is your name?");
alert("Nice to meet you " + userName + " lets play!");
var brothers = prompt("Guess how many brothers do I have? between 1 and 5:","");
if (brothers == 3) {
  alert("Great Job");
  score = 1;
} else {
  alert("Try again");
}
var sisters = prompt ("How many sisters do I have? between 1 and 7:","");
if (sisters == 5) {
  alert("Great job");
  score = 2;
} else {
  alert("Try again");
}
var children = prompt("How many childrem do I have? between 1 and 10:","");
if (children == 7) {
  alert("Great job");
  score = 3;
} else {
  alert("Try again");
}
var cats = prompt("How many cats do I have? between 0 and 5:","")
console.log(cats)
if (cats == 3) {
  alert("Great job");
  score = 4;
} else if (cats < 3) {
  console.log(score);
    alert("number too low");
} else if (cats > 3) {
    alert("number too high");
}
console.log(score);
  if (score == 4){
    alert('You are owesome!')
}
