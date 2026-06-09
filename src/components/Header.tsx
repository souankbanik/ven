import { useState } from 'react';
import { Camera, Mail, Grid, Compass, ArrowUpRight, Award } from 'lucide-react';

interface HeaderProps {
  onNavigate: (section: string) => void;
  activeSection: string;
}

export default function Header({ onNavigate, activeSection }: HeaderProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('sasankabanik@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="sticky top-4 z-40 mx-4 md:mx-10 bg-brand-beige/85 backdrop-blur-md border border-brand-dark/10 rounded-2xl py-3 px-6 transition-all duration-300">
      <div className="flex items-center justify-between">
        {/* Logo/Identity */}
        <button 
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
        >
          <div className="p-2.5 bg-brand-dark text-brand-beige rounded-xl group-hover:scale-105 transition-transform duration-300">
            <Camera size={18} className="stroke-[1.75]" />
          </div>
          <div>
            <h1 className="font-serif text-lg md:text-xl font-semibold tracking-tight">Studio Vance</h1>
            <p className="font-mono text-[10px] tracking-widest text-brand-dark/50 uppercase">Editorial & Arch</p>
          </div>
        </button>

        {/* Navigation Items */}
        <nav className="hidden md:flex items-center gap-8 font-sans text-sm font-medium">
          <button 
            onClick={() => onNavigate('home')}
            className={`cursor-pointer transition-colors ${activeSection === 'home' ? 'text-brand-accent' : 'text-brand-dark/70 hover:text-brand-dark'}`}
          >
            Home
          </button>
          <button 
            onClick={() => onNavigate('gallery')}
            className={`cursor-pointer transition-colors ${activeSection === 'gallery' ? 'text-brand-accent' : 'text-brand-dark/70 hover:text-brand-dark'}`}
          >
            Visual Ledger
          </button>
          <button 
            onClick={() => onNavigate('specs')}
            className={`cursor-pointer transition-colors ${activeSection === 'specs' ? 'text-brand-accent' : 'text-brand-dark/70 hover:text-brand-dark'}`}
          >
            Gear & Stats
          </button>
          <button 
            onClick={() => onNavigate('pricing')}
            className={`cursor-pointer transition-colors ${activeSection === 'pricing' ? 'text-brand-accent' : 'text-brand-dark/70 hover:text-brand-dark'}`}
          >
            Services & Rates
          </button>
        </nav>

        {/* Right Action buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleCopyEmail}
            className="font-mono text-xs hidden sm:flex items-center gap-2 px-3.5 py-2 bg-brand-dark/5 text-brand-dark hover:bg-brand-dark hover:text-brand-beige rounded-xl transition-all duration-300 border border-transparent cursor-pointer"
          >
            <Mail size={12} />
            {copied ? 'Copied Email' : 'sasankabanik@gmail.com'}
          </button>

          <button 
            onClick={() => onNavigate('contact')}
            className="flex items-center gap-1.5 px-4 py-2 bg-brand-dark text-brand-beige hover:bg-brand-accent rounded-xl text-xs md:text-sm transition-all duration-300 tracking-tight font-medium cursor-pointer shadow-sm hover:shadow-md"
          >
            Book Commission
            <ArrowUpRight size={14} className="stroke-[2.5]" />
          </button>
        </div>
      </div>
    </header>
  );
}
