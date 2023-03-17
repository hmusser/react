import {getHeroById} from './bases/08-imp-exp';
//Las promesas ejecutan tareas por naturaleza asíncronas
//representan lo que sería una promesa en la vida real, la cual puede tener éxito ó fallar.
/* const promesa = new Promise((resolve, reject) => {

    setTimeout( () => {
    const heroe = getHeroById(2);
    resolve(heroe);
    //reject('No se pudo encontrar el heroe');
}, 2000
    )
});
/*
promesa.then ----> la promesa se ejecutó normalmente.
promesa.catch ----> La promesa falló al ejecutarse.
promesa.finally ---> se ejecutará este código siembres ya sea que la promesa se ejecutó bien o fallo.
*/

/*promesa.then( ( heroe ) => {
    console.log('heroe', heroe);
})
.catch( err => console.warn(err)); */

const getHeroeByIdAsync = ( id ) => {
    return new Promise((resolve, reject) => {

        setTimeout( () => {
        const heroe = getHeroById(id);
        heroe != undefined ? resolve(heroe) : reject('No se pudo encontrar el heroe');       
        
    }, 2000
        )
    });
     
}

getHeroeByIdAsync(2)
.then(
    console.log //Equivale a heroe => console.log(heroe); Toma el primer parametro que viene en el resolve y lo muestra.
    
).catch(
    console.warn //Equivale a error => console.log(error); Toma el primer parametro que viene en el reject y lo muestra.
);