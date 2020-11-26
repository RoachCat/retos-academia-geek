'use strict';

//Solo es necesario un HTML que tenga un link al script. Las etiquetas se crean desde el código.

//El usuario puede decidir cuántas imágenes de perros pintar en el HTML.
let dogs = parseInt(prompt('¿Cuántas imágenes de perritos quieres?'))

const createPromise = () =>
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json());

let promises = []

for (let i = 0; i < dogs; i++) {
    promises.push(createPromise())
}

Promise.all(promises)
    .then(responses => {
        for (let i = 0; i < responses.length; i++) {
            const imgs = document.createElement('img')
            imgs.setAttribute('class', `dog${i + 1}`)
            imgs.height = 300
            imgs.alt = 'Un perro'
            document.body.appendChild(imgs)
            const img = document.querySelector(`.dog${i + 1}`)
            img.src = responses[i].message;
        }
    });