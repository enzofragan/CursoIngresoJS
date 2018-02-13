function Mostrar()
{
  var iva;
  var producto;
  var importe;

  iva=1.21;
  producto=prompt("ingrese el precio del producto","0");
  producto=parseInt(producto);
  importe=producto*iva;
  document.getElementById('importeFinal').value=importe;
}
