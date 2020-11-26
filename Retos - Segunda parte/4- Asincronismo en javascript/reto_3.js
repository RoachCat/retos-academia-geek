'use strict';

let count= 0;

const timer = () => {
    count++
    console.log(count);
}

setInterval(timer, 2000)