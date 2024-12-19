import { useState, useEffect } from 'react';
import Estrategias from './estrategias';
import OliveFeatures from './olive_features';
import quehacemos1 from './../app/public/images/quehacemos1.jpg';
import quehacemos2 from './../app/public/images/quehacemos2.jpg';

const NosotrosSection = () => {
  const [activeSection, setActiveSection] = useState('queHacemos');
  const [backgroundImage, setBackgroundImage] = useState(quehacemos1.src);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
    const timeout = setTimeout(() => {
      setBackgroundImage(getBackgroundImage());
      setFade(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, [activeSection]);

  const getBackgroundImage = () => {
    switch (activeSection) {
      case 'queHacemos':
        return quehacemos1.src;
      case 'estrategiasRiego':
        return quehacemos2.src;
      case 'queHaceOlive':
        return quehacemos1.src;
      default:
        return quehacemos1.src;
    }
  };

  return (
    <section
      id='nosotrosSection'
      className={`py-8 my-2 h-[75vh] relative transition-opacity duration-500 ${fade ? 'opacity-90' : 'opacity-100'}`}
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto flex h-full relative z-10">
        <div className="w-full bg-white bg-opacity-10 backdrop-blur-md border border-white/20 rounded-lg p-8 flex">
          <div className="w-1/5 flex flex-col space-y-2 justify-center items-center">
            <p
              className={`cursor-pointer transition-transform duration-300 ${activeSection === 'queHacemos' ? 'text-blue-500 text-xl' : 'text-whit text-lg'}`}
              onClick={() => setActiveSection('queHacemos')}
            >
              Qué Hacemos
            </p>
            <p className="text-gray-400">•</p>
            <p className="text-gray-400">•</p>
            <p
              className={`cursor-pointer transition-transform duration-300 ${activeSection === 'estrategiasRiego' ? 'text-blue-500 text-xl' : 'text-whit text-lg'}`}
              onClick={() => setActiveSection('estrategiasRiego')}
            >
              Estrategias de Riego
            </p>
            <p className="text-gray-400">•</p>
            <p className="text-gray-400">•</p>
            <p
              className={`cursor-pointer transition-transform duration-300 ${activeSection === 'queHaceOlive' ? 'text-blue-500 text-xl' : 'text-whit text-lg'}`}
              onClick={() => setActiveSection('queHaceOlive')}
            >
              Qué Hace Olive
            </p>
          </div>
          <div className="w-4/5 pl-4 flex items-center">
            <div className="w-full">
              {activeSection === 'queHacemos' && (
                <div>
                  <h3 className="text-3xl text-whit font-bold mb-4">Qué Hacemos</h3>
                  <p className="text-lg text-whit">
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