function Mostrar()
{/*ingresar numeros hasta que el usuario quiera los numeros estaran entre -50 y 50 informar 
	cuantos pares e inpares el promedio de los positivos y el maximo y minimo*/

	var contador=0;
	var numero;
	var acumulador=0;
	var cantidadPar=0;
	var cantidadImPar=0;
	var contadorPositivo=0;
	var promedio;
	var maximo;
	var minimo;
	var respuesta='si';

	while(respuesta!='no')
	{
		contador ++;
		numero=prompt("ingrese un numero","0");
		numero=parseInt(numero);

		while(numero<-50 || numero>50 || isNaN(numero))
		{
			numero=prompt("ingrese un numero valido","0");
			numero=parseInt(numero);
		}
		if(numero%2==0 && numero!=0)
		{
			cantidadPar ++;
		}
		else if(numero%2!=0)
		{
			cantidadImPar ++;
		}
		if(numero>0)
		{
			contadorPositivo ++;
			acumulador=acumulador+numero;
		}
		if(contador==1)
		{
			maximo=numero;
			minimo=numero;
		}
		if(numero>maximo)
		{
			maximo=numero;
		}
		if(numero<minimo)
		{
			minimo=numero;
		}
		document.write("<br> "+numero);
		respuesta=prompt("¿quiere ingresar otro numero?");
	}
	promedio=acumulador/contadorPositivo;

	document.write("<br> la cantidad de pares es: "+cantidadPar);
	document.write("<br> la cantidad de impares es: "+cantidadImPar);
	document.write("<br> el promedio de los numeros es: "+promedio);
	document.write("<br> el maximo es: "+maximo);
	document.write("<br> el minimo es: "+minimo);

	/*var importe=1;
	var dias=24;
	var contador=0;

	importe=prompt("ingrese importe","0");
	importe=parseInt(importe);

	while(contador<dias)
	{
		
	}*/

}
