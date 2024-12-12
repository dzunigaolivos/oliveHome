'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import Image from 'next/image';
import SideModuleLeft from '@/components/side_module_left';
import SideModuleRight from '@/components/side_module_right';
//!Imagenes
import logo from './public/images/logo.png';
import vineyard from './public/images/vineyard.jpg';
import riego from './public/images/eficienciawidget.png';
import suelo from './public/images/iconsuelo.png';
import clima from './public/images/iconclima.png';
import pozo from './public/images/iconfuente.png';
import planta from './public/images/iconplanta.png';
import fondocentro from './public/images/fondocentro.jpg';
import fondotuto from './public/images/fondotuto.jpg';
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
  //const [isStatsVisible, setIsStatsVisible] = useState(false)
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
          //setIsStatsVisible(true)
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
    <div className="absolute inset-0 w-full   h-full">
      <div className="w-full h-full overflow-hidden relative">
        {/* Contenedor superpuesto para el efecto de glassmorphism */}
        
        {/* Video de YouTube */}
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/yVrcQaSgjMo-j0?si=mriAys8yUvuIdt9K&autoplay=1&loop=1&mute=1&controls=0&playlist=V9Bb1fyh-j0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Video de fondo de Olive+"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100%',
            height: '100%',
            transform: 'translate(-50%, -50%) scale(1.8)',
            transformOrigin: 'center center',
          }}
        />
      </div>
    </div>
    {/* Overlay para cubrir todo y prevenir clics en el video */}
    <div className="absolute inset-0 bg-black bg-opacity-20 md:bg-opacity-0"></div>
    {/* Fondo sólido para el lado izquierdo en dispositivos medianos y grandes */}
    
    {/* Contenido (texto) */}
    <div className="absolute z-10 flex items-center justify-start h-full w-full">
      <div className="px-4 sm:px-8 md:px-12 lg:px-16 w-full md:w-3/4">
        <h1 className="text-whit text-shadow-outline text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-bold">La manera más fácil de </h1>
        <h1 className="text-whit text-shadow-outline text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-bold">gestionar tu riego,</h1>
        <h1 className="text-whit text-shadow-outline text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-bold">ahora a tu alcance</h1>
        <Image
          className='mt-4'
          src={logo.src}
          alt="Olive+"
          width={450}
          height={100} />
      </div>
    </div>
  </motion.div>
</section>

