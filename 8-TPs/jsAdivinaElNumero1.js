/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 numeroSecreto=Math.floor(Math.random()*100)+1;
	 contadorIntentos=3;
	 document.getElementById('intentos').value=contadorIntentos;
	 console.log(numeroSecreto)
		//alert(numeroSecreto );
	

}

function verificar()
{

	var numero = document.getElementById('numero').value;
	var pasar;
	var faltar;

	pasar=numero-numeroSecreto;
	faltar=numeroSecreto-numero;
	
	if (numero==numeroSecreto)
	{
		alert("Usted es un ganador!!! y en solo "+contadorIntentos+" intentos");
	}
	else if (numero>numeroSecreto)
		{
			contadorIntentos-=1;
			document.getElementById('intentos').value=contadorIntentos;
			alert("se pasó "+pasar);
		}
		else if (numero<numeroSecreto)
			{
				contadorIntentos-=1;
				document.getElementById('intentos').value=contadorIntentos;
				alert("falta… "+faltar);
			}
	if (contadorIntentos==0) 
	{
		alert("fin del juego, no ganaste, el numero era "+numeroSecreto);
	}
}