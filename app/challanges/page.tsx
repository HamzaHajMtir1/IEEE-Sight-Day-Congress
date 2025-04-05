import React from 'react';
import Image from 'next/image';
import { Lightbulb, Award, ExternalLink } from 'lucide-react';
import { ChallangesGrid } from '@/components/Challanges/ChallangesGrid';
import { Footer } from '@/components/Footer';
const challenges = [
    {
      id: 'technical',
      title: 'Technical Challenge',
      icon: <Lightbulb className="w-8 h-8" />,
      image: '/Challanges/nonTechnical.jpg',
      description: 'Illegal fishing is one of the biggest threats to marine ecosystems in Tunisia. It destroys fish populations, harms protected marine habitats, and affects the livelihoods of local fishermen. This challenge aims to develop a technical solution to detect, monitor, or prevent illegal fishing using innovative technology while ensuring sustainability and alignment with the United Nations Sustainable Development Goals (SDGs).',
      deadline: 'April 15 at 23:59'
    },
    {
      id: 'non-technical',
      title: 'Non-Technical Challenge',
      icon: <Award className="w-8 h-8" />,
      image: '/Challanges/nonTechnical.jpg',
      description: 'The SDC 3.0 Non-Tech Challenge is an opportunity for IEEE SIGHT Student Branch Groups to present their activities, projects, and SDC 4.0 proposal to host the next edition of this event. This challenge allows SBs and SIGHT Groups to highlight their projects, innovation, and dedication to using technology for a better future.',
      deadline: 'April 15 at 23:59'
    }
  ];
const ChallengeSection = () => {
  return (
    <div>
      <section className="relative w-full py-16 px-4 md:px-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Home/bg_section1.jpg"
            alt="Underwater coral background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-sm rounded-3xl"></div>
        </div>
        
        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
            </div>

            <ChallangesGrid />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ChallengeSection;