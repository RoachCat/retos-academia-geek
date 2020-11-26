'use strict';

let name = 'Sebastián'
let lowName = name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") //Expresión regular para quitar las tildes al nombre.

if (lowName === 'sebastian') {
    console.log(`Bienvenido ${name}`);
} else {
    console.log('Lo siento pero el usuario que has introducido no está registrado');
}