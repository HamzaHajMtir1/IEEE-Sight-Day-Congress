import {Footer} from "@/components/Footer";
import { AboutSection } from "@/components/Home/AboutSection";
import HeroSection from "@/components/Home/HeroSection";
import MemoriesSection from "@/components/Home/MemoriesSection";
import LogoCarousel from "@/components/LogoCarousel";
import { Analytics } from "@vercel/analytics/react"


export default function Page() {
  return (
    <div>
      <HeroSection />
      <LogoCarousel />
      <AboutSection />
      <MemoriesSection />
      <Footer />
      <Analytics/>
    </div>
  );
}