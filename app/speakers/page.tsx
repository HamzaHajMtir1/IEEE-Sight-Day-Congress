"use client";
import React, { useState } from 'react';
import { Mic2, Calendar, MapPin, Twitter, Linkedin, Globe, X } from 'lucide-react';
import Image from 'next/image';
import { Footer } from '@/components/Footer';


const speakers = [
  {
    name: 'Sarah Johnson',
    role: 'AI Research Director',
    company: 'TechVision Labs',
    topic: 'The Future of Artificial Intelligence',
    description: 'Electronic Communication Engineer who graduated from the National School of Electronics and Telecommunications of Sfax. He is currently working as an R&D IT Engineer at AIFOG. His main job is to improve QoS in IoT networks through the latest technologies, especially AI, by conducting research and delivering high-quality proof of concepts. He is also currently serving as IEEE/ODC Event Support Coordinator, Webmaster of IEEE Consultants Network AG, and a jury member for the IEEE SSCS Arduino Contest 2025.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
    social: {
      twitter: '#',
      linkedin: '#',
      website: '#'
    }
  },
  {
    name: 'Michael Chen',
    role: 'Chief Innovation Officer',
    company: 'Future Systems',
    topic: 'Blockchain Revolution',
    description: 'A pioneering technologist with over 15 years of experience in blockchain and distributed systems. Leading groundbreaking research in cryptocurrency technologies and smart contract implementations.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
    social: {
      twitter: '#',
      linkedin: '#',
      website: '#'
    }
  },
  {
    name: 'Emily Rodriguez',
    role: 'UX Design Lead',
    company: 'DesignFlow',
    topic: 'The Evolution of User Experience',
    description: 'Award-winning UX designer specializing in creating intuitive and accessible digital experiences. Pioneer in implementing AI-driven design solutions and advocate for inclusive design practices.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
    social: {
      twitter: '#',
      linkedin: '#',
      website: '#'
    }
  },
  {
    name: 'David Kim',
    role: 'Security Expert',
    company: 'CyberShield',
    topic: 'Cybersecurity in 2025',
    description: 'Renowned cybersecurity expert with expertise in threat detection and ethical hacking. Regular contributor to major security conferences and advisor to Fortune 500 companies on security infrastructure.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    social: {
      twitter: '#',
      linkedin: '#',
      website: '#'
    }
  }
];

function Modal({ isOpen, onClose, speaker }: { isOpen: boolean; onClose: () => void; speaker: typeof speakers[0] }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-400/80 backdrop-blur-md flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-2xl w-full relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="p-6">
          <div className="flex items-center space-x-4 mb-6">
            <img
              src={speaker.image}
              alt={speaker.name}
              className="w-20 h-20 rounded-full object-cover"
            />
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{speaker.name}</h3>
              <p className="text-indigo-600">{speaker.role}</p>
              <p className="text-gray-600">{speaker.company}</p>
            </div>
          </div>
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">About</h4>
            <p className="text-gray-600 leading-relaxed">{speaker.description}</p>
          </div>
          <div className="border-t pt-4">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Topic</h4>
            <div className="flex items-center">
              <Mic2 className="w-5 h-5 text-indigo-600 mr-2" />
              <p className="text-gray-600">{speaker.topic}</p>
            </div>
          </div>
          <div className="flex space-x-4 mt-6 pt-4 border-t">
            <a href={speaker.social.twitter} className="text-gray-400 hover:text-blue-400">
              <Twitter className="w-5 h-5" />
            </a>
            <a href={speaker.social.linkedin} className="text-gray-400 hover:text-blue-700">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={speaker.social.website} className="text-gray-400 hover:text-gray-600">
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Speackers() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<typeof speakers[0] | null>(null);

  return (
    <><div className="min-h-screen bg-sdc">
      {/* Hero Section */}
      <div className="relative bg-indigo-900 text-white py-24">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/Home/bg_section1.jpg"
            alt="Background"
            fill
            className="object-cover object-center"
            priority />
        </div>
        <div className="container mx-auto px-4 relative mt-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Meet Our Expert Speakers</h1>
            <p className="text-xl text-indigo-200 mb-8">Join us for an extraordinary gathering of industry leaders, innovators, and visionaries who are shaping the future of technology.</p>
            <div className="flex gap-6">
            </div>
          </div>
        </div>
      </div>

      {/* Speakers Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {speakers.map((speaker, index) => (
            <div key={index} className="bg-gray-100 hover:bg-yellow-100 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-w-3 aspect-h-3">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-64 object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{speaker.name}</h3>
                <p className="text-indigo-600 font-medium mb-1">{speaker.role}</p>
                <p className="text-gray-600 text-sm mb-4">{speaker.company}</p>
                <div className="flex items-center mb-4">
                  <Mic2 className="w-4 h-4 text-gray-400 mr-2" />
                  <p className="text-sm text-gray-600">{speaker.topic}</p>
                </div>
                <button
                  onClick={() => setSelectedSpeaker(speaker)}
                  className="text-indigo-600 hover:text-indigo-800 text-sm font-medium mb-4"
                >
                  Read More
                </button>
                <div className="flex space-x-4 pt-4 border-t">
                  <a href={speaker.social.twitter} className="text-gray-400 hover:text-blue-400">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href={speaker.social.linkedin} className="text-gray-400 hover:text-blue-700">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={speaker.social.website} className="text-gray-400 hover:text-gray-600">
                    <Globe className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedSpeaker && (
        <Modal
          isOpen={true}
          onClose={() => setSelectedSpeaker(null)}
          speaker={selectedSpeaker} />
      )}
    </div>
    <Footer /></>
  );
}

export default Speackers;