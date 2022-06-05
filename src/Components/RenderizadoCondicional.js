import React, { Component } from "react";

class RenderizadoCondicional extends Component {
    constructor(props) {
        super(props);
        this.state = {
            session : true
        }
    }
    render() { 
        return ( 
            <div className="marco">{this.state.session ? <Login/> : <Logout/>}</div>
         );
    }
}

function Login() {
    return (<div className="text-primary">LOGIN</div>);
}
function Logout() {
    return (<div className="text-warning">LOGOUT</div>);
}
 
export default RenderizadoCondicional;