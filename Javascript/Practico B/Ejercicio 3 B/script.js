// Se crean las constantes que van a contener los patrones de validacion

const patronNombre = /^([a-zA-Záéíóúñäëïöü]{5,})$/;
const patronEdad = /^(18|19|2[0-9]|30)$/;
const patronEmail = /^([a-z0-9_\-\.]+)@([a-z0-9_\-\.]+)\.([a-z]{2,5})$/;


// Se crea la funcion validarFormulario
function validarFormulario() {

    // Se crean las constantes que van a obtener los valores de cada campo del formulario
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const email = document.getElementById("email").value;


    // Se realizan 3 ifs para verificar que la validacion de los campos sea verdadera, de no ser asi, se lanza un alert y se retorna false
    if (!patronNombre.test(nombre)) {
        alert("El nombre ingresado no es valido");
        return false;
    }

    if (!patronEdad.test(edad)) {
        alert("La edad ingresada no es valida");
        return false;
    }

    if (!patronEmail.test(email)) {
        alert('El email ingresado no es valido');
        return false;
    }

    // Se retorna true si todas las validaciones son true
    return true;  
}

