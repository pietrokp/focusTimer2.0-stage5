/* Theme Switcher Buttons */
const lightButton = document.querySelector('.themeSwitcher1')
const darkButton = document.querySelector('.themeSwitcher2')

const cssLink = document.getElementById('theme')

function changeToDark() {
    cssLink.setAttribute("href", "./dark-theme.css")
    lightButton.classList.add('hide')
    darkButton.classList.remove('hide')
}

function changeToLight() {
    cssLink.setAttribute("href", "./light-theme.css")
    lightButton.classList.remove('hide')
    darkButton.classList.remove('hide')
}

lightButton.addEventListener('click', changeToDark)
darkButton.addEventListener('click', changeToLight)

/* Timer */
const playButton = document.querySelector('.play')
const stopButton = document.querySelector('.pause')
const addTimeButton = document.querySelector('.moreTime')
const reduceTimeButton = document.querySelector('.lessTime')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const alarm = new Audio('https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true')

function updateTimerDiplay (minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
}

function countdown() {
    setTimeout(function() {
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)

        updateTimerDiplay(minutes, 0)

        if (minutes <= 0 && seconds <= 0) {
            alarm.play()
            return
        }

        if (seconds <= 0) {
            seconds = 60

            --minutes
        }
        
        updateTimerDiplay(minutes, String(seconds - 1))

        countdown()
    }, 1000)
}

playButton.addEventListener('click', function() {
    countdown()
})

stopButton.addEventListener('click', function() {
    minutesDisplay.textContent = "00"
    secondsDisplay.textContent = "00"
})

addTimeButton.addEventListener('click', function() {
    minutes = Number(minutesDisplay.textContent) + 5
    updateTimerDiplay (minutes, 0)
})

reduceTimeButton.addEventListener('click', function() {
    minutes = Number(minutesDisplay.textContent) - 5
    updateTimerDiplay (minutes, 0)
})


/* Volume Sliders */
/* Forest */
let forestSound = document.createElement("audio")
forestSound.src = "./sounds/forest.wav"

const forestSlider = document.querySelector('#forest-sound')
forestSlider.addEventListener("mousedown", function () {
    forestSound.play()
})

forestSlider.addEventListener("input", function(e) {
    forestSound.volume = e.currentTarget.value / 100;
})

forestSound.loop = true

/* Rain */
let rainSound = document.createElement("audio")
rainSound.src = "./sounds/rain.wav"

const rainSlider = document.querySelector('#rain-sound')
rainSlider.addEventListener("mousedown", function () {
    rainSound.play()
})

rainSlider.addEventListener("input", function(e) {
    rainSound.volume = e.currentTarget.value / 100;
})

rainSound.loop = true

/* Cafe */
let cafeSound = document.createElement("audio")
cafeSound.src = "./sounds/cafe.wav"

const cafeSlider = document.querySelector('#cafe-sound')
cafeSlider.addEventListener("mousedown", function () {
    cafeSound.play()
})

cafeSlider.addEventListener("input", function(e) {
    cafeSound.volume = e.currentTarget.value / 100;
})

cafeSound.loop = true

/* Fire */
let fireSound = document.createElement("audio")
fireSound.src = "./sounds/fire.wav"

const fireSlider = document.querySelector('#fire-sound')
fireSlider.addEventListener("mousedown", function () {
    fireSound.play()
})

fireSlider.addEventListener("input", function(e) {
    fireSound.volume = e.currentTarget.value / 100;
})

fireSound.loop = true