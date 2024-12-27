import type { Metadata } from "next";
import "./globals.css";
import { Raleway } from 'next/font/google'

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Define los pesos que usarás
});

export const metadata: Metadata = {
  title: "Olive+",
  description: "Bienvenidos a Olive+, una herramienta que permite hacer mas productivo el uso del agua",
  keywords: ["Olive+", "Riego", "Agricultura", "Productividad", "Agua", "Cultivos", "Agricultores", "Riego", "Suelo", "Clima", "Planta"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.className} antialiased relative min-h-screen bg-backColor`}
      >
        {/* Contenedor para el fondo anclado al fondo de la página */}
        <div className="bg-water-texture absolute bottom-0 left-0 right-0 bg-cover bg-no-repeat z-[-1]" style={{ height: '100vh' }} />
        
        {/* Contenido principal */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
