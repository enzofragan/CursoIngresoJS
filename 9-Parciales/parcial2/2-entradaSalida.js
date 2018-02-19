//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var Iva;
  	var produc;
  	var importeFinal;

  	Iva=1.21;
  	produc=prompt("ingrese el precio del produc","0");
  	produc=parseInt(produc);
  	importeFinal=produc*Iva;
  	document.getElementById('importe').value=importeFinal;
	
}

