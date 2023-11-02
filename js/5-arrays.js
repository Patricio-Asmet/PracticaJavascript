//declarar un array vacio

const alumnos = [];

//array con valores

const peliculas = ['Ironman 1', 'El rey leon', 'harry Potter', 'BladeRunner', 2023, true];

function mostrarPeliculas(titulo){
    document.write(`<h2>Lista de peliculas ${titulo}</h2>`)
    document.write(`<ul>`)
    for(let i = 0; i < peliculas.length; i++){
    document.write(`<li>${peliculas[i]}</li>`)
    }
    document.write(`</ul>`)
}


//mostrar un array
console.log(peliculas);
document.write(peliculas);
document.write('<br>'+ peliculas[0]);
//cantidad de caracteres en un array
document.write(`<p>Cantidad de elementos: ${peliculas.length}</p>`);
document.write(`<p>Ultimo elemento del array: ${peliculas[peliculas.length - 1]}</p>`);
document.write(`<p>Consulto un elemento del array: ${peliculas[20]}</p>`);

mostrarPeliculas(``);

// AGREGAR ELEMENTOS AL PRINCIPIO DEL ARRAY

peliculas.unshift('el grinch', 'mi pobre angelito');
mostrarPeliculas(`+ 2 elementos (${peliculas.length})`)

peliculas.splice(5,0, 'martes 13 🔪');
mostrarPeliculas(`+ 1 elementos (${peliculas.length})`)

// AGREGAR ELEMENTO AL FINAL DEL ARRAY

peliculas.push('gladiador');
mostrarPeliculas(`+ 1 elemento (${peliculas.length})`)


// MODIFICAR ELEMENTOS DEL ARRAY

peliculas[7] = 'el padrino 1';
mostrarPeliculas(`+ 1 elementos (${peliculas.length})`)

// QUITAR ELEMENTO DE LA POSICION 0

peliculas.shift();
mostrarPeliculas(`- un elemento (${peliculas.length})`)


// borrar elemetos del array

peliculas.splice(7,1); // el primer valor para la posicion y el segundo cuantos se borran a partir de la posicion 
mostrarPeliculas(`- un elemento (${peliculas.length})`)


// quitar el ultimo elemento

peliculas.pop();
mostrarPeliculas(`- un elemento (${peliculas.length})`)
