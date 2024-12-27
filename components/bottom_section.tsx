import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Cpu, Building } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
//import Image from 'next/image';
import Autoplay from "embla-carousel-autoplay";
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import cytLogo from './../app/public/images/cyt_logo.jpg';
import agroLogo from './../app/public/images/logo_agrofarming.jpg';
import sofrucoLogo from './../app/public/images/logo_sofruco.jpg';
import casasLogo from './../app/public/images/riopeumo_logo.png';



const BottomSection: React.FC = () => {
  const [clientesCount, setClientesCount] = useState(0);
  const [dispositivosCount, setDispositivosCount] = useState(0);
  const [usuariosCount, setUsuariosCount] = useState(0);
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsStatsVisible(true);
        }
      },
      { threshold: 1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isStatsVisible) return;

    const interval = setInterval(() => {
      setClientesCount(prev => prev < 245 ? prev + 1 : 245);
      setDispositivosCount(prev => prev < 620 ? prev + 1 : 620);
      setUsuariosCount(prev => prev < 532 ? prev + 1 : 532);
    }, 5);

    return () => clearInterval(interval);
  }, [isStatsVisible]);

  const clientes = [
    { nombre: "Concha y toro", 
      logo: cytLogo.src ,
      descripcion: "tiene un monton de cosas" },
    { nombre: "AgroFarming", 
      logo: agroLogo.src,
      descripcion: "Tiene Cosas"
    },
    { nombre: "Sofruco", 
      logo: sofrucoLogo.src,
      descripcion: "Tiene Otras cosas"
    },
    { nombre: "Casas de rio peumo", 
      logo: casasLogo.src,
      descripcion: "Tiene todas las cosas"
    },
  ]

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2 } },
  };

  return (
    <motion.section
      className="py-4  bg-cover bg-center bg-primary bg-opacity-90 text-white relative"
      //style={{ backgroundImage: `url(${vineyardback.src})` }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInVariants}
    >
      <div className="relative z-10 px-4 container flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/2">
          <div ref={statsRef} className="mb-8">
            <h2 className="text-3xl text-white  mb-4">Nuestro <span className="font-bold">Impacto</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
              <Card className="bg-white text-white bg-opacity-10 backdrop-blur-md border border-white/20 rounded-lg shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center text-lg md:text-base sm:text-sm">
                    <Building className="mr-2 " />
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
                  <CardTitle className="flex items-center justify-center text-lg md:text-base sm:text-sm">
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
                  <CardTitle className="flex items-center justify-center text-lg md:text-base sm:text-sm">
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
        </div>
        <div className="w-full md:w-1/2">
          <div className="mb-8 w-full">
            <h2 className="text-3xl mb-4">Nuestros <span className="font-bold">Clientes</span></h2>
            <Carousel
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
              className="w-full max-w-xs mx-auto sm:max-w-sm md:max-w-md lg:max-w-screen-2xl xl:max-w-xxl"
            >
              <CarouselContent>
                {clientes.map((cliente, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                    <Card className="m-1 bg-white text-white bg-opacity-10 backdrop-blur-md border border-white/20 rounded-lg shadow-lg">
                      <CardContent className="flex items-stretch p-6">
                        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-4">
                          <img src={cliente.logo} alt={`Logo de ${cliente.nombre}`} className="w-20 h-20 object-contain rounded-full" />
                        </div>
                        <div className="ml-2">
                          <h3 className="text-lg font-semibold text-left">{cliente.nombre}</h3>
                          <p className="text-sm text-left text-white">{cliente.descripcion}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default BottomSection;
