'use strict';

//Hice un cronómetro jeje.
const timer = document.querySelector('.timer')
const timerNumbers = document.querySelector('.timer__box-numbers')
const start = document.querySelector('.start')
const stop = document.querySelector('.stop')

//Variables de control para las funciones de los botones
let seconds = 0
let minutes = 0
let chronoInterval;
let clicked = true //Controla el funcionamiento de "start" en caso de ser presionado más de una vez
let clickTwoTimes = 0 //Ayuda a resetear el tiempo si se presiona "stop" dos veces.

start.addEventListener('click', () => {
    if (clicked === true) {
        clicked = false
        chronoInterval = setInterval(() => {
            seconds++
            if (seconds < 10 && minutes < 9) {
                timerNumbers.innerHTML = `0${minutes}:0${seconds}`
            } else if (seconds >= 10 && minutes < 9) {
                timerNumbers.innerHTML = `0${minutes}:${seconds}`
                if (seconds === 59) {
                    minutes++
                    seconds = -1
                }
            } else if (minutes === 9) {
                timerNumbers.innerHTML = `0${minutes}:${seconds}`
                if (seconds === 59) {
                    minutes++
                    seconds = -1
                }
            } else if (minutes > 9) {
                timerNumbers.innerHTML = `${minutes}:0${seconds}`
                if (seconds === 59) {
                    timerNumbers.innerHTML = `${minutes}:${seconds}`
                    minutes++
                    seconds = -1
                } else if (seconds >= 10) {
                    timerNumbers.innerHTML = `${minutes}:${seconds}`
                }
            }
        }, 1000)
    }
})

stop.addEventListener('click', () => {
    clickTwoTimes++
    clearInterval(chronoInterval)
    stop.innerHTML = "RESET"
    if (clickTwoTimes === 2) {
        seconds = 0
        minutes = 0
        timerNumbers.innerHTML = `0${minutes}:0${seconds}`
        stop.innerHTML = "STOP"
    }
    clicked = true
})
