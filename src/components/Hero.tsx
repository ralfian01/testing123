import { ArrowRight, Award, TrendingUp, Users, ShieldCheck, CreditCard } from 'lucide-react';
import { COOPERATIVE_PROFILE } from '../data';

interface HeroProps {
  onOpenRegister: () => void;
}

export default function Hero({ onOpenRegister }: HeroProps) {
  const scrollToSection = (id: string) => {
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
    <section
      id="beranda"
      className="relative min-h-screen pt-36 pb-20 flex items-center overflow-hidden bg-white border-b border-slate-100"
    >
      {/* Decorative Grid & Circles */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-[360px] h-[360px] bg-red-50 rounded-full opacity-60" />
        <div className="absolute top-[20%] right-[-100px] w-[300px] h-[300px] bg-slate-50 rounded-full opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full animate-fade-in">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tagline Badge */}
            <span className="text-red-600 font-bold font-display tracking-widest text-xs uppercase mb-2 block">
              Sejak 2015 Melayani Negeri — Terpercaya &amp; Transparan
            </span>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display text-slate-900 tracking-tight leading-[1.1]">
              Bersama Membangun <br />
              <span className="text-red-600">Ekonomi Rakyat.</span>
            </h1>

            {/* Description */}
            <p className="text-slate-500 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
              Wadah kolaborasi ekonomi terpercaya untuk meningkatkan kesejahteraan anggota melalui tata kelola yang transparan, profesional dan berazaskan gotong royong modern.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onOpenRegister}
                id="hero-cta-register"
                className="w-full sm:w-auto bg-red-600 hover:bg-slate-900 text-white font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded transition-colors duration-200 flex items-center justify-center gap-1.5 shadow-md shadow-red-100"
              >
                Gabung Anggota
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollToSection('#unit-usaha')}
                id="hero-cta-explore"
                className="w-full sm:w-auto bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded transition-colors duration-200 flex items-center justify-center gap-1.5"
              >
                Pelajari Unit Usaha
              </button>
            </div>

            {/* Trust Anchors */}
            <div className="pt-6 border-t border-slate-100 grid grid-cols-3 gap-2 max-w-md mx-auto lg:mx-0">
              <div className="flex items-center gap-1.5 grayscale opacity-70">
                <ShieldCheck className="w-4 h-4 text-slate-800 shrink-0" />
                <span className="text-[11px] font-semibold text-slate-600 uppercase tracking-tight">Regulasi Resmi</span>
              </div>
              <div className="flex items-center gap-1.5 grayscale opacity-70">
                <TrendingUp className="w-4 h-4 text-slate-800 shrink-0" />
                <span className="text-[11px] font-semibold text-slate-600 uppercase tracking-tight">Bagi Hasil Adil</span>
              </div>
              <div className="flex items-center gap-1.5 grayscale opacity-70">
                <Users className="w-4 h-4 text-slate-800 shrink-0" />
                <span className="text-[11px] font-semibold text-slate-600 uppercase tracking-tight">Koperasi Modern</span>
              </div>
            </div>
          </div>

          {/* Hero Right Card Graphics */}
          <div className="lg:col-span-5">
            <div className="mx-auto max-w-sm lg:max-w-none">
              
              {/* Main Card (Minimal Box styling instead of glassmorphism) */}
              <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-lg shadow-sm">
                
                {/* Header title */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold font-display text-slate-400 uppercase tracking-widest">Akumulasi Kinerja</span>
                  </div>
                  <span className="text-[10px] font-bold text-red-600 bg-red-50 px-2.5 py-0.5 rounded-full uppercase tracking-wider">Status: Aktif</span>
                </div>

                <div className="space-y-6">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* Stat Item 1 */}
                    <div className="p-4 bg-slate-50/50 border border-slate-100 rounded-lg">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Anggota Aktif</span>
                      <p className="text-2xl font-bold text-slate-905 tracking-tight font-display">{COOPERATIVE_PROFILE.totalMembers}+</p>
                      <span className="text-[9px] text-slate-400 block uppercase mt-0.5">Warga Mandiri</span>
                    </div>

                    {/* Stat Item 2 */}
                    <div className="p-4 bg-slate-50/50 border border-slate-100 rounded-lg">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Masa Operasi</span>
                      <p className="text-2xl font-bold text-slate-905 tracking-tight font-display">{COOPERATIVE_PROFILE.yearsActive} Tahun</p>
                      <span className="text-[9px] text-slate-400 block uppercase mt-0.5">Pelayanan Sipil</span>
                    </div>

                    {/* Stat Item 3 */}
                    <div className="p-4 bg-slate-50/50 border border-slate-100 rounded-lg">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Nilai Aset</span>
                      <p className="text-2xl font-bold text-slate-905 tracking-tight font-display">{COOPERATIVE_PROFILE.assetValue}</p>
                      <span className="text-[9px] text-slate-400 block uppercase mt-0.5">Kas Terkelola</span>
                    </div>

                    {/* Stat Item 4 */}
                    <div className="p-4 bg-slate-50/50 border border-slate-100 rounded-lg">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Sisa Hasil Usaha</span>
                      <p className="text-2xl font-bold text-slate-905 tracking-tight font-display">Rp 450 Jt</p>
                      <span className="text-[9px] text-slate-400 block uppercase mt-0.5">Terdistribusi Adil</span>
                    </div>
                  </div>

                  {/* Trust Banner with clean minimalist red layout */}
                  <div className="bg-slate-900 text-white rounded-lg p-4 flex items-center justify-between shadow">
                    <div className="space-y-0.5">
                      <p className="text-[10px] text-slate-400 uppercase tracking-wider">Hasil Usaha Anggota</p>
                      <p className="text-sm font-bold font-display leading-snug">Sistem Bagi Hasil Transparan</p>
                    </div>
                    <button
                      onClick={onOpenRegister}
                      id="hero-stats-simulate"
                      className="bg-red-650 hover:bg-red-750 bg-red-650 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 transition-colors duration-200 shrink-0 border border-transparent hover:border-slate-800"
                    >
                      Buka Rincian
                    </button>
                  </div>
                </div>

              </div>
              
              <div className="mt-4 flex items-center justify-center gap-3 text-slate-400 text-xs">
                <div className="w-2 h-2 rounded-full bg-red-600" />
                <span className="uppercase tracking-wider font-semibold text-[10px]">Legalitas Resmi Koperasi Terakreditasi A</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
