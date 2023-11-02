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
function multiplicar(numero1, numero2){
    
}


// llamar o invocar la funcion
saludar();

saludoCompleto ('Patricio', 'Asmet');

const nombre = prompt('Ingrese su nombre');
const apellido = prompt('Ingrese su apellido');

saludoCompleto(nombre, apellido);
saludoCompleto();