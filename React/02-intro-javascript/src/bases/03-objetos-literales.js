
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion:{
        ciudad: 'Nueva York',
        zip: 65153271,
        lat: 14.12323,
        lng: 34.324234,
    }
};

//console.log( {persona} );
console.table( {persona} );


//Cómo hacer correctamente una copia del objeto persona en otro:
//Utilizamos el operador spread: ...
const persona2 = {...persona}; 
persona2.nombre = 'Peter de polvorines'
//El spread copia valor a valor cada atributo del objeto.
console.log(persona2);