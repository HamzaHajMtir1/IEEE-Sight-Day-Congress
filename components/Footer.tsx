'use client';

import { Facebook, Instagram,} from "lucide-react";
import { BackToTop } from "./BackToTop";



export const Footer = () => {
  return (
    <footer className="w-full py-6 md:py-0 bg-sdc3 text-white">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-24 px-4 md:px-6 max-w-7xl mx-auto">
      <span className="text-foreground">
          Developed by{" "}
          <a className="font-bold text-accent text-sdc2 inline-block hover:scale-90 transition-transform duration-200" href="https://www.hamzahajmtir.tn/" target="_blank" >Hamza Haj Mtir</a> ©{" "}
          {new Date().getFullYear()} Sight Day Congress, All rights reserved.
        </span>
        <div className="flex items-center gap-4">
          <a href="https://www.facebook.com/share/16PsYXB8GU/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-blue-400 transition-colors">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="https://www.instagram.com/sight_day_congress?igsh=MXQzeDYxOTI2dWd5ag==" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-pink-400 transition-colors">
            <Instagram className="h-5 w-5" />
          </a>
        </div>
      </div>
      <BackToTop />
    </footer>
  );
};