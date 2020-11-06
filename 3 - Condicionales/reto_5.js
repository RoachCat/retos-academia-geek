'use strict';

const notification = document.querySelector('.notification')
const message = document.querySelector('.message')
const divContainer = document.getElementById('container')

if (divContainer.classList.contains('warning')) {
    notification.innerHTML = 'AVISO'
    message.innerHTML = 'Tenga cuidado'
} else if (divContainer.classList.contains('error')) {
    notification.innerHTML = 'ERROR'
    message.innerHTML = 'Ha surgido un error'
} else if (divContainer.classList.contains('success')) {
    notification.innerHTML = 'CORRECTO'
    message.innerHTML = 'Los datos son correctos'
}