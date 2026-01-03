
import React from 'react';
import { Check, Wifi, CreditCard, Globe } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface FeaturesProps {
  language: Language;
}

const Features: React.FC<FeaturesProps> = ({ language }) => {
  const t = translations[language].features;

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Feature Highlight */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 mb-24">
          
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              {t.titlePart1} <span className="text-mexic-green">{t.titlePart2}</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              <strong>{t.titlePart2}</strong> {t.description} 
              <strong> {t.descHighlight1}</strong> {t.descJoin}
              <strong> {t.descHighlight2}</strong>
            </p>
            
            <ul className="space-y-4 pt-4">
              {t.list.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="p-1 rounded-full bg-green-100 text-mexic-green">
                    <Check size={20} strokeWidth={3} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Visual Content (Card & Phone) */}
          <div className="lg:w-1/2 relative flex justify-center items-center">
             {/* Abstract Blob Background */}
             <div className="absolute w-[120%] h-[120%] bg-blue-50 rounded-full filter blur-3xl opacity-50 -z-10"></div>
             
             {/* The Card */}
             <div className="relative z-20 w-80 h-48 bg-gradient-to-br from-emerald-600 to-teal-800 rounded-2xl shadow-2xl p-6 text-white flex flex-col justify-between transform -rotate-6 transition-transform hover:rotate-0 duration-500 hover:scale-105">
                <div className="flex justify-between items-start">
                  <span className="font-bold text-xl tracking-wide">MexicPay</span>
                  <Wifi size={24} className="opacity-70 rotate-90" />
                </div>
                <div className="flex items-center gap-3">
                   <div className="w-10 h-7 bg-yellow-400 rounded-md opacity-90"></div>
                </div>
                <div>
                   <p className="font-mono text-sm tracking-widest opacity-90 mb-1">EDGAR C. LÓPEZ</p>
                   <div className="flex justify-between items-end">
                      <p className="font-mono text-xs opacity-70">.... 28772</p>
                      <div className="flex -space-x-2">
                         <div className="w-8 h-8 rounded-full bg-red-500/80"></div>
                         <div className="w-8 h-8 rounded-full bg-yellow-500/80"></div>
                      </div>
                   </div>
                </div>
             </div>

             {/* The Phone */}
             <div className="absolute right-0 top-10 z-10 w-40 h-80 bg-slate-900 rounded-[2rem] border-4 border-slate-800 shadow-xl overflow-hidden transform rotate-6 translate-x-10">
                <div className="bg-white h-full w-full p-3 flex flex-col items-center pt-8">
                   <div className="w-12 h-1 bg-slate-200 rounded-full mb-4"></div>
                   <h4 className="font-bold text-lg text-slate-800 mb-2">eSIM</h4>
                   <div className="w-full h-24 bg-blue-50 rounded-lg p-2 mb-2 border border-blue-100">
                      <div className="h-2 w-1/2 bg-slate-300 rounded mb-2"></div>
                      <div className="h-2 w-3/4 bg-slate-200 rounded"></div>
                   </div>
                   <button className="w-full bg-blue-500 text-white text-xs py-2 rounded-md font-bold mt-auto mb-4">
                      {t.phoneAction}
                   </button>
                </div>
             </div>
          </div>
        </div>

        {/* 3 Grid Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<CreditCard className="w-10 h-10 text-blue-800" />}
            title={t.card1Title}
            desc={t.card1Desc}
            bgColor="bg-blue-50"
            illustration={<div className="w-20 h-14 bg-blue-800 rounded-lg mx-auto shadow-lg relative flex items-center justify-center"><div className="w-full h-2 bg-white/20 absolute top-4"></div><div className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-green-500 border-2 border-white flex items-center justify-center"><Check size={8} color="white" /></div></div>}
          />
          <FeatureCard 
            icon={<Wifi className="w-10 h-10 text-emerald-600" />}
            title={t.card2Title}
            desc={t.card2Desc}
            bgColor="bg-emerald-50"
            illustration={<div className="relative w-20 h-20 mx-auto flex items-center justify-center"><div className="absolute w-full h-full bg-emerald-200 rounded-full opacity-30 animate-ping"></div><Globe className="text-emerald-600 relative z-10" size={48} /><div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center"><Check size={12} color="white" /></div></div>}
          />
          <FeatureCard 
            icon={<Globe className="w-10 h-10 text-blue-500" />}
            title={t.card3Title}
            desc={t.card3Desc}
            bgColor="bg-indigo-50"
            illustration={<div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full mx-auto flex items-center justify-center shadow-lg"><Globe className="text-white" size={40} /></div>}
          />
        </div>

      </div>
    </div>
  );
};

interface FeatureCardProps {
  title: string;
  desc: string;
  bgColor: string;
  icon: React.ReactNode;
  illustration: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, desc, bgColor, illustration }) => (
  <div className={`${bgColor} rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300 border border-transparent hover:border-slate-200`}>
    <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
    <div className="h-32 flex items-center justify-center my-4">
      {illustration}
    </div>
    <p className="text-slate-600 font-medium">{desc}</p>
  </div>
);

export default Features;
