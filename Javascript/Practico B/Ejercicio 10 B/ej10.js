function sumar() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    if(!isNaN(num1) && !isNaN(num2)){
        var resultado = parseInt(num1) + parseInt(num2);
        document.getElementById("resultado").value = resultado;
    }else{
        alert ("Uno de los valores ingresados no es un numero")
    }
    
}

function restar() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    if (!isNaN(num1) && !isNaN(num2)) {
        var resultado = parseInt(num1) - parseInt(num2);
        document.getElementById("resultado").value = resultado;
    } else {
        alert("Uno de los valores ingresados no es un número");
    }
}

function multiplicar() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    if (!isNaN(num1) && !isNaN(num2)) {
        var resultado = parseInt(num1) * parseInt(num2);
        document.getElementById("resultado").value = resultado;
    } else {
        alert("Uno de los valores ingresados no es un número");
    }
}

function dividir() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    if (!isNaN(num1) && !isNaN(num2)) {
        if (num2 == 0) {
            alert("No se puede dividir por cero");
        }
        var resultado = parseInt(num1) / parseInt(num2);
        document.getElementById("resultado").value = resultado;
    } else {
        alert("Uno de los valores ingresados no es un número");
    }
}
