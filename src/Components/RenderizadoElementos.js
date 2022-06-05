import React, { Component } from 'react';
import dataUsuario from '../Helpers/data.json'

export default class RenderizadoElemento extends Component {
      
    render() { 
        return (
            <div className='marco'>
                <ol>{dataUsuario.Usuarios.map(
                    usuario => <ListarUsuarios key={usuario.id} infoUsuario = {usuario}/>
                )}</ol>
            </div>
          );
    }
}

function ListarUsuarios(props) {
    return (
        <li key={props.infoUsuario.id}>{props.infoUsuario.title}</li>
    );
}