<motion.section
  className="pt-8 bg-white text-center h-screen flex items-center relative"
  id='bienvenidaText'
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeInVariants}
>
  <div className="absolute inset-0 w-full h-full">
    <Image
      src={fondocentro.src}
      alt="Monitoreo de Cultivo"
      layout="fill"
      objectFit="cover"
      className="rounded-lg"
    />
  </div>
  <div className="container min-w-full px-0 flex flex-col md:flex-row items-center h-full relative z-10">
    <div className="w-full md:w-1/2 p-8  bg-opacity-30 rounded-lg ml-auto mr-4 md:mr-8 lg:mr-16 backdrop-filter backdrop-blur-lg  ">
      <h2 className="text-6xl text-whit font-bold mb-6">Bienvenido al Centro de Extensión Digital de Olive+</h2>
      <p className="text-3xl text-whit mb-6">
        Innovación y aprendizaje para un futuro sostenible.
      </p>
      <p className="text-2xl text-whit">
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
      description="Podrás revisar los volúmenes aplicados por sector, analizar el porcentaje de desviación de los caudales planificados respecto a los reales, monitorear las alarmas en tiempo real para identificar desviaciones críticas, y realizar comparaciones detalladas con datos históricos de temporadas anteriores. Esto te permitirá obtener una visión integral para optimizar el uso de los recursos hídricos y tomar decisiones informadas basadas en patrones y tendencias identificadas."
      moduleImageSrc={riego.src}
      backgroundImageSrc={vineyard.src}
    />
    <SideModuleRight
      title="Módulo Pozo"
      description="Monitorea en tiempo real el caudal y el nivel freático de tus pozos, con herramientas avanzadas para la generación de reportes automáticos, incluyendo los requeridos por la DGA. Este módulo te permite realizar un seguimiento eficiente de los parámetros críticos, identificar posibles anomalías y garantizar el cumplimiento normativo, facilitando una gestión hídrica más precisa y sostenible"
      moduleImageSrc={pozo.src}
      backgroundImageSrc={vineyard.src}
    />
    <SideModuleLeft
      title="Módulo Suelo"
      description="Monitorea la humedad del suelo en tiempo real en función de los riegos aplicados, permitiéndote evaluar la eficacia del riego y la disponibilidad hídrica para los cultivos. Además, este módulo gestiona umbrales personalizados de toma de decisiones, brindándote alertas oportunas y recomendaciones para ajustar las estrategias de riego según los niveles de humedad detectados. Optimiza el uso del agua y mejora la productividad agrícola de manera sostenible."
      moduleImageSrc={suelo.src}
      backgroundImageSrc={vineyard.src}
    />
    <SideModuleRight
      title="Módulo Clima"
      description="Monitorea en tiempo real las principales variables climáticas, como temperatura, humedad, velocidad y dirección del viento, radiación solar y precipitaciones. Este módulo proporciona información clave para anticipar condiciones meteorológicas, optimizar las decisiones agrícolas y ajustar las estrategias de manejo según los cambios climáticos, maximizando la eficiencia de tus recursos."
      moduleImageSrc={clima.src}
      backgroundImageSrc={vineyard.src}
    />
    <SideModuleLeft
      title="Módulo Planta"
      description="Monitorea sensores instalados directamente en los árboles para obtener información precisa y en tiempo real sobre su estado hídrico y fisiológico. Además, permite registrar de forma manual el potencial hídrico de las plantas, integrando estos datos en análisis detallados que ayudan a tomar decisiones informadas sobre el manejo de riego y la salud de los cultivos. Este módulo te ofrece un enfoque avanzado para maximizar la eficiencia y productividad de tus plantaciones."
      moduleImageSrc={planta.src}
      backgroundImageSrc={vineyard.src}
    />
    <SideModuleRight
      title="Módulo Análisis de datos"
      description="Explora información clave a través de paneles personalizados, diseñados específicamente para adaptarse a tus necesidades. Este módulo te permite visualizar tendencias, identificar patrones y generar reportes detallados para una mejor toma de decisiones. Integra datos de distintos módulos, ofreciendo una perspectiva global y precisa que facilita la gestión eficiente de tus recursos y estrategias."
      moduleImageSrc={analisis.src}
      backgroundImageSrc={vineyard.src}
    />
  </div>
</motion.section>
<motion.section
  className="py-2 bg-gray-100 w-100 h-screen flex items-start relative"
  id='tutorialesGuias'
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeInVariants}
>
  <div className="absolute inset-0 w-full h-full">
    <Image
      src={fondotuto.src}
      alt="Monitoreo de Cultivo"
      layout="fill"
      objectFit="cover"
      className="rounded-lg"
    />
  </div>
  <div className="container min-w-full flex md:flex-row items-center h-full relative z-10 p-10">
    <div className="w-full md:w-1/2 p-8 text-justify  bg-opacity-30 rounded-lg backdrop-filter backdrop-blur-lg">
      <h3 className="text-6xl text-whit font-bold mb-4">Tutoriales y Guías</h3>
      <p className="text-2xl text-whit mb-4">
        En Olive+, ofrecemos una sección de tutoriales y guías muy completa para que puedas utilizar nuestra plataforma en su máximo potencial. Aquí encontrarás:
      </p>
      <ul className="list-disc list-inside text-xl text-whit mb-4">
        <li>Guías paso a paso para configurar y utilizar Olive+.</li>
        <li>Videos tutoriales que te mostrarán cómo aprovechar todas las funcionalidades.</li>
        <li>Webinars en vivo y grabados para aprender de expertos en la materia.</li>
      </ul>
      <p className="text-xl text-whit mb-4">
        Nuestro objetivo es asegurarnos de que tengas todas las herramientas y conocimientos necesarios para optimizar el riego de tus cultivos y mejorar la productividad de manera sostenible.
      </p>
      <a href="/tutoriales" className='text-white'>
        <Button>Ir a Tutoriales</Button>
      </a>
    </div>
  </div>
</motion.section>


<BottomSection/>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Olive+. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}