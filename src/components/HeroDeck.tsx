import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Photo } from '../types';
import { Sparkles, Calendar, MapPin, Eye, ArrowLeftRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroDeckProps {
  photos: Photo[];
  onSelectPhoto: (photo: Photo) => void;
}

export default function HeroDeck({ photos, onSelectPhoto }: HeroDeckProps) {
  // Let's use the first 4 photos for the prominent hero deck
  const deckPhotos = photos.slice(0, 4);
  const [activeIndex, setActiveIndex] = useState(0);

  const rotateAngles = [-6, -2, 3, 7];
  const offsetPositions = [-30, -10, 10, 30];

  const handleNextCard = () => {
    setActiveIndex((prev) => (prev + 1) % deckPhotos.length);
  };

  const handlePrevCard = () => {
    setActiveIndex((prev) => (prev - 1 + deckPhotos.length) % deckPhotos.length);
  };

  return (
    <section className="py-12 md:py-18 px-6 md:px-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center overflow-hidden">
      {/* Title & Introduction Block */}
      <div className="lg:col-span-1 border-0 lg:col-span-5 flex flex-col gap-6" id="hero-intro">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-dark/5 border border-brand-dark/10 rounded-full w-fit">
          <Sparkles size={12} className="text-brand-accent animate-pulse" />
          <span className="font-mono text-[10px] uppercase tracking-wider text-brand-dark/60">Creative Portfolio</span>
        </div>

        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight text-brand-dark">
          A place to display your <span className="font-normal italic text-brand-accent">masterpiece</span>.
        </h2>

        <p className="font-sans text-sm md:text-base text-brand-dark/70 leading-relaxed max-w-md">
          Curating raw intersections of high-fashion couture, timeless concrete architectures, and cinematic street narratives. Capturing light as a physical entity.
        </p>

        {/* Mini stats or badges */}
        <div className="mt-2 grid grid-cols-2 gap-4 border-t border-brand-dark/15 pt-6 font-sans">
          <div>
            <p className="font-serif text-3xl font-semibold text-brand-dark">{deckPhotos[activeIndex].year}</p>
            <p className="font-mono text-[10px] text-brand-dark/40 uppercase tracking-wider">Latest Ledger</p>
          </div>
          <div>
            <p className="font-serif text-3xl font-semibold text-brand-accent">{deckPhotos[activeIndex].location.split(',')[0]}</p>
            <p className="font-mono text-[10px] text-brand-dark/40 uppercase tracking-wider">Current Focus</p>
          </div>
        </div>

        {/* Custom Interaction Guideline */}
        <div className="flex items-center gap-4 mt-2">
          <button
            onClick={handleNextCard}
            className="flex items-center gap-2 px-4 py-2.5 bg-brand-dark text-brand-beige hover:bg-brand-tangerine hover:text-brand-beige rounded-xl text-xs font-mono transition-all duration-300 shadow-sm cursor-pointer"
          >
            <ArrowLeftRight size={12} />
            Cycle Stack
          </button>
          <span className="font-mono text-[10px] text-brand-dark/50">
            Swipe the cards left/right or click the buttons to traverse the stack
          </span>
        </div>
      </div>

      {/* Decorative Stack Display with 3D perspective container */}
      <div 
        className="lg:col-span-7 flex flex-col items-center justify-center relative min-h-[460px] md:min-h-[520px]"
        style={{ perspective: '1200px' }}
      >
        
        {/* Animated Stack */}
        <div className="relative w-[280px] md:w-[350px] h-[360px] md:h-[430px] flex items-center justify-center">
          <AnimatePresence mode="popLayout">
            {deckPhotos.map((photo, index) => {
              // Calculate relative position where 0 is on top
              const relativePosition = (index - activeIndex + deckPhotos.length) % deckPhotos.length;
              const isTop = relativePosition === 0;

              // Beautiful fanning algorithm
              const rotation = isTop ? 0 : (relativePosition % 2 === 0 ? relativePosition * 3 : -relativePosition * 3);
              const offsetX = isTop ? 0 : (relativePosition % 2 === 0 ? relativePosition * 14 : -relativePosition * 14);
              const offsetY = isTop ? 0 : relativePosition * 10;
              const cardScale = isTop ? 1 : 1 - relativePosition * 0.04;

              return (
                <motion.div
                  key={photo.id}
                  style={{ 
                    zIndex: deckPhotos.length - relativePosition,
                    transformStyle: 'preserve-3d'
                  }}
                  drag={isTop ? 'x' : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.4}
                  onDragEnd={(event, info) => {
                    if (info.offset.x > 120) {
                      handlePrevCard();
                    } else if (info.offset.x < -120) {
                      handleNextCard();
                    }
                  }}
                  animate={{
                    scale: cardScale,
                    rotateZ: rotation,
                    x: isTop ? 0 : offsetX,
                    y: isTop ? 0 : offsetY,
                    filter: isTop ? 'blur(0px) contrast(1)' : `blur(${relativePosition * 0.4}px) contrast(0.95)`,
                  }}
                  whileHover={isTop ? { 
                    scale: 1.03,
                    rotateY: -8,
                    rotateX: 4,
                    boxShadow: '0 25px 50px -12px rgba(18, 18, 18, 0.25)'
                  } : {}}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 25,
                  }}
                  onClick={() => {
                    if (isTop) {
                      onSelectPhoto(photo);
                    } else {
                      setActiveIndex(index);
                    }
                  }}
                  className={`absolute w-full h-full bg-white p-4.5 rounded-3xl border border-brand-dark/10 cursor-pointer origin-bottom transition-shadow duration-300 shadow-xl ${isTop ? 'hover:shadow-2xl' : ''}`}
                >
                  {/* Photo frame */}
                  <div className="relative w-full h-[80%] overflow-hidden rounded-2xl bg-brand-dark/5">
                    <img
                      src={photo.imageUrl}
                      alt={photo.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover select-none transition-transform duration-700 hover:scale-105 pointer-events-none"
                    />
                    
                    {/* Floating Instagram/Auteur handle label exactly like the video's @coplin, @andrea */}
                    <div className={`absolute top-4 ${index % 2 === 0 ? 'left-4' : 'right-4'} px-3 py-1 bg-brand-beige border border-brand-dark/20 text-brand-dark font-mono text-xs font-semibold rounded-full shadow-md flex items-center gap-1.5 backdrop-blur-sm pointer-events-none`}>
                      <span className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-pulse"></span>
                      {photo.tag}
                    </div>

                    {/* Micro label bottom right on Top Card */}
                    {isTop && (
                      <div className="absolute bottom-4 right-4 bg-brand-dark/80 backdrop-blur-sm text-brand-beige px-3 py-1 rounded-full text-[10px] font-mono flex items-center gap-1 pointer-events-none">
                        <Eye size={10} /> View specifications
                      </div>
                    )}
                  </div>

                  {/* Photo details container */}
                  <div className="pt-4 flex items-center justify-between pointer-events-none">
                    <div className="max-w-[75%]">
                      <h3 className="font-serif font-medium text-brand-dark text-sm md:text-base truncate">
                        {photo.title}
                      </h3>
                      <p className="font-mono text-[9px] md:text-[10px] text-brand-dark/50 flex items-center gap-1 mt-0.5">
                        <MapPin size={8} /> {photo.location}
                      </p>
                    </div>
                    <div className="px-2.5 py-1 bg-brand-dark/5 rounded-lg border border-brand-dark/10 text-right">
                      <p className="font-mono text-[9px] font-semibold text-brand-dark uppercase tracking-wider">{photo.category}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Premium interaction: back and forth buttons flanking indicators */}
        <div className="flex items-center gap-4 mt-8 z-10">
          <button
            onClick={handlePrevCard}
            className="p-2 bg-white hover:bg-brand-dark hover:text-brand-beige text-brand-dark rounded-full border border-brand-dark/15 shadow-sm transition-all duration-300 cursor-pointer flex items-center justify-center hover:scale-105 active:scale-95"
            aria-label="Previous card"
            id="hero-deck-prev-btn"
          >
            <ChevronLeft size={16} className="stroke-[2.5]" />
          </button>

          <div className="flex gap-1.5 items-center">
            {deckPhotos.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-500 cursor-pointer ${activeIndex === index ? 'w-8 bg-brand-accent' : 'w-2.5 bg-brand-dark/20 hover:bg-brand-dark/40'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNextCard}
            className="p-2 bg-white hover:bg-brand-dark hover:text-brand-beige text-brand-dark rounded-full border border-brand-dark/15 shadow-sm transition-all duration-300 cursor-pointer flex items-center justify-center hover:scale-105 active:scale-95"
            aria-label="Next card"
            id="hero-deck-next-btn"
          >
            <ChevronRight size={16} className="stroke-[2.5]" />
          </button>
        </div>
      </div>
    </section>
  );
}
