"use client";
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { FaEnvelope, FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function ComingSoon() {

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