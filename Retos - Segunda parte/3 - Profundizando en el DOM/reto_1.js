'use strict';

const items = document.querySelector('.items')

for(let i = 1; i <= 3; i++){
   const newItem = document.createElement('li')
   const number = document.createTextNode(i)
   newItem.appendChild(number)
   items.appendChild(newItem)
}


