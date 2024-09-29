/* for(let f = 0; f < 10; f++){
    document.write(f);
    document.write('<br>');
    if(f==3){
        document.write('Aqui es la vuelta ', f)
        document.write('<br>');
        break;
    }
}
*/
let palabra = 'Javascript';
let resultado = '';
for(let f in palabra){
    if(palabra[f]=='a'){
        continue; //saltara ese proceso en este caso la "a"
    }else{
        resultado += palabra[f];
    }
}
document.write(resultado);


