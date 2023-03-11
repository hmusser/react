console.log('Hola Mundo');

//Variables y constantes
const nombre = 'Horacio';
const apellido = 'Musser';

let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado);

if(true){
    let valorDado = 8; //---> let y const permiten crear variables de scope o scopeadas.
    console.log(valorDado);
    const nombre = 'Felipe'; //---> let y const permiten crear variables de scope o scopeadas.
    console.log(nombre);
}

console.log('Valor dado inicial:' + valorDado);