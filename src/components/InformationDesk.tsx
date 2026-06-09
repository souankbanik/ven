import { Award, Camera, Shield, Star, Aperture } from 'lucide-react';
import { studioStats, equipmentList } from '../data';

export default function InformationDesk() {
  const tickerItems = [
    'VOGUE COVER ARCHIVE 2024',
    'TADAO ANDO RE-INTERPRETATION',
    'LEICA OUTSTANDING ARTIST Award',
    'SONY MASTER OF LIGHT ADVISER',
    'ARCHITECTURAL DIGEST PREFERRED',
    'MILANO HAUTE COUTURE CAMPAIGNS',
    'JOSHUA TREE ANALOG VOL. 3',
    'CONTEMPORARY TOKYO EXHIBITS'
  ];

  return (
    <section className="py-16 overflow-hidden" id="studio-specs">
      {/* Endless animated marquee banner - replicating the video's custom ticker banner strictly */}
      <div className="relative py-4 bg-brand-lime select-none text-brand-dark mb-18 border-t border-b border-brand-dark/15 transform rotate-[-1deg] w-[110%] -left-5">
        <div className="relative w-full overflow-hidden flex whitespace-nowrap">
          {/* Ticker Container Loop */}
          <div className="animate-[marquee_25s_linear_infinite] flex gap-12 font-mono text-xs font-black tracking-widest uppercase">
            {tickerItems.concat(tickerItems).map((item, index) => (
              <span key={index} className="flex items-center gap-3">
                <Star size={11} className="fill-brand-dark" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Extra helper styles added inline for infinite marquee support */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* Core Grid: Bio and Cabinets */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-6">
        
        {/* Left Column: Creative Bio & Stats */}
        <div className="lg:col-span- così lg:col-span-5 flex flex-col gap-6" id="about-manifesto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-dark/5 border border-brand-dark/10 rounded-full w-fit">
            <Award size={12} className="text-brand-accent" />
            <span className="font-mono text-[10px] uppercase tracking-wider text-brand-dark/60">Creative Manifesto</span>
          </div>

          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight text-brand-dark">
            The Philosophy of the <span className="font-normal italic text-brand-accent">Sovereign Eye</span>
          </h2>

          <p className="font-sans text-xs md:text-sm text-brand-dark/70 leading-relaxed">
            Studio Vance was founded by Elena Vance, an international fine-art photographer based out of Europe and Japan. We focus on physical medium formats paired with cutting-edge G-Master optics to capture moments that represent sculptures in space. Our work seeks to strip distraction down to raw geometry, exposure, contrast, and tone.
          </p>

          {/* Numerical Stats Layout */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            {studioStats.map((stat, sIdx) => (
              <div 
                key={sIdx} 
                className="p-4 bg-white border border-brand-dark/10 rounded-2xl shadow-xs hover:border-brand-accent/30 transition-all"
              >
                <p className="font-serif text-2xl md:text-3xl font-regular text-brand-accent">{stat.value}</p>
                <p className="font-mono text-[10px] text-brand-dark/50 uppercase tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Cabinets of visual instruments (Gear lists) */}
        <div className="lg:col-span-7 flex flex-col gap-6" id="gear-cabinet">
          <div className="p-6 md:p-8 bg-white border border-brand-dark/10 rounded-3xl shadow-sm">
            <h3 className="font-serif text-lg font-semibold text-brand-dark mb-6 flex items-center gap-2">
              <Camera size={18} className="text-brand-dark stroke-[2]" />
              The Cabinet of Visual Instruments
            </h3>
            
            <p className="font-sans text-xs text-brand-dark/50 leading-relaxed mb-6">
              Our craft requires pristine optical precision. We configure our bodies, lens elements, and lighting controls depending heavily on whether the project relies on raw sunlight shadows, strobe highlights, or retro organic film profiles.
            </p>

            <div className="flex flex-col gap-6 font-mono text-xs">
              {equipmentList.map((eq, idx) => (
                <div 
                  key={idx} 
                  className="pb-5 border-b border-brand-dark/10 last:border-0 last:pb-0"
                >
                  <p className="text-[10px] text-brand-dark/40 uppercase tracking-widest font-black mb-2 flex items-center gap-1">
                    <Aperture size={10} className="text-brand-accent" />
                    {eq.category}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-2">
                    {eq.items.map((item, itemIdx) => (
                      <span 
                        key={itemIdx} 
                        className="py-2 px-3 bg-brand-dark/5 border border-brand-dark/5 text-brand-dark font-medium rounded-lg text-[10px] text-left truncate hover:border-brand-dark/15 hover:bg-brand-dark/10 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Disclaimer badge */}
            <div className="mt-8 pt-5 border-t border-brand-dark/10 flex items-center gap-2.5 font-mono text-[9px] text-brand-dark/40 uppercase tracking-wider">
              <Shield size={12} className="text-brand-accent" />
              <span>All equipment is fully redundant and fully insured under international guidelines.</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
