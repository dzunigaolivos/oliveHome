import Image from 'next/image'

interface OliveModuleProps {
    title: string;
    description: string;
    imageSrc: string;
    backgroundColor: string;
}



export default function OliveModule({ title, description, imageSrc, backgroundColor }: OliveModuleProps) {
  return (
    <div className={`max-w-xl mx-auto rounded-full overflow-hidden shadow-lg ${backgroundColor}`}>
      <div className="flex  md:flex-row">
        <div className="md:w-1/3 sm:w-1/3 relative">
          <Image
            src={imageSrc}
            alt={title}
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-2/3 sm:w-2/3 p-6 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
          <p className="text-white">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}