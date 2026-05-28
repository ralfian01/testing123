import { useState, useMemo } from 'react';
import { Percent, TrendingUp, DollarSign, HelpCircle, ArrowRight } from 'lucide-react';

export default function Calculator() {
  const [activeTab, setActiveTab] = useState<'saving' | 'loan'>('saving');

  // Saving states
  const [saveAmount, setSaveAmount] = useState<number>(5000000); // initial 5jt
  const [savePeriod, setSavePeriod] = useState<number>(12); // months

  // Loan states
  const [loanAmount, setLoanAmount] = useState<number>(15000000); // initial 15jt
  const [loanPeriod, setLoanPeriod] = useState<number>(12); // months
  const [isMember, setIsMember] = useState<boolean>(true);

  // Formatting helper
  const formatIDR = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(num);
  };

  // Yield interest rate dictionary for simulator
  const savingNisbahRates: { [key: number]: number } = {
    3: 0.055, // 5.5% p.a equivalent
    6: 0.065, // 6.5% p.a equivalent
    12: 0.075, // 7.5% p.a equivalent
    24: 0.085, // 8.5% p.a equivalent
  };

  // Calculate saving projections
  const savingResults = useMemo(() => {
    const rate = savingNisbahRates[savePeriod] || 0.075;
    const estimatedProfit = saveAmount * (rate * (savePeriod / 12));
    const finalAmount = saveAmount + estimatedProfit;
    return {
      rate: rate * 100,
      estimatedProfit,
      finalAmount,
    };
  }, [saveAmount, savePeriod]);

  // Calculate loan projections
  const loanResults = useMemo(() => {
    const interestRate = isMember ? 0.05 : 0.075; // 5% flat for member, 7.5% flat non-member
    const totalMarkup = loanAmount * (interestRate * (loanPeriod / 12));
    const totalLiability = loanAmount + totalMarkup;
    
    const monthlyPrincipal = loanAmount / loanPeriod;
    const monthlyMargin = totalMarkup / loanPeriod;
    const monthlyInstallment = totalLiability / loanPeriod;

    return {
      rate: interestRate * 100,
      totalMarkup,
      totalLiability,
      monthlyPrincipal,
      monthlyMargin,
      monthlyInstallment,
    };
  }, [loanAmount, loanPeriod, isMember]);

  return (
    <section id="kalkulator" className="py-24 bg-white relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-red-650 font-bold font-display tracking-widest text-xs uppercase block text-red-600">
            Simulasi Kas &amp; Kredit
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
            Kalkulator Simulasi <span className="text-red-155 text-red-600">Simpan Pinjam</span>
          </h2>
          <p className="text-slate-550 text-sm sm:text-base max-w-xl mx-auto font-sans">
            Gunakan kalkulator digital interaktif di bawah ini untuk merencanakan tabungan berjangka syariah maupun cicilan permodalan UMKM Anda secara terbuka.
          </p>
          <div className="w-12 h-1 bg-red-600 mx-auto" />
        </div>

        {/* Calculator Outer Box */}
        <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200 rounded p-6 sm:p-8 shadow-sm">
          
          {/* Top Switcher Tabs */}
          <div className="flex bg-slate-200/60 p-1 rounded-sm mb-10 max-w-md mx-auto border border-slate-200">
            <button
              onClick={() => setActiveTab('saving')}
              className={`flex-1 py-2.5 px-3 rounded-sm text-xs font-bold uppercase tracking-tight transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                activeTab === 'saving'
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'text-slate-650 hover:text-red-600'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              Simpanan Berjangka
            </button>
            <button
              onClick={() => setActiveTab('loan')}
              className={`flex-1 py-2.5 px-3 rounded-sm text-xs font-bold uppercase tracking-tight transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                activeTab === 'loan'
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'text-slate-650 hover:text-red-600'
              }`}
            >
              <DollarSign className="w-3.5 h-3.5" />
              Pinjaman Pembiayaan
            </button>
          </div>

          {/* TAB CONTENT: SAVINGS CALCULATOR */}
          {activeTab === 'saving' ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Controls */}
              <div className="lg:col-span-7 space-y-6">
                {/* Save Amount */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Jumlah Simpanan Berjangka</label>
                    <span className="text-sm font-bold text-red-600 bg-red-50 py-0.5 px-2.5 rounded-sm border border-red-150-100/30">
                      {formatIDR(saveAmount)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1000000"
                    max="100000000"
                    step="500000"
                    value={saveAmount}
                    onChange={(e) => setSaveAmount(Number(e.target.value))}
                    className="w-full accent-red-600 h-1.5 bg-slate-200 rounded cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-bold uppercase tracking-tight">
                    <span>Rp 1 Juta</span>
                    <span>Rp 50 Juta</span>
                    <span>Rp 100 Juta</span>
                  </div>
                </div>

                {/* Tenor / Period Selection */}
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">Jangka Waktu Deposit (Tenor)</label>
                  <div className="grid grid-cols-4 gap-2">
                    {[3, 6, 12, 24].map((months) => (
                      <button
                        key={months}
                        type="button"
                        onClick={() => setSavePeriod(months)}
                        className={`py-2.5 px-2 rounded text-xs font-bold border transition-colors cursor-pointer ${
                          savePeriod === months
                            ? 'bg-red-50 border-red-400 text-red-700 font-extrabold'
                            : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-600'
                        }`}
                      >
                        {months} Bulan <span className="block text-[9px] text-slate-400 mt-0.5 font-normal">Nisbah {savingNisbahRates[months] * 100}% p.a</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-100 p-4 rounded border border-slate-200 flex items-start gap-2.5">
                  <HelpCircle className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  <p className="text-[11px] text-slate-500 leading-relaxed font-sans">
                    Sistem bagi hasil (Nisbah Mudarabah) disetahunkan dan dibayarkan secara adil setiap bulannya langsung cair ke rekening simpanan sukarela anggota. Bebas riba, transparan, dan dapat dicairkan kembali pada akhir tempo tanpa potongan denda administrasi.
                  </p>
                </div>
              </div>

              {/* Right Output Sheet */}
              <div className="lg:col-span-5 bg-slate-900 border border-slate-800 text-white rounded p-5 sm:p-6 flex flex-col justify-between shadow-sm">
                <div className="space-y-5">
                  <span className="text-[9px] font-bold text-red-450 text-red-400 bg-red-950/80 px-2.5 py-0.5 rounded-sm uppercase tracking-widest block w-fit border border-red-500/10">
                    Proyeksi Akumulasi Dana
                  </span>
                  
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-sans">Total Akhir Tenor</span>
                    <p className="text-2xl font-bold font-display text-white">{formatIDR(savingResults.finalAmount)}</p>
                  </div>

                  <hr className="border-slate-850 border-slate-800" />

                  {/* Receipt lists */}
                  <div className="space-y-3 text-xs font-sans">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Dana Pokok Awal</span>
                      <span className="font-bold">{formatIDR(saveAmount)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Nisbah Equivalen</span>
                      <span className="font-bold text-red-400">{savingResults.rate}% pertahun</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Tenor Berlangsung</span>
                      <span className="font-bold">{savePeriod} Bulan</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-slate-800 text-emerald-450 text-emerald-400 font-bold">
                      <span>Estimasi Hasil Keuntungan</span>
                      <span>+ {formatIDR(savingResults.estimatedProfit)}</span>
                    </div>
                  </div>
                </div>

                {/* Disclaimer CTA */}
                <div className="pt-6">
                  <a
                    href="#kontak"
                    className="w-full bg-red-650 bg-red-600 hover:bg-black text-white font-extrabold py-3 rounded text-center text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow shadow-red-950/10"
                  >
                    Setor Simpanan Sekarang
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <p className="text-[9px] text-slate-400 text-center mt-3 leading-relaxed">
                    *Ilustrasi di atas berupa estimasi kelipatan hasil. Bebas biaya admin bulanan secara syariat.
                  </p>
                </div>
              </div>

            </div>
          ) : (
            /* TAB CONTENT: LOANS CALCULATOR */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Controls */}
              <div className="lg:col-span-7 space-y-6">
                {/* Loan Amount */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Jumlah Permohonan Modal</label>
                    <span className="text-sm font-bold text-red-600 bg-red-50 py-0.5 px-2.5 rounded-sm border border-red-100">
                      {formatIDR(loanAmount)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="2000000"
                    max="80000000"
                    step="1000000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full accent-red-600 h-1.5 bg-slate-200 rounded cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-bold uppercase tracking-tight">
                    <span>Rp 2 Juta</span>
                    <span>Rp 40 Juta</span>
                    <span>Rp 80 Juta</span>
                  </div>
                </div>

                {/* Loan Tenor Selection */}
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">Masa Angsuran (Tenor)</label>
                  <div className="grid grid-cols-5 gap-1.5">
                    {[6, 12, 18, 24, 36].map((months) => (
                      <button
                        key={months}
                        type="button"
                        onClick={() => setLoanPeriod(months)}
                        className={`py-2.5 px-1 rounded text-xs font-bold border transition-all cursor-pointer ${
                          loanPeriod === months
                            ? 'bg-red-50 border-red-400 text-red-700 font-extrabold'
                            : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-600'
                        }`}
                      >
                        {months} Bln
                      </button>
                    ))}
                  </div>
                </div>

                {/* Membership Interest Status */}
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">Status Keanggotaan Pemohon</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div
                      onClick={() => setIsMember(true)}
                      className={`p-3.5 rounded border-2 cursor-pointer flex items-center justify-between transition-colors ${
                        isMember
                          ? 'bg-red-50/70 border-red-500 text-red-800'
                          : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-600'
                      }`}
                    >
                      <div>
                        <span className="block text-xs font-bold leading-none">Anggota Resmi</span>
                        <span className="text-[9px] text-slate-400 font-normal leading-normal mt-1 block">Tarif Keuntungan Rendah</span>
                      </div>
                      <span className="text-base font-bold text-red-600">5.0% <span className="text-[9px] font-normal block">flat / th</span></span>
                    </div>

                    <div
                      onClick={() => setIsMember(false)}
                      className={`p-3.5 rounded border-2 cursor-pointer flex items-center justify-between transition-colors ${
                        !isMember
                          ? 'bg-red-50/70 border-red-500 text-red-800'
                          : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-600'
                      }`}
                    >
                      <div>
                        <span className="block text-xs font-bold leading-none">Masyarakat Umum</span>
                        <span className="text-[9px] text-slate-400 font-normal leading-normal mt-1 block">Tarif Keuntungan Standar</span>
                      </div>
                      <span className="text-base font-bold text-slate-800">7.5% <span className="text-[9px] font-normal block">flat / th</span></span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Output Sheet */}
              <div className="lg:col-span-5 bg-slate-900 border border-slate-800 text-white rounded p-5 sm:p-6 flex flex-col justify-between shadow-sm">
                <div className="space-y-5">
                  <span className="text-[9px] font-bold text-red-400 bg-red-950/80 px-2.5 py-0.5 rounded-sm uppercase tracking-widest block w-fit border border-red-500/10">
                    Estimasi Angsuran Bulanan
                  </span>

                  <div className="space-y-0.5">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-sans">Nilai Angsuran / Bulan</span>
                    <p className="text-2xl font-bold font-display text-white">{formatIDR(loanResults.monthlyInstallment)}</p>
                  </div>

                  <hr className="border-slate-800" />

                  {/* Receipt lists */}
                  <div className="space-y-3 text-xs font-sans">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Pinjaman Pokok</span>
                      <span className="font-bold">{formatIDR(loanAmount)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Angsuran Pokok Bulanan</span>
                      <span className="font-bold">{formatIDR(loanResults.monthlyPrincipal)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Porsi Margin Koperasi</span>
                      <span className="font-bold text-red-400">{formatIDR(loanResults.monthlyMargin)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Masa Tenor Pinjam</span>
                      <span className="font-bold">{loanPeriod} Bulan</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-slate-800 text-slate-350">
                      <span>Total Biaya Jasa Koperasi</span>
                      <span className="font-semibold text-amber-550 text-amber-400">+{formatIDR(loanResults.totalMarkup)}</span>
                    </div>
                  </div>
                </div>

                {/* Disclaimer CTA */}
                <div className="pt-6">
                  <a
                    href="#kontak"
                    className="w-full bg-red-650 bg-red-600 hover:bg-black text-white font-extrabold py-3 rounded text-center text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow shadow-red-950/10"
                  >
                    Ajukan Pembiayaan Modal
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <p className="text-[9px] text-slate-400 text-center mt-3 leading-relaxed">
                    *Simulasi di atas berupa estimasi kasar di awal. Pengajuan akhir memerlukan analisis kelayakan usaha nyata.
                  </p>
                </div>
              </div>

            </div>
          )}

        </div>
      </div>
    </section>
  );
}
