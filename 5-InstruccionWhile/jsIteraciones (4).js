function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");

	while(!(numero>-1 && numero<11))
	{
		numero = prompt("error, ingrese un número entre 0 y 10.");
	}
	document.getElementById('Numero').value=numero;

}//FIN DE LA FUNCIÓN