import React from 'react';
import Image from 'next/image';

const MemoriesSection = () => {
  const galleryImages = [
    '/Home/Memories/memorie1.jpg',
    '/Home/Memories/memorie2.jpg',
    '/Home/Memories/memorie3.jpg',
    '/Home/Memories/memorie4.jpg',
    '/Home/Memories/memorie5.jpg',
    '/Home/Memories/memorie6.jpg',
  ];

  return (
    <section className="py-16 px-4 bg-sdc">
      <div className="container mx-auto">
      <h3 className="text-4xl font-bold text-yellow-400 drop-shadow-lg text-center">Event Gallery</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-12">
          {/* First row */}
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
            <Image 
              src={galleryImages[0]} 
              alt="SIGHT event group photo" 
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="grid grid-rows-2 gap-4 md:gap-6">
            <div className="relative h-32 md:h-36 rounded-lg overflow-hidden">
              <Image 
                src={galleryImages[1]} 
                alt="Conference attendees" 
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-32 md:h-36 rounded-lg overflow-hidden">
              <Image 
                src={galleryImages[2]} 
                alt="Presentation" 
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
            <Image 
              src={galleryImages[3]} 
              alt="Group photo with presentation" 
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          {/* Second row */}
          <div className="relative h-64 md:h-80 col-span-1 md:col-span-2 rounded-lg overflow-hidden">
            <Image 
              src={galleryImages[4]} 
              alt="Team members" 
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
            <Image 
              src={galleryImages[5]} 
              alt="Event participants" 
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemoriesSection;