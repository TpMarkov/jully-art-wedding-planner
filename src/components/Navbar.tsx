import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';
import { JULLY_ART_DATA } from '../constants';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Начало', path: '/' },
    { name: 'За JullyArt', path: '/za-jullyart' },
    { name: 'Услуги', path: '/uslugi' },
    { name: 'Галерия', path: '/galeriq' },
    { name: 'Контакти', path: '/kontakti' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 py-6",
      isScrolled ? "bg-primary/80 backdrop-blur-xl py-4 border-b border-inverted/5" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link to="/" className="flex items-center gap-3">
            <img src="https://www.jullyart.com/common/logo2.png" alt="Jully Art" className="h-10 w-auto brightness-0 invert" />
          </Link>
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-secondary">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={cn(
                  "hover:text-inverted transition-colors uppercase tracking-widest text-[11px]",
                  location.pathname === link.path ? "text-inverted" : ""
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/kontakti" className="hidden md:block px-6 py-2 rounded-full border border-inverted/20 text-[11px] font-mono uppercase tracking-widest hover:bg-inverted hover:text-primary transition-all duration-300">
            Безплатна консултация
          </Link>
          <button 
            className="lg:hidden p-2 text-inverted"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-primary border-t border-inverted/10 overflow-hidden lg:hidden"
          >
            <div className="p-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className={cn(
                    "text-lg font-serif italic",
                    location.pathname === link.path ? "text-inverted" : "text-secondary"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/kontakti" className="w-full py-4 rounded-full bg-inverted text-primary font-medium text-center mt-4">
                Безплатна консултация
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
