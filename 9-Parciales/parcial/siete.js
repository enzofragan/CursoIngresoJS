function Mostrar()
{/*hasta que el cliente quiera pedir letra (validar no numero) y se ingresaran numero entre -200 y 200 inclusive 
	mostrar letra del numero mas vajo el promedio de todos los numeros despues de una vocal y la letra del maximo*/
	var contador=0;
	var letra;
	var numero;
	var acumulador=0;
	var contadorVocal=0;
	var promedio;
	var max;
	var min;
	var LMax;
	var LMin;
	var respuesta='si';

	while(respuesta!='no')
	{
		contador ++;
		letra=prompt("ingrese una letra");

		while(isNaN(letra)==false)
		{
			letra=prompt("ingrese una letra, no un numero");
		}

		numero=prompt("ingrese un numero","0");
		numero=parseInt(numero);

		while(numero<-200 || numero>200 || isNaN(numero))
		{
			numero=prompt("ingrese un numero valido","0");
			numero=parseInt(numero);
		}
		if(contador==1)
		{
			max=numero;
			LMax=letra;
			min=numero;
			LMin=letra;
		}
		else if(numero>max)
		{
			max=numero;
			LMax=letra;
		}
		else if(numero<min)
		{
			min=numero;
			LMin=letra;
		}
		switch(letra)
		{
			case "a":
			case "e":
			case "i":
			case "o":
			case "u":
				contadorVocal ++;
				acumulador=acumulador+numero;
				break;
		}
		document.write("<br> "+letra+" es igual "+numero);
		respuesta=prompt("¿quiere continuar?");
	}
	promedio=acumulador/contadorVocal;
	
	document.write("<br> la letra del numero mas bajo es: "+LMin);
	document.write("<br> la letra del numero maximo es: "+LMax);
	document.write("<br> el promedio de las vocales es: "+promedio);
}
