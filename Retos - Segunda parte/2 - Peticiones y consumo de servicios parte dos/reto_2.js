'use strict';

const text = document.querySelector('.text')
const button = document.querySelector('.button').addEventListener('click', paintHTML)
const peopleList = document.querySelector('.peopleList')

let people = []

function apiStarWars() {
    for (let i = 1; i <= 9; i++) {
        fetch(`https://swapi.dev/api/people/?page=${i}`)
            .then(response => response.json())
            .then(data => {
                people.push(data.results);
            })
    }
}

function paintHTML() {
    peopleList.innerHTML = ''
    let allPeople = people.flat()
    let coincidence;
    let inputCharacter = text.value.charAt(0).toUpperCase() + text.value.slice(1)
    for (const characters of allPeople) {
        coincidence = characters.name.search(inputCharacter)
        if (coincidence !== -1) {
            peopleList.innerHTML += `<li><strong>Name:</strong> ${characters.name} <strong>Gender:</strong>
            ${characters.gender}</li>`
        }
    }
}

apiStarWars()
