import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import fondoBottom from './public/images/fondoBottom.jpg';

const BottomSection = () => {
  return (
    <section className="relative py-16 bg-gray-100 text-center">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={fondoBottom.src}
          alt="Fondo"
          fill
          style={{objectFit:"cover"}}
          className="rounded-lg"
        />
      </div>
      <div className="container relative z-10 mx-auto px-4 sm:px-0">
        <h2 className="text-6xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Únete a Olive+</h2>
        <p className="text-2xl sm:text-lg md:text-xl text-white mb-6">
          Descubre cómo Olive+ puede transformar la gestión de tu riego y mejorar la productividad de tus cultivos.
        </p>
        <Button className="text-white bg-primary border-primary">Comienza Ahora</Button>
      </div>
    </section>
  );
};

export default BottomSection;
