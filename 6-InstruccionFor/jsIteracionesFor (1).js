function Mostrar()
{
	var contador=-10;
	var iteraciones=10;
	var contadorDePar=0;
	var contadorDeImpar=0;
	var contadorDeCero=0;
	var positivo=0;
	var negativo=0;

	/*for(i=0;i<largo;i++)
	{

	}*/
	for(;;)
	{
		//document.write("<br> "+contador);
		if (contador==0)
		{
			document.write("<br> "+contador);
			contadorDeCero ++;
		}
			else if(contador%2==0)
			{
				document.write("<br> "+contador+" es par");
				contadorDePar ++;
			}
				else
				{
					document.write("<br> "+contador+" es impar");
					contadorDeImpar ++;
				}

		if(contador<0)
		{
			negativo ++;
		}
			else if(contador>0)
			{
				positivo ++;
			}

		contador ++;
		
		if(contador==10)
		{
			break;
		}
	}
			document.write("<br> "+contadorDePar+" es la cantidad de numeros pares");
			document.write("<br> "+contadorDeImpar+" es la cantidad de impares");
			document.write("<br> "+contadorDeCero+" es la cantidad de ceros");
			document.write("<br> "+positivo+" es la cantidad de positivos");
			document.write("<br> "+negativo+" es la cantidad de negativos");
		//document.write("<br> "+contador);

}