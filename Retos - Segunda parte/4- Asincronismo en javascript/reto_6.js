'use strict';

let count= 0;

const timer = () => {
    count++
    if (count === 15) {
        alert("Su sesión ha expirado.")
        clearInterval(interval)
    }
}

let interval = setInterval(timer, 1000)