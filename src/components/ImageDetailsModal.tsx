import { useState } from 'react';
import { motion } from 'motion/react';
import { Photo } from '../types';
import { X, Copy, Check, MapPin, Eye, Calendar, Compass, Aperture } from 'lucide-react';

interface ImageDetailsModalProps {
  photo: Photo | null;
  onClose: () => void;
  onNavigateToBooking: () => void;
}

export default function ImageDetailsModal({ photo, onClose, onNavigateToBooking }: ImageDetailsModalProps) {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  if (!photo) return null;

  const handleCopyColor = (color: string) => {
    navigator.clipboard.writeText(color);
    setCopiedColor(color);
    setTimeout(() => setCopiedColor(null), 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/85 backdrop-blur-md overflow-y-auto">
      {/* Background overlay Click to close */}
      <div className="absolute inset-0 cursor-default" onClick={onClose} />

      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: 'spring', damping: 25, stiffness: 220 }}
        className="relative bg-brand-beige w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl border border-brand-dark/10 grid grid-cols-1 md:grid-cols-12 max-h-[90vh] md:max-h-[85vh] z-10"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 bg-brand-dark hover:bg-brand-tangerine text-brand-beige rounded-full transition-all duration-200 cursor-pointer"
        >
          <X size={18} />
        </button>

        {/* Left Side: Photo panel */}
        <div className="md:col-span-7 bg-brand-dark flex items-center justify-center relative min-h-[300px] md:min-h-[500px]">
          <img
            src={photo.imageUrl}
            alt={photo.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover max-h-[50vh] md:max-h-[85vh] select-none"
          />
          <div className="absolute bottom-4 left-4 bg-brand-dark/75 backdrop-blur-sm text-brand-beige py-1.5 px-3.5 rounded-full text-xs font-mono flex items-center gap-2">
            <Compass size={12} className="animate-spin text-brand-lime" />
            {photo.location}
          </div>
        </div>

        {/* Right Side: Editorial & Technical meta */}
        <div className="md:col-span-5 p-6 md:p-8 flex flex-col justify-between overflow-y-auto max-h-[45vh] md:max-h-[85vh]">
          <div className="flex flex-col gap-5">
            {/* Tag/Category */}
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 bg-brand-dark text-brand-beige text-[10px] font-mono tracking-widest uppercase rounded">
                {photo.category}
              </span>
              <span className="text-xs font-mono text-brand-dark/40">
                Lgr #{photo.id} / Year {photo.year}
              </span>
            </div>

            {/* Title */}
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-regular leading-tight text-brand-dark">
                {photo.title}
              </h3>
              <p className="font-mono text-xs text-brand-accent mt-1">{photo.tag}</p>
            </div>

            {/* Description */}
            <p className="font-sans text-xs md:text-sm text-brand-dark/70 leading-relaxed">
              {photo.description}
            </p>

            {/* Camera Specs block - JetBrains Mono */}
            <div className="bg-brand-dark/5 p-4 rounded-2xl border border-brand-dark/10">
              <p className="font-mono text-[10px] text-brand-dark/40 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                <Aperture size={12} className="text-brand-accent" /> EXPOSURE DIRECTIVES
              </p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-3 font-mono text-xs text-brand-dark/80">
                <div className="flex flex-col">
                  <span className="text-[10px] text-brand-dark/40">CAMERA BODY</span>
                  <span className="font-medium text-brand-dark">{photo.specs.camera}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-brand-dark/40">LENS</span>
                  <span className="font-medium text-brand-dark">{photo.specs.lens}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-brand-dark/40">APERTURE</span>
                  <span className="font-medium text-brand-dark font-sans bold">{photo.specs.aperture}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-brand-dark/40">SHUTTER</span>
                  <span className="font-medium text-brand-dark">{photo.specs.shutterSpeed}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-brand-dark/40">ISO RATING</span>
                  <span className="font-medium text-brand-dark">{photo.specs.iso}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-brand-dark/40">LEDGER DATE</span>
                  <span className="font-medium text-brand-dark">Q3 - {photo.year}</span>
                </div>
              </div>
            </div>

            {/* Color Palette Extraction tool - Highly interactable */}
            <div>
              <p className="font-mono text-[10px] text-brand-dark/40 uppercase tracking-widest mb-2.5">
                CHROMATIC PALETTE
              </p>
              <div className="flex items-center gap-2">
                {photo.colorPalette.map((color) => {
                  const isCopied = copiedColor === color;
                  return (
                    <button
                      key={color}
                      onClick={() => handleCopyColor(color)}
                      style={{ backgroundColor: color }}
                      className="group relative w-10 h-10 rounded-xl border border-brand-dark/15 shadow-sm hover:scale-105 transition-all duration-200 cursor-pointer flex items-center justify-center text-white"
                      title={`Copy Hex: ${color}`}
                    >
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white font-mono text-[8px] absolute -bottom-6 px-1 py-0.5 rounded pointer-events-none z-30">
                        {color}
                      </span>
                      {isCopied ? (
                        <Check size={12} className="stroke-[3] drop-shadow-md text-brand-lime" />
                      ) : (
                        <Copy size={10} className="opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom Call to action inside Lightbox */}
          <div className="mt-8 pt-4 border-t border-brand-dark/10 flex items-center justify-between">
            <button
              onClick={() => {
                onClose();
                onNavigateToBooking();
              }}
              className="w-full text-center py-2.5 px-4 bg-brand-dark hover:bg-brand-accent text-brand-beige rounded-xl text-xs font-sans font-semibold tracking-tight transition-all duration-200 cursor-pointer"
            >
              Order Similar Shoot
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
