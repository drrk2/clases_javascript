/* Escribe un programa que solicite al usuario ingresar el número de kilómetros recorridos por su coche y el número de litros consumidos . 
El script debe mostrar el consumo de combustible por kilómetro.Un problema matemático muy simple numero de litros dividido por número de kilómetros. */

let litros = parseInt(prompt('Ingrese los litros consumidos: '));
let kilometros = parseInt(prompt('Ingrese los kilometros recorridos por su coche: '));
let consumo = litros / kilometros;
let kilometro = kilometros/litros;
console.log(`Has consumido ${consumo} L/km`);
console.log(`Kilometros por litro: ${kilometro}`);