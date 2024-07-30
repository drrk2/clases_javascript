let edad, nombre, telefono; //darle valores a los materiales

edad = parseInt(prompt('Ingresa tu edad'));
nombre = prompt('Ingresa tu nombre');
telefono = parseInt(prompt('Ingresa tu numero'));

document.write('Tu edad es: ', edad);
document.write('<br>');
document.write(`Nombre: ${nombre}`);
document.write('<br>');
document.write(`Numero de telefono: ${telefono}`);
document.write('<br>');

let a, b, sum, res, div, mult;

a = parseInt(prompt('Ingresa el primer numero'));
b = parseInt(prompt('Ingresa el segundo numero'));

sum = a + b;
res = a - b;
div = a / b;
mult = a * b;

document.write('tus valores sumados dan: ', sum);
document.write('<br>');
document.write('tus valores restados dan: ', res);
document.write('<br>');
document.write('tus valores divididos dan: ',div);
document.write('<br>');
document.write('tus valores multiplicados dan: ',mult);
document.write('<br>');