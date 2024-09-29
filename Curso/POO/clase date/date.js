//se usa para trabajar con fechas y hora, nos facilita la manipulacion de horas, horarios
const fechaactual = new Date()

document.write(fechaactual);
document.write('<br>');

let fecha = new Date();
document.write('Hoy es: ',fecha.getDate());
document.write('<br>');
document.write('El mes es: ', fecha.getMonth()+1);
document.write('<br>');
document.write(`el año es: ${fecha.getFullYear()}`); //siempre que sea un metodo el que llamamos agregaremos las parentesis ()
document.write('<br>');
document.write('La hora es: ', fecha.getHours(),':', fecha.getMinutes(),':', fecha.getSeconds()); //ES IMPORTANTE AL REALIZAR PROYECTOS.
document.write('<br>');