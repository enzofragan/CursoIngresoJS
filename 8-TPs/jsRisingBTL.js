/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	var edad;
 	var sexo;
 	var estadoCivil;
 	var sueldo;
 	var numeroLegajo;
 	var nacio;

 	edad=prompt("ingrese la edad","0");
 	edad=parseInt(edad);

 	while(edad<18 || edad>90 || isNaN(edad))
 	{
 		edad=prompt("ingrese la edad valida","0");
 		edad=parseInt(edad);
 	}

 	sexo=prompt("ingrese si es mujer o hombre");

 	while(sexo!="mujer" && sexo!="hombre");
 	{
 		sexo=prompt("ingrese el genero correcto mujer o hombre");
 	}

 	estadoCivil=prompt("ingrese su estado civil 1-soltero, 2-casado, 3-divorciado y 4-viudo","1");
 	estadoCivil=parseInt(estadoCivil);

 	while(estadoCivil<=0 || estadoCivil>4 || isNaN(estadoCivil))
 	{
 		estadoCivil=prompt("ingrese su estado civil correcto, 1-soltero, 2-casado, 3-divorciado y 4-viudo");
 		estadoCivil=parseInt(estadoCivil);

 	}

 	switch(estadoCivil)
 	{
 		case 1:
 			estadoCivil="soltero";
 			break;

 		case 2:
 			estadoCivil="casado";
 			break;

 		case 3:
 			estadoCivil="divorciado";
 			break;

 		case 4:
 			estadoCivil="viudo";
 			break;
 	}

 	sueldo=prompt("ingrese su sueldo","0");
 	sueldo=parseInt(sueldo);

 	while(sueldo<8000 || isNaN(sueldo))
 	{
 		sueldo=prompt("ingrese su sueldo correcto","0");
 		sueldo=parseInt(sueldo);
 	}

 	numeroLegajo=prompt("ingrese un numero de legajo de 4 cifras","0");
 	numeroLegajo=parseInt(numeroLegajo);

 	while(numeroLegajo<1000 || numeroLegajo>9999 || isNaN(numeroLegajo))
 	{
 		numeroLegajo=prompt("ingrese un numero de legajo valido de 4 cifras","0");
 		numeroLegajo=parseInt(numeroLegajo);
 	}

 	nacio=prompt("ingrese su nacionalidad, A-argentino/a, E-extranjero/a, N-nacionalizado/a");

 	while(nacio!="a" && nacio!="e" && nacio!="n" && isNaN(nacio)==true)
 	{
 		nacio=prompt("ingrese su nacionalidad correcta, A-argentino/a, E-extranjero/a, N-nacionalizado/a");
 	}

 	switch(nacio)
 	{
 		case "a":
 			nacio="argentino";
 			break;

 		case "e":
 			nacio="extranjero";
 			break;

 		case "n":
 			nacio="nacionalizado";
 			break;
 	}

 	document.getElementById('Edad').value=edad;
 	document.getElementById('Sexo').value=sexo;
 	document.getElementById('EstadoCivil').value=estadoCivil;
 	document.getElementById('Sueldo').value=sueldo;
 	document.getElementById('Legajo').value=numeroLegajo;
 	document.getElementById('Nacionalidad').value=nacio;
}
