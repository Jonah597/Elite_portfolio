import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/sections/Hero';
import TrustStrip from '@/components/sections/TrustStrip';
import FeaturedWork from '@/components/sections/FeaturedWork';
import WhyChooseMe from '@/components/sections/WhyChooseMe';
import Process from '@/components/sections/Process';
import Metrics from '@/components/sections/Metrics';
import Testimonials from '@/components/sections/Testimonials';
import About from '@/components/sections/About';
import FinalCTA from '@/components/sections/FinalCTA';
import Footer from '@/components/sections/Footer';
import Navigation from '@/components/Navigation';

/**
 * Elite Portfolio Home Page
 * 
 * Design System: Cinematic Elegance
 * - Deep navy/charcoal backgrounds with warm cream text
 * - Soft gold accents for premium feel
 * - Smooth, organic motion design
 * - Editorial storytelling through composition
 */
export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <Navigation />
      
      <main>
        <Hero />
        <TrustStrip />
        <FeaturedWork />
        <WhyChooseMe />
        <Process />
        <Metrics />
        <Testimonials />
        <About />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
