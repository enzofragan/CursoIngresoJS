/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	//definimos variable
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno=document.getElementById('numeroUno').value;
	numeroUno=parseInt(numeroUno);// usamos el parseInt para convertir en numero las palabras para sumar 
	numeroDos=document.getElementById('numeroDos').value;
	numeroDos=parseInt(numeroDos);

	resultado=numeroUno+numeroDos;

	alert("la suma es: "+resultado);
}

