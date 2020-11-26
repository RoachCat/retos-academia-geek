'use strict';

let grape = 0;

const timer = () => {
    if (grape < 12) {
        grape++
        const grapeimg = document.createElement('img')
        grapeimg.setAttribute('src', "https://i.pinimg.com/280x280_RS/b7/73/4c/b7734ccc7275a06d892c68e30e892ab3.jpg")
        grapeimg.style = 'width: 14em'
        document.body.appendChild(grapeimg)
        clearInterval(grapeInterval)
    }
}

let grapeInterval = setInterval(timer, 1000)  
