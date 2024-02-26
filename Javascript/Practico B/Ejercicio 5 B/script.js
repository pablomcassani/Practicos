const formulario = document.getElementById('formulario');
const patronTel = /^\d{7,}$/;
const patronEmail = /^([a-z0-9_\-\.]+)@([a-z0-9_\-\.]+)\.([a-z]{2,5})$/;

formulario.addEventListener("submit", () => {

    // Obtencion de datos de los campos del formulario
    const tel1 = document.getElementById('tel1').value;
    const tel2 = document.getElementById('tel2').value;
    const tel3 = document.getElementById('tel3').value;
    const email = document.getElementById('email');

    


    // Validacion de datos de los campos del formulario
    const telValido1 = patronTel.test(tel1);
    const emailValido = patronEmail.test(email.value);


    // Si el valor de la validacion del telefono es false, lanza una alerta advirtiendo
    if (!telValido1) {
        alert('El telefono ingresado no es valido');
        return false;

    // Si el valor de la validacion es true, sigue con otros ifs anidados para validar los valores ingresados en los demas campos de telefonos que son opcionales
    } else {
        if (tel2 != '' || tel3 != '') {
            const telValido2 = patronTel.test(tel2);
            const telValido3 = patronTel.test(tel3);

            if (!telValido2 || !telValido3) {
                alert('Uno o varios telefonos alternativos no son validos');
                return false;
            }
        }
    }


    // Si el valor del email no es valido, devuelve un mensaje y hace foco en el email
    if (!emailValido) {
        alert('El email ingresado no es valido');
        email.focus();
        return false;
    }


    // Si los valores validados son correctos, devuelve true
    console.log(telValido1);
    console.log(emailValido);
    return true;

})

