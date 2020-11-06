'use strict';

/* Intenté modularizar cada función del programa para que hacer correcciones y modificaciones sea
mucho más sencillo. */

const taskList = document.querySelector('.taskList')
const totalTasks = document.getElementById('totalTasks')
const tasksCompleted = document.getElementById('tasksCompleted')
const tasksForComplete = document.getElementById('tasksForComplete')

const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    { name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript', completed: false }
];

//Contadores para actualizar el texto.
totalTasks.innerHTML = tasks.length
let countTasksCompleted = 0
let countTasksForComplete = 0

/* Esta función inicia el programa. Se encarga de modificar el texto superior de acuerdo a la propiedad
"completed" de cada tarea. */
function modifyTitle() {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].completed === true) {
            countTasksCompleted += 1
            tasksCompleted.innerHTML = countTasksCompleted
        } else {
            countTasksForComplete += 1
            tasksForComplete.innerHTML = countTasksForComplete
        }
    }
    paintTasks()
}

//Esta función pinta las tareas en el HTML.
function paintTasks() {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].completed === true) {
            taskList.innerHTML += `<li class="complete"> ${tasks[i].name} <input type="checkbox" id="checkboxes" checked> </li>`
        } else {
            taskList.innerHTML += `<li> ${tasks[i].name} <input type="checkbox" id="checkboxes"> </li>`
        }
    }
    let checkbox = document.querySelectorAll('#checkboxes')
    completeTasks(checkbox)
}

/* Esta función completa las tareas si la caja está marcada; si se desmarca, la "descompleta".
También cambia el estado de la propiedad "completed" de cada objeto. */
function completeTasks(checkbox) {
    for (let i = 0; i < checkbox.length; i++) {
        checkbox[i].addEventListener('click', () => {
            if (checkbox[i].checked) {
                checkbox[i].parentElement.classList.toggle("complete")
                tasks[i].completed = true
                editTitleChecked()
            } else {
                checkbox[i].parentElement.classList.toggle("complete")
                tasks[i].completed = false
                editTitleUnchecked()
            }
        })
    }
}

//Estas dos funciones actualizan el texto superior de acuerdo a si las cajas están marcadas o no.
function editTitleChecked() {
    countTasksCompleted += 1
    countTasksForComplete -= 1
    tasksCompleted.innerHTML = countTasksCompleted
    tasksForComplete.innerHTML = countTasksForComplete
}

function editTitleUnchecked() {
    countTasksCompleted -= 1
    countTasksForComplete += 1
    tasksCompleted.innerHTML = countTasksCompleted
    tasksForComplete.innerHTML = countTasksForComplete
}

modifyTitle()




