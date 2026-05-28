import React, { useState } from 'react';
import { Mail, Phone, Clock, MapPin, Check, Send, ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';
import { COOPERATIVE_PROFILE, FAQS } from '../data';

export default function ContactForm() {
  const [openFaq, setOpenFaq] = useState<number | null>(0); // First FAQ open by default
  const [messageSubmitted, setMessageSubmitted] = useState(false);
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'Pertanyaan Umum',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};
    if (!inputs.name.trim()) newErrors.name = 'Nama lengkap wajib diisi';
    if (!inputs.email.trim() || !inputs.email.includes('@')) newErrors.email = 'Email tidak valid';
    if (!inputs.message.trim()) newErrors.message = 'Pesan wajib ditulis';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setMessageSubmitted(true);
  };

  const handleReset = () => {
    setInputs({
      name: '',
      email: '',
      phone: '',
      category: 'Pertanyaan Umum',
      message: '',
    });
    setErrors({});
    setMessageSubmitted(false);
  };

  return (
    <section id="kontak" className="py-24 bg-white relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-red-650 font-bold font-display tracking-widest text-xs uppercase block text-red-600">
            Hubungi Kontak &amp; FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
            Hubungi <span className="text-red-155 text-red-600">Layanan Anggota</span> Koperasi Sejahtera
          </h2>
          <p className="text-slate-550 text-sm sm:text-base max-w-xl mx-auto font-sans">
            Kami siap melayani kebutuhan informasi Anda terkait tabungan, cicilan, pendaftaran anggota, maupun jalinan kemitraan UMKM.
          </p>
          <div className="w-12 h-1 bg-red-600 mx-auto" />
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Column: Contact parameter items & details */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold font-display text-slate-900">Informasi Kantor Utama</h3>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
              Silakan mampir langsung ke kantor pusat kami di hari dan jam kerja operasional atau hubungi unit tanggapan cepat CS digital berikut:
            </p>

            <div className="space-y-4">
              {/* Address */}
              <div className="flex gap-4 p-4 rounded border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                <div className="w-9 h-9 rounded bg-red-50 text-red-600 flex items-center justify-center shrink-0 border border-red-100">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Alamat Kantor Pusat</h4>
                  <p className="text-xs text-slate-500 leading-relaxed mt-1">{COOPERATIVE_PROFILE.address}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 p-4 rounded border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                <div className="w-9 h-9 rounded bg-red-50 text-red-600 flex items-center justify-center shrink-0 border border-red-100">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Telepon &amp; WA Anggota</h4>
                  <p className="text-xs text-slate-500 mt-1">{COOPERATIVE_PROFILE.phone}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 p-4 rounded border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                <div className="w-9 h-9 rounded bg-red-50 text-red-600 flex items-center justify-center shrink-0 border border-red-100">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Email Surat Elektronik</h4>
                  <p className="text-xs text-slate-500 mt-1">{COOPERATIVE_PROFILE.email}</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4 p-4 rounded border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                <div className="w-9 h-9 rounded bg-red-50 text-red-600 flex items-center justify-center shrink-0 border border-red-100">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Jam Layanan Kantor</h4>
                  <p className="text-xs text-slate-500 mt-1">{COOPERATIVE_PROFILE.operationalHours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Inquiry Messaging Box */}
          <div className="lg:col-span-7">
            <div className="bg-slate-105 bg-slate-50 border border-slate-200 rounded p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg font-bold font-display text-slate-900 mb-1">Kirim Pesan Layanan</h3>
              <p className="text-xs text-slate-500 mb-5">Punya pertanyaan seputar keanggotaan atau simulasi tabungan? Kirimkan pesan di bawah:</p>

              {!messageSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1">
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">Nama Lengkap</label>
                      <input
                        type="text"
                        name="name"
                        value={inputs.name}
                        onChange={handleInputChange}
                        placeholder="Contoh: Ahmad Subari"
                        className={`w-full px-3 py-2 bg-white border rounded text-xs outline-none transition-colors ${
                          errors.name ? 'border-red-550 border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-red-600'
                        }`}
                      />
                      {errors.name && <p className="text-[10px] text-red-500 font-bold">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">Alamat Email</label>
                      <input
                        type="email"
                        name="email"
                        value={inputs.email}
                        onChange={handleInputChange}
                        placeholder="ahmad@email.com"
                        className={`w-full px-3 py-2 bg-white border rounded text-xs outline-none transition-colors ${
                          errors.email ? 'border-red-550 border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-red-600'
                        }`}
                      />
                      {errors.email && <p className="text-[10px] text-red-500 font-bold">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div className="space-y-1">
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">No. WhatsApp</label>
                      <input
                        type="text"
                        name="phone"
                        value={inputs.phone}
                        onChange={handleInputChange}
                        placeholder="081234xxxx"
                        className="w-full px-3 py-2 bg-white border border-slate-200 focus:border-red-600 rounded text-xs outline-none"
                      />
                    </div>

                    {/* Topic Category */}
                    <div className="space-y-1">
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">Topik Hubungan</label>
                      <select
                        name="category"
                        value={inputs.category}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-white border border-slate-200 focus:border-red-600 rounded text-xs outline-none cursor-pointer"
                      >
                        <option value="Pertanyaan Umum">Pertanyaan Umum</option>
                        <option value="USP Simpanan">Simpan Pinjam (Simpanan)</option>
                        <option value="USP Pembiayaan">Simpan Pinjam (Pembiayaan)</option>
                        <option value="Katalog Waserda">Pemesanan Sembako / Produk</option>
                        <option value="Kemitraan UMKM">Kemitraan Usaha Binaan</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Content */}
                  <div className="space-y-1">
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">Isi Detail Pertanyaan / Pesan</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={inputs.message}
                      onChange={handleInputChange}
                      placeholder="Tuliskan pesan lengkap Anda di sini secara rinci..."
                      className={`w-full px-3 py-2 bg-white border rounded text-xs outline-none transition-colors resize-none ${
                        errors.message ? 'border-red-550 border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-red-600'
                      }`}
                    />
                    {errors.message && <p className="text-[10px] text-red-500 font-bold">{errors.message}</p>}
                  </div>

                  {/* Send button */}
                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-black text-white font-bold py-3 px-4 rounded text-center text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow shadow-red-950/10"
                    id="contact-form-submit"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Kirim Pesan Sekarang
                  </button>
                </form>
              ) : (
                <div className="bg-emerald-50 border border-emerald-100 rounded p-6 text-center space-y-2.5">
                  <div className="w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-1.5 shadow-sm">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-emerald-800 text-xs uppercase tracking-wide">Pesan Berhasil Terkirim!</h4>
                  <p className="text-emerald-700 text-xs leading-relaxed max-w-sm mx-auto font-sans">
                    Rincian pesan berdasar kategori <strong className="text-slate-800 font-semibold">{inputs.category}</strong> dari <strong className="text-slate-800 font-semibold">{inputs.name}</strong> berhasil disimulasikan. Hubungi CS WhatsApp untuk respon instan.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 font-bold py-2 px-3 rounded text-[10px] uppercase tracking-wider transition-colors cursor-pointer inline-block mt-2"
                  >
                    Kirim Pesan Lainnya
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Accordions: FAQs */}
        <div className="pt-10 border-t border-slate-200 max-w-4xl mx-auto">
          <div className="text-center mb-10 space-y-1.5">
            <span className="text-red-600 font-bold font-display tracking-widest text-[10px] uppercase block">
              Tanya Jawab (FAQ)
            </span>
            <h3 className="text-2xl font-bold font-display text-slate-900">Pertanyaan Sering Diajukan</h3>
          </div>

          <div className="space-y-1 grid grid-cols-1 divide-y divide-slate-200 border-t border-b border-slate-200">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white py-3 sm:py-4 transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between py-2 text-left font-bold text-slate-800 hover:text-red-650 text-xs sm:text-sm hover:text-red-600 transition-colors cursor-pointer focus:outline-none"
                  >
                    <span className="pr-4">{faq.question}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 shrink-0 text-red-600" /> : <ChevronDown className="w-4 h-4 shrink-0 text-slate-400" />}
                  </button>
                  
                  {isOpen && (
                    <div className="pb-2 pt-1 text-slate-500 text-xs sm:text-sm leading-relaxed font-sans">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
