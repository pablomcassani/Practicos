function convertidor() {
   
    var peso= document.getElementById("pesos").value;
    var dolar = document.getElementById("dolares").value;
 
    var pesoConversion = 0.0012; 
    var dolarConversion = 837.28; 
   
       if (isNaN(peso) || isNaN(dolar)) {
        alert("Entrada incorrecta, por favor intetnar de vuelta.");
        limpiar();
        return;
    }
    
    if (peso !== "") {
        var conversion = peso * pesoConversion;
        document.getElementById("dolares").value =  `${conversion.toFixed(2)} $USD `;
    } else if (dolar !== "" ) {
        var conversion = dolar* dolarConversion;
            document.getElementById("pesos").value =  `${conversion.toFixed(2)} $ARS`;
        }
        document.getElementById("pesos").disabled = true;
        document.getElementById("dolares").disabled = true;   
}

function submitForm(event) {
 
    event.preventDefault();

    convertidor();
}

function limpiar() {
    document.getElementById("pesos").disabled = false;
    document.getElementById("dolares").disabled = false;
    document.getElementById("pesos").value = "";
    document.getElementById("dolares").value = "";
}