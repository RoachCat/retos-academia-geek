'use strict';

function changeColor(e){
    let codeKey = e.keyCode
    if (codeKey === 82) {
        document.body.style.backgroundColor = "red"
    } else if (codeKey === 77){
        document.body.style.backgroundColor = "purple"        
    }
}

document.addEventListener('keydown', changeColor)