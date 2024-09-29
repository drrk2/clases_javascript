let resultado; //declare una variable que se llama resultado

//Funciones con parametros
function suma(valor1, valor2) { //en () esta colocando valores a la funcion, se pueden agregar los que necesites
    //en (valor1,valor2): esta requiriendo los parametros para que la funcion trabaje, de lo contrario no funcionara
    valor1 = parseInt(prompt(valor1)); //parse int toma numeros enteros, si no es numero no dara resultado
    valor2 = parseInt(prompt(valor2));
    resultado = valor1 + valor2; 
    alert(`Resultado: ${resultado}`);
}
suma();