const patronUser = /^[A-Z][^\d]*\d[^\d]*\d[^\d]*\d/;
const patronPassword = /^\d.{5,}[A-Z]\d$/;


const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", () => {

    // Se obtienen los valores de los campos del formulario
    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;
    
    
    // Se validan los campos del formulario con los patrones creados previamente
    const validarUser = patronUser.test(user);
    const validarPassword = patronPassword.test(password);


    // Se crean dos ifs en donde, si el valor de la validacion resulta en false, se envia una alerta
    if (!validarUser) {
        alert('El nombre de usuario ingresado no es valido');
        return false;
    }

    if (!validarPassword) {
        alert('La contraseña ingresada no es valida');
        return false;
    }

    // Si ambas validaciones retornan true, se retorna true
    return true;
});

