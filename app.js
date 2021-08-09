var starting = document.querySelector(".btn")
var player = document.getElementById("player")
var score = document.getElementById("score")
var timer = document.getElementById("timer")
var myTimer = 20
var myScore = 0
var rect_width = player.style.width
var rect_height = player.style.height
var interval
var timeLineSound = new Audio()
timeLineSound.src = "sounds/armstrong.mp3"

// soundi ver astsrebs damtavrebas shemdeg clickamde
var clickSound = new Audio()
clickSound.src = "sounds/quick-win.wav"

// document.body.addEventListener("click", function() {
//     timeLineSound.play()
// })

function start() {
    interval = setInterval(startTimer, 1000)
    timeLineSound.play()
}
starting.addEventListener("click", function () {
    document.getElementById("container").style.display = "block"
    document.querySelector(".starter").style.display = "none"
    start()
})


player.addEventListener("click", function() {
    clickSound.play()
    myScore++
    score.textContent = "Score: "+myScore
    var randX = Math.floor(Math.random() * 320)
    var randY = Math.floor(Math.random() * 420)
    var randScale = Math.floor(Math.random() * 80)
    
    if (randScale < 10) {
        randScale = 20
        rect_width = randScale + "px"
        rect_height = randScale + "px"
    }
    rect_width = randScale + "px"
    rect_height = randScale + "px"
    player.style.marginLeft = `${randX}px`
    player.style.marginTop = `${randX}px`
})

function startTimer() {
    myTimer--
    timer.textContent = myTimer
    if (myTimer <= 0) {
        endGame()
    }
}

function endGame() {
    Swal.fire(
        'Game Over!',
        `Your score: ${myScore}`,
        'success'
    )
    clearInterval(interval)
}