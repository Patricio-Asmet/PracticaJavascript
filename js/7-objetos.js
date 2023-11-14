// notacion literal

const pelicula = {
 //propiedades  -> clave : valor
  titulo: 'La mascara',
  anio: 1994,
  duracion: '1hs 40min',
  genero: ['comedia', 'fantasia'],
  // metodos
  iniciarPeli: function () {
    document.write(`<p>...Comenzando la reproduccion</p>`)
  },
  pausa: () =>{
    document.write(`<p>Se pauso la pelicula</p>`)
  },
}

//mostrar objeto
console.log(pelicula);
document.write(pelicula);
document.write(`<h1>Pelicula: ${pelicula.titulo}</h1>`)
document.write(`<p>Duración: ${pelicula.duracion}</p>`)
document.write(`<p>Año de estreno: ${pelicula['anio']}</p>`)
document.write(`<p>Duración: ${pelicula.duracio}</p>`)

//agregar una nueva propiedad a un objeto
pelicula.estado = true;

console.log(pelicula);

//modificar una propiedad del objeto
pelicula.estado = false;

console.log(pelicula);

//agregamos un nuevo genero
pelicula.genero.push('Aventura');
console.log(pelicula.genero)