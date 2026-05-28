import React, { useState } from 'react';
import { X, Sparkles, User, ShieldCheck, Mail, Phone, CreditCard, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const [step, setStep] = useState(1);
  
  // Form states
  const [formData, setFormData] = useState({
    fullName: '',
    nik: '',
    email: '',
    phone: '',
    gender: 'Laki-laki',
    address: '',
    mandatorySavings: 25000,
    voluntaryDeposit: 50000,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  if (!isOpen) return null;

  // Validation
  const validateStep1 = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Nama lengkap wajib diisi';
    if (!formData.nik.trim() || formData.nik.length < 16) {
      newErrors.nik = 'NIK harus berupa 16 digit angka valid';
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = 'Alamat email aktif tidak valid';
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      newErrors.phone = 'Nomor Telepon aktif tidak valid (min 10 digit)';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1) {
      if (validateStep1()) {
        setStep(2);
      }
    } else if (step === 2) {
      setStep(3);
    }
  };

  const handleBack = () => {
    setStep(Math.max(1, step - 1));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear errors as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSavingsChange = (value: number) => {
    setFormData((prev) => ({ ...prev, voluntaryDeposit: value }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-900/65 backdrop-blur-sm" onClick={onClose} />

      {/* Frame of modal */}
      <div className="relative bg-white rounded w-full max-w-lg overflow-hidden shadow-xl border border-slate-200 z-20 animate-fade-in flex flex-col max-h-[92vh]">
        
        {/* Head Bar indicator */}
        <div className="bg-slate-900 text-white p-5 sm:p-6 flex items-center justify-between shrink-0">
          <div>
            <div className="inline-flex items-center gap-1 bg-red-950/80 text-red-455 text-red-400 text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-sm mb-1.5 border border-red-500/10">
              <Sparkles className="w-3 h-3 text-red-450" />
              Pendaftaran Anggota
            </div>
            <h3 className="text-base sm:text-lg font-bold font-display tracking-tight leading-none uppercase">
              Gabung Koperasi Sejahtera
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Tutup"
            id="reg-close-btn"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Wizard Steps Counter Indicator */}
        <div className="px-5 py-3.5 bg-slate-50 border-b border-slate-200 flex justify-between text-[10px] font-bold tracking-wider text-slate-400 shrink-0 select-none">
          <span className={step >= 1 ? 'text-red-600 font-extrabold' : ''}>1. BIODATA</span>
          <span>&rarr;</span>
          <span className={step >= 2 ? 'text-red-600 font-extrabold' : ''}>2. SIMPANAN POKOK</span>
          <span>&rarr;</span>
          <span className={step >= 3 ? 'text-red-600 font-extrabold' : ''}>3. KARTU DIGITAL</span>
        </div>

        {/* Scrollable Form Body */}
        <div className="overflow-y-auto p-5 sm:p-6 flex-1">
          {/* STEP 1: PERSONAL BIODATA */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="space-y-0.5">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide font-display">Lengkapi Profil Sesuai e-KTP</h4>
                <p className="text-[11px] text-slate-500">Data wajib diisi dengan benar guna memproses pengesahan keanggotaan Anda.</p>
              </div>

              <div className="space-y-3.5">
                {/* Full name input */}
                <div className="space-y-1">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">Nama Lengkap Sesuai KTP</label>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 w-4 h-4 text-slate-405 text-slate-400" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Contoh: Siti Rahmawati S.E."
                      className={`w-full pl-9 pr-3 py-2 bg-white border rounded text-xs outline-none transition-colors ${
                        errors.fullName ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-red-650 focus:border-red-600'
                      }`}
                    />
                  </div>
                  {errors.fullName && <p className="text-[10px] text-red-500 font-bold">{errors.fullName}</p>}
                </div>

                {/* NIK input */}
                <div className="space-y-1">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">NIK KTP (16 Digit)</label>
                  <div className="relative">
                    <CreditCard className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      name="nik"
                      value={formData.nik}
                      onChange={handleChange}
                      placeholder="Contoh: 3201456102950001"
                      maxLength={16}
                      className={`w-full pl-9 pr-3 py-2 bg-white border rounded text-xs outline-none transition-colors ${
                        errors.nik ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-red-600'
                      }`}
                    />
                  </div>
                  {errors.nik && <p className="text-[10px] text-red-500 font-bold">{errors.nik}</p>}
                </div>

                {/* Grid: Email & phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-1">
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">Email Aktif</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="siti.rahma@email.com"
                        className={`w-full pl-9 pr-3 py-2 bg-white border rounded text-xs outline-none transition-colors ${
                          errors.email ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-red-600'
                        }`}
                      />
                    </div>
                    {errors.email && <p className="text-[10px] text-red-500 font-bold">{errors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1">
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">No. WhatsApp</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="081234567890"
                        className={`w-full pl-9 pr-3 py-2 bg-white border rounded text-xs outline-none transition-colors ${
                          errors.phone ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-red-600'
                        }`}
                      />
                    </div>
                    {errors.phone && <p className="text-[10px] text-red-500 font-bold">{errors.phone}</p>}
                  </div>
                </div>

                {/* Gender select and Address */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="sm:col-span-1 space-y-1">
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">Jenis Kelamin</label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-white border border-slate-200 focus:border-red-600 rounded text-xs outline-none cursor-pointer"
                    >
                      <option value="Laki-laki">Laki-laki</option>
                      <option value="Perempuan">Perempuan</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2 space-y-1">
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">Alamat e-KTP</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Jl. Manggis No. 12, RT 02/03"
                      className="w-full px-3 py-2 bg-white border border-slate-200 focus:border-red-655 focus:border-red-600 rounded text-xs outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: CHOOSE CAPITAL SAVINGS */}
          {step === 2 && (
            <div className="space-y-5 animate-fade-in">
              <div className="space-y-0.5">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide font-display">Penyetoran Simpanan Anggota</h4>
                <p className="text-[11px] text-slate-500">Mengklarifikasi kontribusi awal untuk pembukaan rekening resmi anggota Koperasi.</p>
              </div>

              <div className="space-y-4">
                {/* Fixed Fees Cards */}
                <div className="grid grid-cols-2 gap-3">
                  {/* Simpanan Pokok Card */}
                  <div className="p-3.5 rounded border border-slate-200 bg-slate-50 text-center">
                    <span className="text-[9px] font-bold text-slate-400 block uppercase mb-1">Setoran Pokok</span>
                    <strong className="text-base font-bold text-slate-900">Rp 100.000</strong>
                    <span className="block text-[9px] text-red-600 bg-red-50 border border-red-100 rounded-sm mt-1.5 py-0.5 max-w-[120px] mx-auto font-bold uppercase tracking-tight">1x Registrasi</span>
                  </div>

                  {/* Simpanan Wajib Card */}
                  <div className="p-3.5 rounded border border-slate-200 bg-slate-50 text-center">
                    <span className="text-[9px] font-bold text-slate-400 block uppercase mb-1">Setoran Wajib</span>
                    <strong className="text-base font-bold text-slate-900">Rp 25.000</strong>
                    <span className="block text-[9px] text-slate-500 bg-slate-200/60 rounded-sm mt-1.5 py-0.5 max-w-[120px] mx-auto font-bold uppercase tracking-tight">Setiap Bulan</span>
                  </div>
                </div>

                {/* Voluntary Supplementary choice */}
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">Simpanan Sukarela Awal (Opsional)</label>
                  <p className="text-[11px] text-slate-500 leading-normal">Simpanan sukarela ini bersifat fleksibel &amp; bebas diambil kapan saja tanpa denda potongan admin.</p>
                  
                  <div className="grid grid-cols-4 gap-1.5 pt-1">
                    {[0, 20000, 50000, 100000].map((val) => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => handleSavingsChange(val)}
                        className={`py-2 px-1 rounded-sm text-[10px] font-bold border transition-colors cursor-pointer ${
                          formData.voluntaryDeposit === val
                            ? 'bg-red-50 border-red-600 text-red-700 font-extrabold'
                            : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-600'
                        }`}
                      >
                        {val === 0 ? 'Tanpa Setoran' : `+ Rp ${new Intl.NumberFormat('id-ID').format(val)}`}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Total Invoice calculation */}
                <div className="bg-slate-50 p-4 rounded border border-slate-200 space-y-2 text-xs">
                  <div className="flex justify-between text-slate-500 font-normal">
                    <span>Simpanan Pokok (1 Kali Bayar)</span>
                    <span>Rp 100.000</span>
                  </div>
                  <div className="flex justify-between text-slate-500 font-normal">
                    <span>Simpanan Wajib Pertama</span>
                    <span>Rp 25.000</span>
                  </div>
                  {formData.voluntaryDeposit > 0 && (
                    <div className="flex justify-between text-slate-550 text-slate-500 font-normal">
                      <span>Simpanan Sukarela Pertama</span>
                      <span>Rp {new Intl.NumberFormat('id-ID').format(formData.voluntaryDeposit)}</span>
                    </div>
                  )}
                  <div className="pt-2 border-t border-slate-200 flex justify-between font-extrabold text-slate-900 text-xs sm:text-sm">
                    <span className="uppercase tracking-wide text-slate-600">Total Setoran Pertama</span>
                    <span className="text-red-600">
                      Rp {new Intl.NumberFormat('id-ID').format(125000 + formData.voluntaryDeposit)}
                    </span>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-red-605 text-red-600 shrink-0 mt-0.5" />
                  <p className="text-[10px] text-slate-500 leading-relaxed font-sans">
                     AD/ART ADOPSI: Dengan melanjutkan transaksi pembuatan modul kas ini, Anda mengonfirmasi kebenaran data e-KTP dan bersedia memenuhi AD/ART Koperasi draf terdaftar OJK/BH.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: MEMBERSHIP CARD */}
          {step === 3 && (
            <div className="space-y-5 text-center animate-fade-in py-2">
              <div className="space-y-1.5">
                <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-1 border border-emerald-100 shadow-sm animate-pulse">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold font-display text-slate-900 uppercase">Selamat Bergabung!</h4>
                <p className="text-[11px] text-slate-550 text-slate-400 max-w-sm mx-auto">
                  Registrasi digital Anda tuntas terekam. Kami telah menerbitkan Kartu ID Anggota Koperasi virtual resmi Anda di bawah ini:
                </p>
              </div>

              {/* VIRTUAL MEMBERSHIP CARD GRID MOCKUP - Minimalist Crisp Dark theme */}
              <div className="max-w-xs mx-auto aspect-[1.58/1] bg-slate-900 rounded p-4 border border-slate-800 text-left relative overflow-hidden shadow-md flex flex-col justify-between">
                {/* Chip decoration */}
                <div className="absolute top-4 right-4 w-9 h-6.5 rounded bg-amber-500/20 border border-amber-400/20 flex items-center justify-center">
                  <div className="w-6.5 h-4.5 border border-amber-400/10 rounded-sm" />
                </div>

                {/* Card Body Structure */}
                <div className="h-full flex flex-col justify-between relative z-10 text-white font-mono">
                  {/* Card head logo */}
                  <div>
                    <span className="text-[8px] font-bold text-red-400 uppercase tracking-widest block font-sans">Kartu Anggota Virtual</span>
                    <h5 className="text-[11px] font-bold uppercase tracking-tight font-sans text-slate-100">Koperasi Sejahtera</h5>
                  </div>

                  {/* Card Middle barcode pattern */}
                  <div>
                    <p className="text-sm font-extrabold tracking-widest text-white uppercase font-sans">
                      {formData.fullName || 'SITI RAHMAWATI'}
                    </p>
                    <div className="flex justify-between items-center text-[8px] text-slate-400 mt-1 font-sans">
                      <div>
                        <span>ID NIK ANGGOTA</span>
                        <p className="font-bold text-[9px] text-white">
                          {formData.nik ? `${formData.nik.substring(0, 4)} **** **** ${formData.nik.slice(-4)}` : '3201 **** **** 0001'}
                        </p>
                      </div>
                      <div className="text-right">
                        <span>TANGGAL BERGABUNG</span>
                        <p className="font-bold text-[9px] text-white">2026-05-27</p>
                      </div>
                    </div>
                  </div>

                  {/* Card footer secure badge */}
                  <div className="flex justify-between items-center text-[8px] text-slate-400 pt-1.5 border-t border-slate-800 font-sans">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-550 text-amber-500" />
                      BH No. 512/BH/XI/2015
                    </span>
                    <span className="text-red-400 font-bold tracking-wider uppercase bg-red-950/80 px-1.5 py-0.2 rounded border border-red-900/30">LEVEL PRATAMA</span>
                  </div>
                </div>

              </div>
              
              {/* Card sign-off details */}
              <p className="text-[10px] text-slate-400 italic leading-relaxed max-w-xs mx-auto">
                Setoran virtual pertama sebesar <strong className="text-slate-800 font-bold">Rp {new Intl.NumberFormat('id-ID').format(125000 + formData.voluntaryDeposit)}</strong> telah dibukukan dalam rincian keanggotaan Anda.
              </p>
            </div>
          )}
        </div>

        {/* Wizard Navigation Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
          <div>
            {step > 1 && step < 3 && (
              <button
                type="button"
                onClick={handleBack}
                className="bg-white border border-slate-200 hover:bg-slate-100 text-slate-600 font-bold py-2 px-3 rounded text-[10px] uppercase tracking-wider flex items-center gap-1 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Kembali
              </button>
            )}
          </div>

          <div className="flex gap-2">
            {step < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="bg-red-600 hover:bg-black text-white font-bold py-2 px-4 rounded text-[10px] uppercase tracking-wider flex items-center gap-1 transition-colors cursor-pointer"
                id="reg-next-btn"
              >
                Selanjutnya
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                type="button"
                onClick={onClose}
                className="bg-slate-900 hover:bg-black text-white font-semibold py-2 px-4 rounded text-[10px] uppercase tracking-wider transition-colors cursor-pointer"
              >
                Selesai &amp; Keluar
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
