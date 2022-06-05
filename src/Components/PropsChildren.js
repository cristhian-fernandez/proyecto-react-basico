import React, { Component } from "react";
// CODIGO MENTOR: https://www.youtube.com/c/CodigoMentorTutoriales

class PanelPropsChildren extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    
    render() { 
        console.log(this.props.children);
        return ( 
            <div className="marco">{this.props.children}</div>
        );
    }
}
 
export default PanelPropsChildren;