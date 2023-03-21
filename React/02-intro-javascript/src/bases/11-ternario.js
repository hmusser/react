const activo = false;

/*
let mensaje = '';

if ( activo ){
    mensaje = 'activo';
}
else {
    mensaje = 'inactivo';
}
*/
/* Opcion 1 Ternario tradicional
const mensaje = activo ? 'activo' : 'inactivo';*/
//Otra opción más simple y rápida es (si solo nos interesa la opción cuando es true):
const mensaje = activo && 'Activo'
//si activo === true  ------> mensaje = 'Activo' Esto es muy útil en React.
console.log(mensaje);