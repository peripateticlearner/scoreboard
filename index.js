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