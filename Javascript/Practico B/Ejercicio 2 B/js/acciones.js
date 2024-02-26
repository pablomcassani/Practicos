/*
2) Realice un formulario que contenga Nombre, Apellido, Sexo, Fecha de nacimiento y mail.
Luego realice las validaciones para cada uno de los campos.
*/

function validar() {
    let frm = document.forms["registro"];
    let patronTexto = /^\D{1,}/;
    let patroFecha = /^\d{4,}/;
    let nombre = frm["elNom"].value;
    let control = false;
    if (!patronTexto.test(nombre)) {
        alert("Debe completar el campo nombre");
    } else {
        let apellido = frm["elApe"].value;
        if (!patronTexto.test(apellido)) {
            alert("Debe completar el campo apellido");
        } else {
            let genero = "";
            if (frm["valorFemenino"].checked || frm["valorMasculino"].checked || frm["noBinario"].checked) {
                let fecha = frm["nacimiento"].value;
                console.log("Muestro la fecha " + fecha);
                if(!patroFecha.test(fecha)){
                    alert("Debe seleccionar una fecha");
                } else {
                    let patronCorreo = /^(\w||(\w+.))+@\w+(\.\w{2,4})/;
                    let correo = frm["correo"].value;
                    if(!patronCorreo.test(correo)){
                        alert("Ingrese un correo válido");
                    } else {
                        control =  true;
                    }
                }
            } else {
                alert("Debe seleccionar un género");
            }
        }
    }
    return control;
}