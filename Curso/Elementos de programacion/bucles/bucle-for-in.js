/* let palabra = 'Cerdito feliz';

for (let f in palabra){
    document.write(palabra[f]);
}
    */
   //pedirle que cuente vocales y de un resultado
let palabra = 'fojgwlf';
let vocal = 0; //Contador de vocales, predeterminado 0 para que cuente las vocales de una palabra y aumente un numero
for(let f in palabra){ //Cuente la a detalle cada palabra
    if(palabra[f]=='a' || palabra[f]=='e' || palabra[f]=='i' || palabra[f]=='o' || palabra[f]=='u'){
    vocal++; //lea cada una de estas palabras que pido y si tiene vocal aumente un valor mas al contador
    }
}
document.write('Cantidad de vocales: ',vocal)