'use strict';


for (let i = 0; i < 100; i++) {
    const newItem = document.createElement('p')
    const textNode = document.createTextNode('He aprendido bien cómo funcionan los bucles.')
    newItem.appendChild(textNode)
    document.body.appendChild(newItem)
}

const paragraphs = document.querySelectorAll('p')

for (let i = 0; i < paragraphs.length; i++) {
    const select = document.createElement('select')
    const white = document.createElement('option')
    const whiteText = document.createTextNode('Blanco')
    const blue = document.createElement('option')
    const blueText = document.createTextNode('Azul')
    const red = document.createElement('option')
    const redText = document.createTextNode('Rojo')
    const green = document.createElement('option')
    const greenText = document.createTextNode('Verde')
    const yellow = document.createElement('option')
    const yellowText = document.createTextNode('Amarillo')
    const pink = document.createElement('option')
    const pinkText = document.createTextNode('Rosado')

    select.appendChild(white)
    white.appendChild(whiteText)
    select.appendChild(blue)
    blue.appendChild(blueText)
    select.appendChild(red)
    red.appendChild(redText)
    select.appendChild(green)
    green.appendChild(greenText)
    select.appendChild(yellow)
    yellow.appendChild(yellowText)
    select.appendChild(pink)
    pink.appendChild(pinkText)

    paragraphs[i].appendChild(select)
}

const selects = document.querySelectorAll('select')

for (let i = 0; i < selects.length; i++) {
    selects[i].addEventListener('change', () => {
        if (selects[i].value === 'Blanco') {
            paragraphs[i].style.color = 'white'
        } else if (selects[i].value === 'Azul') {
            paragraphs[i].style.color = 'blue'
        } else if (selects[i].value === 'Rojo') {
            paragraphs[i].style.color = 'red'
        } else if (selects[i].value === 'Verde') {
            paragraphs[i].style.color = 'green'
        } else if (selects[i].value === 'Amarillo') {
            paragraphs[i].style.color = 'yellow'
        } else if (selects[i].value === 'Rosado') {
            paragraphs[i].style.color = 'pink'
        }
    })
}


