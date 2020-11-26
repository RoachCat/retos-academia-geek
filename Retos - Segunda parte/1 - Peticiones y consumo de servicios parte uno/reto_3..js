'use strict';

const searchField = document.querySelector('.searchField')
const button = document.querySelector('.button')
const name = document.querySelector('.name')
const photo = document.querySelector('.photo')
const repos = document.querySelector('.repos')

button.addEventListener('click', searchUsers)

function searchUsers() {
    if (searchField.value !== "") {
        fetch(`https://api.github.com/users/${searchField.value}`)
            .then(response => response.json())
            .then(data => {
                name.innerHTML = data.name;
                photo.src = data.avatar_url;
                repos.innerHTML = data.public_repos
            })
    }

}
