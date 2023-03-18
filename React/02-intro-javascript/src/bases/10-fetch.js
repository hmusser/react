/*Fetch API
La función Fetch es una API web que está disponible en la mayoría de los navegadores web modernos y 
proporciona una forma fácil y flexible de realizar solicitudes de red y manejar las respuestas. 
Permite a los desarrolladores recuperar recursos desde un servidor web sin tener que recargar toda la 
página, lo que mejora la experiencia del usuario y reduce la carga en el servidor.
*/
/*api.giphy.com*/
const apiKey ='EkPurBR7zXqBwdbH13LUuDOlz0AjiRay';

//Esto me devuelve una promise con  la response.
//Es una llamada a un endpoint.
const peticion = fetch( `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}` );

peticion.then( resp => resp.json()) // resp.json() me devuelve otro Promise al cual puede llamar a su then (encadenamiento)
.then(({data}) => {//En el Promise le estoy haciendo una desestructuración para obtener solo su campo "data"
    const {url} = data.images.original; //A data le extraigo la url de una imagen que tiene
    //A modo de ejemplo vamos a insertar un poco de html para mostrar la imagen en el navegador.
    const img = document.createElement('img');//Creamos el tag de la imagen
    img.src = url; //Le pasamos la url del source
    document.body.append(img);//La insertamos en el  body
})
.catch(console.warn);