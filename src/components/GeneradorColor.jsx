import React, { useState } from 'react';
import './generador.css';

const GeneradorColor = () => {

    const [color, setColor] = useState('#000000');
    const [cargando, setCargando] = useState(false);

    const generarColor = () => {
        const colorRandom = (Math.floor(Math.random()*16777216)).toString(16);
        const result = `#${colorRandom}`;
        setColor(result);
    }
    
    const copiarColor = () => {
        setCargando(true)

        navigator.clipboard.writeText(color)

        setTimeout(() => {
            setCargando(false)
        }, 2000)
    }

  return (
    <div className='container' style={{ background: `${color}`}}>
        <div className='box'>
            <h1 className='color'>{color}</h1>
            <div className='btn'>
                <button onClick={generarColor}>Generar color</button>
                <button onClick={copiarColor}>{cargando ? '✔' : 'Copiar'}</button>
            </div>
        </div>
    </div>
  )
}

export default GeneradorColor