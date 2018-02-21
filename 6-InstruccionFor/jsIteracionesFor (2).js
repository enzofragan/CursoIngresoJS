function Mostrar()
{
	
	for(contador=0;;contador ++)
	{
		document.write("<br> "+contador);
		if (contador==10)
		{
			break;
		}
		if(contador==5)
		{
			continue;
		}
		document.write(" despues del continue");
	}
	document.write(" fin del for");











	
}