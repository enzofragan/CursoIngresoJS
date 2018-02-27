//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var alumnos=6;
	var notas;
	var sexo;
	var acumulador=0;
	var contador=0;
	var promedio;
	var min;
	var cantV=0;

	while(contador<alumnos)
	{
		contador ++;
		notas=prompt("ingrese la nota","0");
		notas=parseInt(notas);

		while(notas<0 || notas>10 || isNaN(notas))
		{
			notas=prompt("ingrese la nota valida","0");
			notas=parseInt(notas);
		}

		sexo=prompt("ingrese f para mujer o m para hombre");

		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("ingrese el sexo valido f para mujer o m para hombre");
		}
		if(sexo=="m" && notas>=6)
		{
			cantV ++;
		}
		if(contador==1)
		{
			min=notas;
		}
		else if(notas<min)
		{
			min=notas;
		}
		acumulador=acumulador+notas;
	}
	promedio=acumulador/alumnos;

	alert(" el promedio de las notas es "+promedio+", la nota mas baja es "+min+" y la cantidad de varones con un 6 o mas es "+cantV);
}

