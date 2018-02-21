function Mostrar()
{

	//var repetciones = prompt("ingrese el número de repeticiones");
	var iteraciones=1000;
	var numeroRandom;
	var contadorCero=0;
	var contadorUno=0;
	var contadorDos=0;
	var contadorTres=0;
	var contadorCuatro=0;
	var contadorCinco=0;
	var contadorSies=0;
	var contadorSiete=0;
	var contadorOcho=0;
	var contadorNueve=0;
	

	for(contador=0;contador<iteraciones;contador ++);
	{
		numeroRandom=Math.floor(Math.random() * 10);

		switch(numeroRandom)
		{
			case 0:
				contadorCero ++;
				break;
			case 1:
				contadorUno ++;
				break;
			case 2:
				contadorDos ++;
				break;
			case 3:
				contadorTres ++;
				break;
			case 4:
				contadorCuatro ++;
				break;
			case 5:
				contadorCinco ++;
				break;
			case 6:
				contadorSies ++;
				break;
			case 7:
				contadorSiete ++;
				break;
			case 8:
				contadorOcho ++;
				break;
			case 9:
				contadorNueve ++;
				break;
		}
	}

	document.write("<br> "+numeroRandom);
	document.write("<br> cero: "+contadorCero);
	document.write("<br> uno: "+contadorUno);
	document.write("<br> dos: "+contadorDos);
	document.write("<br> tres: "+contadorTres);
	document.write("<br> cuatro: "+contadorCuatro);
	document.write("<br> cinco: "+contadorCinco);
	document.write("<br> seis: "+contadorSies);
	document.write("<br> siete: "+contadorSiete);
	document.write("<br> ocho: "+contadorOcho);
	document.write("<br> nueve: "+contadorNueve);





}//FIN DE LA FUNCIÓN