'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Users, Cpu, Building } from "lucide-react"
import { MapPinIcon, SendIcon } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from 'next/image';
import Autoplay from "embla-carousel-autoplay";
import OliveFeatures from '@/components/olive_features'
import OliveModule from '@/components/olive_module'
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
import olillustration from './public/images/olillustration.png';
import vineyardback from './public/images/vineyardback.jpg';


export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [clientesCount, setClientesCount] = useState(0)
  const [dispositivosCount, setDispositivosCount] = useState(0)
  const [usuariosCount, setUsuariosCount] = useState(0)
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
      { threshold: 0.1 }
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

  useEffect(() => {
    if (!isStatsVisible) return

    const interval = setInterval(() => {
      setClientesCount(prev => prev < 245 ? prev + 1 : 245)
      setDispositivosCount(prev => prev < 620 ? prev + 1 : 620)
      setUsuariosCount(prev => prev < 532 ? prev + 1 : 532)
    }, 5)

    return () => clearInterval(interval)
  }, [isStatsVisible])

  const clientes = [
    { nombre: "Finca Los Olivos", logo: "./public/images/logo.png?height=100&width=100" },
    { nombre: "Hacienda Verde", logo: "/placeholder.svg?height=100&width=100" },
    { nombre: "Olivares del Sur", logo: "/placeholder.svg?height=100&width=100" },
    { nombre: "Aceitunas Doradas", logo: "/placeholder.svg?height=100&width=100" },
    { nombre: "Olivos del Valle", logo: "/placeholder.svg?height=100&width=100" },
  ]

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
      <section className="relative pt-16 h-[700px] overflow-hidden">
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
        <div className="relative z-10 flex items-center h-full">
          <div className="  px-4 sm:px-8 md:px-12 lg:px-16 w-full md:w-full">
            <h1 className="text-blk text-shadow-outline text-3xl sm:text-4xl md:text-5xl lg:text-8xl  font-bold">la manera más fácil de </h1>
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
      </section>


      {/*<section className="relative pt-16 h-[600px] overflow-hidden">

        <div className="absolute inset-0 w-full h-full">
          <div className="w-full h-full overflow-hidden">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/wzChmPaSn30?autoplay=1&loop=1&mute=1&playlist=wzChmPaSn30"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="YouTube Video"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '100%',
                height: '100%',
                transform: 'translate(-50%, -50%) scale(2.5)',
                transformOrigin: 'center center'
              }}
            />
          </div>
        </div>
        

        <div className="absolute inset-0 bg-black bg-opacity-20"></div>


        <div className="absolute inset-0 flex items-center justify-center content-center ">
          <div className="text-white text-center items-center center ">
            <Image
              src={logo.src}
              alt="Olive+"
              width={450}
              height={100} />
            <p className="mt-4 text-xl">Sistema de Monitoreo y Gestión de Riego</p>
          </div>
        </div>
      </section>*/}

      {/*seccion de explicacion */}
      <section className='my-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className="hidden md:block w-full lg:h-[450px] md:h-[500px]  relative">
            <Image
              src={vineyard.src}
              alt="Monitoreo de Cultivo"
              fill
              style={{ objectFit: 'cover' }}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <OliveFeatures />

        </div>
      </section>

      <section className='my-4'>
        <div className='flex bg-center self-center items-center justify-center bg-ilback'>
          <Image
            src={olillustration.src}
            alt='ImagenOlive+'
            width={1080}
            height={1080}
          />
        </div>

      </section>

      {/* Sección de Visión */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8" >Nuestra Visión</h2>
          <p className="text-center text-lg max-w-3xl mx-auto">
            En Olive+, nos esforzamos por revolucionar la agricultura mediante tecnología innovadora y sostenible.
            Nuestra visión es crear un futuro donde cada gota de agua se utilice de manera eficiente,
            maximizando la producción agrícola mientras minimizamos el impacto ambiental.
          </p>
        </div>
      </section>

      {/* Sección de Estadísticas */}
      <section
  ref={statsRef}
  className="py-16 bg-white bg-cover bg-center"
  style={{
    backgroundImage: `url('${vineyardback.src}')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }}
>
        <div className="container mx-auto px-4">
          <h2 className="text-5xl text-white font-bold text-center mb-8">Nuestro Impacto</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white text-white bg-opacity-10 backdrop-blur-md border border-white/20 rounded-lg shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <Building className="mr-2" />
                  Clientes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='flex justify-center'>
                  <p className="text-4xl font-bold text-center">{clientesCount}</p>
                </div>
                
              </CardContent>
            </Card>
            <Card className="bg-white text-white bg-opacity-10 backdrop-blur-md border border-white/20 rounded-lg shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <Cpu className="mr-2" />
                  Dispositivos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-center">{dispositivosCount}</p>
              </CardContent>
            </Card>
            <Card className="bg-white text-white bg-opacity-10 backdrop-blur-md border border-white/20 rounded-lg shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <Users className="mr-2" />
                  Usuarios
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-center">{usuariosCount}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Carrusel de Clientes */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Nuestros Clientes</h2>
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            className="w-full max-w-xs mx-auto sm:max-w-sm md:max-w-md lg:max-w-screen-2xl xl:max-w-xxl">
            <CarouselContent>
              {clientes.map((cliente, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="m-1">
                    <CardContent className="flex items-start justify-center p-6">
                      <img src={cliente.logo} alt={`Logo de ${cliente.nombre}`} className="w-24 h-24 object-contain mb-4" />
                      <h3 className="text-lg font-semibold text-center">{cliente.nombre}</h3>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Sección de Módulos */}
      <section ref={modulosRef} className="py-16 bg-white-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Nuestros Módulos</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">

            <OliveModule
              title='Módulo Riego'
              description='Monitorea y controla el riego de tus cultivos de forma remota y eficiente.'
              imageSrc={riego.src}
              backgroundColor='bg-caudalBack' />

            <OliveModule
              title='Módulo Pozo'
              description='Monitorea y controla el riego de tus cultivos de forma remota y eficiente.'
              imageSrc={pozo.src}
              backgroundColor='bg-tertiary2' />

            <OliveModule
              title='Módulo Suelo'
              description='Monitorea y controla el riego de tus cultivos de forma remota y eficiente.'
              imageSrc={suelo.src}
              backgroundColor='bg-freaticoBack' />

            <OliveModule
              title='Módulo Clima'
              description='Monitorea y controla el riego de tus cultivos de forma remota y eficiente.'
              imageSrc={clima.src}
              backgroundColor='bg-fueraRango' />

            <OliveModule
              title='Módulo Planta'
              description='Monitorea y controla el riego de tus cultivos de forma remota y eficiente.'
              imageSrc={planta.src}
              backgroundColor='bg-riegoBack' />

            <OliveModule
              title='Módulo Análisis de datos'
              description='Monitorea y controla el riego de tus cultivos de forma remota y eficiente.'
              imageSrc={analisis.src}
              backgroundColor='bg-deviceBack' />
          </div>
        </div>
      </section>

      {/* Sección de Contacto */}
      <section ref={contactoRef} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Texto grande a la izquierda */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Mantengamos<br />el contacto
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Estamos aquí para responder a todas tus preguntas y ayudarte a optimizar tu sistema de riego.
              </p>

              {/* Opciones de contacto adicionales */}
              <div className="mt-8 space-y-4">
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center text-green-600 hover:text-green-700">
                  <MapPinIcon className="mr-2" />
                  Contáctanos por WhatsApp
                </a>
                <a href="https://goo.gl/maps/abcdefghijk" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-700">
                  <MapPinIcon className="mr-2" />
                  Encuéntranos en Google Maps
                </a>
                <a href="https://www.waze.com/ul?ll=12.345678%2C-98.765432&navigate=yes" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-700">
                  <MapPinIcon className="mr-2" />
                  Llega con Waze
                </a>
              </div>
            </div>

            {/* Formulario a la derecha */}
            <Card className="w-full md:w-1/2 max-w-md">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Envíanos un mensaje</h3>
                <form className="space-y-4">
                  <Input type="text" placeholder="Nombre" />
                  <Input type="email" placeholder="Correo electrónico" />
                  <Textarea placeholder="Mensaje" className="min-h-[100px]" />
                  <Button type="submit" className="w-full text-white">
                    <SendIcon className="mr-2 h-4 w-4" /> Enviar mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Olive+. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}