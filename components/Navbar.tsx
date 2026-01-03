
import React from 'react';
import { Menu } from 'lucide-react';
import { ViewState, Language } from '../types';
import { translations } from '../translations';

interface NavbarProps {
  onNavigate: (view: ViewState) => void;
  currentView: ViewState;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView, language, setLanguage }) => {
  const t = translations[language].navbar;
  
  // Determine text color based on view
  const isDashboard = currentView === 'dashboard';
  const textColorClass = isDashboard ? 'text-white' : 'text-gray-700';
  const logoColorClass = isDashboard ? 'text-white' : 'text-emerald-800';
  const buttonHoverClass = isDashboard ? 'hover:text-blue-400' : 'hover:text-mexic-green';
  const dividerClass = isDashboard ? 'text-gray-600' : 'text-gray-300';

  const languages: { code: Language; flag: string; label: string }[] = [
    { code: 'es', flag: 'https://flagcdn.com/w20/es.png', label: 'ES' },
    { code: 'en', flag: 'https://flagcdn.com/w20/us.png', label: 'EN' },
    { code: 'jp', flag: 'https://flagcdn.com/w20/jp.png', label: 'JP' },
    { code: 'kr', flag: 'https://flagcdn.com/w20/kr.png', label: 'KR' },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 p-6 flex justify-between items-center max-w-7xl mx-auto">
      <div 
        className={`text-2xl font-bold ${logoColorClass} cursor-pointer flex items-center gap-1 transition-colors duration-300`}
        onClick={() => onNavigate('landing')}
      >
        <span className="text-3xl">🇲🇽</span> Mexic<span className={isDashboard ? "text-blue-500" : "text-mexic-green"}>Pay</span>
      </div>

      <div className={`hidden md:flex items-center space-x-8 font-medium ${textColorClass} transition-colors duration-300`}>
        <button className={`${buttonHoverClass} transition-colors`}>{t.howItWorks}</button>
        <button className={`${buttonHoverClass} transition-colors`}>{t.esim}</button>
        <button className={`${buttonHoverClass} transition-colors`}>{t.faq}</button>
        <button className={`${buttonHoverClass} transition-colors`}>{t.contact}</button>
      </div>

      <div className="flex items-center space-x-4">
        <div className={`hidden md:flex items-center space-x-3 ${isDashboard ? 'text-gray-300' : 'text-gray-600'}`}>
           {languages.map((lang, index) => (
             <React.Fragment key={lang.code}>
               <button 
                 onClick={() => setLanguage(lang.code)}
                 className={`flex items-center gap-1 transition-opacity ${language === lang.code ? 'opacity-100 font-bold' : 'opacity-50 hover:opacity-100'}`}
               >
                 <img src={lang.flag} className="w-5" alt={lang.label} />
                 <span className="text-xs">{lang.label}</span>
               </button>
               {index < languages.length - 1 && <span className={`text-xs ${dividerClass}`}>|</span>}
             </React.Fragment>
           ))}
        </div>
        
        {/* Mobile menu trigger */}
        <button className={`md:hidden ${textColorClass}`}>
          <Menu size={24} />
        </button>

        {currentView === 'landing' && (
           <button 
             onClick={() => onNavigate('dashboard')}
             className="hidden md:block text-xs text-gray-400 hover:text-gray-600 underline ml-4"
           >
             {t.simulate}
           </button>
        )}
        {currentView === 'dashboard' && (
           <button 
             onClick={() => onNavigate('landing')}
             className="text-sm bg-white/10 text-white border border-white/20 px-4 py-1.5 rounded-full hover:bg-white/20 transition-all backdrop-blur-sm"
           >
             {t.logout}
           </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
