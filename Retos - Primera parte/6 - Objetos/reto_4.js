'use strict';

const button = document.querySelector('.button')

button.addEventListener('click', (e) => {
    console.log(e.currentTarget);
})

/* Type es una atributo de la etiqueta "button" que, por sí solo, da un valor de un botón sin un
comportamiento específico. */