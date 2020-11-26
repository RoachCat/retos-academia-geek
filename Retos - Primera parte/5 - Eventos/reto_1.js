'use strict';

const message = document.querySelector('.message')
const button = document.querySelector('.button')

button.addEventListener('click', () => message.innerHTML = '¡Gracias por dar click!')
