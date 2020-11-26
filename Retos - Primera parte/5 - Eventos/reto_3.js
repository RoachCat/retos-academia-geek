'use strict';

const paragraph = document.querySelector('.paragraph')

const paragraphLorem = () => {
    let newParagraph = document.createElement("p")
    newParagraph.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim porro architecto corporis atque accusamus animi alias eius voluptatum quaerat fugit. Magnam rerum eaque ullam eius in voluptate pariatur quos sunt.'
    newParagraph.style.color = "blue"

    let htmlBody = document.querySelector("body");
	htmlBody.insertBefore(newParagraph, paragraph.nextSibling);
}

paragraph.addEventListener('mouseover', paragraphLorem)

