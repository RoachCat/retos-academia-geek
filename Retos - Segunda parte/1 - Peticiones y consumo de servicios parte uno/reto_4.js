'use strict';

const textField = document.querySelector('.textField')
const button = document.querySelector('.button').addEventListener('click', getReposName)

function getReposName() {
    if (textField.value !== '') {
        fetch(`https://api.github.com/orgs/${textField.value}`)
            .then(response => response.json())
            .then(data => {
                const repos = data.repos_url
                return fetch(repos)
            })
            .then(linkResponse => linkResponse.json())
            .then(linkData => {
                const reposList = document.querySelector('ul')
                const reposNames = linkData
                let ulContent = ''
                for (const names of reposNames) {
                    ulContent += `<li>${names.name}</li>`
                }
                reposList.innerHTML = ulContent
            })
    }
}


