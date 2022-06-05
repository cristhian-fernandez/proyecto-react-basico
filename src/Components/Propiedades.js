import React, { Component } from "react";

class PanelPropiedades extends Component {
    
    // Props : Son propiedades que nos permite intercambiar información entre componentes 
    //          Son aquellas que un componente hijo recibe de un componente padre
    constructor(props){
        super(props);
        this.state = {
            contador : 0
        }
    }
    render(){
        let nombre = this.props.nombrePersona;
        return (
            <div className="marco">
                <div className="text-secundary">{nombre}</div>
            </div>
        );
    }
}

export default PanelPropiedades;
