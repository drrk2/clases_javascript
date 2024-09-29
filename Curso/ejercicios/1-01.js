/* Ejercicio 1: Variables y Tipos de Datos

Declara variables para tu nombre, edad y si eres estudiante.
Muestra estos valores en la consola. */

let nombre, edad, estudiante;
nombre = 'Cesar';
edad = 18;
estudiante = true;

console.log(nombre, ', ' + edad, ', '+ estudiante); //CONSEJO: Usar templates
console.log(`${nombre}, ${edad}, ${estudiante}`);

/* Ejercicio 2: Operadores Aritméticos

Declara dos variables con números.
Realiza y muestra en la consola las operaciones de suma, resta, multiplicación y división entre estas dos variables. */

let n = 10, b = 5;
parseInt(n)
parseInt(b)
let sum = n + b ,rest = n - b,mult = n * b,div = n/b;
console.log(sum);
console.log(rest);
console.log(mult);
console.log(div);

/* Ejercicio 3: Estructuras de Control

Escribe un programa que verifique si un número es mayor que 10 y muestre un mensaje en la consola si lo es.
Usa un switch para mostrar el nombre del día de la semana según un número (1 para lunes, 2 para martes, etc.). */
let num = 15;
if (num > 10){
console.log('el numero es mayor que 10');
}else{
    console.log('el numero no es mayor que 10');
}
