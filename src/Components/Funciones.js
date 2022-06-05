import React, { Component } from "react";

class PanelFuncion extends Component {
    
    render(){
        // De una manera declarativa se declaran las funciones :
        let estado = true;

        // const miFuncionStyle = function(){
        const miFuncionStyle = (estado) => estado ? 'text-primary':'text-secundary';

        const miNombre = (name) => `Hola soy ${name}`;

        const Personas = [
            {
                nombre : 'Luis',
                edad : 25
            },
            {
                nombre : 'Mario',
                edad : 35
            },
            {
                nombre : 'Luigui',
                edad : 33
            }
        ];
        
        return (
            <div className="marco">
                <div className={miFuncionStyle(estado)}>Map y Arrow function</div>
                <div className="text-secundary">{miNombre('Fernando')}</div>
                {
                    Personas.map((persona,index)=>{
                        return <div key={`item-${index}`} className="text-warning">{`Hola soy ${persona.nombre} y tengo ${persona.edad} años`}</div>
                    })
                }
            </div>
        );
    }
}

export default PanelFuncion;