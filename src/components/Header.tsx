
import React from 'react';
import { ChefHat, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-3 bg-white/90 shadow-md backdrop-blur-sm' : 'py-5 bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ChefHat className="w-8 h-8 text-culinary-red" />
            <h1 className="text-2xl font-serif font-bold bg-gradient-to-r from-culinary-red to-culinary-yellow bg-clip-text text-transparent">
              Chef-gemini
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="nav-link active">Início</a>
            <a href="#" className="nav-link">Sobre</a>
            <a href="#" className="nav-link">Contato</a>
            <a href="#" className="nav-link">Ajuda</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-full hover:bg-muted transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-culinary-red" />
            ) : (
              <Menu className="w-6 h-6 text-culinary-red" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in">
          <nav className="container mx-auto py-4 px-6 flex flex-col space-y-4">
            <a href="#" className="nav-link active">Início</a>
            <a href="#" className="nav-link">Sobre</a>
            <a href="#" className="nav-link">Contato</a>
            <a href="#" className="nav-link">Ajuda</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
