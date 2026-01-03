
import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';

interface HowItWorksProps {
  language: Language;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ language }) => {
  const t = translations[language].howItWorks;
  const steps = t.steps;

  return (
    <div className="bg-slate-50 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-4">
             <span className="text-slate-400 uppercase tracking-widest text-xs font-bold">{t.badge}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            {t.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 -z-10"></div>

          {steps.map((step, index) => (
            <div key={step.id} className="relative flex flex-col items-center text-center group">
              {/* Step Number Bubble */}
              <div className={`w-10 h-10 rounded-full bg-emerald-600 text-white font-bold text-lg flex items-center justify-center shadow-lg mb-6 z-10 group-hover:scale-110 transition-transform`}>
                {step.id}
              </div>

              {/* Card Content with arrow shape effect via CSS clip-path or simple styling */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 w-full h-full flex flex-col items-center hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg text-slate-800 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500 mb-4">{step.description}</p>
                
                {/* Mini Illustration Placeholder */}
                <div className="mt-auto pt-4 w-full flex justify-center opacity-80">
                   {index === 0 && <div className="w-16 h-12 bg-slate-100 rounded flex items-center justify-center"><span className="text-2xl">📝</span></div>}
                   {index === 1 && <div className="w-16 h-12 bg-slate-100 rounded flex items-center justify-center relative"><span className="text-2xl z-10">💳</span><span className="absolute -bottom-1 -right-1 text-xs">📱</span></div>}
                   {index === 2 && <div className="w-16 h-12 bg-slate-100 rounded flex items-center justify-center"><span className="text-2xl">⚙️</span></div>}
                   {index === 3 && <div className="w-16 h-12 bg-slate-100 rounded flex items-center justify-center"><span className="text-2xl">✈️</span></div>}
                </div>
              </div>
              
              {/* Arrow Indicator for visual flow (CSS triangle) */}
              {index < steps.length - 1 && (
                 <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20 text-slate-300">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                 </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default HowItWorks;
