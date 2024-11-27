'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import Image from 'next/image';
import SideModuleLeft from '@/components/side_module_left';
import SideModuleRight from '@/components/side_module_right';
//!Imagenes
import logo from './public/images/logo.png';
import logoblack from './public/images/logoblack.png';
import vineyard from './public/images/vineyard.jpg';
import riego from './public/images/eficienciawidget.png';
import suelo from './public/images/iconsuelo.png';
import clima from './public/images/iconclima.png';
import pozo from './public/images/iconfuente.png';
import planta from './public/images/iconplanta.png';
import analisis from './public/images/dataanalitics.png';
import NosotrosSection from '@/components/nosotros_section'
import { motion } from 'framer-motion';
import BottomSection from '@/components/bottom_section';

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 2 } },
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isStatsVisible, setIsStatsVisible] = useState(false)
  const modulosRef = useRef<HTMLElement>(null)
  const contactoRef = useRef<HTMLElement>(null)
  const statsRef = useRef<HTMLElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsStatsVisible(true)
        }
      },
      { threshold: 1 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current)
      }
    }
  }, [])

  

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header fijo */}
      <header className="fixed top-0 left-0 right-0 bg-primary z-50 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Image
              src={logo.src}
              alt="Olive+"
              width={130}
              height={80} />
            <nav className="hidden md:flex space-x-4">
              <Button className='text-white' variant="ghost" onClick={() => scrollToSection(modulosRef)}>Módulos</Button>
              <Button className='text-white' variant="ghost" onClick={() => scrollToSection(contactoRef)}>Contacto</Button>
              <a href="/tutoriales"><Button className='text-white' variant="ghost">Tutoriales</Button></a>
              <Button className='text-white bg-clear border-clear' variant="outline" onClick={() => scrollToSection(contactoRef)}>Ingresar a Olive+</Button>
              <Button variant="outline" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                Menu
              </Button>
            </nav>

          </div>
        </div>
      </header>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40">
          <div className="bg-white p-4 mt-16">
            <Button variant="ghost" className="w-full text-left text-white" onClick={() => scrollToSection(modulosRef)}>Módulosasdasd</Button>
            <Button variant="ghost" className="w-full text-left text-white" onClick={() => scrollToSection(contactoRef)}>Contactos</Button>
          </div>
        </div>
      )}

      {/* Hero con video y logo */}
      <section
  className="relative pt-16 h-screen overflow-hidden"
  id='section-welcome'
>
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInVariants}
  >
    {/* Contenedor del video */}
    <div className="absolute inset-0 w-full md:w-1/2 md:left-1/2 h-full">
      <div className="w-full h-full overflow-hidden relative">
        {/* Contenedor superpuesto para el efecto de glassmorphism */}
        <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-blur-0 border border-white/20 rounded-lg z-10"></div>
        {/* Video de YouTube */}
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/BgqxLwEI39E?si=mriAys8yUvuIdt9K&autoplay=1&loop=1&mute=1&controls=0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Video de fondo de Olive+"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100%',
            height: '100%',
            transform: 'translate(-50%, -50%) scale(2)',
            transformOrigin: 'center center',
          }}
        />
      </div>
    </div>
    {/* Overlay para cubrir todo y prevenir clics en el video */}
    <div className="absolute inset-0 bg-black bg-opacity-20 md:bg-opacity-0"></div>
    {/* Fondo sólido para el lado izquierdo en dispositivos medianos y grandes */}
    <div className="absolute inset-0 bg-slate-100 md:w-1/2 hidden md:block"></div>
    {/* Contenido (texto) */}
    <div className="absolute z-10 flex items-center justify-start h-full w-full">
      <div className="px-4 sm:px-8 md:px-12 lg:px-16 w-full md:w-3/4">
        <h1 className="text-blk text-shadow-outline text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-bold">La manera más fácil de </h1>
        <h1 className="text-blk text-shadow-outline text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-bold">gestionar tu riego,</h1>
        <h1 className="text-blk text-shadow-outline text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-bold">ahora a tu alcance</h1>
        <Image
          className='mt-4'
          src={logoblack.src}
          alt="Olive+"
          width={450}
          height={100} />
      </div>
    </div>
  </motion.div>
</section>

