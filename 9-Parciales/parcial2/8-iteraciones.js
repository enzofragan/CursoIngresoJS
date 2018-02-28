//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{/*se ingresa hasta que el usuario quiera el nombre de un animal, el peso del mismo (validar que se mayor a 0)
 y la temp del abitad de este animal (validad entre 40 y -40) 
 informar la cantidad de temp pares, la cantidad de temp impar, el nombre del animal mas pesado,
  el nombre del animal menos pesado, la cantidad de animales que vivien en avitad menores 0 inclusive.
   el promp del peso de todos los animales la temp max y min*/
	var animal;
	var peso;
	var temp;
	var tempPar=0;
	var tempImPar=0;
	var max;
	var min;
	var tempMax;
	var tempMin;
	var animalPesado;
	var animalNoPesado;
	var animalFrio=0;
	var promedio;
	var acumulador=0;
	var contador=0;
	var respuesta='si';	

	while(respuesta!='no')
	{
		contador ++;
		animal=prompt("ingrese el nombre del animal");
		peso=prompt("ingrese el peso del animal","0");
		peso=parseInt(peso);

		while(peso<1 || isNaN(peso))
		{
			peso=prompt("ingrese el peso correcto del animal","0");
			peso=parseInt(peso);
		}

		temp=prompt("ingrese la temperatura de su avitad","0");
		temp=parseInt(temp);

		while(temp<-40 || temp>40 || isNaN(temp))
		{
			temp=prompt("ingrese la temperatura correcta de su avitad","0");
			temp=parseInt(temp);
		}

		if(temp==0)
		{

		}
		else if(temp%2==0 && temp!=0)
		{
			tempPar ++;
		}
		else
		{
			tempImPar ++;
		}
		if(contador==1)
		{
			max=peso;
			animalPesado=animal;
			min=peso;
			animalNoPesado=animal;
		}
		else if(peso>max)
		{
			max=peso;
			animalPesado=animal;
		}
		else if(peso<min)
		{
			min=peso;
			animalNoPesado=animal;
		}
		if(contador==1)
		{
			tempMax=temp;
			tempMin=temp;
		}
		else if(temp>tempMax)
		{
			tempMax=temp;
		}
		else if(temp<tempMin)
		{
			tempMin=temp;
		}
		if (temp<=0)
		{
			animalFrio ++;
		}

		acumulador=acumulador+peso;
		document.write("<br> el animal "+animal+" pesa "+peso+" y vive en un avitad con "+temp+"º de temperatura");
		respuesta=prompt("ingrese no para detenerse");
	}
	promedio=acumulador/contador;

	document.write("<br> la cantidad de temperaturas pares es: "+tempPar);
	document.write("<br> la cantidad de temperaturas impares es: "+tempImPar);
	document.write("<br> el animal mas pesado es: "+animalPesado);
	document.write("<br> el animal mesnos pesado es: "+animalNoPesado);
	document.write("<br> la cantidad de animales que viven con 0º o menos es: "+animalFrio);
	document.write("<br> el promedio del peso de los animales es de: "+promedio);
	document.write("<br> la temperatura maxima es de: "+tempMax+"º");
	document.write("<br> la temperatura minima es de: "+tempMin+"º");
}

