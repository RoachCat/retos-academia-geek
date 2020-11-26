'use strict';

const nameInDoc = document.querySelector('.name')

const name = 'Leticia Fernández Sánchez'

const nameLength = name.replace(/ /g,'').length

nameInDoc.innerHTML = `El nombre de la persona es ${name} y tiene ${nameLength} caracteres.`