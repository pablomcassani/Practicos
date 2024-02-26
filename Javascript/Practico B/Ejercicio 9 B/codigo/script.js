/*
9) Realiza una página que efectúe 3 preguntas de evaluación donde el usuario seleccione a
través de radio button su respuesta. La página proporcionará la evaluación y las respuestas
correctas a petición del usuario.
*/
var elFrm = document.forms["examen"];
var respuesta1 = elFrm["eleccion1"].checked;
var respuesta2 = elFrm["bisiesto2"].checked;
var respuesta3 = elFrm["hipo3"].checked;
var contador = 0;

function recargo(){
    return location.reload();
}

function validar() {

    if (respuesta1) {
        let rsp = "<span clas='respuesta'>&#128077; La respuesta es correcta</span>";
        document.getElementById("salida1").innerHTML = rsp;
        contador++;
    } else {
        let rsp = "<span clas='respuesta'>&#128683; La respuesta no es correcta <br> "
            + "La respuesta es: x² + x</span>";
        document.getElementById("salida1").innerHTML = rsp;
    }

    if (respuesta2) {
        let rsp = "<span clas='respuesta'>&#128077; La respuesta es correcta</span>";
        document.getElementById("salida2").innerHTML = rsp;
        contador++;
    } else {
        let rsp = "<span clas='respuesta'>&#128683; La respuesta no es correcta <br> "
            + "La respuesta es: año % 4</span>";
        document.getElementById("salida2").innerHTML = rsp;
    }

    if (respuesta3) {
        let rsp = "<span clas='respuesta'>&#128077; La respuesta es correcta</span>";
        document.getElementById("salida3").innerHTML = rsp;
        contador++;
    } else {
        let rsp = "<span clas='respuesta'>&#128683; La respuesta no es correcta <br> "
            + "La respuesta es: año % 4</span>";
        document.getElementById("salida3").innerHTML = rsp;
    }

    var resp = document.getElementById("resultado");
    var elemento = document.createElement("span");

    switch (contador) {
        case 0: {
            elemento.innerText = "No ha tenido respuestas correctas"
            elemento.className = "resultadoFinalMal";
            resp.appendChild(elemento);
            break;
        }
        case 1: {
            elemento.innerText = "Tiene una respuesta correcta - Resultado= 3.3";
            resp.appendChild(elemento);
            elemento.className = "resultadoFinal0";
        }
        case 2: {
            elemento.innerText = "Tienen 2 respuestas correctas - Rsultado= 6.6";
            resp.appendChild(elemento);
            elemento.className = "resultadoFinal0";
            break;
        }
        case 3: {
            elemento.innerText = "Tiene todas las respuestas correctas - ¡Felicitaciones!"
            resp.appendChild(elemento);
            elemento.className = "resultadoFinalOk";
            break;
        }
    }

}