<motion.section
  className="py-16 bg-white text-center h-screen flex items-center"
  id='bienvenidaText'
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeInVariants}
>
  <div className="container min-w-full px-0 flex flex-col md:flex-row items-center h-full">
    <div className="w-full md:w-1/2 h-1/2 md:h-full relative">
      <Image
        src={vineyard.src}
        alt="Monitoreo de Cultivo"
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
    </div>
    <div className="w-full md:w-1/2 p-8">
      <h2 className="text-4xl font-bold mb-4">Bienvenido al Centro de Extensión Digital de Olive+</h2>
      <p className="text-2xl text-gray-700 mb-4">
        Innovación y aprendizaje para un futuro sostenible.
      </p>
      <p className="text-lg text-gray-600">
        Un espacio creado para transformar la agricultura a través de la innovación, la educación y el acceso a herramientas tecnológicas. Aquí, conectamos a agricultores, expertos y entusiastas del sector con conocimientos prácticos, cursos interactivos y recursos digitales diseñados para impulsar prácticas sostenibles y maximizar la eficiencia en el uso del agua. Nuestro objetivo es ser el puente entre la tecnología de punta y un futuro agrícola más responsable y productivo. ¡Explora, aprende y crece con Olive+! 🌱🚀
      </p>
    </div>
  </div>
</motion.section>
<NosotrosSection/>

<motion.section
  className="py-16 bg-gray-100"
>
  <div className="container mx-auto px-4">
    <SideModuleLeft
      title="Módulo Riego"
      description="Podrás revisar los volúmenes aplicados por sector, porcentaje de desviación de los caudales, alarmas, etc. y comparar con temporadas anteriores."
      moduleImageSrc={riego.src}
      backgroundImageSrc={vineyard.src}
    />
    <SideModuleRight
      title="Módulo Pozo"
      description="Monitorea el caudal, nivel freático, reportes DGA, etc."
      moduleImageSrc={pozo.src}
      backgroundImageSrc={vineyard.src}
    />
    <SideModuleLeft
      title="Módulo Suelo"
      description="onitorea la humedad del suelo según los riegos aplicados y gestiona los umbrales de toma de decisión según la humedad."
      moduleImageSrc={suelo.src}
      backgroundImageSrc={vineyard.src}
    />
    <SideModuleRight
      title="Módulo Clima"
      description="Monitorea las variables climáticas"
      moduleImageSrc={clima.src}
      backgroundImageSrc={vineyard.src}
    />
    <SideModuleLeft
      title="Módulo Planta"
      description="Monitorea sensores conectados directo en los árboles y registra manualmente el potencial hídrico."
      moduleImageSrc={planta.src}
      backgroundImageSrc={vineyard.src}
    />
    <SideModuleRight
      title="Módulo Análisis de datos"
      description="Explora información útil a través de paneles personalizados, especialmente diseñados para ti."
      moduleImageSrc={analisis.src}
      backgroundImageSrc={vineyard.src}
    />
  </div>
</motion.section>
<motion.section
  className="py-2 bg-gray-100 w-100 h-screen flex items-start"
  id='tutorialesGuias'
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeInVariants}
>
  <div className="container min-w-full flex md:flex-row items-center items h-full">
    <div className="w-full md:w-1/2 p-8 text-justify">
      <h3 className="text-3xl font-bold mb-4">Tutoriales y Guías</h3>
      <p className="text-lg text-gray-700 mb-4">
        En Olive+, ofrecemos una sección de tutoriales y guías muy completa para que puedas utilizar nuestra plataforma en su máximo potencial. Aquí encontrarás:
      </p>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
        <li>Guías paso a paso para configurar y utilizar Olive+.</li>
        <li>Videos tutoriales que te mostrarán cómo aprovechar todas las funcionalidades.</li>
        <li>Webinars en vivo y grabados para aprender de expertos en la materia.</li>
      </ul>
      <p className="text-lg text-gray-700 mb-4">
        Nuestro objetivo es asegurarnos de que tengas todas las herramientas y conocimientos necesarios para optimizar el riego de tus cultivos y mejorar la productividad de manera sostenible.
      </p>
      <a href="/tutoriales" className='text-white'>
        <Button>Ir a Tutoriales</Button>
      </a>
    </div>
    <div className="w-full md:w-1/2 h-full relative">
      <Image
        src={vineyard.src}
        alt="Monitoreo de Cultivo"
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
        style={{ margin: 0 }}
      />
    </div>
  </div>
</motion.section>


<BottomSection/>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Olive+. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}