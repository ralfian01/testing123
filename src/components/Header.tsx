import React, { useState, useEffect } from 'react';
import { Menu, X, Award, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenRegister: () => void;
  activeSection: string;
}

export default function Header({ onOpenRegister, activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Profil', href: '#profil' },
    { label: 'Unit Usaha', href: '#unit-usaha' },
    { label: 'Katalog Produk', href: '#katalog' },
    { label: 'Simulasi Keuangan', href: '#kalkulator' },
    { label: 'Kegiatan & Blog', href: '#blog' },
    { label: 'Kontak', href: '#kontak' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md pb-3.5 pt-3.5 border-b border-slate-200 shadow-sm shadow-slate-100/50'
            : 'bg-white/95 backdrop-blur-md pb-4 pt-4 border-b border-slate-200/50'
        }`}
        id="navbar"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#beranda" onClick={(e) => handleNavClick(e, '#beranda')} className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center text-white font-bold text-xs uppercase shadow-sm">
                <span className="text-white font-bold text-xs uppercase">KM</span>
              </div>
              <div>
                <span className="block text-lg font-bold text-slate-900 font-display tracking-tight leading-none">
                  Koperasi <span className="text-red-600">Sejahtera</span>
                </span>
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest leading-none block mt-0.5">
                  Mulia
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`text-sm tracking-tight transition-colors duration-200 pb-1 block cursor-pointer border-b-2 ${
                      isActive
                        ? 'text-red-600 border-red-605 font-bold border-red-600'
                        : 'text-slate-500 border-transparent hover:text-red-600 hover:border-slate-300 font-medium'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Actions Desktop */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={onOpenRegister}
                id="btn-register-desktop"
                className="bg-red-600 hover:bg-slate-900 text-white text-sm font-semibold px-5 py-2 rounded-full shadow-lg shadow-red-100/80 transition-colors duration-200 flex items-center gap-1.5"
              >
                Gabung Anggota
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-red-600 hover:bg-slate-50 transition-colors"
              aria-label="Toggle Menu"
              id="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`lg:hidden fixed inset-x-0 top-[60px] bg-white border-b border-slate-200 shadow-lg transition-all duration-300 ease-in-out transform origin-top ${
            isMobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
          }`}
        >
          <div className="px-4 pt-3 pb-6 space-y-1 bg-white">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`block px-4 py-3 text-base transition-colors ${
                    isActive
                      ? 'bg-slate-50 text-red-600 font-bold border-l-4 border-red-600'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-red-600 font-medium'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <div className="pt-4 border-t border-slate-100">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenRegister();
                }}
                id="btn-register-mobile"
                className="w-full bg-red-600 hover:bg-slate-900 text-white font-bold py-3 px-4 rounded-lg shadow-md shadow-red-100 text-center flex items-center justify-center gap-2"
              >
                Gabung Anggota Koperasi
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
