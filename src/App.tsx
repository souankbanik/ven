import { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroDeck from './components/HeroDeck';
import VisualLedger from './components/VisualLedger';
import ImageDetailsModal from './components/ImageDetailsModal';
import BookingEngine from './components/BookingEngine';
import PricingRetainers from './components/PricingRetainers';
import InformationDesk from './components/InformationDesk';
import Footer from './components/Footer';
import { photos } from './data';
import { Photo } from './types';
import { Sparkles, Calendar, ArrowRight, Eye, Aperture, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scroll to targeted custom section ID
  const handleNavigation = (sectionId: string) => {
    setActiveSection(sectionId);
    
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    let targetElement: HTMLElement | null = null;
    if (sectionId === 'gallery') {
      targetElement = document.getElementById('gallery-ledger');
    } else if (sectionId === 'specs') {
      targetElement = document.getElementById('studio-specs');
    } else if (sectionId === 'pricing') {
      targetElement = document.getElementById('pricing-plans');
    } else if (sectionId === 'contact') {
      targetElement = document.getElementById('book-commission');
    }

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Keep tracking scrolling to update current active section in navheader
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      const gallery = document.getElementById('gallery-ledger');
      const specs = document.getElementById('studio-specs');
      const pricing = document.getElementById('pricing-plans');
      const contact = document.getElementById('book-commission');

      if (contact && scrollPosition >= contact.offsetTop) {
        setActiveSection('contact');
      } else if (pricing && scrollPosition >= pricing.offsetTop) {
        setActiveSection('pricing');
      } else if (specs && scrollPosition >= specs.offsetTop) {
        setActiveSection('specs');
      } else if (gallery && scrollPosition >= gallery.offsetTop) {
        setActiveSection('gallery');
      } else {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-brand-beige min-h-screen font-sans selection:bg-brand-accent selection:text-white text-brand-dark overflow-x-hidden pb-0">
      
      {/* Decorative Top subtle banner */}
      <div className="bg-brand-dark text-brand-beige py-2 px-4 text-center text-[10px] sm:text-xs font-mono tracking-widest uppercase relative z-50">
        <span className="inline-block animate-pulse w-1.5 h-1.5 bg-brand-lime mr-2 rounded-full"></span>
        Currently booking custom international campaigns for Q3/Q4 2026.
      </div>

      {/* Header element */}
      <Header onNavigate={handleNavigation} activeSection={activeSection} />

      {/* App Entrance transition wrapper */}
      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex flex-col relative"
      >
        {/* HERO SECTION DECK PANEL */}
        <section id="home" className="pt-8">
          <HeroDeck photos={photos} onSelectPhoto={setSelectedPhoto} />
        </section>

        {/* BRUTALIST & MINIMALIST ACCENT SPLIT CARD HERO BANNER */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 w-full">
          <div className="bg-brand-dark rounded-[2.5rem] overflow-hidden grid grid-cols-1 md:grid-cols-2 relative shadow-2xl">
            {/* Ambient blur */}
            <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-brand-lime/10 rounded-full blur-3xl pointer-events-none"></div>

            {/* Left side story */}
            <div className="p-8 md:p-14 flex flex-col justify-between text-brand-beige gap-10">
              <div className="flex flex-col gap-4">
                <span className="font-mono text-[9px] text-brand-lime uppercase tracking-widest flex items-center gap-1.5">
                  <BookOpen size={12} /> COLLECTIVE VISION METHOD
                </span>
                <h3 className="font-serif text-3xl md:text-4xl font-light tracking-tight leading-tight">
                  Where high fashion prints meet <strong className="font-normal italic text-brand-lime">concrete brutalism</strong>.
                </h3>
                <p className="font-sans text-xs md:text-sm text-brand-beige/70 leading-relaxed max-w-md mt-2">
                  We refuse standard guidelines of creative representation. Our lens captures human form modeling as high-end architecture, and structural glass-concrete walls as pure organic texture. Explore our portfolio, adjust parameters in our live booking calculator, and commission your campaign.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleNavigation('gallery')}
                  className="flex items-center gap-2 text-xs font-mono font-semibold text-brand-lime hover:text-white transition-colors cursor-pointer group"
                >
                  Enter Portfolio index <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right side background visual - Dynamic curated portrait */}
            <div className="relative min-h-[300px] md:min-h-[450px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200"
                alt="Editorial model background"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover saturates-125 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-brand-dark via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 right-6 px-4 py-2 bg-brand-beige text-brand-dark font-mono text-[10px] rounded-full border border-brand-dark/20 shadow-lg flex items-center gap-2">
                <Aperture size={12} className="stroke-[2.5]" />
                <span>RAW LEDGER #5044</span>
              </div>
            </div>
          </div>
        </div>

        {/* VISUAL LEDGER/GALLERY GRID */}
        <VisualLedger photos={photos} onSelectPhoto={setSelectedPhoto} />

        {/* SERVICES AND PRICING PLANS */}
        <PricingRetainers />

        {/* EQUIPMENT SPEC CABINETS & BIOGRAPHY COUNTERS */}
        <InformationDesk />

        {/* LIVE WORK COMMISSION ESTIMATING ENGINE & BOOKING FORM */}
        <BookingEngine />

        {/* FOOTER CHANNELS */}
        <Footer onNavigate={handleNavigation} />
      </motion.main>

      {/* DETAIL LIGHTBOX MODAL WITH FULL EXPOSURE SPECS & COLOR PICKERS */}
      <AnimatePresence>
        {selectedPhoto && (
          <ImageDetailsModal
            photo={selectedPhoto}
            onClose={() => setSelectedPhoto(null)}
            onNavigateToBooking={() => handleNavigation('contact')}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
