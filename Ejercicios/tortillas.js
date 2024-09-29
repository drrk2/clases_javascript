/* Una tortilla de patatas lleva 200 gramos de patatas por persona. Por cada kilo de patatas se necesitan 5 huevos y 300 gramos de cebolla.
Escribe un script que dado el número de comensales calcule las cantidades de ingredientes necesarias. */
var comensales, patata, cebolla, huevos, tortillas;
tortillas = comensales
comensales = parseInt(prompt('Cuantos comensales hay en la sala?'));
patata = (comensales*200)/1000;
huevos = (patata*5);
cebolla = (comensales*300)/1000

console.log(`se haran ${tortillas} de tortillas`);
console.log('las cantidades son:');
console.log(`${patata} gr. de patata`);
console.log(`${huevos} de huevo`);
console.log(`${cebolla} gr. de cebolla`);