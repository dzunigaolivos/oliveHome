"use client";
import { useState } from 'react'
import { ChevronDown, ChevronUp, Play, Settings, Droplet, Sprout, Cloud } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { CardContent } from "@/components/ui/card"
import Image from 'next/image'
import logo from '../../public/images/logo.png';
import iconfuente from '../../public/images/iconfuente.png';
import iconclima from '../../public/images/iconclima.png';
import iconsuelo from '../../public/images/iconsuelo.png';
import iconlog from '../../public/images/iconlog.png';
import iconconfig from '../../public/images/iconconfig.png';
import iconplanta from '../../public/images/iconplanta.png';
import dataanalitics from '../../public/images/dataanalitics.png';
import iconriego from '../../public/images/iconriego.png';
import vineyard from '../../public/images/vineyardback.jpg';

interface VideoData {
  id: number;
  youtubeId: string;
  title: string;
}

interface TutorialData {
  id: number;
  name: string;
  color: string;
  icon: React.ElementType;
  description: string;
  fontcolor?: string;
  iconRoute: string;
  videos: VideoData[];
}

const tutorialData: TutorialData[] = [
  {
    id: 1,
    name: 'General',
    color: 'bg-primary',
    icon: Settings,
    iconRoute: iconlog.src,
    fontcolor: 'text-white',
    description: 'Aprende a configurar Olive+ para empezar a usarlo.',
    videos: [
    ],
  },
  {
    id: 2,
    name: 'Pozo',
    color: 'bg-domain',
    fontcolor: 'text-white',
    iconRoute: iconfuente.src,
    icon: Droplet,
    description: 'Gestiona eficientemente los recursos hídricos de tu pozo.',
    videos: [
    
    ],
  },
  {
    id: 3,
    name: 'Riego',
    color: 'bg-caudal',
    fontcolor: 'text-white',
    iconRoute: iconriego.src,
    icon: Cloud,
    description: 'Utiliza datos climáticos para tomar decisiones informadas.',
    videos: [
     
    ],
  },
  {
    id: 4,
    name: 'Suelo',
    color: 'bg-mesure',
    fontcolor: 'text-white',
    icon: Sprout,
    iconRoute: iconsuelo.src,
    description: 'Optimiza el manejo del suelo para un mejor rendimiento de cultivos.',
    videos: [
     
    ],
  },
  {
    id: 5,
    name: 'Clima',
    color: 'bg-olive2',
    fontcolor: 'text-white',
    iconRoute: iconclima.src,
    icon: Cloud,
    description: 'Utiliza datos climáticos para tomar decisiones informadas.',
    videos: [
     
    ],
  },
  {
    id: 6,
    name: 'Planta',
    color: 'bg-clear',
    fontcolor: 'text-white',
    iconRoute: iconplanta.src,
    icon: Cloud,
    description: 'Optimiza tu riego con informacion directa de tus plantas',
    videos: [
      { id: 11, youtubeId: 'K_meOXI2uu4', title: 'Aspectos generales Modulo Planta' },
      { id: 12, youtubeId: 'K_meOXI2uu4', title: 'Aspectos generales Modulo Planta' },
    ],
  },
  {
    id: 7,
    name: 'Análisis de datos',
    color: 'bg-device',
    fontcolor: 'text-white',
    iconRoute: dataanalitics.src,
    icon: Cloud,
    description: 'Utiliza datos climáticos para tomar decisiones informadas.',
    videos: [
      { id: 13, youtubeId: 'K_meOXI2uu4', title: 'Aspectos generales Modulo Planta' },
      
    ],
  },
  {
    id: 8,
    name: 'Configuración',
    color: 'bg-primary',
    fontcolor: 'text-white',
    iconRoute: iconconfig.src,
    icon: Cloud,
    description: 'Utiliza datos climáticos para tomar decisiones informadas.',
    videos: [
      
    ],
  },
]

export default function TutorialPage() {
  const [expandedModule, setExpandedModule] = useState<number | null>(null)
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null)

  const toggleModule = (moduleId: number) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId)
    setSelectedVideo(null)
  }

  const toggleVideo = (video: VideoData) => {
    setSelectedVideo(selectedVideo && selectedVideo.id === video.id ? null : video)
  }

  return (
    <div className="min-h-screen bg-[#f8f9fa] " >
      <div className="relative bg-[#084d6e] text-white overflow-hidden" style={{ height: '350px' }}>
        <header className="relative z-20">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center">
              <Image
                src={logo.src}
                alt="Olive+"
                width={130}
                height={80} />
            </div>
            <nav className="hidden md:flex space-x-4">
              <a href="./"><Button className='text-white' variant="ghost">Inicio</Button></a>
              <a href="/tutoriales"><Button className='text-white' variant="ghost">Tutoriales</Button></a>
              <Button className='text-white bg-clear border-clear' variant="outline">Ingresar a Olive+</Button>
              <Button variant="outline" className="md:hidden">
                Menu
              </Button>
            </nav>
          </div>
        </header>
        <svg className="absolute bottom-0 left-0 w-full h-[300px] z-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#9FCECE" fillOpacity="1" d="M0,224L60,229.3C120,235,240,245,360,234.7C480,224,600,192,720,181.3C840,171,960,181,1080,181.3C1200,181,1320,171,1380,165.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
        <svg className="absolute bottom-0 left-0 w-full h-[300px] z-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#f8f9fa" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <main className="w-screen relative z-30 -mt-64">
        <div 
          className="relative rounded mb-8 w-full h-[300px] bg-white shadow-lg flex flex-col justify-end items-start overflow-hidden px-4 md:px-0 container mx-auto" 
          style={{ backgroundImage: `url('${vineyard.src}')`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100vw' }}
        >
          {/* Superposición con degradado */}
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-1"></div>

          {/* Contenido de la tarjeta */}
          <CardContent className="relative z-10 p-6">
            <h2 className="text-5xl font-semibold mb-4 text-white">Bienvenido a los Tutoriales de Olive+</h2>
            <p className="text-white">Explora nuestros módulos de aprendizaje para sacar el máximo provecho de Olive+ en la gestión de tu sistema de riego.</p>
          </CardContent>
        </div>

        <div id='tutorials' className='px-4 md:px-0 container mx-auto'>
          {tutorialData.filter(module => module.videos.length > 0).map((module: TutorialData) => (
            <div key={module.id} className="mb-4 w-full">
              <div className="cursor-pointer flex justify-between items-center" onClick={() => toggleModule(module.id)}>
                <div className="flex items-center">
                  <img
                    src={module.iconRoute}
                    alt="icon"
                    className="h-16 w-16 mr-2"
                    width={200} height={200} />
                  <span className={`text-xl text-${module.color}`}>{module.name}</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-blk"
                >
                  {expandedModule === module.id ? (
                    <ChevronUp className="h-6 w-6" />
                  ) : (
                    <ChevronDown className="h-6 w-6" />
                  )}
                </Button>
              </div>
              <hr className="border-blk my-2" />
              {expandedModule === module.id && (
                <div className="bg-transparent pb-10">
                  <p className="text-sm text-blk mb-4">{module.description}</p>
                  <hr className="border-blk mb-4" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {module.videos.map((video) => (
                      <div key={video.id} className="aspect-w-16 aspect-h-9" style={{ height: '200px' }}>
                        <iframe
                          src={`https://www.youtube.com/embed/${video.youtubeId}`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        ></iframe>
                        <p className="text-justify text-blk font-bold mt-2">{video.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}