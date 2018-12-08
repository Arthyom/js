// eventos del teclado
window.onkeydown = tecladoPress;
window.onkeyup = tecladoSolt;

function tecladoPress(info) {
   var car = String.fromCharCode( info.keyCode);
   document.getElementById('kValDw').innerText  += car;
   document.getElementById('evSel').innerText = 'Eventos del Teclado: keyDown';
}

function tecladoSolt(info) {
    var car = String.fromCharCode( info.keyCode);
    document.getElementById('kValUp').innerText  = texto;
    document.getElementById('evSel').innerText = 'Eventos del Teclado: keyUp';
 }