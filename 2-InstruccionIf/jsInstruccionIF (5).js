function Mostrar()
{
//tomo la edad  
	
	var edad;

	edad=document.getElementById('edad').value;

	if (!(edad>12 && edad<18))
	{
		alert ("no es adolescente");
	}

}//FIN DE LA FUNCIÓN