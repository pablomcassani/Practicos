
var elForm = document.forms["modificar"];
//var miSelector = document.getElementById("elementos");
var miSelector = elForm["elementos"];
var manejador = document.getElementById("manejo");


function crear() {
    if(manejador.hasChildNodes()){
        while(manejador.hasChildNodes()){
            manejador.removeChild(manejador.firstChild);
        }
        let etiqueta = document.createElement("label");
        etiqueta.innerHTML = "Ingrese la opción a crear: ";
        manejador.appendChild(etiqueta);
        let nuevo = document.createElement("input");
        nuevo.type = "text";
        nuevo.className = "campoTexto";
        nuevo.id = "vNuevo";
        nuevo.name = "vNuevo";
        let elboton = document.createElement("input");
        elboton.type = "button";
        elboton.value = "Agregar";
        elboton.onclick = agregar;
        manejador.appendChild(nuevo);
        manejador.appendChild(elboton);
    } else {
        let etiqueta = document.createElement("label");
        etiqueta.innerHTML = "Ingrese la opción a crear: ";
        manejador.appendChild(etiqueta);
        let nuevo = document.createElement("input");
        nuevo.type = "text";
        nuevo.className = "campoTexto";
        nuevo.id = "vNuevo";
        nuevo.name = "vNuevo";
        let elboton = document.createElement("input");
        elboton.type = "button";
        elboton.value = "Agregar";
        elboton.onclick = agregar;
        manejador.appendChild(nuevo);
        manejador.appendChild(elboton);
    }

}

function capitalizarLetra(str) {
    var alguna = "";
    alguna += str;
    var ver = alguna.charAt(0).toUpperCase() + alguna.slice(1);
    return ver;
}

function agregar() {
    let tomarValor = elForm["vNuevo"].value;
    if(tomarValor == ""){
        alert("Debe ingresar un valor para agregar");
    } else {
        let elTexto = capitalizarLetra(tomarValor);
        let elValor = minusculas(tomarValor);
        let alSelector = document.createElement("option");
        alSelector.value = elValor;
        alSelector.text = elTexto;
        miSelector.add(alSelector);
        if(manejador.hasChildNodes()){
            while(manejador.hasChildNodes()){
                manejador.removeChild(manejador.firstChild);
            }
            let cadena = "<span class='correcto'>Se ha agregado el registro al selector</span>";
            manejador.innerHTML = cadena;
        } else {
            let cadena = "<span class='correcto'>Se ha agregado el registro al selector</span>";
            manejador.innerHTML = cadena;
        }
    }
 
}

function paraModif() {
    if (manejador.hasChildNodes()) {
        while (manejador.hasChildNodes()) {
            manejador.removeChild(manejador.firstChild);
        }
        let valorActual = miSelector.value;
        //console.log("Veo que trae el seleccionado " + valorActual);
        let etiqueta = document.createElement("label");
        etiqueta.innerHTML = "Modicara el valor: ";
        manejador.appendChild(etiqueta);
        let modif = document.createElement("input");
        modif.type = "text";
        modif.className = "campoTexto";
        modif.name = "modifico";
        modif.id = "modifico";
        modif.placeholder = valorActual;
        manejador.appendChild(modif);
        let otroBoton = document.createElement("input");
        otroBoton.type = "button";
        otroBoton.onclick = modificar;
        otroBoton.value = "Modificar"
        manejador.appendChild(otroBoton);
    } else {
        let valorActual = miSelector.value;
        //console.log("Veo que trae el seleccionado " + valorActual);
        let etiqueta = document.createElement("label");
        etiqueta.innerHTML = "Elija el valor a modificar: ";
        manejador.appendChild(etiqueta);
        let modif = document.createElement("input");
        modif.type = "text";
        modif.className = "campoTexto";
        modif.name = "modifico";
        modif.id = "modifico";
        modif.placeholder = valorActual;
        manejador.appendChild(modif);
        let otroBoton = document.createElement("input");
        otroBoton.type = "button";
        otroBoton.onclick = modificar;
        otroBoton.value = "Modificar"
        manejador.appendChild(otroBoton);
    }

}

function minusculas(cadena) {
    var alguna = "";
    alguna += cadena;
    var ver = alguna.charAt(0).toLowerCase() + alguna.slice(1);
    return ver;

}

function modificar() {
    let valorActual = miSelector.value;
    let valorModif = elForm["modifico"].value; //Valor actual
    if (valorModif == "") {
        alert("Debe modificar el valor")
    } else {

        let valorMinus = minusculas(valorModif);
        let creoTexto = capitalizarLetra(valorModif);
        let elNuevo = document.createElement("option"); //Creo el nuevo para remplazar
        elNuevo.value = valorMinus;
        elNuevo.text = creoTexto;
        for (let i = 0; i < miSelector.length; i++) {
            if (miSelector[i].value == valorActual) {
                miSelector.replaceChild(elNuevo, miSelector[i]);
            }
        }
        if(manejador.hasChildNodes()) {
            while(manejador.hasChildNodes()) {
                manejador.removeChild(manejador.firstChild);
            }
            let mensaje = "<span class='correcto'>Se ha modificado el registro</span>";
            manejador.innerHTML = mensaje;
        } else {
            let mensaje = "<span class='correcto'>Se ha modificado el registro</span>";
            manejador.innerHTML = mensaje;
        }
    }

}

function elimino(){
    let tomoValor = miSelector.value;
    let respuesta = confirm("Va a eliminar de el selector el valor " + tomoValor);
    console.log("que viene en respuesta " + respuesta);
    if(respuesta){
    for(let i = 0;i < miSelector.length;i++){
            if(miSelector[i].value == tomoValor){
                if(miSelector.hasChildNodes()){
                miSelector.removeChild(miSelector[i]);
                let mensaje = "<span class='correcto'>Se ha eliminado el registro de el selector</span>";
                manejador.innerHTML = mensaje;
                }
            }
        }
    } else {
        if(manejador.hasChildNodes()){
            while(manejador.hasChildNodes()){
                manejador.removeChild(manejador.firstChild);
            }
            let cadena = "<span class='cancelado'>Se ha cancelado la eliminación de el registro</span>";
            manejador.innerHTML = cadena;
        } else {
            let cadena = "<span class='cancelado'>Se ha cancelado la eliminación de el registro</span>";
            manejador.innerHTML = cadena;
        }
    }
}

