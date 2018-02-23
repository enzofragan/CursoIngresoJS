function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var numeros;
	var positivos=0;
	var negativos=0;
	var cantNegativos=0;
	var cantPositivos=0;
	var cantCeros=0;
	var cantPares=0;
	var promedioNegativo;
	var promedioPositivo;
	var diferenciaPN;
	var respuesta="si";

	while(respuesta!="no")
	{
		contador ++;
		numeros=prompt(" ingrese un numero");
		numeros=parseInt(numeros);

		if (numeros<0)
		{
			cantNegativos ++;
			negativos=negativos+numeros;
			promedioNegativo=negativos/cantNegativos;
		}

		if (numeros>0)
		{
			cantPositivos ++;
			positivos=positivos+numeros;
			promedioPositivo=positivos/cantPositivos;
		}

			if (numeros==0)
			{
				cantCeros ++;
			}
			if (numeros%2==0 && numeros!=0)
			{
				cantPares ++;
			}

				if (cantPositivos>cantNegativos)
				{
					diferenciaPN=cantPositivos-cantNegativos;
				}
					else
					{
						diferenciaPN=cantNegativos-cantPositivos;
					}

		respuesta=prompt("ingrese si para continuar o no para frenar");
	
	}

	document.write("<br> la suma de los positivos es: "+positivos);
	document.write("<br> la suma de los negativos es: "+negativos);
	document.write("<br> hay: "+cantPositivos+" positivos");
	document.write("<br> hay: "+cantNegativos+" negativos");
	document.write("<br> hay: "+cantCeros+" ceros");
	document.write("<br> hay: "+cantPares+" pares");
	document.write("<br> el promedio de los positivos es: "+promedioPositivo);
	document.write("<br> el promedio de los negativos es: "+promedioNegativo);
	document.write("<br> la diferencia entre positivos y negativos es de: "+diferenciaPN);





}//FIN DE LA FUNCIÓN