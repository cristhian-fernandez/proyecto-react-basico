import React, { useState } from 'react';

/*
function Formularios() {

    const [name, setName] = useState('');
    const [color, setColor] = useState('azul');
    const [select, setSelect] = useState('rojo');
    const [terminos, setTerminos] = useState(false);

    const handleChangeName = (e) => {
        console.log(e.target.name);
        setName(e.target.value);
    }

    const handleChangeColor = (e) => {
        console.log(e.target.name);
        setColor(e.target.value);
    }
    const handleChangSelect = (e) => { setSelect(e.target.value)}
    const handleChangeTerminos = (e) => { setTerminos(e.target.checked)}

    return (
        <div className='marco'>
            <h2>Formularios en React</h2>
            <form onSubmit={()=>{
                alert(name);
                setName('');
            }}>
                <label htmlFor='name'>Nombre: </label>
                <input type="text" id='name' name='name' value={name} onChange={handleChangeName}/>
            </form>
            <hr/>
           <h3>Elige el color favorito</h3> 
            <input type="radio" id='verde' name='color' value ='verde' onChange={handleChangeColor}/>
            <label htmlFor='verde'>Verde</label>
            <input type="radio" id='azul' name='color' value ='azul' onChange={handleChangeColor} defaultChecked/>
            <label htmlFor='azul'>Azul</label>
            <input type="radio" id='rojo' name='color' value ='rojo' onChange={handleChangeColor}/>
            <label htmlFor='rojo'>Rojo</label>
            <input type="radio" id='morado' name='color' value ='morado' onChange={handleChangeColor}/>
            <label htmlFor='morado'>Morado</label>
            <input type="radio" id='celeste' name='color' value ='celeste' onChange={handleChangeColor}/>
            <label htmlFor='celeste'>Celeste</label>
            <hr/>
            <select onChange={handleChangSelect} defaultValue='rojo' name='select'>
                <option value="0" key="0">----</option>
                <option value="azul" key="1">Azul</option>
                <option value="rojo" key="2">Rojo</option>
                <option value="amarillo" key="3">Amarillo</option>
                <option value="morado" key="4">Morado</option>
            </select>
            <hr/>
            <label htmlFor='terminos'>Acepto términos y condicones</label>
            <input type="checkbox" name='terminos' onChange={handleChangeTerminos}/>
        </div>
    );
} */

function Formularios() {

    const [form, setForm] = useState({});

    const handleChangeForm = (e) => {
        console.log(form);
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
    }
    const handleCheckedForm = (e) => {
        console.log(form);
        setForm({
            ...form,
            [e.target.name]:e.target.checked
        });
    }

    return (
        <div className='marco'>
            <h2>Formularios en React</h2>
            <form onSubmit={(e)=>{
                e.preventDefault();
                alert(form.name);
                setForm({
                    name:''
                })
            }}>
                <label htmlFor='name'>Nombre: </label>
                <input type="text" id='name' name='name' value={form.name} onChange={handleChangeForm} defaultValue=''/>
            </form>
            <hr/>
           <h3>Elige el color favorito</h3> 
            <input type="radio" id='verde' name='color' value ='verde' onChange={handleChangeForm}/>
            <label htmlFor='verde'>Verde</label>
            <input type="radio" id='azul' name='color' value ='azul' onChange={handleChangeForm} defaultChecked/>
            <label htmlFor='azul'>Azul</label>
            <input type="radio" id='rojo' name='color' value ='rojo' onChange={handleChangeForm}/>
            <label htmlFor='rojo'>Rojo</label>
            <input type="radio" id='morado' name='color' value ='morado' onChange={handleChangeForm}/>
            <label htmlFor='morado'>Morado</label>
            <input type="radio" id='celeste' name='color' value ='celeste' onChange={handleChangeForm}/>
            <label htmlFor='celeste'>Celeste</label>
            <hr/>
            <select onChange={handleChangeForm} defaultValue='rojo' name='select'>
                <option value="0" key="0">----</option>
                <option value="azul" key="1">Azul</option>
                <option value="rojo" key="2">Rojo</option>
                <option value="amarillo" key="3">Amarillo</option>
                <option value="morado" key="4">Morado</option>
            </select>
            <hr/>
            <label htmlFor='terminos'>Acepto términos y condicones</label>
            <input type="checkbox" name='terminos' onChange={handleCheckedForm}/>
        </div>
    );
} 
export default Formularios;