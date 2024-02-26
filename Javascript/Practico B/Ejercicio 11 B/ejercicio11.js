let foto=document.getElementById("foto");


foto.addEventListener("mouseover",cambiarFoto)
foto.addEventListener("mouseout", revertirFoto);

function cambiarFoto(event){
 
    document.getElementById("foto").src="last.jpg";

}

function revertirFoto(event){
    document.getElementById("foto").src = "first.jpg";
}


