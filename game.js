//TODO refactor our question into a function

var answer = prompt("Do you want to play a game?");
if (answer.toLowerCase() == "yes") {
  alert("continue");
} else {
  alert("end");
  throw '';
}
var score = 0;
var userName = prompt("What is your name?");
alert("Nice to meet you " + userName + " lets play!");

function ask(question,correctAnswer) {
  var answer = prompt(question,"");
  if (answer == correctAnswer) {
    var p = document.createElement("p");
    p.innerHTML="Good job";
    p.style.backgroundColor="green";
    document.getElementById('answers').appendChild(p);
    score += 1;
  } else {
    var p = document.createElement("p");
    p.innerHTML="Try again";
    p.style.backgroundColor="red";
    document.getElementById('answers').appendChild(p);
  }
}

ask("Guess how many brothers do I have? between 1 and 5:", 3);
ask("Guess how many sisters do I have? between 1 and 7:", 5);
ask("Guess how many children do I have? between 1 and 7:", 7);

var cats = prompt("How many cats do I have? between 0 and 5:","")
console.log(cats)
if (cats == 3) {
  alert("Great job");
  score += 1;
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
