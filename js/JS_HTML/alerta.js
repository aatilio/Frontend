function mostraralerta(){
    alert('Ud. hizo click');
}
function hacerclick(){
document.getElementsByTagName('p')[0].onclick=mostraralerta;
}
window.onload=hacerclick;
