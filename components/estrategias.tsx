import { useState } from 'react';
import Ovalo from './ovalComponent';

const Estrategias = () => {
  const [activeExplanation, setActiveExplanation] = useState<number>(1);

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl text-whit font-bold text-center mb-8">Estrategias de Riego Compatibles</h2>
      <div className="flex justify-center mb-8 space-x-4">
        <div
          className={`cursor-pointer w-[15%] h-80 rounded-full flex items-center justify-center relative overflow-hidden`}
          onClick={() => setActiveExplanation(1)}
        >
          <Ovalo porcentaje={100} active={activeExplanation === 1} texto="Calicatas" />
        </div>
        <div
          className={`cursor-pointer w-[15%] h-80 rounded-full flex items-center justify-center relative overflow-hidden`}
          onClick={() => setActiveExplanation(2)}
        >
          <Ovalo porcentaje={80} active={activeExplanation === 2} texto="Demanda/ETc" />
        </div>
        <div
          className={`cursor-pointer w-[15%] h-80 rounded-full flex items-center justify-center relative overflow-hidden`}
          onClick={() => setActiveExplanation(3)}
        >
          <Ovalo porcentaje={50} active={activeExplanation === 3} texto="Balance Hídrico" />
        </div>
        <div
          className={`cursor-pointer w-[15%] h-80 rounded-full flex items-center justify-center relative overflow-hidden`}
          onClick={() => setActiveExplanation(4)}
        >
          <Ovalo porcentaje={30} active={activeExplanation === 4} texto="Umbral Fisiológico" />
        </div>
        <div
          className={`cursor-pointer w-[15%] h-80 rounded-full flex items-center justify-center relative overflow-hidden`}
          onClick={() => setActiveExplanation(5)}
        >
          <Ovalo porcentaje={20} active={activeExplanation === 5} texto="Riego Deficitario Controlado" />
        </div>
      </div>
      {activeExplanation === 1 && (
        <div className="bg-red-100 p-4 rounded shadow-md relative">
          <p className="text-lg"><strong>Calicatas:</strong> La estrategia de riego mediante calicatas consiste en cavar pozos para evaluar manualmente la humedad del suelo y decidir la cantidad de agua a aplicar. Este método, aunque simple, tiende a sobreestimar las necesidades hídricas, resultando en un uso excesivo de agua. Por ello, es menos óptimo en comparación con técnicas más modernas y precisas, que permiten un manejo más eficiente del recurso hídrico.</p>
        </div>
      )}
      {activeExplanation === 2 && (
        <div className="bg-green-100 p-4 rounded shadow-md relative">
          <p className="text-lg"><strong>Demanda/ETc:</strong> La estrategia de riego basada en la demanda o Evapotranspiración del Cultivo (ETc) utiliza cálculos precisos para determinar la cantidad de agua que el cultivo realmente necesita. Este método, al considerar factores como el clima y el tipo de cultivo, permite optimizar el riego, reduciendo el desperdicio de agua y mejorando la eficiencia hídrica.</p>
        </div>
      )}
      {activeExplanation === 3 && (
        <div className="bg-blue-100 p-4 rounded shadow-md relative">
          <p className="text-lg"><strong>Balance Hídrico:</strong> La estrategia de riego basada en el balance hídrico consiste en calcular la diferencia entre el agua disponible en el suelo y la demanda del cultivo. Este método permite ajustar las aplicaciones de riego para reponer únicamente el agua consumida, optimizando el uso del recurso hídrico y evitando tanto el déficit como el exceso de riego.</p>
        </div>
      )}
      {activeExplanation === 4 && (
        <div className="bg-yellow-100 p-4 rounded shadow-md relative">
          <p className="text-lg"><strong>Umbral Fisiológico:</strong> La estrategia de riego por umbral fisiológico se basa en monitorear indicadores clave del estado del cultivo, como potencial hídrico o conductancia estomática, para determinar cuándo regar. Esto permite aplicar agua solo cuando el cultivo muestra signos de estrés hídrico, optimizando el uso del agua y manteniendo el rendimiento.</p>
        </div>
      )}
      {activeExplanation === 5 && (
        <div className="bg-purple-100 p-4 rounded shadow-md relative">
          <p className="text-lg"><strong>Riego Deficitario Controlado:</strong> El riego deficitario controlado consiste en suministrar agua por debajo de las necesidades hídricas completas del cultivo durante etapas específicas de su desarrollo. Esta estrategia busca reducir el consumo de agua sin afectar significativamente el rendimiento, optimizando el uso del recurso en zonas con disponibilidad limitada.</p>
        </div>
      )}
    </div>
  );
};

export default Estrategias;
