//declarar un array vacio

const alumnos = [];

//array con valores

const peliculas = ['Ironman 1', 'El rey leon', 'harry Potter', 'BladeRunner', 2023, true];

//mostrar un array
console.log(peliculas);
document.write(peliculas);
document.write('<br>'+ peliculas[0]);
//cantidad de caracteres en un array
document.write(`<p>Cantidad de elementos: ${peliculas.length}</p>`);
document.write(`<p>Ultimo elemento del array: ${peliculas[peliculas.length - 1]}</p>`);
document.write(`<p>Consulto un elemento del array: ${peliculas[20]}</p>`);

document.write('<h2>Lista de peliculas</h2>')
document.write(`<ul>`)
for(let i = 0; i < peliculas.length; i++){
    document.write(`<li>${peliculas[i]}</li>`)
}
document.write(`</ul>`)

// AGREGAR ELEMENTOS AL PRINCIPIO DEL ARRAY

peliculas.unshift('el grinch', 'mi pobre angelito');
document.write(`<h2>Lista de peliculas + 2 elementos (${peliculas.length}) </h2>`)
document.write(`<ul>`)
for(let i = 0; i < peliculas.length; i++){
    document.write(`<li>${peliculas[i]}</li>`)
}
document.write(`</ul>`) 

peliculas.splice(5,0, 'martes 13 🔪');
document.write(`<h2>Lista de peliculas + 2 elementos (${peliculas.length}) </h2>`)
document.write(`<ul>`)
for(let i = 0; i < peliculas.length; i++){
    document.write(`<li>${peliculas[i]}</li>`)
}
document.write(`</ul>`) 

// AGREGAR ELEMENTO AL FINAL DEL ARRAY

peliculas.push('gladiador');
document.write(`<h2>Lista de peliculas + 2 elementos (${peliculas.length}) </h2>`)
document.write(`<ul>`)
for(let i = 0; i < peliculas.length; i++){
    document.write(`<li>${peliculas[i]}</li>`)
}
document.write(`</ul>`) 

// MODIFICAR ELEMENTOS DEL ARRAY

peliculas[7] = 'el padrino 1';

document.write(`<h2>Lista de peliculas + 2 elementos (${peliculas.length}) </h2>`)
document.write(`<ul>`)
for(let i = 0; i < peliculas.length; i++){
    document.write(`<li>${peliculas[i]}</li>`)
}
document.write(`</ul>`) 

// QUITAR ELEMENTO DE LA POSICION 0

peliculas.shift();
document.write(`<h2>Lista de peliculas - un elemento (${peliculas.length}) </h2>`)
document.write(`<ul>`)
for(let i = 0; i < peliculas.length; i++){
    document.write(`<li>${peliculas[i]}</li>`)
}
document.write(`</ul>`) 

// borrar elemetos del array

peliculas.splice(7,1); // el primer valor para la posicion y el segundo cuantos se borran a partir de la posicion 
document.write(`<h2>Lista de peliculas - un elemento (${peliculas.length}) </h2>`)
document.write(`<ul>`)
for(let i = 0; i < peliculas.length; i++){
    document.write(`<li>${peliculas[i]}</li>`)
}
document.write(`</ul>`) 

// quitar el ultimo elemento

peliculas.pop();
document.write(`<h2>Lista de peliculas - un elemento (${peliculas.length}) </h2>`)
document.write(`<ul>`)
for(let i = 0; i < peliculas.length; i++){
    document.write(`<li>${peliculas[i]}</li>`)
}
document.write(`</ul>`) 