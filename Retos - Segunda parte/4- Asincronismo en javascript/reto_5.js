'use strict';

let seconds= 0;
const label = document.createElement('label')
document.body.appendChild(label)

const timer = () => {
    seconds++
    if (seconds <= 59) {
        const labelText = `Escrito hace ${seconds} segundos.`
        label.innerHTML = labelText
    } else {
        const labelText = `Escrito hace 1 minuto.`
        label.innerHTML = labelText   
        clearInterval(messageInterval)     
    }
}

const messageInterval = setInterval(timer, 1000)