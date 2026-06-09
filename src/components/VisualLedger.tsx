import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Photo, PhotoCategory } from '../types';
import { Grid, Eye, MapPin, ZoomIn, Info } from 'lucide-react';

interface VisualLedgerProps {
  photos: Photo[];
  onSelectPhoto: (photo: Photo) => void;
}

export default function VisualLedger({ photos, onSelectPhoto }: VisualLedgerProps) {
  const [filter, setFilter] = useState<PhotoCategory | 'all'>('all');

  const categories: { value: PhotoCategory | 'all'; label: string }[] = [
    { value: 'all', label: 'All Ledgers' },
    { value: 'fashion', label: 'High Fashion' },
    { value: 'architecture', label: 'Architecture' },
    { value: 'portrait', label: 'Portraits' },
    { value: 'street', label: 'Nocturnal / Street' },
    { value: 'narrative', label: 'Narratives' },
  ];

  const filteredPhotos = filter === 'all'
    ? photos
    : photos.filter(p => p.category === filter);

  return (
    <section className="py-16 md:py-24 px-6 md:px-10 max-w-7xl mx-auto" id="gallery-ledger">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-brand-dark/15 pb-8 mb-12">
        <div className="max-w-xl">
          <p className="font-mono text-[10px] uppercase tracking-widest text-brand-dark/40 mb-3 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-brand-tangerine rounded-full"></span> INDEXED WORKS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight text-brand-dark leading-tight">
            The Visual Ledger
          </h2>
          <p className="font-sans text-xs md:text-sm text-brand-dark/60 mt-3 leading-relaxed">
            Every exposure is structured in a secure physical and digital catalog. Click any element to load metadata specifications, geographic registers, and localized palettes.
          </p>
        </div>

        {/* Filter categories - Styled with high contrast minimalist pills */}
        <div className="flex flex-wrap gap-2 mt-6 md:mt-0 max-w-full overflow-x-auto no-scrollbar py-2">
          {categories.map((c) => (
            <button
              key={c.value}
              onClick={() => setFilter(c.value)}
              className={`px-4 py-2 font-mono text-[11px] font-semibold rounded-full border transition-all duration-300 whitespace-nowrap cursor-pointer ${filter === c.value ? 'bg-brand-dark text-brand-beige border-brand-dark' : 'bg-brand-beige border-brand-dark/15 text-brand-dark/70 hover:border-brand-dark/30 hover:text-brand-dark'}`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Display with AnimatePresence */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredPhotos.map((photo, index) => (
            <motion.div
              layout
              key={photo.id}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 15 }}
              transition={{ duration: 0.4, delay: index * 0.04, ease: 'easeOut' }}
              onClick={() => onSelectPhoto(photo)}
              className="group relative bg-white border border-brand-dark/10 p-3 rounded-2xl cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-[1.01]"
            >
              {/* Image Frame with hover status zoom */}
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-brand-dark/10">
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Floating tags */}
                <div className="absolute top-2.5 left-2.5 px-2 bg-brand-beige/90 backdrop-blur-xs border border-brand-dark/15 text-brand-dark font-mono text-[9px] py-0.5 rounded-full z-10">
                  {photo.tag}
                </div>

                {/* Subtle bottom info banner appeared on hover */}
                <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                  <div className="self-end p-2 bg-white/95 rounded-full text-brand-dark shadow">
                    <ZoomIn size={14} className="stroke-[2.5]" />
                  </div>
                  
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="font-serif text-sm font-semibold text-white drop-shadow-sm select-none">
                      {photo.title}
                    </p>
                    <p className="font-mono text-[9px] text-brand-beige/90 flex items-center gap-1 mt-1 drop-shadow-xs select-none">
                      <MapPin size={8} /> {photo.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Information Block */}
              <div className="pt-3.5 px-1 pb-1">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] font-semibold tracking-wider text-brand-dark/40 uppercase">
                    {photo.category}
                  </span>
                  <span className="font-mono text-[10px] text-brand-accent font-semibold bg-brand-accent/5 px-2 py-0.5 rounded-md">
                    {photo.specs.aperture}
                  </span>
                </div>
                <h3 className="font-serif font-medium text-brand-dark text-sm mt-1 truncate group-hover:text-brand-accent transition-colors">
                  {photo.title}
                </h3>
                <div className="mt-2.5 pt-2 border-t border-brand-dark/5 flex items-center justify-between text-brand-dark/50 font-mono text-[9px]">
                  <span>{photo.specs.camera.split(' ')[0]} Body</span>
                  <span>{photo.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Grid Empty State */}
      {filteredPhotos.length === 0 && (
        <div className="text-center py-20 bg-brand-dark/5 border border-dashed border-brand-dark/20 rounded-3xl" id="gallery-empty">
          <Info className="mx-auto text-brand-dark/30 mb-3" size={24} />
          <h4 className="font-serif text-lg font-medium text-brand-dark">No ledgers documented</h4>
          <p className="font-sans text-xs text-brand-dark/50 mt-1">Check back later or choose another filter category.</p>
        </div>
      )}
    </section>
  );
}
