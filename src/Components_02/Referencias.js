import React, { Component, createRef } from 'react';

class ReferenciasDOM extends Component {
    constructor (props){
        super(props);
        this.ref_btn_menu = createRef();
        this.ref_menu = createRef();
    }

    handleMenu = (e) => {
        /*
        let menu = document.getElementById('menu');
        console.log(e.target.textContent);
        if(e.target.textContent === 'Menu'){
            e.target.textContent = 'Cerrar';
            menu.style.display = 'block';
        } else {
            e.target.textContent = 'Menu';
            menu.style.display = 'none';
        }
        */
       console.log(this.ref_btn_menu);
       console.log(this.ref_menu);

       if(this.ref_btn_menu.current.textContent === 'Menu'){
            this.ref_btn_menu.current.textContent = 'Cerrado';
            this.ref_menu.current.style.display = 'block';
       }else{
            this.ref_btn_menu.current.textContent = 'Menu';
            this.ref_menu.current.style.display = 'none';
       }
    }
    render() { 
        return (<div className='marco'>
            <h2>Referencias del DOM</h2>
            <button id='btn_menu' onClick={this.handleMenu} ref={this.ref_btn_menu}>Menu</button>
            <menu id='menu' style={{display:'none'}} ref={this.ref_menu}>
                <a href="/">Menu 1</a><br></br>
                <a href="/">Menu 2</a><br></br>
                <a href="/">Menu 3</a><br></br>
                <a href="/">Menu 4</a><br></br>
                <a href="/">Menu 5</a><br></br>
            </menu>
        </div>);
    }
}
 
export default ReferenciasDOM;