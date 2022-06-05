import React, { Component } from "react";

class Panel extends Component {
    // Utilizar concepto de CamelCase: Sin guines primera letra minuscula y la siguiente palabra inicio mayuscula. 
    // Atributo entre comillas.

    // Creando Objeto dentro de la clase (se llama con un this.)
    estiloSeccion = {
        backgroundColor : 'blue',
        color: '#fff',
        marginTop: '10px'
    };
    
    render(){
        return (
            <div className="marco">
                <div style={{backgroundColor:'red',color:'#fff'}}>Agregar Estilo con el atributo Style</div>
                <div style = {this.estiloSeccion}>Agregar Estilo a traves de un objeto</div>
                <div className="text-primary">Agregar Estilo a traves de una clase</div>
                <div className={this.getStyleCondicion()}>Agregar Estilo a traves de una función</div>
            </div>
        );
    }

    // Dar estilo a un elemento en base a una condición.
    // getStyleCondicion(){
    //     let estado = false;
    //     return estado ? 'text-secundary' : 'text-warning';
    // }
    getStyleCondicion = () => {
        let estado = false;
        return estado ? 'text-secundary' : 'text-warning';
    }
}

export default Panel;