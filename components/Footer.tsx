
import React from 'react';
import { STRIPE_LINK } from '../constants';
import { ChevronRight } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface FooterProps {
  language: Language;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = translations[language].footer;
  const navT = translations[language].navbar;

  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CTA Section */}
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 text-center mb-16 shadow-inner border border-slate-100">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            {t.ctaTitle}
          </h2>
          <a 
            href={STRIPE_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-mexic-green hover:bg-emerald-700 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-transform transform hover:-translate-y-1 text-lg"
          >
            {t.ctaButton} <ChevronRight size={20} />
          </a>
        </div>

        {/* Links Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 border-t border-slate-200 pt-8">
          
          <div className="flex space-x-6 mb-4 md:mb-0 font-medium">
            <a href="#" className="hover:text-mexic-green">{navT.howItWorks}</a>
            <a href="#" className="hover:text-mexic-green">{navT.esim}</a>
            <a href="#" className="hover:text-mexic-green">{navT.faq}</a>
            <a href="#" className="hover:text-mexic-green">{navT.contact}</a>
          </div>

          <div className="flex items-center space-x-4 mb-4 md:mb-0 opacity-50">
             {/* Flags in footer are just decorative/representative now since switching is in Navbar */}
             <div className="flex items-center gap-2">
                <img src="https://flagcdn.com/w20/cn.png" alt="CN" className="grayscale" />
                <span className="text-slate-300">|</span>
                <img src="https://flagcdn.com/w20/us.png" alt="EN" className="grayscale" />
                <span className="text-slate-300">|</span>
                <img src="https://flagcdn.com/w20/es.png" alt="ES" className="grayscale" />
                <span className="text-slate-300">|</span>
                <img src="https://flagcdn.com/w20/jp.png" alt="JP" className="grayscale" />
             </div>
          </div>

        </div>
        
        <div className="text-center md:text-left mt-4 text-xs text-slate-400">
          <span className="mr-4">{t.legal}</span>
          <span className="mr-4">|</span>
          <span className="mr-4">{t.privacy}</span>
          <span className="mr-4">|</span>
          <span>{t.terms}</span>
        </div>

        <div className="text-center mt-8 text-slate-300 text-xs">
          © {new Date().getFullYear()} MexicPay. {t.rights}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
