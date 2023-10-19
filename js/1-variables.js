// Comentario de una sola linea 

/*
 Comentario 
 De multiples
 Lineas
*/
//ECMA nombre técnico

//declarar una variable (let[cambia valor] - const[no cambia valor] , "var" ya no se utiliza)

let anioActual = 2023; 
const url ="https://rollingcodeschool.com/"  //texto entre comillas

//Console log:
console.log("Este es un mensaje en consola");
console.log(anioActual);
console.log(url);
console.log("Año: " + anioActual) //Agregar una variable a un texto, concatenando con el signo +
console.log("Año: " + (anioActual + 2)) //Operacion artimética con una variable y concatenar con un texto

//Cambiar el valor de una variable
anioActual = 2024;
console.log(anioActual);

// url='otro valor';
console.log(url);

document.write('<h1>Prueba de <br>titulo</h1>');
document.write('Año: '+anioActual + '<br>');
document.write('Año: '+anioActual);

// ventanas emergentes
//alert('Esto es una prueba de alerta');

let color = prompt('Ingrese un color');
console.log(color);

//solicitar al usuario un numero y sumarle 15 
let numeroSeleccionado = parseInt(prompt('Ingrese un numero del 1 al 100'));
console.log(numeroSeleccionado);
console.log(numeroSeleccionado + 15);

// parseInt ('10') devuelve 10   -> si la consola arroja NaN (Not a number) es porque no se ingreso un numero
// parseFloat ('10,5') devuelve 10,5