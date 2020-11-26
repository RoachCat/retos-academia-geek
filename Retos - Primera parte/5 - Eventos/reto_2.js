'use strict';

const textField = document.querySelector('.textField')
const button = document.querySelector('.button')

button.addEventListener('click', () => {
    console.log(`Hola ${textField.value}`);
})