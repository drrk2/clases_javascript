let numeros = []; //asi declaras un array
//Tambien se puede 'let numeros = [15,,80,650,-10];'
numeros = [15,80,650,50,-10];
document.write('Elementos: ',numeros);
document.write('<br>');
document.write('primer elemento: ',numeros[0]);
document.write('<br>');
numeros [0] = 14;
document.write('Elementos: ',numeros);
document.write('<br>-------------------');
let frutas = ['manzanas',' peas',' naranjas',' mangos'];
document.write('<br>');
document.write('frutas :', frutas);
document.write('<br>');

//metodos de los arrays
//ver cantidad de elementos
document.write('Cantidad: ',frutas.length);
document.write('<br>');

//saber ultimo elemento
document.write('Ultimo elemento: ', numeros[numeros.length-1]);
document.write('<br>');

//arrays en tipo texto
document.write('En string: ',numeros.toString()); //identifica un dato numerico a uno en forma de texto
document.write('<br>');

//unir tipos de array
let letras = ['a','b','c'];
let numeros2 = [1,2,3];
document.write('Alfanumerico: ',letras.concat(numeros2));

//borrar ultimo array
document.write('<br>');
numeros.pop();
document.write(numeros);
document.write('<br>');

//agregar elemento al final
numeros.push(-10);
document.write(numeros);
document.write('<br>');


document.write('********************************************');
document.write('<br>');
document.write('Estos valores son lo mismo');
document.write('<br>');
document.write('Arrays');
document.write('<br>');


