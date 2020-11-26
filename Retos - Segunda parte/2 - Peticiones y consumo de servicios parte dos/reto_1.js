'use strict';

fetch('https://swapi.dev/api/planets?format=wookiee')
    .then(response => response.json())
    .then(data => console.log(data))

//RESPUESTAS A LAS PREGUNTAS DEL GITBOOK//

//URL base del API: https://swapi.dev/api
//No necesita autenticación.
//Solo se usa 'GET' para las peticiones al API.
//URL para Skywalker: https://swapi.dev/api/people/1
//URL para "A New Hope": https://swapi.dev/api/films/1
//Se puede acceder a películas, personajes, planetas, especies, naves y vehículos.
//URL para acceder a los personajes: https://swapi.dev/api/people Está paginada, pues hay 82 personnajes.
//Para buscar personajes se puede usar su id y acceder a las propiedades con el respectivo schema.
//Para que la petición regrese en wookiee, solo se coloca "?format=wookiee" luego del id o schema especificado.
