
import React from 'react';
import { STRIPE_LINK } from '../constants';
import { ChevronRight } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface HeroProps {
  language: Language;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const t = translations[language].hero;

  return (
    <div className="relative w-full min-h-[90vh] bg-gradient-to-b from-blue-300 via-blue-100 to-white overflow-hidden pt-24 pb-12">
      {/* Background Elements simulating the landscape */}
      <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-blue-200/50 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative h-full flex flex-col md:flex-row items-center">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 z-10 space-y-6 pt-10 md:pt-0">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-md leading-tight">
            {t.title} <br/>
            <span className="text-white">{t.subtitle}</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-700 font-medium max-w-lg leading-relaxed bg-white/30 backdrop-blur-sm p-4 rounded-xl border border-white/40">
            {t.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href={STRIPE_LINK}
              target="_blank"
              rel="noreferrer"
              className="bg-mexic-green hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1 text-center"
            >
              {t.ctaStart}
            </a>
            <button className="bg-white hover:bg-gray-50 text-gray-800 font-bold py-3 px-8 rounded-full shadow-md border border-gray-200 flex items-center justify-center gap-2 transition-transform transform hover:-translate-y-1">
              {t.ctaHow} <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Right Content - The Anime Traveler */}
        <div className="w-full md:w-1/2 relative mt-12 md:mt-0 flex justify-center md:justify-end">
           {/* Decorative elements behind character */}
           <div className="absolute top-10 right-10 w-64 h-64 bg-yellow-300/20 rounded-full blur-3xl"></div>
           
           {/* Character Simulation */}
           <div className="relative z-10 w-[350px] md:w-[450px]">
             {/* Using a high quality placeholder that resembles the style or just a nice travel illustration */}
             <img 
               src="https://images.unsplash.com/photo-1512552288940-3a300922a275?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
               alt="Traveler with backpack" 
               className="rounded-3xl shadow-2xl border-4 border-white rotate-3 transform hover:rotate-0 transition-all duration-500 object-cover h-[500px] w-full"
             />
             
             {/* Floating Elements */}
             <div className="absolute bottom-20 -left-10 bg-white p-3 rounded-lg shadow-xl animate-bounce duration-[3000ms]">
                <div className="flex items-center gap-2">
                   <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center text-white text-xs">US</div>
                   <div className="text-xs font-bold text-gray-700">{t.passport}</div>
                </div>
             </div>
           </div>
        </div>
      </div>
      
      {/* Decorative Wave at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
