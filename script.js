// let scoreHomeEl = document.getElementById("scoreHome").innerHTML;

// scoreHomeEl = 8;
// console.log(scoreHomeEl);

let scoreHome = 0;
let scoreGuest = 0;
let scoreHomeEl = document.getElementById("scoreHome");
let scoreGuestEL = document.getElementById("scoreGuest");

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

function addOneForGuest() {
  scoreGuest += 1;
  scoreGuestEL.innerText = scoreGuest;
}

function addTwoForGuest() {
  scoreGuest += 2;
  scoreGuestEL.innerText = scoreGuest;
}

function addThreeForGuest() {
  scoreGuest += 3;
  scoreGuestEL.innerText = scoreGuest;
}

let resetEl = document.getElementById("reset");
scoreHomeEl.innerText = 0;
scoreGuestEL.innerText = 0;

function reset() {
  scoreHomeEl.innerText = 0;
  scoreGuestEL.innerText = 0;
}
