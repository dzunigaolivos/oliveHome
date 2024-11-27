import Image from 'next/image';
import { motion } from 'framer-motion';

interface SideModuleRightProps {
  title: string;
  description: string;
  moduleImageSrc: string;
  backgroundImageSrc: string;
}

const fadeInFromRightVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const SideModuleRight: React.FC<SideModuleRightProps> = ({ title, description, moduleImageSrc, backgroundImageSrc }) => {
  return (
    <motion.div
      className="flex flex-col md:flex-row items-center md:items-start mb-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInFromRightVariants}
    >
      <div className="w-full md:w-1/2 h-64 relative">
        <Image src={backgroundImageSrc} alt="Background" layout="fill" objectFit="cover" className="rounded-lg" />
      </div>
      <div className="w-full md:w-1/2 p-4 flex flex-col md:flex-row items-start">
        <Image src={moduleImageSrc} alt={title} width={80} height={80} className="rounded-lg mr-4" />
        <div>
          <h3 className="text-3xl font-bold mb-4">{title}</h3>
          <p className="text-lg text-gray-700 mb-4">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default SideModuleRight;
