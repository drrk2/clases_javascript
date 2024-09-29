let control = 0; //se encargara de ingresar al usuario
let constrasenia = 'Acceso01'; /* clave de acceso */
    function verificar(){
        let clave = document.getElementById('clave')/*< de aqui buscara el valor de la contraseña */.value /* < obtener el valor de clave */;
        if(clave == ""){
            alert("Por favor ingrese la contraseña");
        }else if (clave != constrasenia){
            alert('Clave incorrecta intenta de nuevo');
            control++
            if (control == 3) {
                alert('Cuenta bloqueada');
            }
        }else{
            window.open("https://www.google.com")
        }
    }