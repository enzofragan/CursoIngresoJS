function Mostrar()
{
	var contador=0;
	var numero;
	var cantPar=0;
	var acumulador=0;
	var promedio;
	var max;
	var min;
	var respuesta='si';

	while(respuesta!='no')
	{
		contador ++;
		numero=prompt("ingrese un numero","0");
		numero=parseInt(numero);

		while(numero<0 || isNaN(numero))
		{
			numero=prompt("ingrese un numero valido","0");
			numero=parseInt(numero);
		}
		if(numero==0)
		{
			
		}
		else if(numero%2==0 && numero!=0)
		{
			cantPar ++;
		}
		if(contador==1)
		{
			max=numero;
			min=numero;
		}
		else if(numero>max)
		{
			max=numero;
		}
		else if(numero<min)
		{
			min=numero;
		}

		acumulador=acumulador+numero;
		document.write("<br> "+numero);
		respuesta=prompt(" ingrese no para finalizar");
	}
	promedio=acumulador/contador;

	document.write("<br> la cantidad de pares es: "+cantPar);
	document.write("<br> el promedio de los numeros ingresados es: "+promedio);
	document.write("<br> la suma de los numeros es: "+acumulador);
	document.write("<br> el numero maximo es: "+max);
	document.write("<br> el numero minimo es: "+min);
}
