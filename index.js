const colors = require('colors');
const swal = require('sweetalert');

function calcularSuma(a, b) {
  return a + b;
}

const resultado = calcularSuma(5, 3);
console.log(`El resultado es: ${resultado}`.magenta);


console.log('Esto es un mensaje con estilo de Bootstrap'.bgPrimary);


swal('¡Hola!', 'Esta es una alerta con SweetAlert', 'success');