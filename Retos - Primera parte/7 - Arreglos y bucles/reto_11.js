'use strict';

function christmasTree() {

    let triangles = 5
    let total = (triangles * 2) - 1
    let spaces = Math.ceil(total / 2) - 1
    let tree = ''
    let star = ''
    let log = ''

    for (let i = 0; i < spaces; i++) {
        tree += ' '
        star += ' '
        log += ' '
    }

    console.log(star += '★');

    for (let i = 0; i < triangles; i++) {

        if (i === 0) {
            tree += '▲'
        } else {
            tree += '▲▲'
            tree = tree.replace(' ', '')
        }

        console.log(tree);
    }

    console.log(log += '|');
}

christmasTree()
