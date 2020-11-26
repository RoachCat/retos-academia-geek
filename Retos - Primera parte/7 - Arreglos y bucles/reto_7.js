'use strict';

const geekGirls = [
    {
        name: 'María',
        age: 29,
        profession: 'diseñadora'
    },

    {
        name: 'Lucía',
        age: 31,
        profession: 'ingeniera química'
    },

    {
        name: 'Susana',
        age: 34,
        profession: 'periodista'
    },
    {
        name: 'Rocío',
        age: 25,
        profession: 'actriz'
    },
    {
        name: 'Inmaculada',
        age: 21,
        profession: 'diseñadora'
    }
]

function countGeekGirls(array) {
    let numberOfGirls = 0
    for (let i = 0; i < array.length; i++) {
        numberOfGirls += 1
    }
    return numberOfGirls
}

function averageAge(array) {
    let totalAge = 0
    let average

    for (let i = 0; i < array.length; i++) {
        totalAge += array[i].age
    }

    average = totalAge / array.length
    return average
}

function theYoungestAge(array) {
    let ages = array.reduce((acc, el) => {
        acc.push(el.age)
        return acc
    }, [])

    let youngestGirl = Math.min.apply(Math, ages)
    return youngestGirl
}

function countDesigners(array) {
    let totalDesigners = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i].profession === 'diseñadora') {
            totalDesigners += 1
        }
    }
    return totalDesigners
}


//Se inserta un nuevo objeto para hacer pruebas
const newGeekGirl = {
    name: 'Angélica',
    age: 22,
    profession: 'desarrolladora'
}

geekGirls.push(newGeekGirl)

