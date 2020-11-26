'use strict';

//Título concatenado con el primer elemento de la lista
const geekOne = document.querySelector('#geekOne').textContent
const geekTwo = document.querySelector('#geekTwo').textContent
const title = document.querySelector('.title')

title.innerHTML += geekOne

//Título concatenado con el segundo elemento de la lista (quitar comentario):

//title.innerHTML += geekTwo
