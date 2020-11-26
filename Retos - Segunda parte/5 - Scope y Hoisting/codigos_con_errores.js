'use strict';

/* Se adjuntan los códigos del último ejercicio que son los únicos que, a mi parecer, requieren ser resueltos. */





const message = '¡Hola!';
function showMessage() {
  console.log(message);
}
showMessage();
/* El código se ejecuta correctamente ya que la constante se declara antes de llamar a la función. */


function showMessage() {
    console.log(message);
  }
  showMessage();
  const message = '¡Hola!';
/* Se genera erro ya que no es posible acceder a la constante "message" si se declara debajo de la llamada
a la función. */


let message;

function showMessage() {
  console.log(message);
}
showMessage();
message = '¡Hola!';
showMessage();
/*En la primera llamada a la función muestra en consola "undefined" ya que la varaible solo se declaró. En la
segunda llamada sí muestra el mensaje 'Hola' puesto que se asigna un valor a la variable.  */


message = '¡Hola!';

function showMessage() {
  console.log(message);
}
showMessage();
/* Se muestra correctamente el mensaje ya que la variable tiene implícitamente un var, convirtiendo su alcance
en global. */



function showMessage() {
  let message = '¡Hola!';
  console.log(message);
}

let message = 'Hello';
showMessage();
/* Se muestra el mensaje '¡Hola!' por el ámbito de la variable 'message' dentro de la función, que en este
caso correspondía al mensaje en español. */