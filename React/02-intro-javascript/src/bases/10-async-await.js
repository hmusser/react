//Originalmente tenemos o partimos desde:
// const getImagenPromesa = () => new Promise ( resolve => resolve('hhtps://asdsadasd.com'));
//getImagenPromesa().then ( console.log );
//Vemos como podemos hacer esto con un async, await, etc.
//Para trabajar con await debemos estar dentro de una función async siempre.
//Este código es mas sencillo que estar anidando promesas como en el ejemplo anterior:
const getImagen = async () =>{
    try{
    const apiKey ='EkPurBR7zXqBwdbH13LUuDOlz0AjiRay';
    const resp = await fetch( `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}` ); //await esperará a que el fetch termine para seguir con la siguiente instruccioón.
    const {data} = await resp.json();//En este caso como resp.json() devolverá una promesa la esperamos con un await.
    
    const {url} = data.images.original;
    console.log(url);
    const img = document.createElement('img');
    img.src = url; 
    document.body.append(img);
    }
    catch (error){//Con async y await el manejo se hace a través del clásico try catch.
        //Manejo del error.
        console.error(error);
    }
}

getImagen();

