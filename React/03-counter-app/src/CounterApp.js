import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value = 10}) =>
{
    //hook
    //setCounter modifica el valor de counter.
    //el 10 es el valor por defecto que se le da a counter
    //useState me indica el uso del hook.
    const [counter, setCounter] = useState( value );
    
    //handleAdd
    const handleAdd = () => {
    setCounter( counter + 1);
    //Es igual que hacer:
    //setCounter ((c) => c+1);
    }

    const handleReset = () =>  setCounter( value );
    const handleSubstract = () => setCounter( counter - 1 );

    return (
        <>
        <h1>CounterApp</h1>
        <h2>{ counter }</h2>
        {/*ojo, no poner handleAdd() dentro del onClick porque esto hara que se ejecute la función en el momento 
        en el que se esté renderizando el componente.*/}
        <button onClick={ handleAdd }>+1</button> 
        <button onClick={ handleReset }>Reset</button> 
        <button onClick={ handleSubstract }>-1</button> 
        
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
    };

export default CounterApp;
