var cadena = prompt("Ingrese una cadena");
let separar = cadena.split(" ");
console.log(separar);

//Número de palabras,
cantidadPalabras = separar.length;
console.log("Cantidad de palabras ingresadas "+cantidadPalabras);
//Primera palabra
primeraPalabra = separar[0];
console.log("La primer palabra: " + primeraPalabra);
//Última palabra
ultimaPalabra = separar[cantidadPalabras - 1];
console.log("La ultima palabra: "+ultimaPalabra);
//Inversión de las palabras
invertido = separar.reverse();
console.log("Todas las palabras invertidas: "+invertido)
//Palabras ordenadas alfabeticamente
deAaZ = separar.sort();
console.log("Las palabras ordenadas alfabeticamente: "+deAaZ);

deZaA = separar.sort();
console.log("Las palabras en orden inverso al alfabeto: "+deZaA.reverse());