'use strict';

const firstDogImage = 'https://images.dog.ceo/breeds/chihuahua/n02085620_1205.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/malamute/n02110063_642.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/chihuahua/n02085620_3409.jpg';
const thirdDogName = 'Lana';

const animals = document.querySelector('.animals')

animals.innerHTML = `<li>${firstDogName} <img src="${firstDogImage}" alt=""></img> </li>
                     <li>${secondDogName} <img src="${secondDogImage}" alt=""></img> </li>
                     <li>${thirdDogName} <img src="${thirdDogImage}" alt=""></img> </li>`
