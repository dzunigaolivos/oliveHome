import React from 'react';
import './ovalComponent.css'; // Importar el archivo CSS para la animación

interface OvaloProps {
  porcentaje: number;
  active: boolean;
  texto: string;
}

const Ovalo: React.FC<OvaloProps> = ({ porcentaje, active, texto }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center w-full h-full rounded-full overflow-hidden relative ${active ? 'bg-blue-100 border-dashed border-4 border-blue-500' : 'bg-gray-200'}`}
    >
      <div className={`wave-background ${!active && 'bg-gray-400'}`} style={{ height: `${porcentaje * 2}%`, bottom: 0 }}>
        <div className="bubble bubble1"></div>
        <div className="bubble bubble2"></div>
        <div className="bubble bubble3"></div>
        <div className="bubble bubble4"></div>
        <div className="bubble bubble5"></div>
      </div>
      <p className="text-center text-white z-10 text-with-border">{texto}</p>
      {active && <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-blue-500"></div>}
    </div>
  );
};

export default Ovalo;