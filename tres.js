/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 
nombre del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el nombre de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	var nombre;
	var lugar;
	var temporada;
	var cantidad;
	var respuesta;
	var contadorBariloche = 0;
	var contadorCataratas = 0;
	var contadorSalta = 0;
	var acumuladorBariloche = 0;
	var acumuladorCataratas = 0;
	var acumuladorSalta = 0;
	var masElegido;
	var flagTitular = 0;
	
var pasajerosMaximo;
	var pasajerosMinimo;
	var nombrePasajerosMax;
	var nombrePasajerosMin;
	var cantidadPersonasInvierno = 0;
	var acumPersonas = 0;

	do{

		nombre = prompt("ingrese nombre del titular");
		
		lugar = prompt("ingrese lugar 'bariloche' , 'cataratas', 'salta'");
		while(lugar != "bariloche" && lugar != "cataratas" && lugar != "salta"){
			lugar = prompt("error. ingrese lugar 'bariloche' , 'cataratas', 'salta'");
		}

		temporada = prompt("ingrese temporada 'invierno', 'verano', 'primavera'")
		while(temporada != "invierno" && temporada != "verano" && temporada != "primavera"){
			temporada = prompt("error. ingrese temporada 'invierno', 'verano', 'primavera'")
		}

		cantidad = prompt("ingrese cantiad de personas que viajan");


		respuesta = prompt("desea continuar")
	}while(respuesta == 's');


switch(lugar){
	case "bariloche":
		acumuladorBariloche = acumuladorBariloche + lugar;
		contadorBariloche++
		break;

	case "cataratas":
		acumuladorCataratas= acumuladorCataratas + lugar;
		contadorCataratas++
		break;
		
	case "salta":
		acumuladorSalta = acumuladorSalta + lugar
		contadorSalta++
		break;	
}

if( acumuladorBariloche > acumuladorCataratas && acumuladorBariloche > acumuladorsalta ){
	masElegido = "bariloche"
	

}else if(acumuladorCataratas > acumuladorBariloche && acumuladorCataratas > acumuladorsalta   ){ 
	masElegido = "cataratas";
	

}else{ 
	masElegido = "salta";



	if (flagTitular == 0) {
		flagTitular = 1;

		pasajerosMaximo = cantidad;
		pasajerosMinimo = cantidad;
		nombrePasajerosMax= nombre;
		nombrePasajerosMin= nombre;
		} else {
			if (cantidad > pasajerosMaximo) {// y si a maximo le asigno un valor
				pasajerosMaximo = cantidad;
				nombrePasajerosMax = nombre;

			}


		if (lugar == "invierno"){
			cantidadPersonasInvierno++;
			acumPersonas = acumPersonas + cantidad;
		}
		
		if(cantidadPersonasInvierno != 0){
			promedio = acumPersonas / cantidadPersonasInvierno;
		}










	//c) 
	console.log( "cantidad de personas que viajan en envierno" + promedio );

	//B) nombre de titular que lleva mas pasajeros
	console.log( " nombre de titular que lleva mas pasajeros " + nombrePasajerosMax);


	//A) lugar mas elegido

	console.log("el lugar mas elegido es : " + masElegido )








}
