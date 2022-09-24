// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

function ordenar_mas_menos_numros() {
	var i, j;
	var num = new Number();
	var nume = new Number();
	var vector = new Number();
	var numer = new Number();
	document.write("cuantos datos quiere almacenar ",'<BR/>');
	num = Number(prompt());
	var vector = new Array(num);
	for (i=1;i<=num;i++) {
		document.write("ingrese el numero: ");
		numer = Number(prompt());
		vector[i-1] = numer;
	}
	for (i=1;i<=num-1;i++) {
		for (j=1;j<=num-1;j++) {
			if (vector[j-1]>vector[j]) {
				nume = vector[j-1];
				vector[j-1] = vector[j];
				vector[j] = nume;
			}
		}
	}
	document.write(" ",'<BR/>');
	document.write("vector ordenado de menor a mayor",'<BR/>');
	for (i=1;i<=num;i++) {
		document.write(" ",vector[i-1],);
	}
	document.write(" ",'<BR/>');
}

