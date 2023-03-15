//Desestructuración de objetos o Asignación Desestructurante
//Objeto literal
const persona = {
    nombre: 'Tony Stark',
    edad: 34,
    clave: 'Ironman',
};
//Para mostrar estos atributos yo podría hacer:
//console.log(persona.nombre);
//console.log(persona.edad);
//console.log(persona.clave);

//Pero sería más fácil no tener que invocar a persona cada vez,
//aquí es donde entra la desestructuracion de objetos:
//const { nombre, edad, clave } = persona; //extraigo en una constante el campo nombre del objeto persona.
//console.log(nombre);
//console.log(edad);
//console.log(clave);

//Otro uso:
//Desde la firma de una función puedo extraer (nombre) solo el campo que necesito del objeto que recibo.
//Tambien puedo setear valores por defecto si no existe algun parámetro (rango)
const useContext = ( {clave, edad, nombre, rango = 'Capitán'} ) => {
//console.log(nombre, rango);

return {
    nombreClave: clave,
    anios: edad,
    latlng:{
        lat: 14.123456,
        lng:  -12.24546
    }
}
}
//Tambien puedo desestructurar objetos dentro de objetos (anidacion de objetos).
const {nombreClave, anios, latlng:{lat,lng}} = useContext( persona );
console.log(nombreClave, anios);
console.log(lat);
console.log(lng);