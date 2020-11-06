'use strict';

const currentYear = 2019

if (currentYear % 4 === 0) {
    console.log('Estás en un año bisiesto');
} else {
    if ((currentYear + 1) % 4 === 0) {
        console.log(`El próximo año bisiesto será el año ${currentYear + 1}`);
    } else if ((currentYear + 2) % 4 === 0) {
        console.log(`El próximo año bisiesto será el año ${currentYear + 2}`);
    } else if ((currentYear + 3) % 4 === 0) {
        console.log(`El próximo año bisiesto será el año ${currentYear + 3}`);
    }
}