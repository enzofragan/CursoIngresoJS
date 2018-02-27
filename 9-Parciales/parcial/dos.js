function Mostrar()
{
	/*tomar pedir el precio y el porcentaje de descuento y mostrar el importe final*/
	var precio;
	var descuento;
	var porcetajeDes;
	var descuentoF;
	var importeF;

	precio=prompt("ingrese el precio","0");
	precio=parseInt(precio);

	descuento=prompt("ingrese porcentaje de descuento","0");
	descuento=parseInt(descuento);

	porcetajeDes=descuento/100;

	descuentoF=precio*porcetajeDes;

	importeF=precio-descuentoF;


	document.getElementById('importeFinal').value=importeF;
  /*var iva;
  var producto;
  var importe;

  iva=1.21;
  producto=prompt("ingrese el precio del producto","0");
  producto=parseInt(producto);
  importe=producto*iva;
  document.getElementById('importeFinal').value=importe;*/
}
