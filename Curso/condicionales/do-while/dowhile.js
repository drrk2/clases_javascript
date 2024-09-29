/* let valor;
//hace las acciones hasta que se deje de hacer una condicion
do {
    valor = parseInt(prompt('Ingrese valor 1 para salir..'));
    document.write(' Ingreso valor: ',valor);
    document.write('<br>')
} while (valor != 1);
document.write('Fin del bucle'); */

/* 
let usuario, clave, control, intentos;
intentos = 0
control = 0;

usuario = prompt ('Ingrese usuario');
clave = prompt ('ingrese su contraseña');

do {
    if (clave != 'MIacceso33%'){
        clave = prompt('Contraseña incorrecta\n   INTENTE DE NUEVO..');
        control = 0;
        intentos++;
    if (intentos => 4){
        alert('usted a excedido el limite de intentos');
        break;
    }
    }else{
        control = 1;
    }
} while (control !== 1);

if (control === 1){
document.write('acceso correcto');
}
*/

 //Este codigo hara que le pida lo mismo hasta que el numero sea false (se presione 1) 
let valor;

do {
    valor = parseInt(prompt('Ingresar valor 1'));
} while (valor != 1);  //Cuando no se cumpla esto hara un fin del proceso.