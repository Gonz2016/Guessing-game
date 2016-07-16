

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
    var p = document.createElement("P");
    p.innerHTML="Good job";
    p.style.backgroundColor="green";
    document.getElementById('answers').appendChild(p);
    score += 1;
  } else {
    var p = document.createElement("P");
    p.innerHTML="Wrong answer";
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
  var p = document.createElement("P");
  p.innerHTML="Good job";
  p.style.backgroundColor="green";
  document.getElementById('answers').appendChild(p);
  score += 1;
} else if (cats < 3) {
  console.log(score);
  var p = document.createElement("P");
  p.innerHTML="number too low";
  p.style.backgroundColor="Red";
  document.getElementById('answers').appendChild(p);
} else if (cats > 3) {
  var p = document.createElement("P");
  p.innerHTML="number too high";
  p.style.backgroundColor="Red";
  document.getElementById('answers').appendChild(p);
}
console.log(score);
  if (score == 4){
    var p = document.createElement("P");
    p.innerHTML="You are owesome!";
    p.style.backgroundColor="green";
    document.getElementById('answers').appendChild(p);
}
