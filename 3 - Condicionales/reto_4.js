'use strict';

const ageDog = 12
let ageConverted = 0

if (ageDog === 1) {
    ageConverted = 15
} else if (ageDog === 2) {
    ageConverted = 24
} else if (ageDog >= 3){
    ageConverted = 24
    ageConverted += 5 * (ageDog - 2)
}

console.log(`El perro tiene ${ageConverted} años humanos.`);