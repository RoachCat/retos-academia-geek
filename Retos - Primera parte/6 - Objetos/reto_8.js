'use strict';

const select = document.querySelector('.select')
const button = document.querySelector('.update')
const face = document.querySelector('.face')

function changeFace() {
    let newFace = select.value
    if (newFace === ':)') {
        face.innerHTML = ':)'
    } else {
        face.innerHTML = ':('
    }
    randomize()
}

function randomize() {
    let random = Math.ceil(Math.random() * 100)
    rePaint(random)
}

function rePaint(random) {
    if (random % 2 === 0) {
        document.body.style.backgroundColor = "#ffcc00"
    } else {
        document.body.style.backgroundColor = "#ff9900"
    }
}

button.addEventListener('click', changeFace)

