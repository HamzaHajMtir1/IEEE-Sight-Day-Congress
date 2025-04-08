"use client";
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

interface Logo {
  id: number;
  src: string;
  alt: string;
}

interface LogoCarouselProps {
  logos?: Logo[];
}

const LogoCarousel: React.FC<LogoCarouselProps> = ({ logos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Sample logos array if none provided
  const defaultLogos: Logo[] = [
    { id: 1, src: '/Home/Carrousel/ieee_isimm.png', alt: 'Patner 1' },
    { id: 2, src: '/Home/Carrousel/IEEETunisiaSectionLogo.png', alt: 'Patner 2' },
    { id: 3, src: '/Home/Carrousel/sight.png', alt: 'Patner 3' },
    { id: 4, src: '/Home/Carrousel/HT.png', alt: 'Patner 4' },
    { id: 5, src: '/Home/Carrousel/ieee_isimm.png', alt: 'Patner 1' },
    { id: 6, src: '/Home/Carrousel/IEEETunisiaSectionLogo.png', alt: 'Patner 2' },
  ];

  const logosToUse = logos || defaultLogos;
  const visibleLogos = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === logosToUse.length - visibleLogos ? 0 : prevIndex + 1
      );
    }, 2000); // Move every 2 seconds

    return () => clearInterval(interval);
  }, [logosToUse.length]);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${currentIndex * (100 / visibleLogos)}%)`;
    }
  }, [currentIndex]);

  return (
    <div className="w-full py-12 bg-sdc3 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h3 className="text-4xl font-bold text-white mb-4 drop-shadow-lg text-center">Our Partners</h3>

        
        <div className="relative overflow-hidden">
          <div 
            ref={carouselRef}
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ width: `${(logosToUse.length / visibleLogos) * 100}%` }}
          >
            {logosToUse.map((logo) => (
              <div 
                key={logo.id} 
                className="flex items-center justify-center px-4"
                style={{ width: `${100 / logosToUse.length}%` }}
              >
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg h-24 w-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={120}
                    height={60}
                    className="max-h-16 w-auto object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;