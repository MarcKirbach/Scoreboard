let homeIncrementOneBtn = document.getElementById("home-increment-1-btn")
let homeScoreEl = document.getElementById("jshome-score")
let jsHomeScore = 0


function incrementHomeScore1() {
    jsHomeScore += 1
    homeScoreEl.textContent = jsHomeScore

}

function incrementHomeScore2() {
    jsHomeScore += 2
    homeScoreEl.textContent = jsHomeScore

}

function incrementHomeScore3() {
    jsHomeScore += 3
    homeScoreEl.textContent = jsHomeScore

}

let guestIncrementOneBtn = document.getElementById("guest-increment-1-btn")
let guestScoreEl = document.getElementById("jsguest-score")
let jsGuestScore = 0

function incrementGuestScore1() {
    jsGuestScore += 1
    guestScoreEl.textContent = jsGuestScore
}

function incrementGuestScore2() {
    jsGuestScore += 2
    guestScoreEl.textContent = jsGuestScore
}

function incrementGuestScore3() {
    jsGuestScore += 3
    guestScoreEl.textContent = jsGuestScore
}

function resetHomeScore() {

    homeScoreEl.textContent = 0
    jsHomeScore = 0
}

function resetGuestScore() {

    guestScoreEl.textContent = 0
    jsGuestScore = 0
}
