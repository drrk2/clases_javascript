//Expresion ? 'si es true' :  'si es false'
// ternario que es en español?
// El operador ternario! Es un operador condicional que se utiliza en JavaScript (y en otros lenguajes de programación) para evaluar una condición y devolver un valor u otro dependiendo del resultado.
/* do {
    valor = parseInt(prompt('Ingrese valor 1 para salir..'));
    document.write(' Ingreso valor: ',valor);
    document.write('<br>')
} while (valor != 1);
document.write('Fin del bucle');

let mensaje =: Esta parte declara una variable llamada mensaje y la inicializa con un valor.
edad >= 18: Esta es la condición que se evalúa. En este caso, se verifica si la variable edad es mayor o igual a 18.
?: Este es el operador ternario. Se utiliza para separar la condición de los valores que se devolverán dependiendo del resultado.
"Eres mayor de edad": Este es el valor que se devuelve si la condición es verdadera (es decir, si edad es mayor o igual a 18).
:: Este es el separador entre los dos valores posibles.
"Eres menor de edad": Este es el valor que se devuelve si la condición es falsa (es decir, si edad es menor que 18).*/

let edad = prompt('ingresar edad');
let acceso = edad > 17 ? 'permitir ingreso' : 'No puede ingresar';

document.write(acceso);