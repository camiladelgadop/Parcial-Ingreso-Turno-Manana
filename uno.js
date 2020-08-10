/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay) ok
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{

var nombre;
var temperatura;
var sexo;
var edad;
var edadPromedio;
var acumuladorF = 0;
var acumuladorM = 0;
var contadorF = 0;
var contadorM = 0;
var flagMujer = 0;
var temperaturaMaxima;
var mujerTemperaturaMaxima;
var mensajeMujer = "no hay mujeres"



for (var i = 0; i < 2 ;i++){

	nombre = prompt("ingrese un nombre");

	temperatura = parseInt(prompt("ingrese temperatura"));

	sexo = prompt("ingrese sexo 'f' o 'm'")
	while(sexo != "f" && sexo != "m" ){
		sexo = prompt("error. ingrese sexo valido");
	}

	edad = parseInt(prompt("ingrese edad"));
	while(isNaN(edad)){
		edad = parseInt(prompt("error. ingrese edad"));
	}
 
	switch(sexo){
		case "f":
			acumuladorF = acumuladorF + sexo;
			contadorF++
			break;

		case "m":
			acumuladorM = acumuladorM + sexo;
			contadorM++
			break;
	}

}

//A) cant de personas de cada sexo
console.log("del sexo F hay :" + acumuladorF + "personas");
console.log("del sexo M hay :" + acumuladorM + "personas");

// b) edad promedio total
 edadPromedio = contadorF + contadorM
 edadPromedio = edadPromedio / edad 


console.log("edad promedio en total" + edadPromedio);


//C mujer con mas temperatura 
if (flagMujer == 0) {
	
	temperaturaMaxima = temperatura;
	mujerTemperaturaMaxima = nombre;
	flagMujer = 1;
	
} else {
	if (temperatura > temperaturaMaxima) { //a max le asigno un valor
		temperaturaMaxima = temperatura;
		mujerTemperaturaMaxima = nombre;
	}
}
	if( flagMujer == 1){ 
		mensajeMujer = "la mujer con mas temperatura es : " + mujerTemperaturaMaxima;
	}

console.log(mensajeMujer)

}
