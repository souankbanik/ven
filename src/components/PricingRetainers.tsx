import { useState } from 'react';
import { Check, ArrowRight, ShieldCheck, HeartHandshake, FileText } from 'lucide-react';
import { motion } from 'motion/react';

interface RetainerPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  badge?: string;
  badgeColor?: 'accent' | 'tangerine' | 'lime';
  description: string;
  features: string[];
}

export default function PricingRetainers() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans: RetainerPlan[] = [
    {
      id: '1',
      name: 'Single Editorial Campaign',
      price: '1,499',
      period: 'per full day rate',
      description: 'Perfect for local brands, individual fashion lines, and architectural portfolios looking for a single bespoke campaign layout.',
      features: [
        '8 Hours total active shoot block',
        'Up to 3 design styling shifts',
        'Advanced high key / low key studio layout',
        '35 Bespoke masterfully edited digital ledgers',
        'Full catalog camera spec raw ledger access',
        'Digital download delivery within 7 working days'
      ]
    },
    {
      id: '2',
      name: 'Agency Creative Retainer',
      price: '3,899',
      period: 'regular monthly payment',
      badge: 'Popular Choice',
      badgeColor: 'tangerine',
      description: 'Ideal for modeling agencies, real estate developers, and active boutiques needing reliable rolling visual outputs.',
      features: [
        '3 Independent day-shoots per month',
        'Priority booking calendars & reserve backup dates',
        'Fashion editorial and street documentary domains',
        '120 Ultra-high resolution final master files',
        'Extracted color palette design integrations',
        'Fine Art print license included (up to 15 prints)',
        'Next-day rapid digital delivery'
      ]
    },
    {
      id: '3',
      name: 'Enterprise Couture & Art',
      price: '9,999',
      period: 'regular annual partnership',
      badge: 'Elite Brand',
      badgeColor: 'lime',
      description: 'Prestigious global brands requiring extensive global campaigns, massive architectural documentation, and custom licensing.',
      features: [
        '10 Custom shoot Blocks worldwide',
        'All global travel fees fully pre-integrated',
        'Private Studio space setup and team styling crew',
        'Standard and commercial advertising license',
        '30 bespoke physical Archival Giclée prints',
        'Dedicated assistant, styling & makeup direction',
        'Ultimate security backups & lifetime ledger storage'
      ]
    }
  ];

  return (
    <section className="py-20 bg-brand-dark/5 border-t border-b border-brand-dark/10" id="pricing-plans">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-mono text-[10px] uppercase tracking-widest text-brand-dark/40 mb-3 flex items-center justify-center gap-1.5">
            <ShieldCheck size={12} className="text-brand-accent" /> TRUSTED TRANSACTION DIRECTIVES
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight text-brand-dark">
            Membership & <span className="font-normal italic text-brand-accent">Retainers</span>
          </h2>
          <p className="font-sans text-xs md:text-sm text-brand-dark/60 mt-3.5 leading-relaxed">
            Choose a custom schedule or quarterly retainer to lock in exclusive shooting schedules. Fully integrated with clear licensing guides. No unexpected invoicing.
          </p>
        </div>

        {/* Pricing Layout Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const isSelected = selectedPlan === plan.id;
            const badgeClasses = {
              accent: 'bg-brand-accent text-brand-beige',
              tangerine: 'bg-brand-tangerine text-brand-beige',
              lime: 'bg-brand-lime text-brand-dark font-black'
            };

            return (
              <div 
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`relative bg-white border rounded-3xl p-6.5 md:p-8 flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                  isSelected 
                    ? 'border-brand-accent ring-2 ring-brand-accent/20 translate-y-[-4px] shadow-xl' 
                    : 'border-brand-dark/10 hover:border-brand-dark/25 hover:translate-y-[-2px] hover:shadow-lg'
                }`}
              >
                {/* Floating badge */}
                {plan.badge && plan.badgeColor && (
                  <span className={`absolute top-5 right-5 px-3 py-1 text-[9px] font-mono uppercase tracking-widest rounded-full ${badgeClasses[plan.badgeColor]} shadow`}>
                    {plan.badge}
                  </span>
                )}

                {/* Info & Price */}
                <div>
                  <h3 className="font-serif text-xl font-semibold text-brand-dark">
                    {plan.name}
                  </h3>
                  <p className="font-sans text-xs text-brand-dark/60 mt-1 pb-4 border-b border-brand-dark/5 min-h-[46px]">
                    {plan.description}
                  </p>

                  <div className="flex items-baseline gap-1 mt-6">
                    <span className="font-mono text-lg text-brand-dark/40">$</span>
                    <span className="font-serif text-4xl md:text-5xl font-light tracking-tight text-brand-dark">
                      {plan.price}
                    </span>
                    <span className="font-mono text-[10px] text-brand-dark/40 uppercase tracking-widest pl-1">
                      {plan.period}
                    </span>
                  </div>

                  {/* Checklist features */}
                  <ul className="mt-8 flex flex-col gap-3 font-sans text-xs text-brand-dark/75">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2.5">
                        <span className="p-0.5 bg-brand-accent/10 text-brand-accent rounded-md mt-0.5">
                          <Check size={11} className="stroke-[3]" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Action button inside plans */}
                <div className="mt-8 pt-6 border-t border-brand-dark/5">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      alert(`Commission request initiated: ${plan.name} plan configuration loaded into checkout.`);
                    }}
                    className={`w-full py-3 px-4 rounded-xl text-xs font-sans font-bold flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? 'bg-brand-accent text-brand-beige'
                        : 'bg-brand-dark text-brand-beige hover:bg-brand-accent'
                    }`}
                  >
                    Select Plan Retainer
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantees or client service confidence footer */}
        <div className="mt-14 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 font-sans text-center border-t border-brand-dark/10 pt-10">
          <div className="flex flex-col items-center gap-2">
            <div className="p-3 bg-brand-dark/5 rounded-full text-brand-accent">
              <HeartHandshake size={18} />
            </div>
            <h4 className="font-serif font-semibold text-brand-dark text-sm">Full Creative Synergy</h4>
            <p className="text-xs text-brand-dark/50 px-4">Collaborative styling design reviews and concept sketches provided prior to clicking release of shutter.</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="p-3 bg-brand-dark/5 rounded-full text-brand-tangerine">
              <ShieldCheck size={18} />
            </div>
            <h4 className="font-serif font-semibold text-brand-dark text-sm">Commercial Copy Protection</h4>
            <p className="text-xs text-brand-dark/50 px-4">Bespoke rights transfer agreements drafted seamlessly within minutes of signing retainer contracts.</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="p-3 bg-brand-dark/5 rounded-full text-brand-lime">
              <FileText size={18} />
            </div>
            <h4 className="font-serif font-semibold text-brand-dark text-sm">Transparent Invoicing</h4>
            <p className="text-xs text-brand-dark/50 px-4">No fine print or hidden material rental charges. Our estimates represent actual client invoice amounts.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
