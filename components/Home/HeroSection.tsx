'use client';

import React, { useState, useEffect } from 'react';

function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-04-19T08:00:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen relative flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/Home/bg_section1.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)'
        }}
      />
      {/* Content */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-wider">
          SIGHT Day Congress
        </h1>
        
        <div className="flex gap-4 md:gap-8 justify-center">
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 md:p-6 min-w-[100px]">
            <div className="text-3xl md:text-5xl font-bold">{timeLeft.days}</div>
            <div className="text-sm md:text-base mt-1">Days</div>
          </div>
          
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 md:p-6 min-w-[100px]">
            <div className="text-3xl md:text-5xl font-bold">{timeLeft.hours}</div>
            <div className="text-sm md:text-base mt-1">Hours</div>
          </div>
          
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 md:p-6 min-w-[100px]">
            <div className="text-3xl md:text-5xl font-bold">{timeLeft.minutes}</div>
            <div className="text-sm md:text-base mt-1">Minutes</div>
          </div>
          
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 md:p-6 min-w-[100px]">
            <div className="text-3xl md:text-5xl font-bold">{timeLeft.seconds}</div>
            <div className="text-sm md:text-base mt-1">Seconds</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;