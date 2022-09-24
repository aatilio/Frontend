function mostraralerta(){
    var num=0;
			num=prompt("Digite Edad:",0);
			if(num>=18)
			{
			document.write("Mayor de edad"+"<br>");
			}
			else
			{
                document.write("Menor de edad"+"<br>");	
			}
			document.write("<br>"+"Programa terminado");
}
function hacerclick(){
document.getElementsByTagName('p')[0].onclick=mostraralerta;
}
window.onload=hacerclick;