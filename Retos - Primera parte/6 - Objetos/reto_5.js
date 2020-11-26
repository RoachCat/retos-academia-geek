'use strict';

const textfield = document.querySelector('.textfield')
const button = document.querySelector('.button')

button.addEventListener('click',()=>{
    console.dir(textfield)
})

//value: hace referencia al contenido que hay en el input, lo que se capturó.
//nodeName: es el nombre de la etiqueta del nodo en cuestión. En este caso se trata de un input.
//required: su valor es booleano. Si es true, es necesario llenar el input; si es false, no es necesario.
