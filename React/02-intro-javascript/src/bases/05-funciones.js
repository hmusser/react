//Funciones en JavaScript
//Asignar las funciones a constantes para que no admitan reasignaciones de otros valores como por ejemplo:
//saludar = 30;
const saludar = function( nombre ){
    return `Hola ${nombre}`;
}

//Funciones de flecha ó anónimas:
const saludar2 = ( nombre ) => {
    return `Hola ${nombre}`;
}

//Si devuelvo un solo valor puedo:
const saludar3 = ( nombre ) => `Hola ${nombre}`;

const saludar4 = ( ) => `Hola Mundo!`;

const getUser = () => {
    return {
        uid: '213421asd',
        userName: 'El_Papi_Chulo',
    }
}

//Puedo reemplazar el return por:
const getUser2 = () => (
        {
        uid: '213421asd',
        userName: 'El_Papi_Chulo2',
        }
    );

console.log(saludar('Amelia'));
console.log(saludar2('Musser'));
console.log(saludar3('Blasco'));
console.log(saludar4());

console.log(getUser());
console.log(getUser2());


//TAREA
//1) Transformar a una función de flecha.
//2) Tiene que retornar...
/*function getUsuarioActivo( nombre ){
    return {
        uid: 'ABC876',
        username: nombre,
    }
};
*/
const getUsuarioActivo = ( nombre ) => ({
        uid: 'ABC876',
        username: nombre,
    });
const usuarioActivo = getUsuarioActivo('The Hulk');
console.log( usuarioActivo );