function mostraralerta(){
    var n;
			n=prompt("Digite un numero 1..5:",0);
			n=parseInt(n,10);
			switch(n)
			{
			case 1:
			document.write("En Romano es:I"+"<br>");
			break;
			case 2:
			document.write("En Romano es:II"+"<br>");
			break;
			case 3:
			document.write("En Romano es:III"+"<br>");
			break;
			case 4:
			document.write("En Romano es:IV"+"<br>");
			break;
			case 5:
			document.write("En Romano es:V"+"<br>");
			break;
			default:
			document.write("Mal dato"+"<br>");
			}

}
function hacerclick(){
document.getElementsByTagName('p')[0].onclick=mostraralerta;
}
window.onload=hacerclick;
