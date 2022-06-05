import React,{useState} from 'react';

function FormularioContent({lang}) {
    if(lang === 'en'){
        return(
            <form>
                <input type="text" key={'lastname'} name='lastname' placeholder='lastname' />
                <input type="text" key={'firstname'} name='firstname' placeholder='firstname' />
                <input type="text" key={'secondname'} name='secondname' placeholder='secondname' style={{width:'50px'}}/>
            </form>
        );
    }
    return(
        <form>
            <input type="text" key={'firstname'} name='firstname' placeholder='primerNombre' />
            <input type="text" key={'secondname'} name='secondname' placeholder='segundoNombre' style={{width:'50px'}}/>
            <input type="text" key={'lastname'} name='lastname' placeholder='apellidos' />
        </form>
    )
}

function FormularioLanguage() {
    const [language, setLanguage] = useState('en');
    return (
        <>
            <h2>Formulario Cambio de Estados</h2>
            <FormularioContent lang = {language}/>
            <button onClick={(e)=> setLanguage((oldLanguage => oldLanguage==='es'?'en':'es'))}>Cambiar Language</button>
        </>
    );
}

export default FormularioLanguage;
