'use strict';

const work1 = document.getElementById('work1')
const work2 = document.getElementById('work2')
const button = document.getElementById('submit')
let greets = document.querySelector('.greets')
let elements = []

function greet() {

    elements[0] = work1.value
    elements[1] = work2.value

    for (const movies of elements) {
        greets.innerHTML += `<p>¡A mí también me encantó ${movies}! Tenemos mucho en común.</p>`
    }
}

button.addEventListener('click', greet)