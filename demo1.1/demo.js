
let nombre, edad, ciudad; //Registro de el usuario.

nombre= prompt('Ingrese su nombre');
edad= parseInt(prompt('Ingrese su Edad'));
ciudad = prompt('Ingrese su Ciudad');

if (edad < 17) {
    alert(`Usted no puede ingresar ya que tiene ${edad}`);
}
document.write('Bienvenido ',nombre);

