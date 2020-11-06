'use strict';

function ivaTicket(price){
    let iva = 2.1
    let total = price * 1.21
    return `Precio sin IVA: ${price}. IVA: ${iva}. Total: ${total}`
}

let ivaPrice = ivaTicket(500)

console.log(ivaPrice);