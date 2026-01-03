
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import { ViewState, Language } from './types';

function App() {
  // Simple state-based routing to show landing or dashboard
  const [currentView, setCurrentView] = useState<ViewState>('landing');
  const [language, setLanguage] = useState<Language>('es');

  return (
    <div className="font-sans text-slate-900 bg-white">
      <Navbar 
        onNavigate={setCurrentView} 
        currentView={currentView} 
        language={language}
        setLanguage={setLanguage}
      />
      
      {currentView === 'landing' ? (
        <>
          <Hero language={language} />
          <Features language={language} />
          <HowItWorks language={language} />
          <Footer language={language} />
        </>
      ) : (
        <Dashboard language={language} />
      )}
    </div>
  );
}

export default App;
