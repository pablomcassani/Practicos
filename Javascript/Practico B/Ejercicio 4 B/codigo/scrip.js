/*
4) Realice un formulario para la carga de datos de un CD. Realice las validaciones
correspondientes. Por medio de un botón agregar canción se debe habilitar una línea nueva
para cargar la canción (nombre, compositor, duración).
*/

var armado = "";
var contador = 1;
var cancion = "";
var frm = document["musica"];
function agregarCancion(v1, v2, v3) {
    let patron = /^\d{4}$/;
    let patronCadena = /^([A-Z]|[a-z]|\d|¡|¿)/;

    let elNom = frm["nomArtisa"].value;
    let elDisco = frm["elAlbum"].value;
    let elAnio = frm["anio"].value;
    //let elNom = v1.value;
    //let elDisco = v2.value;
    //let elAnio = v3.value;
    if (patronCadena.test(elNom) && patronCadena.test(elDisco) && patron.test(elAnio)) {
        armado += "<label class='etiqueta'>Nombre</label><input class='entrada' type='text' name='nomCancion' id='nomCancion'></input>" +
            "<label class='etiqueta'>Compositor</label><input class='entrada' type'text' name='nomCompositor' id='nomCompositor'></input>" +
            "<label class='etiqueta'>Duración</label><input class='entrada' type='number' name='duracion' id='duracion'></input>" +
            "<input class='botonAgregar' type='button' onClick='agregar()' value='Agregar'></input><br>";
        console.log(armado);
        //contador++;
        return document.getElementById("agregado").innerHTML = armado;
    } else {
        alert("El artista, el albúm o el año de publicación no son válidos");
    }
}

function agregar() {
    let patronCadena = /^(\D|\d|¡|¿)/;
    let patronTiempo = /^(\d|\d(.)|\d{2}(.))/;
    let elTit = frm["nomCancion"].value;
    let elAutor = frm["nomCompositor"].value;
    let tiempo = frm["duracion"].value;
    //var elTit = dato1.value;
    //var elAutor = dato2.value;
    //var tiempo = dato3.value;
    if (contador < 13) {
        if (patronCadena.test(elTit) && patronCadena.test(elAutor) && patronTiempo.test(tiempo)) {
            cancion += "<span class='listado'>" + contador + "- " + elTit + " / " + elAutor + " / " + tiempo + "</span><br>";
            contador++;
            document.getElementById("nomCancion").value = "";
            document.getElementById("duracion").value = "";
        } else {
            alert("El título, el compositor o el tiempo no son correctos");
        }
        return document.getElementById("salida").innerHTML = cancion;
    } else {
        alert("Ha alcanzado el límite de 12 temas");
    }
}