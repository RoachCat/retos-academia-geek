'use strict';

const list = document.querySelector('.list')

let listNumb = 3
for(let i = 1; i <= listNumb; i++){
    list.innerHTML += '<li>' + i + '</i>'
}