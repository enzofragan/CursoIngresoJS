function Mostrar()
{
	var largo;
	var ancho;
	var perimetro;
	var alambre;

	largo=document.getElementById('alrgo').value;

	ancho=document.getElementById('ancho').value;

	perimetro=largo*2+ancho*2;

	alambre=perimetro/3;

	alert("el perimetro es de "+perimetro+" mts por lo tanto se nesecitan "+alambre+" mts de alambre");
}
