import React from "react";
import PropTypes from "prop-types"; 

export default function ComponenteType(props) {
    return ( 
        <>
            <div>{props.propiedadPorDefecto}</div>
            <div>{props.cadena}</div>
            <div>{props.numero}</div>
            <div>{props.booleano ? 'true': 'false'}</div>
            <div>{props.array.join(' , ')}</div>
            <div>{`${props.objeto.nombre} tiene ${props.objeto.edad} años`}</div>
            <div>{props.elementoReact}</div>
            <div>{props.array.map(elemento => props.funcion(elemento)).join(' | ')}</div>
            <div>{props.componenteReact}</div>
        </>
     );
}

ComponenteType.defaultProps = {     // defaultProps es una palabra reservada
    propiedadPorDefecto : 'Este es una propiedad por defecto'
}

ComponenteType.propTypes = {
    numero : PropTypes.number,                      // En console saldra error si no fuera un numero
    // nuevacadena : PropTypes.isRequired           En console saldrá error porque esta propiedad seria requerida
}
 