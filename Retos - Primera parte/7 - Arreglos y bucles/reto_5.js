'use strict';

const numbers = [10, 5, 42, 8, 24]

function average(numbers) {
    let accumulator = 0
    let averageNumber

    for (let i = 0; i < numbers.length; i++) {
        accumulator += numbers[i]
    }

    averageNumber = accumulator / numbers.length
    console.log(averageNumber);
}

numbers.push(18) //Se ingresa un nuevo número al array, según indica el segundo punto del ejercicio.

average(numbers)