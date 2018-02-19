function Mostrar()
{
	var datoUno;
	var datoDos;
	var datoTres;
	var suma;
	var promedio;

	datoUno=document.getElementById('precioUno').value;
	datoUno=parseInt(datoUno);
	datoDos=document.getElementById('precioDos').value;
	datoDos=parseInt(datoDos);
	datoTres=document.getElementById('precioTres').value;
	datoTres=parseInt(datoTres);

	suma=datoUno+datoDos+datoTres;

	promedio=suma/3;

	alert("la suma de los tres datos es "+suma+" y su promedio es de "+promedio);
}
