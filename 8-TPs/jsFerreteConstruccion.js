/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var resultado;
	largo=document.getElementById('Largo').value;
	largo=parseInt(largo);
	ancho=document.getElementById('Ancho').value;
	ancho=parseInt(ancho);
	resultado=(largo*2+ancho*2)*3;
	alert("la cantidad a comprar es de: "+resultado);
}
function Circulo () 
{
	var radio;
	var resultado;
	radio=document.getElementById('Radio').value;
	radio=parseInt(radio);
	resultado=radio*3;
	alert("la cantidad a comprar es de: "+resultado);
}
function Materiales () 
{
	var largo;
	var ancho;
	var cemento;
	var resultadoCe;
	var cal;
	var resultadoCa;

	cemento=2;
	cal=3;

	largo=document.getElementById('Largo').value;

	ancho=document.getElementById('Ancho').value;

	resultadoCe=(largo*cemento)*ancho;

	resultadoCa=(largo*cal)*ancho;
	
	alert("se necesitan " + resultadoCa +" bolsas de cal y "+resultadoCe+" bolsas de cemento");
}