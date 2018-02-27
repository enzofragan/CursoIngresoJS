
function Mostrar()
{
	/*pedrir la altura por promt de triangulo equilatero y informar perimetro y superficie*/
	var altura;
	var perimetro;
	var superficie;

	altura=prompt("ingrese la altura","0");
	altura=parseInt(altura);

	perimetro=altura*3;
	superficie=(altura*20)/2;

	alert("el perimetro de un triangulo equilatero es: "+perimetro+" y su superficie es: "+superficie);
	/*var base;
	var perimetro;
	base=document.getElementById('laBase').value;
	perimetro=base*4;
	alert("el peimetro es: "+perimetro);*/
}
