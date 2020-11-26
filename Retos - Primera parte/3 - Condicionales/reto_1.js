'use strict';

const avatar = document.querySelector('.avatar')

const defaultAvatar = "<img src = 'https://placehold.it/300x300'>"
let avatarUser = ''

avatarUser = "<img src = 'http://www.fillmurray.com/300/300'>"

if (avatarUser === '') {
    avatar.innerHTML = defaultAvatar
} else {
    avatar.innerHTML = avatarUser
}

