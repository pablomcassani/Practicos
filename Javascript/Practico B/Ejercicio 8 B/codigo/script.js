/*
8) Realiza una página que capture las coordenadas del ratón y las muestre en el título del
documento (title).
*/

var x = 0;
var y = 0;
function elRaton() {


    document.getElementById("x").innerHTML = x+=1;
    document.getElementById("y").innerHTML = y+=1;
    document.title = "Eje X: " + x + " - Eje Y: " + y;
}