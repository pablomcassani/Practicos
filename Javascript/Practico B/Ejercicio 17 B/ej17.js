var pIngresada = document.getElementById("casilla");
var cartel = document.getElementById("cartel");
var boton = document.getElementById("agregar");

var palabra = "";
var habilitarBoton = true;

function agregarLetra() {
    if(!habilitarBoton) return;

    let letra = pIngresada.value;
    if (letra.length == 1) {
        palabra += letra;
        cartel.textContent = "Palabra formada: " + palabra;
        habilitarBoton = false;
        setTimeout(function() { habilitarBoton = true; }, 700);
    } else if (letra.length == 0) {
        alert("Debe ingresar al menos una letra");
    } else {
        alert("Debe ingresar solo una letra");
    }
    return false;
}

boton.addEventListener("click", agregarLetra);
