//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var contador=0;
	var importe;
	var dias=7;
	var max;
	var min;

	while(contador<dias)
	{
		contador ++;
		importe=prompt("ingrese el importe de venta","0");
		importe=parseInt(importe);

		while(importe<0 || isNaN(importe))
		{
			importe=prompt("ingrese el importe de venta valido","0");
			importe=parseInt(importe);
		}
		if(contador==1)
		{
			max=importe;
			min=importe;
		}
		else if(importe>max)
		{
			max=importe;
		}
		else if(importe<min)
		{
			min=importe;
		}
	document.write("<br> "+importe);
	}
	document.write("<br> el mayor importe de venta es de: "+max);
	document.write("<br> el menor importe de venta es de: "+min);
}

