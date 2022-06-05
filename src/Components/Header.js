import React, { Component } from "react";

class Header extends Component {        // En una clase se extiende de React.Component y se importa {Component}
    render(){                           // Cuando se extiende de Component se debe llamar al método render(){}
        return <h1>Soy un Header</h1>;
    };
}

export default Header;                  // Se debe exportar la clase creada