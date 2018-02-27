//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno=prompt("ingrese el primer numero","0");
	numeroUno=parseInt(numeroUno);

	numeroDos=prompt("ingrese el segundo numero","0");
	numeroDos=parseInt(numeroDos);

	if (numeroUno==numeroDos)
	{
		resultado=numeroUno*numeroDos;
	}
	else if (numeroUno>numeroDos)
	{
		resultado=numeroUno-numeroDos;
	}
	else
	{
		resultado=numeroUno+numeroDos;
	}
	document.write("<br> el resultado es: "+resultado);
}

