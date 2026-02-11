import React, { useState, useEffect } from 'react';
import { ViewState } from '../types';
import { Menu, X, Croissant, Phone, ShoppingCart } from 'lucide-react';
import Button from './Button';

interface NavbarProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
  cartItemCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView, cartItemCount }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Beranda', value: ViewState.HOME },
    { label: 'Katalog', value: ViewState.CATALOG },
    { label: 'Tentang', value: ViewState.ABOUT },
    { label: 'AI Chef', value: ViewState.ASSISTANT },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md border-b border-stone-200/50 shadow-sm py-2' 
          : 'bg-white/95 border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group" 
            onClick={() => setView(ViewState.HOME)}
          >
            <div className={`mr-3 p-2 rounded-xl transition-colors duration-300 ${scrolled ? 'bg-earth-50' : 'bg-earth-50'}`}>
              <Croissant className="w-6 h-6 text-earth-600" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold text-stone-900 tracking-tight leading-none">
                Lyly<span className="text-earth-600">Bakery</span>
              </span>
              <span className="text-[10px] text-stone-400 font-medium tracking-[0.25em] uppercase mt-0.5">Est. 2010</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => setView(item.value)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  currentView === item.value 
                    ? 'bg-earth-50 text-earth-700' 
                    : 'text-stone-500 hover:text-stone-900 hover:bg-stone-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Cart Icon */}
            <button 
              onClick={() => setView(ViewState.CART)}
              className="relative p-2.5 rounded-full text-stone-600 hover:text-earth-600 hover:bg-stone-50 transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute top-1 right-1 inline-flex items-center justify-center min-w-[18px] h-[18px] text-[10px] font-bold leading-none text-white bg-earth-600 rounded-full border-2 border-white">
                  {cartItemCount}
                </span>
              )}
            </button>

            <div className="hidden md:block w-px h-6 bg-stone-200 mx-1"></div>

            <div className="hidden md:block">
              <Button 
                variant="primary" 
                size="sm" 
                onClick={() => setView(ViewState.CONTACT)}
                className="rounded-full px-5 text-sm font-semibold shadow-lg shadow-earth-500/20"
              >
                Hubungi Kami
              </Button>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden ml-2">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-stone-600 hover:text-earth-600 transition-colors bg-stone-50 rounded-lg"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[72px] bg-white border-t border-stone-100 shadow-xl p-4 animate-fade-in-up rounded-b-2xl mx-2">
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  setView(item.value);
                  setIsMobileMenuOpen(false);
                }}
                className={`flex w-full items-center px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  currentView === item.value
                    ? 'bg-earth-50 text-earth-700'
                    : 'text-stone-600 hover:bg-stone-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 mt-3 border-t border-stone-100">
               <Button 
                variant="primary" 
                className="w-full justify-center rounded-xl py-3"
                onClick={() => {
                  setView(ViewState.CONTACT);
                  setIsMobileMenuOpen(false);
                }}
              >
                <Phone className="w-4 h-4 mr-2" /> Hubungi Kami
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;