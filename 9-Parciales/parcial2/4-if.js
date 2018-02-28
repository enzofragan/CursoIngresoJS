//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{/*sin while y sin validar. solo if se ingresan dos numeros si son iguales se concatenan si el mayor es el primero
	se multiplican de lo contratio se restan*/
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno=prompt("ingrese el primer numero","0");
	
	numeroDos=prompt("ingrese el segundo numero","0");


	if(numeroUno==numeroDos)
	{
		resultado=numeroUno+numeroDos;
	}
	else
	{
		numeroUno=parseInt(numeroUno);
		numeroDos=parseInt(numeroDos);
		if (numeroUno>numeroDos)
		{
			resultado=numeroUno*numeroDos;
			resultado=resultado+" es par"
		}
		else
		{
			resultado=numeroUno-numeroDos;
		}
	}
	
	alert("el resultado es: "+resultado);
}

