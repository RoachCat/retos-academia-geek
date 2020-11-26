'use strict';

const select = document.getElementById('select')
const img = document.querySelectorAll('img')

select.addEventListener('change', () => {
    let optionValue = select.value

    if (optionValue === 'madrid') {
        img.forEach(element => {
            element.setAttribute('src', 'https://cdn.pixabay.com/photo/2017/12/16/01/42/madrid-3021998_960_720.jpg')
        });
    } else if (optionValue === 'paris'){
        img.forEach(element => {
            element.setAttribute('src', 'https://cdn.pixabay.com/photo/2015/10/06/18/26/eiffel-tower-975004_960_720.jpg')
        })
    } else if (optionValue === 'newyork'){
        img.forEach(element =>{
            element.setAttribute('src', 'https://cdn.pixabay.com/photo/2016/01/19/17/59/new-york-city-1150012_960_720.jpg')
        })    
    } else {
        img.forEach(element =>{
            element.setAttribute('src', 'https://cdn.pixabay.com/photo/2015/12/19/02/12/texture-1099399_960_720.jpg')
        })
    }
})


