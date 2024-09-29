//switch case es una estructura de control para tomar varias decisiones tomando en cuenta el valor de una expresion es como hacer varios if else pero mas simple

/*let valor;
valor = parseInt(prompt('Ingrese valor entre 1 y 3'));

switch (valor) {
    case 1:
        document.write('Ingreso uno');
        break;
    case 2:
        document.write('Ingreso dos');
        break;
    case 3:
        document.write(`Ingreso ${valor}`);
        break;
    default:
        document.write('Ingreso valor fuera de rango');
        break;
}
 */


let color
color = prompt('Ingrese un color: ROJO/VERDE/AZUL');
switch (color) {
    case 'rojo':
        document.write(`Ingreso ${color}`);
        break;
    case 'verde':
        document.write(`Ingreso ${color}`);
        break;
    case 'azul':
        document.write(`Ingreso ${color}`);
        break;

    default:
        document.write('No ingreso color');
        break;
}