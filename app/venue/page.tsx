"use client";
import Head from 'next/head';
import Image from 'next/image';
import VenueSection from '@/components/Venue/VenueSection';
import { Footer } from '@/components/Footer';

export default function Venue() {

  return (
    <><div className="min-h-screen bg-blue-900 relative overflow-hidden flex flex-col">

      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Home/bg_section1.jpg"
          alt="Underwater background"
          fill
          className="object-cover opacity-60"
          priority />
      </div>

      {/* Content */}
      <VenueSection />

    </div>
    <Footer />
    </>
  );
}