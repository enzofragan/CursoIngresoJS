//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var Largo;
	var Ancho;
	var Perimetro;
	var Alambrado;

	Largo=document.getElementById('largo').value;

	Ancho=document.getElementById('ancho').value;

	Perimetro=Largo*2+Ancho*2;

	Alambrado=Perimetro/6;

	alert("el perimetro de este es "+Perimetro+" asi que se nesecitan "+Alambrado+" de alambre");
	alert("Funciona 3-EntradaSalida");
	
}

