var valor = Math.random()*1000000;
valor = Math.round(valor);
console.log(valor)
var contador= 0;
while (true) {
    contador ++;
    let input = Number(prompt('Ingrese el numero que cree que es'));
    if (input == valor) {
        alert('Es correcto! El valor es igual a ' + input+ "tus intentos fueron: "+contador);
        break;
    } else if (valor > input) {
        alert('El numero es Mayor');
    } else if (valor < input) {
        alert('El numero es menor');
    }
}