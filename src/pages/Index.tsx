
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import SearchSection from '../components/SearchSection';
import InstructionSection from '../components/InstructionSection';
import ResultSection from '../components/ResultSection';
import Footer from '../components/Footer';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  // State for result section visibility - in a real app this would be controlled by search submission
  const [showResults, setShowResults] = useState(false);
  
  return (
    <div className={`min-h-screen flex flex-col ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section with Background Gradient */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-culinary-cream/80 to-white pointer-events-none" />
          <SearchSection />
        </div>
        
        <InstructionSection />
        
        <ResultSection isVisible={showResults} />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
