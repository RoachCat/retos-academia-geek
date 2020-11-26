'use strict';

function tree() {

    let tree = ''
    let levels = 5

    for (let i = 0; i < levels; i++) {
        tree += '▲'
        console.log(tree);
    }
}

tree()