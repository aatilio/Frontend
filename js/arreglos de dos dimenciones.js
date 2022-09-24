// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

function arreglos() {
	var i, j;
	var filas = new Number();
	var columnas = new Number();
	var nunmayor = new Number();
	var nunmenor = new Number();
	var contapar = new Number();
	var contaimpar = new Number();
	var suma = new Number();
	var promedio = new Number();
	document.write("numero de filas ");
	filas = Number(prompt());
	document.write("numero de columnas ");
	columnas = Number(prompt());
	var aray = new Array(filas); for (var aux_index_0=0;aux_index_0<filas;aux_index_0++) { aray[aux_index_0] = new Array(columnas); }
	nunmayor = -20;
	nunmenor = 20;
	for (i=1;i<=filas;i++) {
		for (j=1;j<=columnas;j++) {
			// Escribir 'guardar dato en la posicion ',i,',',j,' : ' Sin Saltar
			aray[i-1][j-1] = Math.floor(Math.random()*20);
			suma = suma+aray[i-1][j-1];
			if (nunmayor<aray[i-1][j-1]) {
				nunmayor = aray[i-1][j-1];
			}
			if (nunmenor>aray[i-1][j-1]) {
				nunmenor = aray[i-1][j-1];
			}
			if ((aray[i-1][j-1]%2==0)) {
				contapar = contapar+1;
			} else {
				contaimpar = contaimpar+1;
			}
		}
	}
	promedio = suma/(filas*columnas);
	document.write(" ",'<BR/>');
	document.write("salida de datos",'<BR/>');
	document.write("  ",'<BR/>');
	for (i=1;i<=filas;i++) {
		for (j=1;j<=columnas;j++) {
			document.write(aray[i-1][j-1]," ");
		}
		document.write(" ",'<BR/>');
	}
	document.write(" ",'<BR/>');
	document.write("la suma de todos los valores es: ",suma,'<BR/>');
	document.write("El promedio de todos los valores es: ",promedio,'<BR/>');
	document.write("El numero mayor es: ",nunmayor,'<BR/>');
	document.write("El numero menor es: ",nunmenor,'<BR/>');
	document.write("Cantidad de numeros pares es: ",contapar,'<BR/>');
	document.write("Cantidad de numeros impares es: ",contaimpar,'<BR/>');
}

