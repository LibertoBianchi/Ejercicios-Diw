;
function ej1(){
    var entrada = document.getElementById("entrada").value;
    var resultado = document.getElementById("resultado")
    if(entrada.length<=0){
        resultado.textContent="Vacio";
    }
    else{
        resultado.textContent="Tiene contenido"
    }
}
function ej2(){
    var entrada = document.getElementById("entrada").value;
    var resultado = document.getElementById("resultado")
        resultado.textContent =("Al revés seía: "+(entrada.split("")).reverse().join(""))
}
function ej3(){
    var entrada = document.getElementById("entrada").value;
    var resultado = document.getElementById("resultado")
    var cuenta =entrada.split("a")
    resultado.textContent ="El texto contiene "+ (cuenta.length-1) +" a";
}
function ej4(){
    var entrada = document.getElementById("entrada").value;
    var resultado = document.getElementById("resultado")
    var cuenta =entrada.split("a")
    resultado.textContent ="El texto antes de la primera a es "+ (cuenta[0]);
}
function ej5(){}
function ej6(){}
function ej7(){}
function ej8(){}
function ej9(){
    var entrada = document.getElementById("entrada").value;
    var resultado = document.getElementById("resultado")
    var junto =entrada.split(" ").join("")
    resultado.textContent = junto;
}

function ej10(){
    var entrada = document.getElementById("entrada").value;
    var resultado = document.getElementById("resultado")
    var junto =entrada.split(" ").join("-")
    resultado.textContent = junto;
}
function ej11(){
    var entrada = document.getElementById("entrada").value;
    var resultado = document.getElementById("resultado")
    var junto =entrada.split(" ")
    var acronimo = "";

    for(i=0;i<junto.length;i++){
        acronimo += junto[i].substring(0,1)
    }
    resultado.textContent = acronimo.toUpperCase()
    
}
function ej12(){}
function ej13(){
    var entrada = parseInt(document.getElementById("entrada").value);
    var resultado = document.getElementById("resultado")

    if(entrada==0){
        resultado.textContent = "Es cero"
    }
    else if(entrada>0){
        resultado.textContent = "Es postivo"
    }
    else{
        resultado.textContent = "Es negativo"
    }
}
function ej14(){}
function ej15(){}
function ej16(){}
function ej17(){}