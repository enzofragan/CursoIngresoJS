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
		}
}
