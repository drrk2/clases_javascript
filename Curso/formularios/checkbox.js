function seleccion(){
    let cantidad = 0;
    if (document.getElementById('check1').checked) {
        cantidad++;
    }
    if (document.getElementById('check2').checked) {
        cantidad++;
    }
    if (document.getElementById('check3').checked) {
        cantidad++;
    }
    if (document.getElementById('check4').checked) {
        cantidad++;
    }
    if (document.getElementById('check5').checked) {
        cantidad++;
/* solucionando */
    }if(cantidad == 0){
        swal('No conoces ningun lenguaje :(')
    }if(cantidad == 1 < 2){
        swal('conoces: '+ cantidad + ' lenguaje');
    }if(cantidad => 2){
        swal('Conoces: ' + cantidad + ' lenguajes')
    }
}