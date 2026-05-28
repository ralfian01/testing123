import { CheckCircle, Award, Target, Flame, Users2 } from 'lucide-react';
import { COOPERATIVE_PROFILE } from '../data';

export default function Profile() {
  return (
    <section id="profil" className="py-24 bg-white relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-red-600 font-bold font-display tracking-widest text-xs uppercase block">
            Profil Koperasi
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight leading-tight">
            Mengenal Lebih Dekat <br className="hidden sm:block" />
            <span className="text-red-155 text-red-600">Koperasi Sejahtera Mulia</span>
          </h2>
          <div className="w-12 h-1 bg-red-650 mx-auto" />
        </div>

        {/* Introduction Summary Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold font-display text-slate-900 leading-snug">
              Semangat Kekeluargaan untuk Kemaslahatan Finansial Kolektif Sejak 2015
            </h3>
            <p className="text-slate-500 leading-relaxed text-sm sm:text-base font-sans">
              {COOPERATIVE_PROFILE.description}
            </p>
            <p className="text-slate-500 leading-relaxed text-sm sm:text-base font-sans">
              Hukum tertinggi pengelolaan kami bertumpu kepada kepercayaan anggota. Melalui implementasi sistem digital terintegrasi, setiap sen pergerakan dana simpan pinjam berada di bawah pemantauan bersama, demi kejujuran mutlak dan keadilan bersama.
            </p>

            {/* Quick Badges */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-sm bg-red-50 flex items-center justify-center text-red-600 mt-1 shrink-0">
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm font-display uppercase tracking-wider text-[11px]">Legalitas Resmi</h4>
                  <p className="text-xs text-slate-500">BH No. 512/BH/M.KUKM/XI/2015</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-sm bg-red-50 flex items-center justify-center text-red-600 mt-1 shrink-0">
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm font-display uppercase tracking-wider text-[11px]">Tata Kelola Syariah</h4>
                  <p className="text-xs text-slate-500">Bebas praktik riba, akad transparan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Image or Illustrated Card */}
          <div className="lg:col-span-6">
            <div className="rounded border border-slate-200 overflow-hidden shadow-sm aspect-video relative group bg-slate-50">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800&h=450"
                alt="Kerja Koperasi"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent flex items-end p-6">
                <div>
                  <p className="text-[10px] font-bold text-red-400 uppercase tracking-widest mb-1 font-mono">Pusat Operasional</p>
                  <h4 className="text-sm font-bold font-display text-white leading-normal">Pusat Layanan Terpadu Koperasi Sejahtera Mulia, Jakarta</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          
          {/* Vision */}
          <div className="bg-slate-900 text-white rounded p-8 sm:p-10 shadow-sm border border-slate-800 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded bg-red-600/20 text-red-500 flex items-center justify-center border border-red-500/10">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-display uppercase tracking-wider">Visi Koperasi</h3>
            </div>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base italic font-sans">
              &ldquo;{COOPERATIVE_PROFILE.vision}&rdquo;
            </p>
          </div>

          {/* Mission */}
          <div className="bg-slate-50 border border-slate-200 rounded p-8 sm:p-10 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded bg-red-50 text-red-600 flex items-center justify-center border border-red-100">
                <Flame className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display uppercase tracking-wider">Misi Utama Kami</h3>
            </div>
            <ul className="space-y-4">
              {COOPERATIVE_PROFILE.missions.map((misi, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded bg-red-105 bg-red-100 text-red-800 text-[10px] font-extrabold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-slate-650 text-xs sm:text-sm leading-relaxed">
                    {misi}
                  </p>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Leadership Team Section */}
        <div className="pt-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-red-650 font-bold font-display tracking-widest text-[10px] uppercase block">
              Dewan Pengurus
            </span>
            <h3 className="text-2xl font-bold font-display text-slate-900">Menjaga Amanah Anggota</h3>
            <p className="text-slate-550 text-sm">Direksi pengurus Koperasi masa bakti berjalan yang disahkan dalam keputusan RAT Anggota.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {COOPERATIVE_PROFILE.leadership.map((leader, index) => (
              <div
                key={index}
                className="bg-white rounded p-6 border border-slate-200 text-center hover:border-red-600 transition-all duration-300 group shadow-sm"
              >
                <div className="w-20 h-20 rounded overflow-hidden mx-auto mb-4 border border-slate-200 shadow-sm">
                  <img
                    src={leader.avatar}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="font-bold text-slate-900 text-base leading-tight mb-1 font-display">
                  {leader.name}
                </h4>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{leader.role}</p>
                <div className="mt-3 text-[10px] text-slate-500 bg-slate-50 border border-slate-200 px-3 py-0.5 rounded-sm inline-block uppercase font-bold tracking-tight">
                  Sertifikasi Koperasi Madya
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
