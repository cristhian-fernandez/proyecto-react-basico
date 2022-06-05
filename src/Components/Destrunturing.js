import React, { Component } from "react";
import Header from "./Header";


class Persona extends Component{
    constructor(props){
        super(props);
        <Header/>;
    }
    render(){
        //DESTRUCTURING: es poder extraer cada una de las propiedades de un determinado objeto.
        //               En un arreglo es para tener referencia directo de cada elemento.
        let persona = {nombre:'José', edad:25};
        const {nombre, edad} = persona;           // Destructuring (debe tener el mismo nombre que las propiedades)
        const {nombre: nom, edad: ed} = persona;  // Destructuring (se puede colocar un alisas)

        let estaciones = ['primavera','otoño','verano','invierno'];
        const [estacion1,estacion2, ...c] = estaciones;           // Destructuring
        console.log(c);                                           //  (2) ['verano', 'invierno']
        return(
            <ul>
                <li>{persona.nombre}</li>
                <li>{nombre} tiene {edad}</li>                  
                <li>{nom} tiene {ed} años</li>
                <li>{estacion1}</li>
                <li>{estacion2}</li>
                <li>{c.join(' , ')}</li>
            </ul>
        );
    }
}

export default Persona;