'use strict';

const div = document.querySelector('.container')

const text = '<h1>Lorem ipsum</h1>'
const image = '<img src="http://via.placeholder.com/350x150" alt="350x150"></img>'
const paragraph = '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>'

div.innerHTML = text + image + paragraph