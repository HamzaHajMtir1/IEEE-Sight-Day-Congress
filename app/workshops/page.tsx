"use client";
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set the date we're counting down to (adjust this to your event date)
    const countDownDate = new Date("2024-06-15T00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      
      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-blue-900 relative overflow-hidden flex flex-col">
      <Head>
        <title>Coming Soon - SIGHT Day Congress</title>
        <meta name="description" content="IEEE SIGHT Day Congress is coming soon. Stay tuned for our challenges and events." />
      </Head>
      
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/Home/bg_section1.jpg" 
          alt="Underwater background" 
          fill
          className="object-cover opacity-60"
          priority
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-16">
        {/* Logo */}
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-center">
          SIGHT Day Congress
        </h1>
        
        <div className="bg-blue-800/40 backdrop-blur-sm p-4 rounded-lg border border-blue-400/30 mb-8 max-w-2xl">
          <p className="text-blue-100 text-center text-lg">
            We're preparing something amazing! Our platform will be launching soon. <br/>Stay tuned.
          </p>
        </div>
      </div>
      
    </div>
  );
}