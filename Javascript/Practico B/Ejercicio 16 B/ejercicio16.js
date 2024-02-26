function opcion1(){
   var foto= document.getElementById("foto");
   var tabla=document.getElementById("tabla");

   var hayTabla = document.getElementById("hayTabla");
   if (hayTabla) {
    tabla.removeChild(hayTabla);
    // Table already exists, you can update its content or return
    
}   

   foto.src="islammakachev.png";

   var table = document.createElement("table");
    table.id= "hayTabla"
   table.classList.add("custom-table");

   var filas = 7;
   var columnas = 2;

   var dataArray = [
    ["Nombre: ", "Islam Makachev"],
    ["Nacionalidad: ", " Ruso"],
    ["Puesto: ", " Campeon"],
    ["Edad: ", " 31 años"],
    ["peso: ", " 70,31 kg"],
    ["altura: ", " 177,8 cm"],
    ["record: ", " 25 V / 1 D"]
];
   for (var i = 0; i < filas; i++) {
       var row = table.insertRow(i);

       for (var j = 0; j < columnas; j++) {
           var cell = row.insertCell(j);
           cell.textContent = "Row " + (i + 1) + ", Column " + (j + 1);
           var cellContent = dataArray[i][j];
           cell.textContent = cellContent;
       }
   }
 

   tabla.appendChild(table);
}
function opcion2(){

   var foto= document.getElementById("foto");
   var tabla=document.getElementById("tabla");

   var hayTabla = document.getElementById("hayTabla");
   if (hayTabla) {
    tabla.removeChild(hayTabla);
    // Table already exists, you can update its content or return
    
}   

   foto.src="charlesOlivera.png";

   


   var table = document.createElement("table");
    table.id= "hayTabla";

   table.classList.add("custom-table");

   var filas = 7;
   var columnas = 2;

   var dataArray = [
    ["Nombre: ", "Charles Oliveira"],
    ["Nacionalidad: ", " Brasileño"],
    ["Puesto: ", " 1"],
    ["Edad: ", " 34 años"],
    ["peso: ", " 70,31 kg"],
    ["altura: ", " 177,8 cm"],
    ["record: ", " 34 V / 9 D"]
];
   for (var i = 0; i < filas; i++) {
       var row = table.insertRow(i);

       for (var j = 0; j < columnas; j++) {
           var cell = row.insertCell(j);
           cell.textContent = "Row " + (i + 1) + ", Column " + (j + 1);
           var cellContent = dataArray[i][j];
           cell.textContent = cellContent;
       }
   }
 

   tabla.appendChild(table);
}
function opcion3(){

    var foto= document.getElementById("foto");
    var tabla=document.getElementById("tabla");
 
    var hayTabla = document.getElementById("hayTabla");
    if (hayTabla) {
     tabla.removeChild(hayTabla);
     // Table already exists, you can update its content or return
     
 }   
 
    foto.src="justinGaethje.png";
 
    
 
 
    var table = document.createElement("table");
     table.id= "hayTabla";
 
    table.classList.add("custom-table");
 
    var filas = 7;
    var columnas = 2;
 
    var dataArray = [
     ["Nombre: ", "Justin Gaethje"],
     ["Nacionalidad: ", " Estado Unidense"],
     ["Puesto: ", " 2"],
     ["Edad: ", " 35 años"],
     ["peso: ", " 70,31 kg"],
     ["altura: ", " 180,34 cm"],
     ["record: ", " 25 V / 4 D"]
 ];
    for (var i = 0; i < filas; i++) {
        var row = table.insertRow(i);
 
        for (var j = 0; j < columnas; j++) {
            var cell = row.insertCell(j);
            cell.textContent = "Row " + (i + 1) + ", Column " + (j + 1);
            var cellContent = dataArray[i][j];
            cell.textContent = cellContent;
        }
    }
  
 
    tabla.appendChild(table);
 }
 function opcion4(){
    var foto= document.getElementById("foto");
    var tabla=document.getElementById("tabla");
 
    var hayTabla = document.getElementById("hayTabla");
    if (hayTabla) {
     tabla.removeChild(hayTabla);
     // Table already exists, you can update its content or return
     
 }   
 
    foto.src="dustinPoirier.png";
 
    var table = document.createElement("table");
     table.id= "hayTabla"
    table.classList.add("custom-table");
 
    var filas = 7;
    var columnas = 2;
 
    var dataArray = [
     ["Nombre: ", "Dustin Poirier"],
     ["Nacionalidad: ", " Estado Unidense"],
     ["Puesto: ", " 3"],
     ["Edad: ", " 35 años"],
     ["peso: ", " 70,31 kg"],
     ["altura: ", " 175,26 cm"],
     ["record: ", " 29 V / 8 D"]
 ];
    for (var i = 0; i < filas; i++) {
        var row = table.insertRow(i);
 
        for (var j = 0; j < columnas; j++) {
            var cell = row.insertCell(j);
            cell.textContent = "Row " + (i + 1) + ", Column " + (j + 1);
            var cellContent = dataArray[i][j];
            cell.textContent = cellContent;
        }
    }
  
 
    tabla.appendChild(table);
 }
 function opcion5(){
    var foto= document.getElementById("foto");
    var tabla=document.getElementById("tabla");
 
    var hayTabla = document.getElementById("hayTabla");
    if (hayTabla) {
     tabla.removeChild(hayTabla);
     // Table already exists, you can update its content or return
     
 }   
 
    foto.src="beneilDariush.png";
 
    var table = document.createElement("table");
     table.id= "hayTabla"
    table.classList.add("custom-table");
 
    var filas = 7;
    var columnas = 2;
 
    var dataArray = [
     ["Nombre: ", "Dustin Poirier"],
     ["Nacionalidad: ", " Estado Unidense"],
     ["Puesto: ", " 4"],
     ["Edad: ", " 34 años"],
     ["peso: ", " 70,31 kg"],
     ["altura: ", " 177,8 cm"],
     ["record: ", " 22 V / 5 D"]
 ];
    for (var i = 0; i < filas; i++) {
        var row = table.insertRow(i);
 
        for (var j = 0; j < columnas; j++) {
            var cell = row.insertCell(j);
            cell.textContent = "Row " + (i + 1) + ", Column " + (j + 1);
            var cellContent = dataArray[i][j];
            cell.textContent = cellContent;
        }
    }
  
 
    tabla.appendChild(table);
 }