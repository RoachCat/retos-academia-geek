'use strict';

function christmasTree() {

    let tree = ''
    let levels = parseInt(prompt('Hola'))

    console.log('★')

    for (let i = 0; i < levels; i++) {
        tree += '▲'
        console.log(tree);
    }

    console.log('|')
}

christmasTree()