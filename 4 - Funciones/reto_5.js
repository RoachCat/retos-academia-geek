'use strict';

const ivaTicket = price => {
    let iva = 2.1
    let total = price * 1.21
    return `Precio sin IVA: ${price}. IVA: ${iva}. Total: ${total}`
}

let ivaPrice = ivaTicket(10)

console.log(ivaPrice);