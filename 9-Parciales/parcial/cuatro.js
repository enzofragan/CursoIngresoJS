function Mostrar()
{/*sin if, ingresar tres numeros y sacar promedio*/
	
	var numeroUno;
	var numeroDos;
	var numeroTres;
	var promedio;

	numeroUno=prompt("ingrese el primer numero","0");
	numeroUno=parseInt(numeroUno);
	numeroDos=prompt("ingrese el segundo numero","0");
	numeroDos=parseInt(numeroDos);
	numeroTres=prompt("ingrese el ultimo numero","0");
	numeroTres=parseInt(numeroTres);

	if(numeroUno>numeroTres && numeroUno>numeroDos)
	{
		if(numeroDos<numeroUno && numeroDos<numeroTres)
		{
			alert("el primer numero "+numeroUno+" es el mayor y el segundo numero "+numeroDos+" es el menor");
		}
		else
		{
			alert("el primer numero "+numeroUno+" es el mayor y el tercer numero "+numeroTres+" es el menor");
		}
		else if(numeroUno<numeroDos && numeroDos>numeroTres)
		{
			if (numeroUno<numeroDos && numeroUno<numeroTres)
			{
				alert("el segundo numero "+numeroDos+" es el mayor y el primer numero "+numeroUno+" es el menor");
			}
			else if(numeroUno<numeroDos && numeroUno>numeroTres)
			{
				alert("el segundo numero "+numeroDos+" es el mayor y el tercer numero "+numeroTres+" es el menor");
			}
		}
	}
	else if(numeroUno<numeroTres && numeroDos<numeroTres)
	{
		if(numeroUno<numeroTres && numeroUno<numeroDos)
		{
			alert("el tercer numero "+numeroTres+" es el mayor y el primer numero "+numeroUno+" es el menor");
		}
		else if(numeroUno<numeroTres && numeroUno>numeroDos);
		{
			alert("");
		}
	}
	else
	{
		alert("los tres numeros son iguales por lo tanto los tres son mayores");
	}

	/*promedio=(numeroUno+numeroDos+numeroTres)/3;

	alert("el promedio de los tres numero es: "+promedio);*/

	/*var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno=prompt("ingrese el primer numero","0");
	numeroUno=parseInt(numeroUno);

	numeroDos=prompt("ingrese el segundo numero","0");
	numeroDos=parseInt(numeroDos);

	if (numeroUno==numeroDos)
	{
		resultado=numeroUno*numeroDos;
		document.write(resultado);
	}
	else if (numeroUno>numeroDos)
		{
			resultado=numeroUno-numeroDos;
			document.write(resultado);
		}
		else
		{
			resultado=numeroUno+numeroDos;
			document.write(resultado);
		}*/
}
