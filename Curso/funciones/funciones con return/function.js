/*  opcion 1
function suma (a, b){
    return a + b;
}
document.write(suma(30, 60));
*/
// opcion 2

let resultado
function suma (a , b){
    resultado = a + b
    return resultado;
}
document.write(suma(40, 10))
document.write('<br>');
//--------------
function saludar(){
    return 'Hola Mundo';
}
var mensaje = saludar();
document.write(mensaje);
document.write('<br>');

//funcion que retorne un color dependiendo el valor
function Vercolor(valor){
valor = parseInt(prompt('Ingrese valor 1/3: '));
switch (valor){
    case 1:
        return 'rojo';
    case 2:
        return 'verde';
    case 3:
        return 'azul';
    default:
        return 'No hay valor requerido';
}
}
alert(Vercolor());