import { useState } from 'react';
import { Camera, Mail, ArrowUp, Instagram, Linkedin, Globe, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('sasankabanik@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-dark text-brand-beige mt-24 py-16 px-6 md:px-10 border-t border-brand-dark/20 relative rounded-t-[3rem] overflow-hidden">
      {/* Ambient background blur */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-lime/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col gap-12 relative z-10" id="footer-inner">
        {/* Top block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-white/10 pb-12">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-brand-beige text-brand-dark rounded-xl">
              <Camera size={22} className="stroke-[2]" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold tracking-tight">Studio Vance</h3>
              <p className="font-mono text-[10px] tracking-widest text-brand-beige/50 uppercase">Sovereign forms / Silent geometries</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <button
              onClick={handleCopyEmail}
              className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs font-mono transition-colors cursor-pointer"
            >
              {copied ? 'Copied Email' : 'Copy: sasankabanik@gmail.com'}
            </button>
            
            <button
              onClick={handleScrollTop}
              className="p-3.5 bg-white/5 hover:bg-brand-accent hover:text-white rounded-xl text-brand-beige font-mono transition-all cursor-pointer shadow-md"
              title="Scroll to Top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Middle block: Navigation links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1 */}
          <div className="flex flex-col gap-3 font-sans text-xs">
            <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest">Active Sections</p>
            <button onClick={() => onNavigate('home')} className="text-left text-brand-beige/70 hover:text-white transition-colors cursor-pointer">Home Index</button>
            <button onClick={() => onNavigate('gallery')} className="text-left text-brand-beige/70 hover:text-white transition-colors cursor-pointer">Visual Ledger Portfolio</button>
            <button onClick={() => onNavigate('specs')} className="text-left text-brand-beige/70 hover:text-white transition-colors cursor-pointer">Cameras & Spec Cabinets</button>
            <button onClick={() => onNavigate('pricing')} className="text-left text-brand-beige/70 hover:text-white transition-colors cursor-pointer">Services & Commission Rates</button>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col gap-3 font-sans text-xs">
            <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest">Selected Works</p>
            <button onClick={() => onNavigate('gallery')} className="text-left text-brand-beige/70 hover:text-white transition-colors cursor-pointer">High Fashion Editorial</button>
            <button onClick={() => onNavigate('gallery')} className="text-left text-brand-beige/70 hover:text-white transition-colors cursor-pointer">Brutalist Geometries</button>
            <button onClick={() => onNavigate('gallery')} className="text-left text-brand-beige/70 hover:text-white transition-colors cursor-pointer">Atmospheric Urbanism</button>
            <button onClick={() => onNavigate('gallery')} className="text-left text-brand-beige/70 hover:text-white transition-colors cursor-pointer">Raw Analog Narrative</button>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col gap-3 font-sans text-xs">
            <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest">Inquiries & Legal</p>
            <button onClick={() => onNavigate('contact')} className="text-left text-brand-beige/70 hover:text-white transition-colors cursor-pointer">Book Commission</button>
            <a href="#" className="text-left text-brand-beige/70 hover:text-white transition-colors pointer-events-none">Copyright Licensing</a>
            <a href="#" className="text-left text-brand-beige/70 hover:text-white transition-colors pointer-events-none">Terms of Fine Art Sale</a>
          </div>

          {/* Col 4 - About & Socials */}
          <div className="flex flex-col gap-4 font-sans text-xs">
            <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest">Social Channels</p>
            <p className="text-brand-beige/60 text-xs leading-relaxed">
              Elena Vance is regularly represented in Milano, Kyoto, and Berlin galleries. Let's cooperate on high-fashion and minimalist architecture publications.
            </p>
            <div className="flex items-center gap-3.5 mt-2 text-brand-beige/70">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2 bg-white/5 hover:bg-brand-accent hover:text-white rounded-lg transition-colors cursor-pointer">
                <Instagram size={14} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 bg-white/5 hover:bg-brand-accent hover:text-white rounded-lg transition-colors cursor-pointer">
                <Linkedin size={14} />
              </a>
              <a href="https://behance.net" target="_blank" rel="noreferrer" className="p-2 bg-white/5 hover:bg-brand-accent hover:text-white rounded-lg transition-colors cursor-pointer">
                <Globe size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom credits and timestamp matching standard visual guides */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-[10px] text-brand-beige/40 uppercase tracker-wider">
          <p>© 2026 Studio Vance. All exposure catalogs protected under proprietary licensing.</p>
          <p className="flex items-center gap-1">
            Carefully curated with <Heart size={10} className="fill-brand-tangerine text-brand-tangerine animate-pulse" /> for Sasanka Banik
          </p>
        </div>

      </div>
    </footer>
  );
}
