import Image from 'next/image';
import { motion } from 'framer-motion';

interface SideModuleRightProps {
  title: string;
  description: string;
  moduleImageSrc: string;
  backgroundImageSrc: string;
  additionalImageSrc?: string; // Optional parameter
}

const fadeInFromRightVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const SideModuleRight: React.FC<SideModuleRightProps> = ({ title, description, moduleImageSrc, backgroundImageSrc, additionalImageSrc }) => {
  return (
    <motion.div
      className="flex flex-col items-center md:items-end relative w-screen"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInFromRightVariants}
    >
      <div className="w-full p-4 flex flex-col md:flex-row items-start relative mb-1">
        <div className="absolute inset-0 z-0 w-full h-full">
          <Image src={backgroundImageSrc} alt="Background" layout="fill" objectFit="cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-95"></div>
        </div>
        <div className="relative z-10 w-full flex flex-col md:flex-row justify-start items-center">
          {additionalImageSrc && (
            <div className="flex justify-start items-center min-w-[300px] h-full mr-4">
              <Image src={additionalImageSrc} width={300} height={300} alt="Additional Image" className="rounded-lg" />
            </div>
          )}
          <div className="flex flex-col items-start">
            <Image src={moduleImageSrc} alt={title} width={80} height={80} className="rounded-lg mb-4" />
            <h3 className="text-3xl font-bold mb-4 text-white text-left">{title}</h3>
            <p className="text-lg text-white mb-4 text-justify mr-36">{description}</p>
          </div>
        </div>
      </div>
      <div className="w-full h-auto relative">
        <Image src={backgroundImageSrc} alt="Background" layout="fill" objectFit="cover" className="rounded-lg" />
      </div>
    </motion.div>
  );
};

export default SideModuleRight;
