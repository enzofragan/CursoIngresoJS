/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperaturaF;
	var resultado;

	temperaturaF=document.getElementById('Temperatura').value;

	resultado=(temperaturaF-32)/1.8000;

	alert(temperaturaF+" º fahrenheit son "+resultado+" º centigrados");
}

function CentigradosFahrenheit () 
{
	var temperaturaC;
	var resultado;

	temperaturaC=document.getElementById('Temperatura').value;

	resultado=temperaturaC*1.8000+32;

	alert(temperaturaC+" º centigrados son "+resultado+" º fahrenheit");
}
