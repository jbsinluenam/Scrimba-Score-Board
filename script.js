// let scoreHomeEl = document.getElementById("scoreHome").innerHTML;

// scoreHomeEl = 8;
// console.log(scoreHomeEl);

let scoreHome = 0;
let scoreGuest = 0;
let scoreHomeEl = document.getElementById("scoreHome");
let scoreGuestEL = document.getElementById("scoreGuest");
scoreHomeEl.innerText = 0;
scoreGuestEL.innerText = 0;

function addOne() {
  scoreHome += 1;
  scoreHomeEl.innerText = scoreHome;
}

function addTwo() {
  scoreHome += 2;
  scoreHomeEl.innerText = scoreHome;
}

function addThree() {
  scoreHome += 3;
  scoreHomeEl.innerText = scoreHome;
}
