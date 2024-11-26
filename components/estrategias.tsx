import { useState } from 'react';

const Estrategias = () => {
  const [activeExplanation, setActiveExplanation] = useState<number>(1);

  return (
    <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Estrategias de Riego Compatibles</h2>
        <div className="flex justify-center mb-8 space-x-4">
          <div
            className={`cursor-pointer w-[15%] h-32 flex items-center justify-center relative ${activeExplanation === 1 ? 'bg-red-100 border-dashed border-4 border-red-500' : 'bg-gray-200'}`}
            onClick={() => setActiveExplanation(1)}
          >
            <p className="text-center">Calicatas</p>
            {activeExplanation === 1 && <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-red-500"></div>}
          </div>
          <div
            className={`cursor-pointer w-[15%] h-32 flex items-center justify-center relative ${activeExplanation === 2 ? 'bg-green-100 border-dashed border-4 border-red-500' : 'bg-gray-200'}`}
            onClick={() => setActiveExplanation(2)}
          >
            <p className="text-center">Demanda/ETc</p>
            {activeExplanation === 2 && <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-red-500"></div>}
          </div>
          <div
            className={`cursor-pointer w-[15%] h-32 flex items-center justify-center relative ${activeExplanation === 3 ? 'bg-blue-100 border-dashed border-4 border-red-500' : 'bg-gray-200'}`}
            onClick={() => setActiveExplanation(3)}
          >
            <p className="text-center">Balance Hídrico</p>
            {activeExplanation === 3 && <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-red-500"></div>}
          </div>
          <div
            className={`cursor-pointer w-[15%] h-32 flex items-center justify-center relative ${activeExplanation === 4 ? 'bg-yellow-100 border-dashed border-4 border-red-500' : 'bg-gray-200'}`}
            onClick={() => setActiveExplanation(4)}
          >
            <p className="text-center">Umbral Fisiológico</p>
            {activeExplanation === 4 && <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-red-500"></div>}
          </div>
          <div
            className={`cursor-pointer w-[15%] h-32 flex items-center justify-center relative ${activeExplanation === 5 ? 'bg-purple-100 border-dashed border-4 border-red-500' : 'bg-gray-200'}`}
            onClick={() => setActiveExplanation(5)}
          >
            <p className="text-center">Riego Deficitario Controlado</p>
            {activeExplanation === 5 && <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-red-500"></div>}
          </div>
        </div>
        {activeExplanation === 1 && (
          <div className="bg-red-100 p-4 rounded shadow-md relative">
            <p className="text-lg"><strong>Calicatas:</strong> La estrategia de riego por calicatas implica la excavación de pequeñas zanjas en el suelo para observar el perfil del suelo y determinar la humedad disponible para las plantas. Esta técnica permite ajustar el riego según las necesidades reales del cultivo.</p>
          </div>
        )}
        {activeExplanation === 2 && (
          <div className="bg-green-100 p-4 rounded shadow-md relative">
            <p className="text-lg"><strong>Demanda/ETc:</strong> La estrategia de riego por demanda/ETc se basa en la evapotranspiración del cultivo (ETc), que es la cantidad de agua que el cultivo necesita para crecer de manera óptima. Esta técnica ajusta el riego según las condiciones climáticas y las necesidades del cultivo.</p>
          </div>
        )}
        {activeExplanation === 3 && (
          <div className="bg-blue-100 p-4 rounded shadow-md relative">
            <p className="text-lg"><strong>Balance Hídrico:</strong> La estrategia de riego por balance hídrico implica el seguimiento del agua disponible en el suelo y la cantidad de agua que las plantas utilizan. Esta técnica permite ajustar el riego para mantener un equilibrio adecuado entre el suministro de agua y la demanda del cultivo.</p>
          </div>
        )}
        {activeExplanation === 4 && (
          <div className="bg-yellow-100 p-4 rounded shadow-md relative">
            <p className="text-lg"><strong>Umbral Fisiológico:</strong> La estrategia de riego por umbral fisiológico se basa en identificar los momentos críticos en el desarrollo del cultivo cuando el estrés hídrico puede afectar significativamente el rendimiento. Esta técnica ajusta el riego para evitar el estrés hídrico en estos momentos clave.</p>
          </div>
        )}
        {activeExplanation === 5 && (
          <div className="bg-purple-100 p-4 rounded shadow-md relative">
            <p className="text-lg"><strong>Riego Deficitario Controlado:</strong> La estrategia de riego deficitario controlado implica la aplicación de cantidades de agua menores a las necesidades óptimas del cultivo en ciertos periodos de su desarrollo. Esta técnica busca mejorar la eficiencia del uso del agua y puede aumentar la calidad del producto final.</p>
          </div>
        )}
      </div>
  );
};

export default Estrategias;
