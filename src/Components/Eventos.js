import React, { Component } from "react";

export class PanelEventoES6 extends Component {
    
    constructor(){
        super();
        this.state = {
            contador : 0
        };
        this.aumentar = this.aumentar.bind(this);  //Forma 01: agregar una funcion a la clase con bind
        this.disminuir = this.disminuir.bind(this);  //Forma 01: agregar una funcion a la clase con bind
    }

    aumentar(){                               //Forma 02: agregar una funcion a la clase de manera expresiva
        this.setState ({
            contador : this.state.contador +1
        })
        if (this.state.contador === 10) this.setState ({contador : 0});
    }

    disminuir() {                                    // Las funciones no llevan this ni const porque son metodos de la clase   
        this.setState({
            contador : this.state.contador - 1
        });
        if(this.state.contador === 0) this.setState ({contador : 0});
    }

    render(){
        const renderContador=<>
                                <div className="num-contador">{this.state.contador}</div>
                                <button onClick={this.aumentar} className="btn-contador">Click Contador +</button>
                                <button onClick={this.disminuir} className="btn-contador">Click Contador -</button>
                            </>
        return (
            <div className="marco">
                <h3>Evento con ES6</h3>
                {renderContador}
            </div>
        );
    }
}

// Property Initializer
export class PanelEventoES7 extends Component {
    
    state = {
        contador : 0
    };

    aumentar = () => {                              // Las funciones no llevan this ni const porque son metodos de la clase           
        this.setState ({
            contador : this.state.contador +1
        })
        if (this.state.contador === 10) this.setState ({contador : 0});
    }

    disminuir = () => {
        this.setState({
            contador : this.state.contador - 1
        });
        if(this.state.contador === 0) this.setState ({contador : 0});
    }

    render(){
        const renderContador=<>
                                <div className="num-contador">{this.state.contador}</div>
                                <button onClick={this.aumentar} className="btn-contador color-blue">Click Contador +</button>
                                <button onClick={this.disminuir} className="btn-contador color-blue">Click Contador -</button>
                            </>
        return (
            <div className="marco">
                <h3>Evento con ES7</h3>
                {renderContador}
            </div>
        );
    }
}

export class PanelEventoNaSinPer extends Component {
    // SyntheticBaseEvent
    eventClick = (event, mensaje)=> {
        console.log(event); // Evento Sintético: Es el evento que está dentro de una clase llamada SynthetixBaseEvent propio de React
        console.log(event.target);          // <button>Pasar Parámetro a traves del evento</button>
        console.log(event.nativeEvent); // Evento Nativo: Muestra el evento directo
        console.log(event.nativeEvent.target); // <button>Pasar Parámetro a traves del evento</button>

        alert(mensaje);
    }
    render() { 
        
        return ( 
            <>
                <div>
                    <button onClick={(event) => this.eventClick(event,'pasar un parámetro desde un evento')}>Pasar Parámetro a traves del evento</button>
                </div>
                
                <div>
                    <Boton myEventClick = {(event) => this.eventClick(event,'pasar un parámetro desde un boton personalizado')}/>
                </div>
            </>
         );
    }
}

// Evento Personalizado : Hecho por un componente creado 

// 1ra Forma
// function Boton(props) {
//     return <button onClick={props.myEventClick}>Boton Personalizado hecho con componente</button>
// }

// 2da forma
// const Boton = (props) => (<button onClick={props.myEventClick}>Boton Personalizado hecho con componente</button>
// );

// 3ra forma: Destructuracion :  const {myEventClick} = props
const Boton = ({myEventClick}) => (<button onClick={myEventClick}>Boton Personalizado hecho con componente</button>
);