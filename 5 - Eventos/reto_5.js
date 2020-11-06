'use strict';

const pictures = document.querySelectorAll('li')
const text = document.querySelectorAll('.favorite')

for (let i = 0; i < pictures.length; i++) {
    pictures[i].addEventListener('click', function () {
        pictures[i].classList.toggle("teacher--selected")
        if (text[i].innerText === 'Añadir') {
            text[i].innerText = 'Quitar'
        } else {
            text[i].innerText = 'Añadir'
        }
    })
}


