import React, { useState, useEffect } from 'react';

function ScrollHooks() {

    const [scrollY, setScrollY] = useState(window.pageYOffset);

    // Se ejecuta cuando se actualiza algun estado  cualquier estado
    useEffect(() => {
        console.log('Fase de Actualización de cualquier tipo de variables');
        const detectarScrollY = () => {
            console.log(window.pageYOffset);
            setScrollY(window.pageYOffset);
        }
        window.addEventListener('scroll',detectarScrollY);
    });  // Es mejor colocar una variable para saber cual necesita cambiar y no cuando se renderize todo.

    // Cuando se coloca una variable de estado dentro [variableDeEstado], se ejecutara la funcion interna cuando esa variable cambie.
    // [variables] es la lista de dependencias
    useEffect(() => {
        console.log('Fase de Actualización de una variable determinada');
    }, [scrollY]);

    // Solo se llama en la fase de Montaje, ya que se manda arreglo vacio []
    // Se ejecuta una vez al cargar el elemento o estado, se utiliza a Api
    useEffect(() => {
        console.log('Fase de Montaje');
    }, []);

    // Para la Fase de desmontaje se debe si o si retornar una funcion return () => {}
    // Desconectarse de Api, limpiar intervalos de tiempo, desuscribirse de servicios, limpiar manejadores de eventos.
    useEffect(() => {
        return () => {
            console.log('Fase de desmontaje');
        }
    });

    return ( 
        <div className='marco'>
            <h2>Utilizando Hookss - useEffect</h2>
            <h3>{scrollY}</h3>
        </div>
    );
}

export default ScrollHooks;