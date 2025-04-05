import {Footer} from "@/components/Footer";
import { AboutSection } from "@/components/Home/AboutSection";
import HeroSection from "@/components/Home/HeroSection";
import MemoriesSection from "@/components/Home/MemoriesSection";


export default function Page() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <MemoriesSection />
      <Footer />
    </div>
  );
}