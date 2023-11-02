// Funciones declarativas

function saludar(){
    // AQUI VA TODO EL CODIGO QUE SABE HACER LA FUNCION
    document.write('<p>Hola mundo</p>');
}

// funcion con parametros
function saludoCompleto(nombreIngresado, apellidoIngresado){
    const nombreCompleto = nombreIngresado +''+ apellidoIngresado;
    console.log(nombreCompleto);
    document.write(`<p>Hola ${nombreIngresado}, ${apellidoIngresado} que tengas un buen dia </p>`);
}


//funciones que retornan un valor
// function multiplicar(numero1, numero2){
//     const resultado = numero1 * numero2;
//     console.log(resultado);
//     return resultado;
// }

const multiplicar = (numero1, numero2) =>{
    const resultado = numero1 * numero2;
    console.log(resultado);
    return resultado;
}


// llamar o invocar la funcion
saludar();

saludoCompleto ('Patricio', 'Asmet');

const nombre = prompt('Ingrese su nombre');
const apellido = prompt('Ingrese su apellido');

saludoCompleto(nombre, apellido);
saludoCompleto();

const respuesta = multiplicar(5,3);

document.write(`<p>La respuesta de la funcion que multiplica es ${respuesta} </p>`);
document.write(`<p>La respuesta de la funcion que multiplica es ${multiplicar(7,3)} </p>`); //alternativa a la opcion de arriba