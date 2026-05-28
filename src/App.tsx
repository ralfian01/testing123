/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Profile from './components/Profile';
import BusinessUnits from './components/BusinessUnits';
import Catalog from './components/Catalog';
import Calculator from './components/Calculator';
import Blog from './components/Blog';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import RegistrationModal from './components/RegistrationModal';

export default function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');

  // Interactive scroll tracker for high-fidelity active class updates
  useEffect(() => {
    const sections = ['beranda', 'profil', 'unit-usaha', 'katalog', 'kalkulator', 'blog', 'kontak'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // safe top offset padding

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 antialiased selection:bg-red-600 selection:text-white">
      {/* Top sticky Navigation Header */}
      <Header
        onOpenRegister={() => setIsRegisterOpen(true)}
        activeSection={activeSection}
      />

      {/* Hero Section */}
      <Hero onOpenRegister={() => setIsRegisterOpen(true)} />

      {/* Profile Section */}
      <Profile />

      {/* Business Unit list */}
      <BusinessUnits />

      {/* Catalog Grid */}
      <Catalog />

      {/* Calculator Simulation Widget */}
      <Calculator />

      {/* Blog & News Feeds */}
      <Blog />

      {/* FAQ & Quick Contact Forms */}
      <ContactForm />

      {/* Compliant Footer License */}
      <Footer />

      {/* Floating Interactive Membership Wizard Dialog */}
      <RegistrationModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />
    </div>
  );
}

