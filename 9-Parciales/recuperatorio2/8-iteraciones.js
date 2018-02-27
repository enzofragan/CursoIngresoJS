//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var contador=0;
	var numeros;
	var cantidadPar=0;
	var acumulador=0;
	var promedio;
	var maximo;
	var minimo;
	var respuesta='si';

	while(respuesta!='no')
	{
		contador ++;
		numeros=prompt("ingrese un numero","0");
		numeros=parseInt(numeros);

		while(numeros<0 || isNaN(numeros))
		{
			numeros=prompt("ingrese un numero valido","0");
			numeros=parseInt(numeros);
		}
		if(numeros==0)
		{
			
		}
		else if(numeros%2==0 && numeros!=0)
		{
			cantidadPar ++;
		}
		if(contador==1)
		{
			maximo=numeros;
			minimo=numeros;
		}
		else if(numeros>maximo)
		{
			maximo=numeros;
		}
		else if(numeros<minimo)
		{
			minimo=numeros;
		}

		acumulador=acumulador+numeros;
		document.write("<br> "+numeros);
		respuesta=prompt(" ingrese no para terminar");
	}
	promedio=acumulador/contador;

	document.write("<br> la cantidad de pares es: "+cantidadPar);
	document.write("<br> el promedio de los numeros ingresados es: "+promedio);
	document.write("<br> la suma de los numeros es: "+acumulador);
	document.write("<br> el numero maximo es: "+maximo);
	document.write("<br> el numero minimo es: "+minimo);
	
}

