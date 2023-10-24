// while

/*
    while(condicion logica){
        aqui va el codigo que quiero repetir varias veces
        agregar un codigo para cambiar la condicion logica
    }
*/

/* let renglon = 1;

while(renglon <= 10){
    document.write(`<p>Renglon numero ${renglon}</p>`);
    renglon ++; // ó = renglon + 1;
}
*/

//do while

let renglon = 1;

do{
    document.write(`<p>Renglon numero ${renglon}</p>`);
    renglon ++;
}while(renglon <= 10)


//for

// for(inicializar una variable; condicion logica; incrementar o decrementar una variable)

for(let contador = 5; contador >= 1; contador --){
    document.write(`<p>Cuenta regresiva ${contador}</p>`);
}