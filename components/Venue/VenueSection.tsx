import React from 'react';
import { MapPin, Calendar, Star } from 'lucide-react';

function VenueSection() {
  return (
    <div className="min-h-screen bg-gradient-to-b p-4 md:p-8 mt-36">
      <div className="max-w-6xl mx-auto bg-yellow-50 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Map Section */}
          <div className="p-6">
            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3233.526201674761!2d10.613566074846371!3d35.860619720100416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd8a0c85142b6f%3A0xbd8001a3614f6d92!2sOrient%20Palace%20Sousse!5e0!3m2!1sfr!2stn!4v1743198871151!5m2!1sfr!2stn"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
            <div className="mt-4 flex items-center space-x-2">
              <MapPin className="text-blue-600" size={20} />
              <span className="text-gray-600">Orient Palace, Sousse</span>
            </div>
            <div className="mt-2 flex items-center space-x-2">
              <Star className="text-yellow-400" size={20} />
              <span className="text-gray-600">4.5</span>
              <span className="text-gray-400">(766 reviews)</span>
            </div>
          </div>

          {/* Venue Details Section */}
          <div className="p-6 flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              Sight Day Congress 3.0
            </h1>
            
            <div className="bg-blue-100 rounded-xl p-6 mb-6">
              <div className="flex items-center mb-4">
                <Calendar className="text-blue-600 mr-3" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-800">Event Date</h3>
                  <p className="text-gray-600">19 & 20 April 2025</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin className="text-blue-600 mr-3" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-800">Location</h3>
                  <p className="text-gray-600">Orient Palace Sousse</p>
                </div>
              </div>
            </div>

            <div className="prose prose-blue">
              <p className="text-gray-700 leading-relaxed">
                The Sight Day Congress is the annual congress of all SIGHT groups in the Tunisia section, and this edition is proudly hosted by SIGHT Group ISIMM SB, IEEE ISIMM SB, and IEEE SIGHT Group Tunisia Section.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                This year's theme, "Marine Life", brings an exciting exploration of the latest technologies, innovations, and research focused on preserving, understanding, and advancing marine ecosystems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VenueSection;