import React, { useState, useMemo } from 'react';
import { Search, ShoppingBag, X, Check, Tag, MessageSquare } from 'lucide-react';
import { products } from '../data';
import { Product } from '../types';

export default function Catalog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  // Interactive order simulator states
  const [quantity, setQuantity] = useState(1);
  const [isMember, setIsMember] = useState(true);
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const categories = ['Semua', 'Sembako', 'Kerajinan', 'Pertanian', 'Lainnya'];

  // Filter products by category and search keyword
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchCategory = selectedCategory === 'Semua' || product.category === selectedCategory;
      const matchSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchTerm]);

  // Format currency helper
  const formatIDR = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(num);
  };

  const handleOpenProduct = (product: Product) => {
    setSelectedProduct(product);
    setQuantity(1);
    setOrderSubmitted(false);
  };

  const calculateSubtotal = () => {
    if (!selectedProduct) return 0;
    const baseTotal = selectedProduct.price * quantity;
    if (isMember) {
      // 10% discount for official members
      return baseTotal * 0.9;
    }
    return baseTotal;
  };

  const handleSimulateOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderSubmitted(true);
  };

  return (
    <section id="katalog" className="py-24 bg-white relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-red-600 font-bold font-display tracking-widest text-xs uppercase block">
            Waserda &amp; Produk Pilihan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
            Ringkasan <span className="text-red-600">Katalog Produk</span> Anggota
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto">
            Hargailah hasil bumi dan industri kreatif lokal. Kami mendistribusikan sembako premium, pupuk alami, serta kerajinan tangan bermutu murni karya anggota.
          </p>
          <div className="w-12 h-1 bg-red-600 mx-auto" />
        </div>

        {/* Toolbar: Search and Filters */}
        <div className="bg-slate-50 border border-slate-200 rounded p-6 mb-12 space-y-5">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <span className="absolute inset-y-0 left-4 flex items-center text-slate-400">
                <Search className="w-4 h-4" />
              </span>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Cari beras, tas anyaman, atau pupuk hayati..."
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 focus:border-red-650 rounded text-xs outline-none transition-colors"
                id="search-input"
              />
            </div>

            {/* Total Indicator */}
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider shrink-0">
              Menampilkan <span className="text-red-600">{filteredProducts.length}</span> dari {products.length} Produk Terpilih
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-205 border-slate-200">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-sm text-xs font-bold tracking-tight uppercase transition-all cursor-pointer border ${
                  selectedCategory === cat
                    ? 'bg-red-600 text-white border-red-600'
                    : 'bg-white text-slate-600 hover:text-red-600 hover:bg-slate-50 border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => handleOpenProduct(product)}
                className="bg-white border border-slate-200 rounded overflow-hidden shadow-sm hover:border-red-600 transition-all duration-200 group flex flex-col justify-between cursor-pointer"
              >
                {/* Image Section */}
                <div className="aspect-video bg-slate-50 overflow-hidden relative border-b border-slate-100">
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-sm text-[9px] font-extrabold text-red-600 shadow-sm z-10 flex items-center gap-1 uppercase tracking-wider border border-slate-200">
                    <Tag className="w-3 h-3" />
                    {product.category}
                  </div>
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Body Content */}
                <div className="p-5 space-y-3">
                  <div className="space-y-1">
                    <h3 className="font-bold font-display text-slate-900 text-base leading-tight group-hover:text-red-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-[10px] font-bold text-slate-400">Kemasan: {product.unit}</p>
                  </div>
                  <p className="text-slate-500 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Footer Content */}
                <div className="px-5 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-slate-405 text-slate-400 text-[10px] uppercase font-bold tracking-wider block">Harga Belanja</span>
                    <p className="text-slate-900 font-extrabold text-sm">{formatIDR(product.price)}</p>
                  </div>
                  <button className="text-[10px] font-bold uppercase tracking-wider text-red-600 border border-red-200 hover:bg-red-50 px-3 py-1.5 rounded-sm transition-colors cursor-pointer">
                    Lihat Detail
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border border-slate-200 rounded bg-slate-50">
            <ShoppingBag className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold font-display text-slate-900 uppercase">Produk Tidak Ditemukan</h3>
            <p className="text-slate-400 text-xs mt-1">Coba sesuaikan kata kunci pencarian atau ubah filter kategori Anda.</p>
          </div>
        )}

      </div>

      {/* Product Detail & Order Simulator Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-slate-900/65 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          />

          <div className="relative bg-white rounded w-full max-w-lg overflow-hidden shadow-xl border border-slate-200 z-20 animate-fade-in flex flex-col max-h-[90vh]">
            {/* Scrollable container */}
            <div className="overflow-y-auto">
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-2 rounded bg-slate-900/40 hover:bg-slate-950 text-white hover:text-red-500 transition-all z-30 cursor-pointer"
                aria-label="Tutup"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Product Header Photo banner */}
              <div className="h-44 sm:h-52 relative bg-slate-100">
                <img
                  src={selectedProduct.imageUrl}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-transparent flex items-end p-5">
                  <div>
                    <span className="text-[9px] font-bold text-red-400 bg-red-950/80 px-2 py-0.5 rounded-sm uppercase tracking-widest mb-1.5 inline-block border border-red-500/10">
                      {selectedProduct.category}
                    </span>
                    <h3 className="text-white text-base sm:text-lg font-bold font-display leading-tight">
                      {selectedProduct.name}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Content Panels */}
              <div className="p-5 sm:p-6 space-y-5">
                
                {/* Description & Facts */}
                <div className="space-y-2.5">
                  <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wide">Deskripsi Produk</h4>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans">
                    {selectedProduct.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-3 border-t border-slate-200 text-[11px] font-sans">
                    <div>
                      <span className="text-slate-400 font-bold uppercase tracking-tight block">Kemasan & Satuan</span>
                      <strong className="text-slate-800 font-bold">{selectedProduct.unit}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 font-bold uppercase tracking-tight block">Ketersediaan Toko</span>
                      <strong className="text-emerald-600 font-extrabold">{selectedProduct.stock} unit tersedia</strong>
                    </div>
                  </div>
                </div>

                {/* Purchase / Inquiry Simulator */}
                <div className="bg-slate-50 rounded border border-slate-200 p-4 space-y-4">
                  <div className="flex items-center gap-2 mb-1">
                    <ShoppingBag className="w-3.5 h-3.5 text-red-650 text-red-600" />
                    <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wide">Simulasi Keranjang Belanja</h5>
                  </div>

                  {!orderSubmitted ? (
                    <form onSubmit={handleSimulateOrder} className="space-y-4">
                      {/* Inputs Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Quantity Selector */}
                        <div>
                          <label className="block text-[10px] font-bold text-slate-550 text-slate-500 mb-1 uppercase tracking-wider">Jumlah Pesanan</label>
                          <div className="flex items-center gap-1 bg-white border border-slate-200 rounded p-0.5 w-fit">
                            <button
                              type="button"
                              onClick={() => setQuantity(Math.max(1, quantity - 1))}
                              className="w-8 h-8 hover:bg-slate-100 font-bold text-sm text-slate-600 text-center cursor-pointer"
                            >
                              -
                            </button>
                            <span className="w-10 text-center text-xs font-bold text-slate-855 text-slate-800">{quantity}</span>
                            <button
                              type="button"
                              onClick={() => setQuantity(Math.min(selectedProduct.stock, quantity + 1))}
                              className="w-8 h-8 hover:bg-slate-100 font-bold text-sm text-slate-600 text-center cursor-pointer"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {/* Membership Toggle */}
                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 mb-1 uppercase tracking-wider">Status Anggota</label>
                          <div className="flex flex-col gap-1.5 py-1">
                            <label className="flex items-center gap-1.5 text-xs text-slate-700 font-semibold cursor-pointer">
                              <input
                                type="radio"
                                checked={isMember === true}
                                onChange={() => setIsMember(true)}
                                className="accent-red-600 w-3.5 h-3.5"
                              />
                              Anggota Aktif <span className="text-[8px] text-red-600 bg-red-50 border border-red-100 px-1 py-0.2 rounded font-bold uppercase shrink-0">Diskon 10%</span>
                            </label>
                            <label className="flex items-center gap-1.5 text-xs text-slate-700 font-semibold cursor-pointer">
                              <input
                                type="radio"
                                checked={isMember === false}
                                onChange={() => setIsMember(false)}
                                className="accent-red-600 w-3.5 h-3.5"
                              />
                              Non-Anggota
                            </label>
                          </div>
                        </div>
                      </div>

                      {/* Calculations Invoice Receipt */}
                      <div className="bg-white border border-slate-200 rounded p-3.5 space-y-1.5 text-xs">
                        <div className="flex justify-between text-slate-500 font-normal">
                          <span>Harga Satuan ({selectedProduct.unit})</span>
                          <span>{formatIDR(selectedProduct.price)}</span>
                        </div>
                        <div className="flex justify-between text-slate-500 font-normal">
                          <span>Kuantitas</span>
                          <span>x {quantity}</span>
                        </div>
                        {isMember && (
                          <div className="flex justify-between text-emerald-600 font-bold">
                            <span>Potongan Anggota (10%)</span>
                            <span>- {formatIDR(selectedProduct.price * quantity * 0.1)}</span>
                          </div>
                        )}
                        <div className="pt-2 border-t border-slate-100 flex justify-between font-extrabold text-slate-900 text-sm">
                          <span>Total Pembayaran</span>
                          <span className="text-red-600">{formatIDR(calculateSubtotal())}</span>
                        </div>
                      </div>

                      {/* Submit Simulated Inquiry Button */}
                      <button
                        type="submit"
                        className="w-full bg-red-600 hover:bg-slate-900 text-white font-bold py-3.5 px-4 rounded text-center text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                        id="prod-sum-order-submit"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        Pesan Sekarang via Admin CSR
                      </button>
                    </form>
                  ) : (
                    <div className="bg-emerald-50 border border-emerald-150-100/20 rounded p-5 text-center space-y-2">
                      <div className="w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-1.5 shadow-sm">
                        <Check className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-emerald-800 text-xs uppercase tracking-wide">Pre-order Simulasi Sukses!</h4>
                      <p className="text-emerald-700 text-xs leading-relaxed max-w-sm mx-auto font-sans">
                        Kuantitas <strong className="text-slate-800 font-extrabold">{quantity} {selectedProduct.unit}</strong> senilai <strong className="text-slate-800 font-extrabold">{formatIDR(calculateSubtotal())}</strong> sudah disimulasikan. Di sistem asli, draf rincian pesanan akan dikirimkan otomatis ke WhatsApp Admin Waserda.
                      </p>
                      <button
                        onClick={() => setOrderSubmitted(false)}
                        className="text-emerald-700 hover:text-slate-950 font-extrabold text-[10px] uppercase tracking-wide block mx-auto pt-2 cursor-pointer"
                      >
                        Buat Simulasi Pesanan Baru
                      </button>
                    </div>
                  )}
                </div>

              </div>
            </div>

            {/* Bottom Actions Frame */}
            <div className="p-3 bg-slate-50 border-t border-slate-200 flex justify-end gap-3 shrink-0">
              <button
                onClick={() => setSelectedProduct(null)}
                className="bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 font-bold py-2 px-3 rounded text-center text-[10px] uppercase tracking-wider cursor-pointer"
              >
                Kembali ke Katalog
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
