
document.onsubmit = validar;


function validar (){ 
    validarNombre();
    validarCarrera();

}


function validarNombre (){
    var nombre = document.getElementById('nombre').value;
    if( nombre.length <= 0 || nombre == null || isNaN(nombre) ){
        document.getElementById('nombre').classList.add('error');
        return false;
    }
}


function validarCarrera (){
    var indice = document.getElementById('carrera').selectedIndex;
    alert(indice);
    if( indice == null  || indice == 0 ){
        document.getElementById('carrera').classList.add('error');
        return false;
    }
}