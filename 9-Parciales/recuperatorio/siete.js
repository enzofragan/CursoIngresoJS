function Mostrar()
{
	var contador=0;
	var edad;
	var acumulador=0;
	var sexo;
	var personas=100;
	var cantV=0;
	var min;
	var premedio;

	while(contador<personas)
	{
		contador ++;
		edad=prompt("ingrese su edad","0");
		edad=parseInt(edad);
		while(edad<0 || edad>100 || isNaN(edad))
		{
			edad=prompt("ingrese su edad real","0");
			edad=parseInt(edad);
		}
		sexo=prompt("ingrese f para femenino o m para masculino");

		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("ingrese su genero real f para femenino o m para masculino");
		}
		acumulador=acumulador+edad;
		if(sexo=="m" && edad>=20)
		{
			cantV ++;
		}
		if(contador==1)
		{
			min=edad;
		}
		else if(edad<min)
		{
			min=edad;
		}
	}
	premedio=acumulador/personas;

	document.write("<br> el promedio de las edades es: "+premedio);
	document.write("<br> la edad mas baja es: "+min);
	document.write("<br> la cantidad de varones con 20 o mas es de: "+cantV);
}
