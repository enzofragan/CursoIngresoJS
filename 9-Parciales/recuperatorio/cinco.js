function Mostrar()
{
	var mes;

	mes=prompt("ingrese un mes del año");

	switch(mes)
	{
		case "diciembre":
			alert("Se vienen las fiestas");
			break;

		case "enero":
			alert("comienza el año");
			break;

		default:
			alert("no es enero, ni diciembre");
	}
}
