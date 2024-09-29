//es una estructura de control de bucle mientras una condicion se cumple, cuando deja de cumplirse el codigo deja de funcionar y sigue con el codigo
/* let f = 0;
while (f <= 10) {
    document.write('Vuelta no. ',f);
    document.write('<br>');
    f++;
}
document.write('Fin del bucle');*/

let f = 1;
let suma = 0;
let valor;

while (f <= 5) {
    valor = parseInt(prompt('Ingrese valor'));
    suma = suma + valor;
    f++
}
document.write(`La suma es ${suma} <br>`);