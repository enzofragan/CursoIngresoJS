function Mostrar()
{

	var contador=0;
	// declarar variables
	var max;
	//var max=-999;
	var min;
	//var min=999;
	var numero;
	
	var respuesta='si';

	while(respuesta!='no')
	{
		contador++;
		numero=prompt(" ingrese un numero");
		numero=parseInt(numero);


		if(contador==1)
		{
			max=numero;
			min=numero;
		}else
		{
			if(numero>max)
			{
				max=numero;
			}
			if(numero<min)
			{
				min=numero;
			}
		}

		respuesta=prompt("ingrese si para continuar o no para terminar");
	}

	document.getElementById('maximo').value=max;
	document.getElementById('minimo').value=min;

}//FIN DE LA FUNCIÓN