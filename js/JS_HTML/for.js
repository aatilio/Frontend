function mostraralerta(){
    var x,suma=0;
			for(x=0; x<101; x++)
			{
			document.write(x + "  ");
			suma=suma+ x;
			}
			document.write("<br>"+"Sumatoria:"+suma);

}
function hacerclick(){
document.getElementsByTagName('p')[0].onclick=mostraralerta;
}
window.onload=hacerclick;
