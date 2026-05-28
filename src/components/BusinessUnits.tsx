import { useState } from 'react';
import { DollarSign, ShoppingBag, Users, Smartphone, HelpCircle, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { businessUnits } from '../data';
import { BusinessUnit } from '../types';

// Simple Dynamic Icon mapper
const IconMap: { [key: string]: any } = {
  DollarSign: DollarSign,
  ShoppingBag: ShoppingBag,
  Users: Users,
  Smartphone: Smartphone,
};

export default function BusinessUnits() {
  const [selectedUnit, setSelectedUnit] = useState<BusinessUnit | null>(null);

  return (
    <section id="unit-usaha" className="py-24 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-red-600 font-bold font-display tracking-widest text-xs uppercase block">
            Layanan &amp; Usaha Utama
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
            Unit Usaha <span className="text-red-600">Kolektif</span> Koperasi
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto">
            Kami mengelola empat lini usaha mandiri terintegrasi guna memberikan imbal balik sisa hasil usaha (SHU) yang maksimal untuk para anggota.
          </p>
          <div className="w-12 h-1 bg-red-600 mx-auto" />
        </div>

        {/* Business Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {businessUnits.map((unit) => {
            const IconComponent = IconMap[unit.iconName] || HelpCircle;
            return (
              <div
                key={unit.id}
                onClick={() => setSelectedUnit(unit)}
                className="bg-white rounded p-6 sm:p-8 border border-slate-200 shadow-sm hover:border-red-600 transition-colors duration-200 cursor-pointer group flex flex-col justify-between"
              >
                <div className="space-y-5">
                  {/* Icon Card */}
                  <div className="w-11 h-11 rounded bg-red-50 text-red-600 flex items-center justify-center border border-red-100 group-hover:bg-red-600 group-hover:text-white transition-colors duration-250">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Body info */}
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-bold font-display text-slate-900 group-hover:text-red-600 transition-colors">
                      {unit.name}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                      {unit.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Trigger Label */}
                <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-400 group-hover:text-red-600 transition-colors">
                  <span className="tracking-wider">SISTEM BAGI HASIL</span>
                  <span className="flex items-center gap-1">
                    Selengkapnya <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Info Banner */}
        <div className="mt-12 bg-slate-900 text-white rounded p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm border border-slate-800">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-lg font-bold font-display">Butuh Dukungan Finansial Usaha Anda?</h4>
            <p className="text-slate-400 text-sm max-w-2xl">
              Seluruh anggota berhak mengajukan permohonan modal usaha dari unit simpan pinjam syariah kami dengan akad murni bebas riba yang meringankan.
            </p>
          </div>
          <a
            href="#kalkulator"
            className="bg-red-600 hover:bg-black text-white font-extrabold uppercase tracking-wider px-6 py-3 rounded text-xs transition-colors cursor-pointer block text-center shadow-md shadow-red-950/20 shrink-0"
          >
            Hitung Simulasi Pinjaman
          </a>
        </div>

      </div>

      {/* Details Dialog Modal */}
      {selectedUnit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop screen filter */}
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setSelectedUnit(null)}
          />

          {/* Dialog Frame */}
          <div className="relative bg-white rounded w-full max-w-md p-6 sm:p-8 shadow-xl border border-slate-200 z-20 animate-fade-in">
            {/* Header close btn */}
            <button
              onClick={() => setSelectedUnit(null)}
              className="absolute top-4 right-4 p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
              aria-label="Tutup"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Body */}
            <div className="space-y-5 pt-2">
              {/* Heading Icon Mapping */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded bg-red-50 text-red-600 flex items-center justify-center border border-red-100 shrink-0">
                  {(() => {
                    const ModalIcon = IconMap[selectedUnit.iconName] || HelpCircle;
                    return <ModalIcon className="w-5 h-5" />;
                  })()}
                </div>
                <div>
                  <span className="text-[9px] font-bold text-red-600 uppercase tracking-widest block">Unit Kerja Koperasi</span>
                  <h3 className="text-base font-bold font-display text-slate-900 leading-tight">
                    {selectedUnit.name}
                  </h3>
                </div>
              </div>

              {/* Sub-text Detail */}
              <div className="space-y-3.5">
                <blockquote className="border-l-2 border-red-600 pl-3.5 text-slate-500 italic text-xs leading-relaxed">
                  &ldquo;{selectedUnit.description}&rdquo;
                </blockquote>
                <div className="space-y-1.5 pt-2">
                  <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wide">Mekanisme Kerja &amp; Program:</h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {selectedUnit.longDescription}
                  </p>
                </div>
              </div>

              {/* Legal and trust stamp */}
              <div className="p-4 rounded bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <h5 className="font-bold text-slate-900 text-[11px] uppercase tracking-wide">Jaminan Transparan &amp; Berkeadilan</h5>
                  <p className="text-slate-550 text-[10px] leading-relaxed">
                    Unit usaha ini diaudit secara eksternal setiap buku tahunan dan diawasi ketat oleh komite perwakilan dewan syariah.
                  </p>
                </div>
              </div>

              {/* Trigger CTAs */}
              <div className="pt-3 border-t border-slate-100 flex gap-2.5">
                <button
                  onClick={() => setSelectedUnit(null)}
                  className="flex-1 bg-slate-105 bg-slate-100 hover:bg-slate-200 text-slate-750 text-slate-705 text-slate-700 font-semibold py-2.5 px-3 rounded text-center text-xs transition-colors cursor-pointer"
                >
                  Tutup
                </button>
                <a
                  href="#kontak"
                  onClick={() => setSelectedUnit(null)}
                  className="flex-1 bg-red-600 hover:bg-slate-900 text-white font-semibold py-2.5 px-3 rounded text-center text-xs uppercase tracking-wider transition-colors block text-ellipsis overflow-hidden whitespace-nowrap"
                >
                  Hubungi CS
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
