'use strict';

const geek = {}
geek.name = 'Sebastián'
geek.age = 24
geek.profession = 'psicólogo'
geek.showBio = function(){
    return`Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.profession}.`
}

const geekGirl = {}
geekGirl.name = 'Angélica'
geekGirl.age = 22
geekGirl.profession = 'programadora'
geekGirl.showBio = function(){
    return `Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.profession}.`
}

alert(geekGirl.showBio());