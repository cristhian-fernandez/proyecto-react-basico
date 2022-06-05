import React, { useState } from 'react';

function ContadorHook(props) {
    const [contador, setContador] = useState(0);
    const aumentar = () => (contador>=0)?setContador(contador + 1):null;
    const disminuir = () => (contador>0)?setContador(contador - 1):null;
    return ( 
        <div className='marco'>
            <h2>Utilizando Hook</h2>
            <h2>Contador de {props.titulo} {props.subtitulo} :{contador}</h2>
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={disminuir}>Disminuir</button>
        </div> 
    );
}

export default ContadorHook;

ContadorHook.defaultProps={
    titulo : 'Click'
}