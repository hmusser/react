import React from 'react';
import PropTypes from 'prop-types';
//Los componontes pueden estar basados en clases y en funciones.
//Aqui usaremos las funciones.
/** FUNCTIONAL COMPONENTS */
const PrimeraApp = ( { saludo, subtitulo} ) =>
{
    
return (    
    <>
    <h1>Hola Mundo.</h1>
    <h1>{ saludo }</h1>
    <p>{ subtitulo }</p>
    </>//Forma corta de implementar la etiqueta Fragment de React.
); //jsx
}

PrimeraApp.propTypes = {
saludo: PropTypes.string.isRequired
};

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un sub por defecto'
}
export default PrimeraApp;
 