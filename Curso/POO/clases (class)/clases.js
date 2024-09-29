//definen un conjunto determinado de los objetos
//es un molde para objeto que posee las mismas caracteristicas, resolver las cosas de la misma manera.
//Una clase puede contener varios objetos.
class persona{
    //creando atributos
    
    nombre = 'Homero';
    apellido = 'Simpson';
    Direccion = 'Av siemrpe viva 742';
    Telefono = '3589765';
    email = 'homero@gmail.com';

    //crear un metodo
trabajar(){
    return 'Trabaja en la planta nuclear';
}

//segundo metodo
estudiar(){
    return ('Escuela primaria de sprinfield');
}

} //una clase aparte de estar compuesta de atributos tambien tienen metodos que son usadas como metodos.

//creando un objeto para una clase
const homero = new persona(); 
//declare a homero como un objeto

//conts porque quiero que sea un valor constante y ese objeto no sea alterado
//la palabra "Homero" esta sandole un valor a la constante
// " = new Persona" significa que esta creando una nueva instancia de tipo objeto y en la palabra "Persona" significa que van a estar desponibles los atributos y metodos de la clase persona

const bart = new persona();
    //Ahora bart tiene acceso a todos los atributos y a todos los metodos que esten dentro de la variable "Persona"

    const lenny = new persona();

//Objeto.propiedad
document.write(homero.nombre+' '+homero.apellido);
document.write('<br>');
//una forma que uso yo para concatenar
document.write(`${homero.nombre}  ${homero.apellido}`);
document.write('<br>');
document.write(homero.trabajar()) // () son obligatorios usar parentesis ya que como estamos llamando un metodo que hace el trabajo de una funcion y por eso debemos de tomarlo
document.write('<br>');
document.write('<br>');
document.write('<br>'); //demostrando diferentes maneras de concatenacion.
document.write('Bart ', bart.apellido);
document.write('<br>');
document.write(`Bart ${bart.apellido}`);
//Esto es util porque no he creado una clase especialmente para bart simpson sino que solo creando la clase "persona" teniendo los dastos de la familia y entrelazandolos.
document.write('<br>');
document.write('Estudia en ', bart.estudiar());
document.write('<br>');
document.write('<br>');
document.write('<br>');
document.write('Lenny ',lenny.trabajar());
