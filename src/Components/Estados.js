// Estado: Es el conjunto de variables de los componentes de como se encuentran en cierto momento dado. 
import React,{Component} from "react";

class EstadoComponente extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contador : 0
        };
        
        // setInterval(() => {
        //     this.setState({
        //         contador : this.state.contador + 1
        //     });
        // }, 5000);
    }
    
    render() { 
        return ( 
            <div className="marco">
                <div>Contador Padre: {this.state.contador}</div>
                <div>Contador Hijo : <Aumentar contadorHijo = {this.state.contador}/></div>
            </div>
         );
    }
}

function Aumentar(props) {
    return (
        <span className="text-warning">{props.contadorHijo}</span>
    );
}
 
export default EstadoComponente;