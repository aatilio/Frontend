function mostraralerta(){
    var x=1,media=0;
			while(x<=10)
			{
			document.write(x + "  ");
			media=media + x;
			x=x+1;
			}
			document.write("<br>"+"Promedio:"+media/10);
}
function hacerclick(){
document.getElementsByTagName('p')[0].onclick=mostraralerta;
}
window.onload=hacerclick;
