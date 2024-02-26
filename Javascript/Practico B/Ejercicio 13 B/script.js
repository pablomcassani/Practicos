// Se define un array donde estan los urls de las imagenes a utilizar
const arrayURLS = ["imgs/gato1.jpg", "imgs/gato2.jpg", "imgs/gato3.jpg", "imgs/gato4.jpg"];


// Se obtienen los valores de los elementos con los que se van a interactuar: la imagen y los dos botones.
const imagen = document.getElementById("imagen");
const botonAnterior = document.getElementById('btn-anterior');
const botonSiguiente = document.getElementById('btn-siguiente');


// Se define una variable que va a funcionar como indice
let indiceActual = 0;



// Se crea una funcion que va a tener como parametro una "direccion", que va a ser un numero. 
const cambiarImagen = (direccion) => {

  // El indice definido fuera de la funcion va a tener el valor que se le pase como parametro a la funcion
  indiceActual += direccion;

  // Si el indice actual (que tiene el valor del parametro "direccion" es menora 0, el indice va a pasar a valer el largo del array -1)
  if (indiceActual < 0) {
    indiceActual = arrayURLS.length - 1;

    // Sino, el indice actual va a volver a valer 0, como cuando fue definida
  } else if (indiceActual > arrayURLS.length - 1) {
    indiceActual = 0;
  }

  // Una vez el if termina, se modifica el valor del atributo src por el URL en el indice actual
  imagen.src = arrayURLS[indiceActual];
}


// A los botones se les asigna un evento cuando se les hace click y que invoquen a la funcion cambiarImagen, con parametro -1 para el anterior y 1 para el siguiente. 
botonAnterior.addEventListener('click', () => {
  cambiarImagen(-1);
})

botonSiguiente.addEventListener('click', () => {
  cambiarImagen(1);
});