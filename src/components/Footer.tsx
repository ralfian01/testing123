import React from 'react';
import { Award, ChevronRight, Mail, Phone, MapPin, Facebook, ShieldCheck } from 'lucide-react';
import { COOPERATIVE_PROFILE } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-12 border-t border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6">
            <a href="#beranda" onClick={(e) => handleNavClick(e, '#beranda')} className="flex items-center gap-2.5 w-fit">
              <div className="w-9 h-9 rounded bg-red-600 flex items-center justify-center text-white">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-base font-bold text-white tracking-tight leading-none font-display uppercase">
                  Koperasi Sejahtera
                </span>
                <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest leading-none block mt-0.5 font-display">
                  Mulia
                </span>
              </div>
            </a>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-sans">
              Membangun kemandirian ekonomi daerah secara digital berbasis asas gotong royong, syariah bebas riba, dan kejujuran tata kelola berkeadilan.
            </p>

            <div className="flex items-center gap-2.5 text-[10px] uppercase tracking-wider text-slate-400 font-bold bg-slate-950 p-3 rounded border border-slate-800/80 w-fit">
              <ShieldCheck className="w-4 h-4 text-red-500 shrink-0" />
              <span>Badan Hukum: RI No. 512/BH/XI/2015</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-bold tracking-wider uppercase text-slate-205 border-l-2 border-red-600 pl-3">Sitemap Menu</h4>
            <ul className="space-y-2.5 text-slate-400 text-sm">
              {[
                { label: 'Pertama (Beranda)', href: '#beranda' },
                { label: 'Profil Koperasi', href: '#profil' },
                { label: 'Layanan Unit Usaha', href: '#unit-usaha' },
                { label: 'Katalog Produk Anggota', href: '#katalog' },
                { label: 'Kalkulator Simulasi', href: '#kalkulator' },
                { label: 'Update Blog Kegiatan', href: '#blog' },
                { label: 'Hubungi Customer Care', href: '#kontak' },
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="hover:text-red-500 transition-colors flex items-center gap-1 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-red-600 group-hover:translate-x-0.5 transition-transform" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-bold tracking-wider uppercase text-slate-205 border-l-2 border-red-600 pl-3">Kontak Legal</h4>
            <ul className="space-y-3.5 text-slate-400 text-sm">
              <li className="flex gap-2.5 items-start">
                <MapPin className="w-4 h-4 text-red-650 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{COOPERATIVE_PROFILE.address}</span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Phone className="w-4 h-4 text-red-655 shrink-0" />
                <span>{COOPERATIVE_PROFILE.phone}</span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Mail className="w-4 h-4 text-red-655 shrink-0" />
                <span className="hover:text-red-500 transition-colors">{COOPERATIVE_PROFILE.email}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Closing Notice & Attribution details */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p className="text-center sm:text-left">
            &copy; {currentYear} Koperasi Sejahtera Mulia. Hak Cipta Dilindungi Undang-Undang. Sesuai Undang-Undang Perkoperasian RI.
          </p>
          <div className="flex gap-4">
            <span className="hover:text-red-500 hover:underline transition-colors shrink-0">Syarat Ketentuan AD/ART</span>
            <span className="hover:text-red-500 hover:underline transition-colors shrink-0">Kebijakan Privasi Siber</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
