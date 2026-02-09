import React, { useState, useEffect } from 'react';
import Layout from './Layout';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-brand-lightGray py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <Layout>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <img 
              src="https://github.com/Gfhandel.png" 
              alt="Moses Charles" 
              className={`w-10 h-10 rounded-full object-cover border-2 transition-all ${
                isScrolled ? 'border-brand-primary' : 'border-white'
              }`}
            />
            <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 ${isScrolled ? 'border-white' : 'border-brand-primary'}`}></div>
          </div>
          <div className="flex flex-col">
            <span className={`uppercase font-black text-sm tracking-tighter leading-none transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}>
              Moses Charles
            </span>
            <span className={`text-[9px] uppercase font-bold tracking-[0.2em] transition-colors opacity-70 ${isScrolled ? 'text-neutral-500' : 'text-white/80'}`}>
              Product Engineer
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className={`text-xs font-black uppercase tracking-widest transition-colors ${
                isScrolled ? 'text-neutral-500 hover:text-brand-primary' : 'text-white/80 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className={`px-8 py-2.5 text-[10px] font-black uppercase tracking-widest rounded-full transition-all shadow-lg ${
              isScrolled 
                ? 'bg-brand-primary text-white hover:bg-neutral-900' 
                : 'bg-white text-brand-primary hover:bg-neutral-100'
            }`}
          >
            Hire
          </a>
        </nav>

        <button className={`md:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M4 8h16M4 16h16" />
          </svg>
        </button>
      </div>
      </Layout>
    </header>
  );
};

export default Header;