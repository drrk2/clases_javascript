//Las funciones son bloques de codigo que realizan tareas especificas y son reutilizables en diferentes partes del codigo y modularizarlo y mejorar la legibilidad y logica
//existen varios tipos de funciones

//Funciones declarativas
function saludar(/* Aqui van los parametros */){
    document.write('Hola a todos');
    document.write('<br>');
//tambien se puede poner funciones en funciones
let saludo = prompt('Ingrese saludo'); //se pueden crear variables tambien
despedir();
alert(saludo);

}

function despedir(){
    document.write('Adios a todos');
}
saludar();
