import { Check } from 'lucide-react'

export default function OliveFeatures() {
  const features = [
    "Integra diferentes tecnologías para visualizar información de riego en una misma plataforma.",
    "Transforma datos en indicadores relevantes para mejorar la gestión del riego.",
    "Monitorea y analiza variables de riego: planta, suelo, clima y pozo.",
    "Permite planificar el riego de forma sencilla.",
    "Posibilita la carga manual de datos para transformarlos en gráficos o indicadores.",
    "Vista de mapas GIS."
  ]

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg ">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">¿Qué hace OLIVE+?</h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-400" />
            <ul className="space-y-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-blue-400 bg-white flex items-center justify-center mr-4 z-10">
                    <Check className="w-5 h-5 text-blue-600" />
                  </div>
                  <p className="text-gray-700">{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
    
  )
}