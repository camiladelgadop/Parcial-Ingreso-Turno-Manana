/*
2)De una compra debes ingresar una cantidad indeterminada 
de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/function mostrar()
{
  
var marca;
var precio;
var peso;
var tipo;
var respuesta;
var acumuladorSolido = 0;
var acumuladorLiquido = 0;
var contadroSolido = 0;
var contadorLiquido = 0;
var pesoTotal = 0;
var precioMasCaro;
var marcaMasCara; //liquidos
var marcaMasLiviana;
var flagLiquido = 0;
var flagSolidos = 0;
var mensajeLiquido = "no se ingreso liquido "
var mensajeSolido = "no se ingreso solido"

do{

marca = prompt("ingrese marca");

precio = parseFloat(prompt("ingrese precio"));
while(isNaN(precio)){
  precio = parseFloat(prompt("error. reingrese un precio valido"));
}

peso = prompt("ingrese peso en kilogramos");

tipo = prompt("ingrese tipo : 'solido' o 'liquido'");
while(tipo != "solido" && tipo != "liquido"){
  tipo = prompt("error. ingrese tipo valido 'solido' o 'liquido'");
}

 respuesta = prompt("desea continuar?");
}while(respuesta == 's')


switch(peso){

  case "liquido":
    acumuladorLiquido = acumuladorLiquido + peso;
    contadorLiquido++;
    break;

  case "solido" :
    acumuladorSolido = acumuladorLiquido + peso;
    contadroSolido++;

    if(flagSolidos == 0 || marcaMasLiviana > marca){
      marcaMasLiviana = marca;
      flagSolidos = 1;
    }

    break; 
} 

if(flagLiquido == 0 || precioMasCaro < precio){
  precioMasCaro = precio;
  marcaMasCara = marca;
  flagLiquido = 1;
}

//A) peso total de la compra:
 pesoTotal = peso;
 pesoTotal++
 console.log("el peso total de la compra es : " + pesoTotal)

 //B) marca del mas caro d elos liquidos
 //esto es Por si no se ingreso el producto
if( flagLiquido == 1){ 
  mensajeLiquido = " marca del mas caro de los liquidos " + marcaMasCara;

  console.log(mensajeLiquido);
}
  //C) marca del mas liviano de los solidos
  if( flagSolidos == 1){ 
    mensajeSolido = " marca del mas liviano de los solidos " + marcaMasLiviana;

    console.log(mensajeSolido);
  }







}
