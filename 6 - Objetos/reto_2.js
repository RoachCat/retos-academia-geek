'use strict';

const geek = {}

geek.name = 'Sebastián'
geek.age = 24
geek.profession = 'psicólogo'
geek.run = () => `estoy corriendo`
geek.runAMarathon = (distance) => `estoy corriendo una carrera de ${distance} kilómetros.`

console.log(`Soy ${geek.name} y ${geek.runAMarathon(50)}.`);