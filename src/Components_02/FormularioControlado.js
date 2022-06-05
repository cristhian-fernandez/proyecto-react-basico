import React, { Component } from 'react';

class FormularioControlado extends Component {
    constructor(props){
        super(props);
        this.state={
            username : '',
            password : '',
            error: ''
        }
    } 
    validateUsername = (value) => {
        console.log(value);
    }
    render() { 
        return (
            <div className="marco">
                <h2>Formarios Controlados</h2>
                <form>
                    <div>
                        <label>Usuario: </label>
                        <input type="text" placeholder='Username' onChange={(e) => this.validateUsername(e.target.value)}/>
                        <span>{this.state.error}</span>
                    </div>
                    <br/>
                    <div>
                        <label>Contraseña: </label>
                        <input type="password" placeholder='Password'/>
                    </div>
                    <br/>
                    <input type="submit" value='Login' />
                </form>
                <br/>
                <br/>
            </div>
        );
    }
}
 
export default FormularioControlado;