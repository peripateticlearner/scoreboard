// Initialize scores for Home and Guest
let scoreHome = 0
let scoreGuest = 0

// Function to update the home score display
function updateHomeScore() {
    document.getElementById("score-home").textContent = scoreHome;
}

// Function to update the guest score display
function updateGuestScore() {
    document.getElementById("score-guest").textContent = scoreGuest;
}

// Functions for Home team
function plusOneHome() {
    scoreHome += 1
    updateHomeScore()
}

function plusTwoHome() {
    scoreHome += 2
    updateHomeScore()
}

function plusThreeHome() {
    scoreHome += 3
    updateHomeScore()
}

// Functions to remove points for Home team
function minusOneHome() {
    if (scoreHome > 0) {
        scoreHome -= 1;
        updateHomeScore();
    }
}

function minusTwoHome() {
    if (scoreHome >= 2) {
        scoreHome -= 2;
        updateHomeScore();
    }
}

function minusThreeHome() {
    if (scoreHome >= 3) {
        scoreHome -= 3;
        updateHomeScore();
    }
}

// Functions for Guest team
function plusOneGuest() {
    scoreGuest += 1
    updateGuestScore()
}

function plusTwoGuest() {
    scoreGuest += 2
    updateGuestScore()
}

function plusThreeGuest() {
    scoreGuest += 3
    updateGuestScore()
}

// Functions to remove points for Guest team
function minusOneGuest() {
    if (scoreGuest > 0) {
        scoreGuest -= 1;
        updateGuestScore();
    }
}

function minusTwoGuest() {
    if (scoreGuest >= 2) {
        scoreGuest -= 2;
        updateGuestScore();
    }
}

function minusThreeGuest() {
    if (scoreGuest >= 3) {
        scoreGuest -= 3;
        updateGuestScore();
    }
}