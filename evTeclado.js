// eventos del teclado
window.onkeypress = tecladoPress;
window.onkeyup = tecladoSolt;
window.onkeydown = tecladoDown;
window.onmousemove = ratonMove;
window.onmousedown = ratonDown;
window.onmouseout = ratonOut;
window.onmouseover = ratonEnter;
window.onblur = formBlur;
window.onsubmit = formSub;

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
 
///////// raton ////////
 
 function ratonMove(info) {
    var x = info.clientX;
    var y = info.clientY;

    document.getElementById('mValMv').innerText  = "x= "+x + ", y= "+y;
    document.getElementById('evSel').innerText = 'Eventos del Teclado: MouseMove';
 }
 

 function ratonDown(info) {
    var x = info.clientX;
    var y = info.clientY;

    document.getElementById('mValPs').innerText  = "x= "+x + ", y= "+y;
    document.getElementById('evSel').innerText = 'Eventos del Teclado: MousePress';
 }


 function ratonOut(info) {
    document.getElementById('mValOt').innerText  = "Saliendo del Control";
    document.getElementById('mValEt').innerText  = "Saliendo del Control";
    document.getElementById('evSel').innerText = 'Eventos del Teclado: MouseOut';
 }


 function ratonEnter(info) {
    document.getElementById('mValEt').innerText  = "Entrando en el Control";
    document.getElementById('mValOt').innerText  = "Entrando en el Control";
    document.getElementById('evSel').innerText = 'Eventos del Teclado: MouseOver';
 }


 function formBlur(info) {
    document.getElementById('fValBl').innerText  = "Blur en los controles";
    document.getElementById('evSel').innerText = 'Eventos del Teclado: Blur';
 }

 function formSub(info) {
    document.getElementById('fValSb').innerText  = "Enviando formulario";
    document.getElementById('evSel').innerText = 'Eventos del Teclado: Submit';
 }