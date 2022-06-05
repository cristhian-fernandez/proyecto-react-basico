import React from 'react';
import Componente from './Components/ComponenteClase';
import Header from './Components/Header';
import Parrafo from './Components/ComponenteFuncion';
import logo from './logo.svg';
import './App.css';
import Persona from './Components/Destrunturing';
import Panel from './Components/Estilos';
import PanelFuncion from './Components/Funciones';
import {PanelEventoES6,PanelEventoES7, PanelEventoNaSinPer} from './Components/Eventos';
import PanelPropiedades from './Components/Propiedades';
import PropiedadesType from './Components/PropiedadesType';
import PanelPropsChildren from './Components/PropsChildren';
import EstadoComponente from './Components/Estados';
import RenderizadoCondicional from './Components/RenderizadoCondicional';
import RenderizadoElemento from './Components/RenderizadoElementos';
import EstilosCss from './Components/Estiloscss';
import ComunicacionPadre from './Components/ComunicacionComponentes';
import ContadorHook from './Components_02/ContadorHook';
// import ScrollHooks from './Components_02/ScrollHooks';
import ReferenciasDOM from './Components_02/Referencias';
import Formularios from './Components_02/Formularios';
import FormularioLanguage from './Components_02/FormularioLanguage';
import FormularioControlado from './Components_02/FormularioControlado';


function App() {
  let auth = true;    //auth de autenticación
  let nombres = ['Jose', 'Mario','Max','Teresa','Lucas'];
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{auth?'Usuario esta autenticado':'Usuario no está autenticado'}</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Parrafo textoParrafo = 'Este es un parrafo pasado por prop'/>
        <div>
          <ul>
            {nombres.map((element,index) => <li key={index}>{element}</li>)}
          </ul>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Prueba
        </a>
        <Componente/>
        <Persona/>
      </header>
      <Panel/>
      <PanelFuncion/>
      <PanelEventoES6/>
      <PanelEventoES7/>
      <PanelEventoNaSinPer/>
      {
        nombres.map((elemento,index)=>{
          return <PanelPropiedades key = {index} nombrePersona = {elemento}/>
        })          
      }
      <PropiedadesType 
        cadena = 'Este es una cadena'
        numero = {10}
        booleano = {true}
        array = {['Lunes','Martes','Miercoles']}
        objeto = {
          {nombre : 'Luis', edad : 15}
        }
        elementoReact = {<span className='text-primary'>Soy elemento React</span>}
        funcion = {elemento => `Es el día : ${elemento}`}
        componenteReact = {<PanelEventoES6></PanelEventoES6>}
        />
      <PanelPropsChildren>
        <div className='text-warning'>Propiedades Children</div>
      </PanelPropsChildren>
      <EstadoComponente/>
      <RenderizadoCondicional/>
      <RenderizadoElemento/>
      <EstilosCss/>
      {/* <ScrollHooks/>  */}
      <ComunicacionPadre/>
      <ContadorHook subtitulo = 'de seguidores'/>

      <ReferenciasDOM />
      <Formularios />
      <FormularioLanguage />
      <FormularioControlado />
    </div>
  );
}

export default App;
