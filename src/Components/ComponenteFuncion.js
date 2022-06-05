import React from "react";

// Funcion Expresada con Arrow Function
const Parrafo = props => {
    return(
        <> 
            <p>Soy un párrafo</p>
            <p>{props.textoParrafo}</p>
        </>
    );
}

// Funcion Declarada 

// function Parrafo(props) {
//     return(
//         <> 
//             <p>Soy un párrafo</p>
//             <p>{props.textoParrafo}</p>
//         </>
//     );
// }

export default Parrafo;