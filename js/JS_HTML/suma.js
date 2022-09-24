function mostraralerta(){
    var num1,num2, num3;
    num3 = 0;
    num1=prompt("Digite un numero ","");
    num2=prompt("Digite otro numero ","");
    n1=parseFloat(num1);
    n2=parseFloat(num2);
    num3=n1+n2;
    alert("La suma es: "+num3);

}
function hacerclick(){
document.getElementsByTagName('p')[0].onclick=mostraralerta;
}
window.onload=hacerclick;
