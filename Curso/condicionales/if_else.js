let nombre, edad;
nombre = prompt ('Ingrese su nombre..');
edad = prompt ('Ingrese su edad..');
edad = parseInt(edad); //lo que colocaremos en la edad debe tratarlo como entero

// edad = parseInt(prompt('Ingrese edad')); segundo metodo mas efectivo

//Realmente no hay nada que decir aqui, solo es pura sintaxis.

if (edad >= 18) {
    document.write('Bienvenido' + ' '+ nombre + ',' + ' ' + 'Disfruta tus ' + edad + ' ' + ':D');
    
    document.write('<br>'); //Usando 2 concatenaciones iguales
    //Recomiendo usar mas esta concatenacion por legibilidad, mantenimiento y flexibilidad
    //este metodo son llamados: templates

    document.write(`Bienvenido ${nombre}, disfruta tus ${edad} años :D!`);
    document.write('<br>'); 
}else{
    if(edad < 18){

        //usando templates
        document.write(`${nombre} tu edad es minima a la requerida, tienes: ${edad} lo siento :(`);
    }
    else{
        document.write('No has ingresado datos');
    }
}

//Probando por mi mismo
/*
let nombre, edad;
nombre = prompt('Ingrese su nombre');
edad = prompt('Ingrese su edad');
edad = parseInt (edad);

if (edad >= 18){
    document.write(`Hola ${nombre} Bienvenido, ${edad} es una gran edad :D`);
}else
    if(edad < 18){
    document.write(`No puedes ingresar ${nombre} ya que tienes ${edad} años`);
}else{
document.write ('No se agregaron los datos requeridos');
}
 */