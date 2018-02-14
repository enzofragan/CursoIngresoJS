function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;

	nota=Math.floor(Math.random()*10)+1;

	/*if(nota>8)
	{
		alert(nota+" EXCELENTE");
	}
	else
	{
		if (nota>4)
		{
			alert(nota+" APROBÓ");
		}
		else
		{
			alert(nota+" Vamos, la proxima se puede");
		}
	}*/

	if(nota>8)
	{
		alert("EXCELENTE");
	}
		if(nota>4 && nota<8)
		{
			alert("APROBÓ")
		}
			if(nota<4)
			{
				alert("Vamos, la proxima se puede");
			}

}//FIN DE LA FUNCIÓN