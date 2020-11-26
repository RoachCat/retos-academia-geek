'use strict';

/* Configuré el localstorage de manera distinta a como lo pensaron en el ejercicio 4. Mi lógica para el
ejercicio 2 fue pedir los personajes nada más cargara la página. Esto para que la interacción con el
botón fuera lo más fluida posible. */

const text = document.querySelector('.text')
const button = document.querySelector('.button').addEventListener('click', manageLocalhost)
const peopleList = document.querySelector('.peopleList')

let people = []
let peopleInLocal;

//Esta función pide los nombres de los personajes al API, validando si están en el localhost. Se ejecuta
//tan solo al abrir la página.
function apiStarWars() {
    if (!localStorage.getItem('starwars')) {
        for (let i = 1; i <= 9; i++) {
            fetch(`https://swapi.dev/api/people/?page=${i}`)
                .then(response => response.json())
                .then(data => {
                    people.push(data.results);
                })
        }
    } else {
        peopleInLocal = JSON.parse(localStorage.getItem('starwars'))
    }
}

//Esta función gestiona la exstencia de los nombres en localhost e invoca a la función que los pinta.
function manageLocalhost() {
    peopleList.innerHTML = ''
    let allPeople = people.flat()

    if (!localStorage.getItem('starwars')) {
        if (text.value !== '') {
            paintHTML(allPeople)
        }
        localStorage.setItem('starwars', JSON.stringify(allPeople))
    } else {
        if (text.value !== '') {
            apiStarWars()
            paintHTML(peopleInLocal)
        }
    }
}

//Esta función pinta los nombres en el HTML. Se construyó aparte poque el array que se pasa por argumento
//cambia dependiendo de si la información se pidió al API o si está en local.
function paintHTML(arrayOfCharacters) {
    let coincidence;
    let inputCharacter = text.value.charAt(0).toUpperCase() + text.value.slice(1)
    for (const characters of arrayOfCharacters) {
        coincidence = characters.name.search(inputCharacter)
        if (coincidence !== -1) {
            peopleList.innerHTML += `<li><strong>Name:</strong> ${characters.name} <strong>Gender:</strong>
                    ${characters.gender}</li>`
        }
    }
}

apiStarWars()