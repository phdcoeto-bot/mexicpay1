
import React from 'react';
import { CreditCard, QrCode, ArrowRight, Download, Wifi, Smartphone, Globe, Info } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

const CARD_LINK = "https://wise.com/jp/account/";
const ESIM_LINK = "https://www.telcel.com/esim/amigo";

interface DashboardProps {
  language: Language;
}

const Dashboard: React.FC<DashboardProps> = ({ language }) => {
  const t = translations[language].dashboard;

  return (
    <div className="min-h-screen bg-[#0B0F19] pt-32 pb-12 px-4 font-sans selection:bg-blue-500 selection:text-white">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Globe size={12} /> {t.globalAccess}
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
            {t.titleLine1} <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">{t.titleHighlight}</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Card 1: Digital Card */}
          <div className="group bg-[#111625] rounded-[2rem] border border-slate-800/60 p-1 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20">
            <div className="h-full bg-[#111625] rounded-[1.8rem] p-8 flex flex-col relative overflow-hidden">
               {/* Illustration Area */}
               <div className="h-64 w-full mb-8 relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-transparent rounded-2xl"></div>
                  
                  {/* The Digital Card Visual */}
                  <div className="relative w-72 h-44 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-xl transform group-hover:-translate-y-2 group-hover:scale-105 transition-all duration-500 p-6 flex flex-col justify-between z-10">
                     <div className="flex justify-between items-start">
                        <Wifi className="text-white/50 rotate-90" size={24} />
                        <span className="text-white/80 font-mono text-sm">DEBIT</span>
                     </div>
                     <div className="flex items-center gap-3">
                         <div className="w-8 h-5 bg-yellow-400/90 rounded opacity-80"></div>
                     </div>
                     <div className="flex justify-between items-end">
                        <div className="text-white font-mono text-lg tracking-widest">**** 4280</div>
                        <span className="text-xs text-white/60">VISA</span>
                     </div>
                  </div>

                  {/* Blurred card behind */}
                  <div className="absolute w-72 h-44 bg-blue-500/20 rounded-2xl transform rotate-6 translate-x-4 translate-y-4 blur-sm -z-0"></div>
               </div>

               {/* Content */}
               <div className="flex flex-col flex-grow">
                 <div className="flex items-center gap-2 mb-3">
                    <CreditCard size={16} className="text-blue-500" />
                    <span className="text-xs font-bold text-blue-500 tracking-wider uppercase">{t.cardSpending}</span>
                 </div>
                 <h2 className="text-2xl font-bold text-white mb-3">{t.cardTitle}</h2>
                 <p className="text-slate-400 leading-relaxed mb-8 flex-grow">
                   {t.cardDesc}
                 </p>
                 
                 <a 
                   href={CARD_LINK}
                   target="_blank"
                   rel="noreferrer"
                   className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-6 rounded-2xl transition-all flex items-center justify-center gap-2 group/btn"
                 >
                   {t.cardButton}
                   <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                 </a>
               </div>
            </div>
          </div>

          {/* Card 2: eSIM */}
          <div className="group bg-[#111625] rounded-[2rem] border border-slate-800/60 p-1 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-900/10">
             <div className="h-full bg-[#111625] rounded-[1.8rem] p-8 flex flex-col relative overflow-hidden">
               {/* Illustration Area */}
               <div className="h-64 w-full mb-8 relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/10 to-transparent rounded-2xl"></div>
                  
                  {/* The eSIM Visual */}
                  <div className="relative z-10 flex flex-col items-center justify-center">
                     {/* QR Code Container */}
                     <div className="w-32 h-32 bg-[#1A2033] rounded-3xl border border-slate-700 flex items-center justify-center relative shadow-2xl group-hover:scale-105 transition-transform duration-500">
                        <QrCode className="text-white" size={64} strokeWidth={1.5} />
                        {/* Status Dot */}
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full border-4 border-[#111625] flex items-center justify-center">
                          <span className="text-white text-xs font-bold">4G</span>
                        </div>
                     </div>
                     
                     {/* Connection Lines (Visual Decoration) */}
                     <div className="absolute w-[300px] h-[300px] border border-slate-800/50 rounded-full animate-pulse"></div>
                     <div className="absolute w-[200px] h-[200px] border border-slate-700/50 rounded-full"></div>
                  </div>
               </div>

               {/* Content */}
               <div className="flex flex-col flex-grow">
                 <div className="flex items-center gap-2 mb-3">
                    <Smartphone size={16} className="text-indigo-400" />
                    <span className="text-xs font-bold text-indigo-400 tracking-wider uppercase">{t.esimConnectivity}</span>
                 </div>
                 <h2 className="text-2xl font-bold text-white mb-3">{t.esimTitle}</h2>
                 <p className="text-slate-400 leading-relaxed mb-4 flex-grow">
                   {t.esimDesc}
                 </p>
                 
                 {/* Currency Note */}
                 <div className="flex items-start gap-2 mb-6 text-emerald-400/80 bg-emerald-900/10 p-3 rounded-lg border border-emerald-900/20">
                    <Info size={16} className="mt-0.5 flex-shrink-0" />
                    <p className="text-xs">
                      {t.esimNote} <strong>{t.esimCurrency}</strong>.
                    </p>
                 </div>
                 
                 <a 
                   href={ESIM_LINK}
                   target="_blank"
                   rel="noreferrer"
                   className="w-full bg-[#1A2033] hover:bg-[#232942] border border-slate-700 hover:border-slate-600 text-white font-bold py-4 px-6 rounded-2xl transition-all flex items-center justify-center gap-2 group/btn"
                 >
                   {t.esimButton}
                   <Download size={18} className="text-slate-400 group-hover/btn:text-white transition-colors" />
                 </a>
               </div>
            </div>
          </div>

        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
            <p className="text-slate-500 text-sm">
                {t.footerPowered} 
                <span className="mx-2">•</span> 
                {t.footerSecure} 
                <span className="mx-2">•</span> 
                {t.footerNetwork}
            </p>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
