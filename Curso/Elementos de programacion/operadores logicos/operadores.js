//Los operadores logicos nos permiten combinar o modificar valores verdadero y falso
//Los operadores logicos son: &&, ||, !, ?:
// &&: AND, ||: OR, !: NOT, ?: ternario

//operador && (y)
/* 
let a, b;
a = 10;
b = 30;
document.write(a==b);

dara un resultado falso
*/

let continente, edad;
continente = prompt('Ingrese su continente');
edad = parseInt(prompt('Ingrese su edad'));

if (continente == 'America' && edad >= 18) { //tiene que cumplir con ambos requisitos para que el valor sea verdadero
    document.write('eres un adulto americano');
}else{
    document.write('No eres adulto o no eres americano');
}

document.write('<br>')

let dia, mes, anio;
dia = prompt('ingrese dia');
mes = prompt('Ingrese mes')
anio = prompt('íngrese año');

if (mes == 1 || mes == 2 || mes == 3){ //solo necesita que se cumpla una para que el valor sea verdadero
document.write('pertenece al primer trimestre');
}else{
    document.write('no pertenece al primer trimestre');
}