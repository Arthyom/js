// eventos del teclado
window.onkeypress = tecladoPress;
window.onkeyup = tecladoSolt;
window.onkeydown = tecladoDown;
window.onmousemove = ratonMove;

function tecladoPress(info) {
   var car = String.fromCharCode( info.keyCode);
   document.getElementById('kValPs').innerText  = car;
   document.getElementById('evSel').innerText = 'Eventos del Teclado: keyPress';
}

function tecladoSolt(info) {
    var car = String.fromCharCode( info.keyCode);
    document.getElementById('kValUp').innerText  = car;
    document.getElementById('evSel').innerText = 'Eventos del Teclado: keyUp';
 }

 function tecladoDown(info) {
    var car = String.fromCharCode( info.keyCode);
    document.getElementById('kValDw').innerText  = car;
    document.getElementById('evSel').innerText = 'Eventos del Teclado: keyDown';
 }
 
 function ratonMove(info) {
    var x = info.clientX;
    var y = info.clientY;

    document.getElementById('mValMv').innerText  = "x= "+x + ", y= "+y;
    document.getElementById('evSel').innerText = 'Eventos del Teclado: MouseMove';
 }
 