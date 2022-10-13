const startButton = document.getElementById("start")
const resetButton = document.getElementById("reset")
const span1 = document.getElementById("span1")
const span2 = document.getElementById("span2")
let timerStatusOn = false
let secondCount = 0
let minuteCount = 0

setInterval(update, 10)

startButton.addEventListener("click", turnTimerOn)

function turnTimerOn() {
    if (timerStatusOn == false) {
        timerStatusOn = true
    } else {
        timerStatusOn = false
    }

    console.log(timerStatusOn)
}

resetButton.addEventListener("click", resetTimer)

function resetTimer() {
    console.log("reset")
    timerStatusOn = false
    secondCount = 0
    minuteCount = 0
}

setInterval(secondIncrease, 1000)

function secondIncrease() {
    if (timerStatusOn == true) {
        secondCount++
        console.log(secondCount)
    }
}

function update() {
    span2.innerHTML = secondCount
    span1.innerHTML = minuteCount
    if (secondCount == 60) {
        minuteCount++
        secondCount = 0
        console.log("Minutes: " + minuteCount)
    }
}
