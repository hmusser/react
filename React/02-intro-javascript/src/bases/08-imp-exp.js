//importar un arreglo desde otro archivo
//heroes es la importacion por defecto y {...} son importaciones individuales que tamb se encuentran dentro del mismo archivo.
import heroes, {owners} from '../data/heroes';
//console.log( heroes );
//console.log(owners);
export const getHeroById = (id) => heroes.find( heroe => heroe.id === id ) ; 

//console.log(getHeroById(2));

//Buscar heroes por owner. ( no se puede usar find pues devuelve un solo resultado.)
export const getHeroesByOwner = ( owner ) => 
heroes.filter( heroe => heroe.owner === owner ) ; 
//console.log(getHeroesByOwner('DC'));
//console.log(getHeroesByOwner('Marvel'));