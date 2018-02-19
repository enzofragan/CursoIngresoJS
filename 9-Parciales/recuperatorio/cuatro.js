function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno=prompt("ingrese el primer numero","0");
	numeroUno=parseInt(numeroUno);

	numeroDos=prompt("ingrese el segundo numero","0");
	numeroDos=parseInt(numeroDos);

	resultado=numeroUno+numeroDos;

	if (resultado==0)
	{
		document.write("el resultado es cero");
	}
	else if (resultado>0)
		{
			document.write("el resultado es positivo");
		}
		else
		{
			document.write("el resultado es negativo");
		}
}
