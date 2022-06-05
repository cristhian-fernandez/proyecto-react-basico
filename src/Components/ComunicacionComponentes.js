import React, { Component } from 'react';

export default class ComunicacionPadre extends Component {
    state={
        contador : 0
    }
    incrementarContador = ()=>{
        this.setState({
            contador : this.state.contador +1 
        });
    }
    render() { 
        return ( 
            <div className='marco'>
                <h2>Comunicacion entre Componentes</h2>
                <div>{this.state.contador}</div>
                <ComponenteHijo mensaje={'Comunicacion con componente Hijo 01'}/>
                <ComponenteHijo incrementado={this.incrementarContador} mensaje={'Comunicacion con componente Hijo 02'}/>
            </div>
        );
    }
}
 
 function ComponenteHijo(props) {
     return(
         <>
            <h3>{props.mensaje}</h3>
            <button onClick={props.incrementado}>Aumentar</button>
         </>
     )
 }