'use strict';

const button = document.querySelector('.button')
const text = document.querySelector('.text')

let timeOut

function timer() {
    timeOut = setTimeout(() => {
        text.innerHTML = '¿Te has dormido?'
        button.innerHTML = "No jeje"
    }, 10000);
}

button.addEventListener('click', () => {
    text.innerHTML = ""
    button.innerHTML = "Un Botón :0"
    timer()
})


timer()