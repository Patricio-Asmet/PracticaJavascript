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

//agregar un par de pelis a la lista

peliculas.push('Ironman 2', 'Ironman 3', 'Rocky 1', 'Rocky 2', 'Rocky 3')

mostrarPeliculas (`, con nuevos elementos (${peliculas.length}) `);

// filtrar todos los ironman del arreglo

console.log(peliculas[1].includes('Ironman')) // include devuelve true o false

// const PeliculasIronman = peliculas.filter( () => condicion logica )
// const peliculasIronman = peliculas.filter( (pelicula) =>  pelicula === 'Ironman 3' );
// const peliculasIronman = peliculas.filter( (pelicula) => pelicula.includes('Ironman') === true );
const peliculasIronman = peliculas.filter( (pelicula) => pelicula.includes('Ironman'));
console.log(peliculasIronman);

mostrarPelisNuevas(peliculasIronman, 'Peliculas de Ironman');

//para busquedas de un elemento del array, usar el metodo find
const peliculaBuscada = peliculas.find((item)=> item === 'Harry Potter');
const peliculaBuscada2 = peliculas.find((item)=> item === 'Batman');
console.log(peliculaBuscada);
document.write(`<p>Pelicula buscada: ${peliculaBuscada}</p>`)

//podria modificar el resultado undefined con if-else, operador ternario;
/*
if(peliculaBuscada2 !== undefined){
    document.write(`<p>Pelicula buscada (Batman): ${peliculaBuscada2}</p>`)
}else{
    document.write(`<p>Pelicula buscada (Batman): No se encontro la peli buscada</p>`)
}
*/
// (condicion logica)? el codigo si es verdadera la condicion : el codigo si la condicion logica fue false;


// Operador ternario:
// const respuestaTernario = (peliculaBuscada2 !== undefined)? peliculaBuscada2 : 'No se encontro la peli buscada';
// document.write(`<p>Pelicula buscada (Batman): ${respuestaTernario}</p>`)

// otra manera es crear el ternario dentro del document.write:
document.write(`<p>Pelicula buscada (Batman): ${(peliculaBuscada2 !== undefined)? peliculaBuscada2 : 'No se encontro la peli buscada'}</p>`)