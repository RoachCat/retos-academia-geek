'use strict';

const calculator = (isBorderBox, width, padding, border) => {
    let totalWidth
    if (isBorderBox) {
        totalWidth = width - (padding * 2) - (border * 2)
        console.log(`El ancho total del contenido es de ${totalWidth} px.`);
    } else {
        totalWidth = width + (padding * 2) + (border * 2)
        console.log(`El ancho total de la caja es de ${totalWidth} px.`);
    }
}

calculator(true, 400, 50, 15)