function Mostrar()
{

	var sexo = prompt("ingrese f ó m .");

	//while(!(sexo=="f"||sexo=="m"))
	while(sexo!="f" && sexo!="m")
	{
		sexo = prompt("error, ingrese f ó m .");
	}
	if(sexo=="f")
	{
		document.getElementById('Sexo').value="femenino";
	}
	if(sexo=="m")
	{
		document.getElementById('Sexo').value="masculino";
	}

}//FIN DE LA FUNCIÓN