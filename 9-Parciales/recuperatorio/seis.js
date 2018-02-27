function Mostrar()
{
	var contador=0;
	var kilos;
	var contenedores=50;
	var max;
	var min;
	
	while(contador<contenedores)
	{
		contador ++;
		kilos=prompt("ingrese los kilos del contenedor","0");
		kilos=parseInt(kilos);

		while(kilos<0)
		{
			kilos=prompt("ingrese los kilos del contenedor validos","0");
			kilos=parseInt(kilos);
		}
		if(contador==1)
		{
			max=kilos;
			min=kilos;
		}
		else if(kilos>max)
		{
			max=kilos;
		}
		else if(kilos<min)
		{
			min=kilos;
		}
	}

	document.write("<br> el contenedor que peso mas es de: "+max+" kilos");
	document.write("<br> el contenedor que peso menos es de: "+min+" kilos");
}
