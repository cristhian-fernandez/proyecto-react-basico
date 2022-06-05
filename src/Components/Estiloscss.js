import React, { Component } from 'react';
import '../Estilos/Estilos.css';
import moduleStyle from '../Estilos/Estilos.module.css';   
import '../Estilos/Estilos.sass';

// misStylesModule => Es una variable que almacena los selectores de la hoja de estilo
// moduleStyle (Estilos en forma de módulo) => Es un alias que estamos creando, y en esta variable que almacenaran todos los selectores que tenga esta hoja de estilo.

class EstilosCss extends Component {
  
    render() { 
        const myestilo = {
            backgroundColor : 'green',
            color : '#fff'
        }
        return ( 
            <div className='marco'>
                <h2 className='marco_titulo'>Estilos CSS</h2>
                <h3 className='marco_texto'>Estilos de hoja externa</h3>
                <h3 style={{backgroundColor:'red', color: '#fff'}}>Estilos en línea con atributo style</h3>
                <h3 style={myestilo}>Estilos en objeto con atributo style</h3>
                <h3 >Agregando Normalize (@import-normalize;) en el archivo principal index.css</h3>
                <h3 className={`${moduleStyle.module_texto} ${moduleStyle.module_texto_warning}`}>Estilos con module.css (Nombre_hoja.module.css)</h3>
                <h3 className={moduleStyle.module_texto}>Estilos con module.css (Estilos.module.css)</h3>

            </div>
         );
    }
}
 
export default EstilosCss;