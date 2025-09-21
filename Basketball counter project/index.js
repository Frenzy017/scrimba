let plusOneElement = document.getElementById("one");
let plusTwoElement = document.getElementById("two");
let plusThreeElement = document.getElementById("three");
let digitHomeElementText = document.getElementById("digit-home");
let digitGuestElementText = document.getElementById("digit-guest");

let homeCounter = 0;
let guestCounter = 0;

function addOneHome() {
    homeCounter += 1;
    digitHomeElementText.textContent = homeCounter;
}

function addTwoHome() {
    homeCounter += 2;
    digitHomeElementText.textContent = homeCounter;
}

function addThreeHome() {
    homeCounter += 3;
    digitHomeElementText.textContent = homeCounter;
}

function addOneGuest() {
    guestCounter += 1;
    digitGuestElementText.textContent = guestCounter;
}

function addTwoGuest() {
    guestCounter += 2;
    digitGuestElementText.textContent = guestCounter;
}

function addThreeGuest() {
    guestCounter += 3;
    digitGuestElementText.textContent = guestCounter;
}