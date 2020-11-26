'use strict';

const container = document.querySelector('.container')
let containerLength = container.offsetHeight
console.log(containerLength);
container.style = `height: ${containerLength / 3}px;`
