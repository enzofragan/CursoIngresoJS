function Mostrar()
{
  var descuento;
  var producto;
  var importe;

  descuento=1-0.25;
  producto=prompt("ingrese el precio del producto","0");
  producto=parseInt(producto);
  importe=producto*descuento;
  document.getElementById('importeFinal').value=importe;
}
