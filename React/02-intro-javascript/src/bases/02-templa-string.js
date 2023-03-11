
const nombre = 'Horacio';
const apellido = 'Musser';

const nombreCompleto = `
${nombre} 
${apellido}
:) 
${1+2}`;
console.log(nombreCompleto);

function getSaludo(nombre){
    return 'Hola ' + nombre;
}

console.log(`Este es un texto : ${getSaludo(nombre)}`); 