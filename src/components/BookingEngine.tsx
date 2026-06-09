import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookingInquiry } from '../types';
import { Mail, Calendar, Sparkles, CheckCircle2, DollarSign, Calculator, ChevronRight, CornerDownRight } from 'lucide-react';

export default function BookingEngine() {
  const [formData, setFormData] = useState<BookingInquiry>({
    name: '',
    email: '',
    serviceType: 'fashion',
    shootDurationHours: 4,
    deliveryFormat: 'digital-only',
    locationType: 'studio',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const ServiceConfig: Record<string, { baseRate: number; name: string }> = {
    fashion: { baseRate: 250, name: 'Editorial High-Fashion' },
    architecture: { baseRate: 300, name: 'Brutalist & Interior Spaces' },
    portrait: { baseRate: 180, name: 'Raw Portrait Session' },
    street: { baseRate: 150, name: 'Nocturnal / Urban Capture' },
    narrative: { baseRate: 200, name: 'Conceptual / Fine Art Series' }
  };

  // Memoized client-side quote calculator based on inputs
  const estimatedQuote = useMemo(() => {
    const config = ServiceConfig[formData.serviceType] || { baseRate: 200 };
    const hourlyRate = config.baseRate;
    let total = hourlyRate * formData.shootDurationHours;
    
    // Add location fee
    if (formData.locationType === 'studio') {
      total += 350; // Studio rent & gear setup cost
    } else {
      total += 150; // Travel premium
    }

    // Add delivery prints fee
    if (formData.deliveryFormat === 'digital-and-print') {
      total += 200; // Archival printing and bespoke framing costs
    }

    return total;
  }, [formData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'shootDurationHours' ? Number(value) : value
    }));
  };

  const selectDelivery = (format: 'digital-only' | 'digital-and-print') => {
    setFormData((prev) => ({ ...prev, deliveryFormat: format }));
  };

  const selectLocation = (loc: 'studio' | 'on-location') => {
    setFormData((prev) => ({ ...prev, locationType: loc }));
  };

  const selectService = (service: string) => {
    setFormData((prev) => ({ ...prev, serviceType: service }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      serviceType: 'fashion',
      shootDurationHours: 4,
      deliveryFormat: 'digital-only',
      locationType: 'studio',
      message: ''
    });
    setSubmitted(false);
  };

  return (
    <section className="py-20 md:py-28 px-6 md:px-10 max-w-7xl mx-auto" id="book-commission">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left column: Overview and live calculator display */}
        <div className="lg:col-span- così lg:col-span-5 flex flex-col gap-6" id="calculator-meta">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-accent/5 border border-brand-accent/15 rounded-full w-fit">
            <Calculator size={12} className="text-brand-accent" />
            <span className="font-mono text-[10px] uppercase tracking-wider text-brand-dark/60">TRANSPARENT QUOTING</span>
          </div>

          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight text-brand-dark leading-tight">
            Book a Custom <span className="font-normal italic text-brand-accent">Commission</span>
          </h2>

          <p className="font-sans text-xs md:text-sm text-brand-dark/70 leading-relaxed">
            Configure your creative parameters below to get an instant digital valuation. We respect integrity we avoid surprise auxiliary pricing billing structures.
          </p>

          {/* Interactive Calculator Display Card */}
          <div className="bg-brand-dark text-brand-beige p-6 rounded-3xl border border-brand-dark/15 shadow-xl relative mt-4 overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-accent/30 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-brand-lime/20 rounded-full blur-2xl pointer-events-none"></div>

            <p className="font-mono text-[9px] text-brand-beige/50 uppercase tracking-widest mb-4 flex items-center gap-1">
              <CornerDownRight size={10} /> DIGITAL ESTIMATION ENGINE
            </p>

            <div className="flex items-baseline gap-1.5 border-b border-white/10 pb-6">
              <span className="font-mono text-xl text-brand-lime font-medium">$</span>
              <span className="font-serif text-5xl md:text-6xl font-light tracking-tight text-white transition-all duration-300">
                {estimatedQuote}
              </span>
              <span className="font-mono text-xs text-brand-beige/60">USD</span>
            </div>

            <div className="pt-6 flex flex-col gap-3 font-mono text-[11px] text-brand-beige/85">
              <div className="flex justify-between items-center">
                <span className="text-brand-beige/50 uppercase">Base Creative Rate</span>
                <span>${ServiceConfig[formData.serviceType]?.baseRate}/hr</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-brand-beige/50 uppercase">Session Duration</span>
                <span>{formData.shootDurationHours} Hours</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-brand-beige/50 uppercase">Location Standard</span>
                <span>{formData.locationType === 'studio' ? 'Studio Space rent (+$350)' : 'On-Location travel (+$150)'}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-brand-beige/50 uppercase">Delivery Directive</span>
                <span>{formData.deliveryFormat === 'digital-only' ? 'Digital Ledger Only' : 'Archival Bespoke Prints (+$200)'}</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-lime rounded-full animate-pulse"></span>
              <p className="font-mono text-[9px] text-brand-lime uppercase tracking-widest">Pricing represents honest human craft</p>
            </div>
          </div>
        </div>

        {/* Right column: Booking form card */}
        <div className="lg:col-span-7" id="inquiry-form-card">
          <div className="bg-white border border-brand-dark/10 p-6 md:p-8 rounded-3xl shadow-lg relative">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name-input" className="font-mono text-[10px] text-brand-dark/50 uppercase tracking-widest">
                        Full Name / Agency *
                      </label>
                      <input
                        id="name-input"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. Vogue Milan / Trisha"
                        className="p-3 bg-brand-beige/50 border border-brand-dark/10 rounded-xl focus:border-brand-accent focus:outline-none font-sans text-sm transition-colors text-brand-dark"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email-input" className="font-mono text-[10px] text-brand-dark/50 uppercase tracking-widest">
                        Digital Destination *
                      </label>
                      <input
                        id="email-input"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. creative@agency.com"
                        className="p-3 bg-brand-beige/50 border border-brand-dark/10 rounded-xl focus:border-brand-accent focus:outline-none font-sans text-sm transition-colors text-brand-dark"
                      />
                    </div>
                  </div>

                  {/* Service type grid selection */}
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[10px] text-brand-dark/50 uppercase tracking-widest">
                      Ledger Domain (Category)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                      {Object.entries(ServiceConfig).map(([key, config]) => (
                        <button
                          key={key}
                          type="button"
                          onClick={() => selectService(key)}
                          className={`p-2.5 rounded-xl border font-mono text-[9px] font-bold text-center transition-all cursor-pointer truncate ${formData.serviceType === key ? 'bg-brand-dark text-brand-beige border-brand-dark' : 'bg-brand-beige border-brand-dark/10 text-brand-dark hover:border-brand-dark/30'}`}
                        >
                          {config.name.split(' ')[0]}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Shoot duration slide */}
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-baseline">
                      <label htmlFor="duration-input" className="font-mono text-[10px] text-brand-dark/50 uppercase tracking-widest">
                        Project Duration
                      </label>
                      <span className="font-mono text-xs text-brand-accent font-semibold">
                        {formData.shootDurationHours} Hours Block
                      </span>
                    </div>
                    <input
                      id="duration-input"
                      type="range"
                      name="shootDurationHours"
                      min="2"
                      max="12"
                      step="1"
                      value={formData.shootDurationHours}
                      onChange={handleInputChange}
                      className="w-full accent-brand-accent cursor-pointer my-2"
                    />
                    <div className="flex justify-between font-mono text-[9px] text-brand-dark/30 uppercase">
                      <span>2h (quick test)</span>
                      <span>6h (half-day)</span>
                      <span>12h (full production/expo)</span>
                    </div>
                  </div>

                  {/* Radio selections for Location and Format */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Location type toggle */}
                    <div className="flex flex-col gap-2.5">
                      <span className="font-mono text-[10px] text-brand-dark/50 uppercase tracking-widest">
                        Production Space
                      </span>
                      <div className="flex bg-brand-dark/5 p-1 rounded-xl gap-1">
                        <button
                          type="button"
                          onClick={() => selectLocation('studio')}
                          className={`flex-1 py-1.5 text-[10px] font-mono font-bold rounded-lg transition-colors cursor-pointer ${formData.locationType === 'studio' ? 'bg-white text-brand-dark shadow-sm' : 'text-brand-dark/60 hover:text-brand-dark'}`}
                        >
                          STUDIO VANCE (+$350)
                        </button>
                        <button
                          type="button"
                          onClick={() => selectLocation('on-location')}
                          className={`flex-1 py-1.5 text-[10px] font-mono font-bold rounded-lg transition-colors cursor-pointer ${formData.locationType === 'on-location' ? 'bg-white text-brand-dark shadow-sm' : 'text-brand-dark/60 hover:text-brand-dark'}`}
                        >
                          ON-LOCATION (+$150)
                        </button>
                      </div>
                    </div>

                    {/* Delivery Format */}
                    <div className="flex flex-col gap-2.5">
                      <span className="font-mono text-[10px] text-brand-dark/50 uppercase tracking-widest">
                        Bespoke Delivery
                      </span>
                      <div className="flex bg-brand-dark/5 p-1 rounded-xl gap-1">
                        <button
                          type="button"
                          onClick={() => selectDelivery('digital-only')}
                          className={`flex-1 py-1.5 text-[10px] font-mono font-bold rounded-lg transition-colors cursor-pointer ${formData.deliveryFormat === 'digital-only' ? 'bg-white text-brand-dark shadow-sm' : 'text-brand-dark/60 hover:text-brand-dark'}`}
                        >
                          DIGITAL LEDGER
                        </button>
                        <button
                          type="button"
                          onClick={() => selectDelivery('digital-and-print')}
                          className={`flex-1 py-1.5 text-[10px] font-mono font-bold rounded-lg transition-colors cursor-pointer ${formData.deliveryFormat === 'digital-and-print' ? 'bg-white text-brand-dark shadow-sm' : 'text-brand-dark/60 hover:text-brand-dark'}`}
                        >
                          ART PRINTS (+$200)
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Special instruction message */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message-input" className="font-mono text-[10px] text-brand-dark/50 uppercase tracking-widest">
                      Mood Board & Aesthetic Notes
                    </label>
                    <textarea
                      id="message-input"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Share your Pinterest links or reference ledger serials..."
                      className="p-3 bg-brand-beige/50 border border-brand-dark/10 rounded-xl focus:border-brand-accent focus:outline-none font-sans text-sm transition-colors text-brand-dark placeholder:text-brand-dark/30"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="mt-2 py-3 px-6 bg-brand-dark hover:bg-brand-accent text-brand-beige font-sans text-sm font-semibold rounded-xl tracking-tight transition-all duration-300 shadow-md cursor-pointer flex items-center justify-center gap-2"
                  >
                    Transmit Inquiry Request
                    <ChevronRight size={16} />
                  </button>
                </motion.form>
              ) : (
                // Thank you section state
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12 px-6"
                >
                  <CheckCircle2 size={48} className="text-brand-accent mb-4" />
                  <h3 className="font-serif text-2xl font-medium text-brand-dark mb-2">Inquiry Transmitted</h3>
                  <p className="font-sans text-sm text-brand-dark/60 max-w-sm mb-6 leading-relaxed">
                    Thank you, <span className="font-semibold text-brand-dark">{formData.name}</span>. Your commissioning request has been logged. An editorial design outline will follow shortly to <span className="underline">{formData.email}</span>.
                  </p>
                  
                  <div className="w-full bg-brand-beige p-4 rounded-2xl text-left border border-brand-dark/10 font-mono text-[10px] text-brand-dark/70 mb-8 flex flex-col gap-2">
                    <p className="text-brand-dark/40 uppercase tracking-widest border-b border-brand-dark/10 pb-2 mb-1">TRANSMISSION SUMMARY</p>
                    <p><strong className="text-brand-dark/55 text-[9px] uppercase">PROJECT:</strong> {ServiceConfig[formData.serviceType]?.name}</p>
                    <p><strong className="text-brand-dark/55 text-[9px] uppercase">CAPSULE RATE:</strong> ${estimatedQuote} USD</p>
                    <p><strong className="text-brand-dark/55 text-[9px] uppercase">SPACE:</strong> {formData.locationType === 'studio' ? 'STUDIO VANCE WORKSPACE' : 'ON-LOCATION CAPTURE'}</p>
                    {formData.message && <p><strong className="text-brand-dark/55 text-[9px] uppercase">MEMO:</strong> "{formData.message.slice(0, 40)}..."</p>}
                  </div>

                  <button
                    onClick={handleReset}
                    className="px-6 py-2 bg-brand-dark/5 hover:bg-brand-dark/10 text-brand-dark hover:text-brand-dark font-sans text-xs font-semibold rounded-xl cursor-pointer"
                  >
                    Adjust Parameters & Re-send
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
