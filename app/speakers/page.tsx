"use client";
import React, { useState } from 'react';
import { Mic2, Calendar, MapPin, Twitter, Linkedin, Globe, X } from 'lucide-react';
import Image from 'next/image';
import { Footer } from '@/components/Footer';


const speakers = [
  {
    name: 'Ramla BOUHLEL',
    role: 'Engineer in fisheries and environmental engineering',
    company: 'Project manager with notre grand blue',
    topic: 'Eyes Under Waves',
    description: 'Engineer in sustainable fisheries and marine environment with a Master’s degree in aquatic ecosystem ecology',
    image: '/Speakers/ramlaBouhlel.png',
    social: {
      linkedin: 'https://www.linkedin.com/in/ramla-bouhlel-092477240/',
    }
  },
  {
    name: 'Amira OUERFELLI',
    role: 'Electrical engineer Specializing in Robotics and Embedded Systems',
    company: 'IEEE SIGHT Tunisia Section Chair',
    topic: 'Visionaries United',
    description: "An electrical engineer specializing in robotics and embedded systems, this individual is also a master's student in AI and information system techniques. They serve as the IEEE SIGHT Tunisia Section Chair and are actively involved in mentoring through IEEE Entrepreneurship. Additionally, they contribute as a volunteer for IEEE Smart Village and co-chair the IEEE ISV Education Programmes Implementation, showcasing a strong commitment to innovation, education, and community development.",
    image: '/Speakers/amiraOuerfelli.png',
    social: {
      linkedin: 'https://www.linkedin.com/in/amira-ouerfelli-033084269/',
    }
  },
  {
    name: 'Mohamed Ali KRICHEN',
    role: 'QA Automation Engineer at Sagemcom',
    company: 'IEEE IES Tunisia Chapter Chair',
    topic: 'IEEE Event and Project Management',
    description: "A QA Automation Engineer at Sagemcom, this professional is also deeply engaged in the IEEE community. They serve as the IEEE SAC Congress Coordinator, Chair of the IEEE IES Tunisia Chapter, and Chair of the IEEE TSYP 12. Their roles reflect strong leadership in both the engineering field and the global IEEE network.",
    image: '/Speakers/mohamedaliKrichen.png',
    social: {
      linkedin: 'https://www.linkedin.com/in/mohamedalikrichen/',
    }
  },
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
              <p className="text-blue-600">{speaker.role}</p>
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
              <Mic2 className="w-5 h-5 text-blue-600 mr-2" />
              <p className="text-gray-600">{speaker.topic}</p>
            </div>
          </div>
          <div className="flex space-x-4 mt-6 pt-4 border-t">
            <a href={speaker.social.linkedin} className="text-gray-400 hover:text-blue-700">
              <Linkedin className="w-5 h-5" />
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
      <div className="relative bg-blue-900 text-white py-24">
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
            <p className="text-xl text-blue-200 mb-8">Join us for an extraordinary gathering of industry leaders, innovators, and visionaries who are shaping the future of technology.</p>
            <div className="flex gap-6">
            </div>
          </div>
        </div>
      </div>

      {/* Speakers Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
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
                <p className="text-blue-600 font-medium mb-1">{speaker.role}</p>
                <p className="text-gray-600 text-sm mb-4">{speaker.company}</p>
                <div className="flex items-center mb-4">
                  <Mic2 className="w-4 h-4 text-gray-400 mr-2" />
                  <p className="text-sm text-gray-600">{speaker.topic}</p>
                </div>
                <button
                  onClick={() => setSelectedSpeaker(speaker)}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium mb-4"
                >
                  Read More
                </button>
                <div className="flex space-x-4 pt-4 border-t">
                  <a href={speaker.social.linkedin} className="text-gray-400 hover:text-blue-700">
                    <Linkedin className="w-5 h-5" />
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