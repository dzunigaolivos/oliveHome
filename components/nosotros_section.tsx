import { useState } from 'react';
import Estrategias from './estrategias';
import OliveFeatures from './olive_features';

const NosotrosSection = () => {
  const [activeSection, setActiveSection] = useState('queHacemos');

  return (
    <section id='nosotrosSection' className="py-8 h-screen">
      <div className="container mx-auto flex h-full">
        <div className="w-full bg-white bg-opacity-10 backdrop-blur-md border border-white/20 rounded-lg p-8 flex">
          <div className="w-1/5 flex flex-col space-y-2 justify-center items-center">
            <p
              className={`cursor-pointer transition-transform duration-300 ${activeSection === 'queHacemos' ? 'text-blue-500 text-xl' : 'text-gray-700 text-lg'}`}
              onClick={() => setActiveSection('queHacemos')}
            >
              Qué Hacemos
            </p>
            <p className="text-gray-400">•</p>
            <p className="text-gray-400">•</p>
            <p
              className={`cursor-pointer transition-transform duration-300 ${activeSection === 'estrategiasRiego' ? 'text-blue-500 text-xl' : 'text-gray-700 text-lg'}`}
              onClick={() => setActiveSection('estrategiasRiego')}
            >
              Estrategias de Riego
            </p>
            <p className="text-gray-400">•</p>
            <p className="text-gray-400">•</p>
            <p
              className={`cursor-pointer transition-transform duration-300 ${activeSection === 'queHaceOlive' ? 'text-blue-500 text-xl' : 'text-gray-700 text-lg'}`}
              onClick={() => setActiveSection('queHaceOlive')}
            >
              Qué Hace Olive
            </p>
          </div>
          <div className="w-4/5 pl-4 flex items-center">
            <div className="w-full">
              {activeSection === 'queHacemos' && (
                <div>
                  <h3 className="text-3xl font-bold mb-4">Qué Hacemos</h3>
                  <p className="text-lg text-gray-700">
                  En Olive+, nos esforzamos por revolucionar la agricultura mediante tecnología innovadora y sostenible. Nuestra visión es crear un futuro donde cada gota de agua se utilice de manera eficiente, maximizando la producción agrícola mientras minimizamos el impacto ambiental.
                  </p>
                </div>
              )}

              {activeSection === 'estrategiasRiego' && (
                <div className="w-full">
                  <Estrategias />
                </div>
              )}

              {activeSection === 'queHaceOlive' && (
                <div className="w-full">
                  <OliveFeatures />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NosotrosSection;