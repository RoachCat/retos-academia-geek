'use strict';

const name = document.getElementById("name")
const lastname = document.getElementById("lastname")
const tel = document.getElementById("tel")
const select = document.getElementById("select")

select.addEventListener('change', setFields)

const info = [
    {
        name: 'Sebastián',
        lastname: 'Giraldo',
        tel: 3747958929,
        value: 'sebastian'
    },
    {
        name: 'Angélica',
        lastname: 'Arroyave',
        tel: 9847592332,
        value: 'angelica'
    },
    {
        name: 'Edison',
        lastname: 'Noreña',
        tel: 9057857320,
        value: 'edison'
    }
]

function setFields(){
    let optionValue = select.value

    for(let i = 0; i < info.length; i++){
        if (optionValue === info[i].value) {
            name.value = info[i].name     
            lastname.value = info[i].lastname    
            tel.value = info[i].tel   
        } else if (optionValue === ''){
            name.value = ''    
            lastname.value = ''   
            tel.value = '' 
        }
    }
    
}