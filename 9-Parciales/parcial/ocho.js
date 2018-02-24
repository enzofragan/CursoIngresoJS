/*ingresar los alumnos pedidiendo el nombre (en el pzarron). ¿cuantos alumno ingrese?, y pedir la nota, ¿cual es el promedio?
pedri el sexo y la cantidad de ombre y mujeres y pedir qe varones desaprobaron, y el nombre de la mejor nota, 
promedio de las mujeres, sexo de la menor edad, promedio de las edades de los aprobados, cantidad de notas pares,
cantidad de notas impares  */
function Mostrar()
{
	var alumnos;
	var notas=0;
	var acumulador=0;
	var contador=0;
	var promedio;
	var sexo;
	var cantF=0;
	var cantM=0;
	var cantMDes=0;
	var max=0;
	var mejorNota;
	var acumuladorF=0;
	var promedioF;
	var edad;
	var min=100;
	var menorEdad;
	var contadorEdad=0;
	var acumuladorEdad=0;
	var promedioEdad;
	var cantNPar=0;
	var cantNImPares=0;
	var respuesta='si';

	while(respuesta!='no')
	{
		contador ++;
		alumnos=prompt("ingrese el nombre");
		notas=prompt("ingrese su nota");
		notas=parseInt(notas);

		while(notas<0 || notas>10)
		{
			notas=prompt("ingrese la nota correcta");
			notas=parseInt(notas);
		}

		sexo=prompt("ingrese el sexo f(para mujer) y m(para hombre)");

		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("ingrese el sexo correcto");
		}

		if (sexo=="f")
		{
			cantF ++;
			acumuladorF=acumuladorF+notas;
		}

		if (sexo=="m")
		{
			cantM ++;

			if(notas<4)
			{
				cantMDes++;
			}
		}

		if(notas>max)
		{
			max=notas;
			mejorNota=alumnos;
		}

		edad=prompt("ingrese la edad","0");
		edad=parseInt(edad);

		while(edad<17 || isNaN(edad))//isNaN es para descir si no es un numero
		{
		edad=prompt("ingrese la edad correcta","0");
		edad=parseInt(edad);
		}

		if(edad<min)
		{
			min=edad;
			menorEdad=sexo;
		}

		if (notas>4)
		{
			contadorEdad ++;
			acumuladorEdad=acumuladorEdad+edad;
		}

		if(notas==0)
		{

		}
		else if(notas%2==0)
		{
			cantNPar++;
		}
		else
		{
			cantNImPares ++;
		}

		acumulador=acumulador+notas;
		document.write("<br> "+alumnos+" tiene "+edad+" su sexo es "+sexo+" se saco "+notas);
		respuesta=prompt("ingrese no para finalizar");

	}
	promedio=acumulador/contador;
	promedioF=acumuladorF/cantF;
	promedioEdad=acumuladorEdad/contadorEdad;

	document.write("<br> se ingresaron: "+contador+" alumnos");
	document.write("<br> el promedio de las notas es de: "+promedio);
	document.write("<br> la cantidad de mujeres es: "+cantF);
	document.write("<br> la cantidad de hombres es: "+cantM);
	document.write("<br> la cantidad de hombres desaprobados es de: "+cantMDes);
	document.write("<br> el alumno con la mejor nota es: "+mejorNota);
	document.write("<br> el promedio de las mujeres es de: "+promedioF);
	document.write("<br> el sexo del menor es: "+menorEdad);
	document.write("<br> el promedio de las edades de los aprobados es de: "+promedioEdad);
	document.write("<br> la cantidad de notas pares es: "+cantNPar);
	document.write("<br> la cantidad de notas impares es: "+cantNImPares);
}
