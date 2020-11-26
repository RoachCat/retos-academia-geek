'use strict';

const button = document.querySelector('.button').addEventListener('click', randomApi)
let breed;

function randomApi() {
    fetch('https://api.rand.fun/number/integer?max=93')
        .then(response => response.json())
        .then(data => {
            const randomNumber = parseInt(data.result)
            dogsApi(randomNumber)
        })
}

function dogsApi(randomNumber) {
    fetch(`https://dog.ceo/api/breeds/list`)
        .then(response => response.json())
        .then(data => {
            breed = data.message[randomNumber]
            return fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        })
        .then(imgResponse => imgResponse.json())
        .then(data => {
            const dataImg = data.message
            paintHtml(dataImg, breed)
        })
}

function paintHtml(dataImg, breed) {
    const img = document.querySelector('img')
    const breedName = document.querySelector('h1')
    const breedMayus = breed[0].toUpperCase() + breed.slice(1) 
    breedName.innerHTML = breedMayus
    img.src = dataImg
}
