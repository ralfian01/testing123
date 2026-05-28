import { BusinessUnit, Product, BlogPost, Testimonial } from './types';

export const COOPERATIVE_PROFILE = {
  name: 'Koperasi Sejahtera Mulia',
  tagline: 'Membangun Ekonomi Gotong Royong, Sejahtera Bersama Anggota',
  description: 'Koperasi Sejahtera Mulia berdiri sejak tahun 2015 dengan komitmen luhur mewujudkan keadilan sosial dan kemakmuran bersama melalui asas kekeluargaan dan gotong royong. Kami berdedikasi melayani lebih dari 1.200 anggota aktif melalui inovasi simpan pinjam syariah, pemberdayaan UMKM lokal, dan distribusi produk pokok berkualitas prima.',
  yearsActive: 11,
  totalMembers: 1250,
  assetValue: 'Rp 6.4 Miliar',
  shuDistributed: 'Rp 450 Juta (Buku 2025)',
  address: 'Jl. Pemuda No. 128, Sektor 4, Jakarta Barat, DKI Jakarta 11470',
  phone: '021-5551234 / 0812-3456-7890',
  email: 'info@koperasisejahtera.id',
  operationalHours: 'Senin - Jumat, 08:00 - 16:00 WIB',
  vision: 'Menjadi koperasi percontohan nasional bertaraf modern yang kokoh, transparan, dan mampu menggerakkan kemandirian ekonomi rakyat secara berkelanjutan.',
  missions: [
    'Menyediakan layanan pengelolaan keuangan yang amanah, fleksibel, berkeadilan, dan bebas dari praktik riba.',
    'Menyalurkan modal usaha produktif guna mendukung pertumbuhan sektor UMKM dan kerajinan lokal.',
    'Menyediakan kebutuhan pokok sembako berkualitas dengan harga terjangkau bagi anggota dan masyarakat sipil.',
    'Menerapkan tata kelola manajemen modern berbasis digital demi pelayanan yang transparan, kredibel, dan efisien.',
  ],
  leadership: [
    { name: 'Drs. H. Mulyadi Saputra', role: 'Ketua Pengurus', avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200' },
    { name: 'Dr. Rania Amanda, M.Si.', role: 'Sekretaris Umum', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200' },
    { name: 'Budi Hartono, S.E., M.M.', role: 'Bendahara Utama', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200' }
  ]
};

export const businessUnits: BusinessUnit[] = [
  {
    id: 'usp',
    name: 'Unit Simpan Pinjam Syariah',
    description: 'Layanan finansial amanah untuk tabungan anggota dan pembiayaan pinjaman modal usaha produktif tanpa riba.',
    longDescription: 'Menyediakan instrumen Simpanan Pokok, Simpanan Wajib, dan Simpanan Sukarela Berjangka dengan nisbah bagi hasil yang kompetitif. Selain itu, menyalurkan bantuan pembiayaan syariah (akad Murabahah & Mudharabah) khusus untuk pengembangan usaha kecil-menengah para anggota koperasi tanpa biaya admin yang membebani.',
    iconName: 'DollarSign'
  },
  {
    id: 'waserda',
    name: 'Distribusi Sembako & Sektor Retail',
    description: 'Pedagang Serba Usaha penyedia komoditas pangan pokok berkualitas prima dengan jaminan harga yang adil.',
    longDescription: 'Mengelola toko serba usaha retail (Waserda) fisik serta online yang menyediakan barang kebutuhan harian terlengkap, mulai dari beras premium binaan, minyak goreng higienis, tepung, gula pasir, hingga peralatan rumah tangga dasar dengan diskon khusus anggota.',
    iconName: 'ShoppingBag'
  },
  {
    id: 'marketplace',
    name: 'Kemitraan UMKM & Kerajinan',
    description: 'Wadah pemasaran terintegrasi untuk menyalurkan hasil bumi dan kerajinan tangan murni karya kreatif anggota.',
    longDescription: 'Berperan sebagai agregator dan fasilitator pemasaran produk lokal. Kami menguji mutu kualitas produk kerajinan bambu, anyaman tas kulit, makanan olahan rumah tangga, serta pupuk organik buatan anggota untuk dipasarkan ke tingkat nasional dan ekspor ritel.',
    iconName: 'Users'
  },
  {
    id: 'online_services',
    name: 'Kios Digital & Pembayaran PPOB',
    description: 'Loket pembayaran tagihan digital multifungsi terpercaya untuk kemudahan transaksi harian komunitas.',
    longDescription: 'Melayani transaksi kilat pembayaran tagihan listrik PLN secara online, pembayaran iuran BPJS, air bersih PDAM, pembelian pulsa operator seluler komplit, kuota internet, transfer dana antar-bank cepat, hingga cicilan kendaraan bermotor resmi.',
    iconName: 'Smartphone'
  }
];

export const products: Product[] = [
  {
    id: 'prod-1',
    name: 'Beras Pandan Wangi Cianjur Premium',
    category: 'Sembako',
    price: 74500,
    unit: 'Pac (5 kg)',
    description: 'Beras organik hasil panen kelompok tani mitra binaan Koperasi Sejahtera Mulia. Pulen, beraroma harum pandan alami khas Cianjur, bebas dari bahan kimia pengawet dan pemutih.',
    imageUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=600&h=450',
    stock: 120
  },
  {
    id: 'prod-2',
    name: 'Minyak Goreng Kelapa Alami Barco',
    category: 'Sembako',
    price: 36000,
    unit: 'Botol (1 Liter)',
    description: 'Minyak kelapa murni yang diproses secara higienis, jernih, tahan panas, dan lebih sehat bagi jantung Anda dibandingkan minyak sawit standar. Sangat cocok untuk aneka hidangan keluarga sehat.',
    imageUrl: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=600&h=450',
    stock: 95
  },
  {
    id: 'prod-3',
    name: 'Madu Hutan Liar Sumbawa Asli',
    category: 'Lainnya',
    price: 85000,
    unit: 'Botol (350 gram)',
    description: 'Madu hutan murni 100% dipanen langsung oleh pemburu madu tradisional di pedalaman pulau Sumbawa. Kaya akan kandungan nutrisi alami, berhasiat memulihkan stamina, tanpa pemanis buatan tambahan.',
    imageUrl: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=600&h=450',
    stock: 64
  },
  {
    id: 'prod-4',
    name: 'Tas Anyaman Bambu Kreatif Tasik',
    category: 'Kerajinan',
    price: 45000,
    unit: 'Buah',
    description: 'Produk tas anyaman ramah lingkungan hasil kerajinan tangan ibu-ibu posko anggota koperasi di Tasikmalaya. Kuat, elegan untuk berbelanja tanpa plastik belanja, dan estetik dipandang.',
    imageUrl: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=600&h=450',
    stock: 35
  },
  {
    id: 'prod-5',
    name: 'Dompet Kulit Sapi Asli Garut Klasik',
    category: 'Kerajinan',
    price: 135000,
    unit: 'Buah',
    description: 'Dompet pria berukuran saku standar yang dijahit hand-made dari kulit sapi asli kualitas terbaik asal kota Garut. Memiliki detail jahitan kokoh, slot kartu fungsional, dan awet dipakai bertahun-tahun.',
    imageUrl: 'https://images.unsplash.com/photo-1627124793833-04439cb4f301?auto=format&fit=crop&q=80&w=600&h=450',
    stock: 18
  },
  {
    id: 'prod-6',
    name: 'Pupuk Organik Super Kompos Hayati',
    category: 'Pertanian',
    price: 22000,
    unit: 'Karung (10 kg)',
    description: 'Pupuk hayati hasil fermentasi bakteri organik ramah alam yang diolah secara kolektif oleh paguyuban peternak sapi perah binaan koperasi. Menyehatkan tanah tandus dan mempercepat panen.',
    imageUrl: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&q=80&w=600&h=450',
    stock: 250
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Sukses Digelar: Rapat Anggota Tahunan (RAT) Buku 2025 Sahkan Kenaikan SHU Sebesar 15%',
    category: 'Rapat Anggota',
    excerpt: 'RAT Koperasi Sejahtera Mulia sukses dilaksanakan dengan lancar secara hibrida. Anggota menyepakati laporan pertanggungjawaban pengawas dan sepakati pembagian SHU yang meningkat.',
    content: `Rapat Anggota Tahunan (RAT) Tahun Buku 2025 Koperasi Sejahtera Mulia resmi sukses diselenggarakan pada hari Sabtu di Gedung Pertemuan Sejahtera Mulia dengan kehadiran hibrida (700 anggota fisik dan sisanya online via telekonferensi). 

Agenda utama rapat ini meliputi pertanggungjawaban pengurus priode kerja 2025, proyeksi program kerja strategis 2026, serta penetapan Sisa Hasil Usaha (SHU) yang akan dibagi. Luar biasa, untuk buku tahun 2025 ini SHU yang dialokasikan mengalami kenaikan sebesar 15% dari tahun sebelumnya, yakni menyentuh total Rp 450.000.000.

Ketua Pengawas Koperasi menyampaikan pujian atas transparansi keuangan pengurus yang kini telah 100% beralih menggunakan laporan digital. Hasil keputusan ini membuktikan asas koperasi gotong royong terbukti ampuh bertahan di tengah persaingan ekonomi modern. Pembagian dana SHU anggota akan ditransfer langsung ke masing-masing saldo tabungan digital USP anggota mulai hari Senin esok.`,
    date: '12 Mei 2026',
    readTime: '5 Menit Baca',
    author: {
      name: 'Dr. Rania Amanda, M.Si.',
      role: 'Sekretaris Umum',
      avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100&h=100'
    },
    imageUrl: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80&w=1024&h=576'
  },
  {
    id: 'blog-2',
    title: 'Koperasi Sejahtera Mulia Gelar Pelatihan Digitalisasi Keuangan UMKM Binaan',
    category: 'Kegiatan',
    excerpt: 'Langkah strategis membina lebih dari 45 pelaku UMKM lokal beradaptasi dengan kode QRIS dan digital keuangan pembukuan agar modern.',
    content: `Sebagai bagian dari komitmen pilar pemberdayaan ekonomi anggota, Koperasi Sejahtera Mulia menyelenggarakan program workshop bertema 'Digitalisasi Operasional Usaha Mikro: Dari Manual Menjadi Viral'. 

Acara ini dihadiri oleh 45 pelaku UMKM binaan yang memproduksi aneka penganan ringan kering, kerajinan anyaman bambu, rajut kain perca, hingga pengrajin kulit. Narasumber berpengalaman diundang guna merubah pola pikir pencatatan akuntansi laci meja beralih ke aplikasi pencatatan keuangan pintar.

Koperasi juga mengumumkan bahwa setiap mitra binaan kini dibekali alat scan QRIS yang langsung terintegrasi secara seamless dengan rekening bank Unit Simpan Pinjam Syariah-nya. Melalui program ini, diharapkan kapasitas penjualan bulanan UMKM dapat terekam rapi sekaligus melacak profit bersih secara presisi demi memperoleh profil modal pinjaman usaha masa mendatang yang lebih mumpuni.`,
    date: '28 April 2026',
    readTime: '4 Menit Baca',
    author: {
      name: 'Budi Hartono, S.E.',
      role: 'Bendahara Utama',
      avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100'
    },
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1024&h=576'
  },
  {
    id: 'blog-3',
    title: 'Penyaluran Sembako Bakti Sosial Pengurus Koperasi Kemanusiaan Ramadhan Sejahtera',
    category: 'Kegiatan',
    excerpt: 'Wujud nyata kepedulian sosial, pengawas dan seluruh panitia mendistribusikan 200 paket pangan pokok gratis untuk dhuafa.',
    content: `Dalam momentum menyambut bulan suci Ramadhan, jajaran direksi, pengawas bersama sukarelawan Koperasi Sejahtera Mulia menggelar bakti sosial pembagian sembako dhuafa. Program tahunan ini disebar di lingkungan kelurahan padat penduduk sekitar kantor induk. 

Sebanyak 200 paket Sembako berupa Beras Premium 5kg, Minyak Goreng 2L, Gula Pasir 1kg, margarin, teh, biskuit kering dibagikan merata ke masyarakat pra-sejahtera dan yatim piatu. Dana pengadaan paket bersumber dari akumulasi dana sosial alokasi SHU Koperasi tahun lalu serta sukarela donasi jajaran anggota.

'Koperasi bukan melulu memikirkan profit keuangan simpan pinjam anggota semata, namun juga harus berdenyut nadi bersama kesusahan lingkungan tempat ia bertumbuh berkarya,' demikian pidato pembukaan dari Ketua Pengurus Drs. H. Mulyadi Saputra saat pelepasan armada kurir pengangkut sembako.`,
    date: '10 Maret 2026',
    readTime: '3 Menit Baca',
    author: {
      name: 'Drs. H. Mulyadi Saputra',
      role: 'Ketua Pengurus',
      avatarUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100&h=100'
    },
    imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1024&h=576'
  },
  {
    id: 'blog-4',
    title: 'Tips Cerdas Mengelola Suku Bunga dan Simpanan Berjangka untuk Pemula',
    category: 'Tips Keuangan',
    excerpt: 'Panduan lengkap merencanakan masa depan keuangan keluarga harmonis melalui skema bagi hasil simpanan koperasi syariah.',
    content: `Banyak dari kita kerap bingung merencanakan arus tabungan kas keluarga agar tidak tergerus inflasi tahunan. Di tengah menjamurnya aplikasi instrumen investasi digital berisiko tinggi saat ini, skema menabung konvensional maupun syariah di tempat terpercaya layaknya koperasi kerap kali dilupakan anggotanya.

Sebenarnya, jika dimanfaatkan pintar, instrumen Simpanan Berjangka (Siber) di Koperasi Sejahtera Mulia menawarkan tingkat pengembalian yang bersaing tinggi berupa sistem bagi hasil (nisbah) murni sesuai syariat islam. Artikel ini menjelaskan cara mudah membagi kantong gaji bulanan Anda menjadi alokasi jangka pendek darurat di tabungan sukarela, serta simpanan jangka menengah menggunakan deposito siber berjangka jangka waktu 6 s.d 12 bulan demi masa depan pendidikan anak tercinta secara harmonis dan bebas riba.`,
    date: '20 Februari 2026',
    readTime: '4 Menit Baca',
    author: {
      name: 'Budi Hartono, S.E.',
      role: 'Bendahara Utama',
      avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100'
    },
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1024&h=576'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 't-1',
    name: 'Siti Rahmawati',
    role: 'Pemilik Toko Kue Basah Amanda',
    content: 'Sangat terbantu berkat pembiayaan tanpa riba dari Unit Simpan Pinjam Koperasi Sejahtera Mulia. Syarat pendaftaran anggota mudah, transparan, kekeluargaan sekali, modal usaha saya bertambah lancar untuk membeli oven gas baru dan melebarkan usaha kue kering.',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120&h=120',
    rating: 5
  },
  {
    id: 't-2',
    name: 'Joko Susilo',
    role: 'Petani Sawah Binaan, Karawang',
    content: 'Menghubungkan produk hasil beras kami langsung ke Waserda Koperasi memangkas tengkulak nakal yang kerap menekan keuntungan. Kini pundi pemasukan petani stabil terlindungi, beras kami terserap pasar dengan harga pantas. Hebat Koperasi Sejahtera Mulia!',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120',
    rating: 5
  },
  {
    id: 't-3',
    name: 'Ibu Ratna Kumala',
    role: 'Anggota Karyawan Swasta',
    content: 'Saya menyimpan dana cadangan darurat keluarga di Simpanan Berjangka Syariah Koperasi. Bagi hasilnya jernih, transparan, dan setiap RAT kami memperoleh SHU tambahan yang melimpah ruah. Sangat bersyukur bisa ikut memajukan ekonomi gotong royong.',
    avatarUrl: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=120&h=120',
    rating: 5
  }
];

export const FAQS = [
  {
    question: 'Bagaimana syarat utama untuk mendaftar menjadi anggota Koperasi Sejahtera Mulia?',
    answer: 'Menyerahkan pasfoto, salinan fotokopi e-KTP area domisili, Kartu Keluarga, membayar Simpanan Pokok sebesar Rp 100.000 (sekali bayar saat mendaftar), dan bersedia menyisihkan Simpanan Wajib bulanan sebesar Rp 25.000.'
  },
  {
    question: 'Siapa saja yang boleh meminjam/mengajukan pembiayaan usaha di koperasi?',
    answer: 'Sesuai dengan anggaran rumah tangga (AD/ART), fasilitas pembiayaan usaha atau kredit simpan pinjam syariah hanya dikhususkan bagi anggota resmi aktif yang telah bergabung minimal selama 3 bulan lamunannya bersikap baik dan lolos verifikasi komite.'
  },
  {
    question: 'Apakah produk di katalog koperasi juga boleh dibeli oleh masyarakat umum?',
    answer: 'Tentu saja boleh! Masyarakat non-anggota dapat bebas memesan komoditas sembako atau produk kerajinan kami. Namun khusus anggota resmi koperasi akan memperoleh potongan diskon harga spesial serta cash-point belanja.'
  },
  {
    question: 'Kapan dan bagaimana pembagian Sisa Hasil Usaha (SHU) koperasi dilakukan?',
    answer: 'SHU dibagikan setahun sekali pasca diadakannya keputusan bersama di forum Rapat Anggota Tahunan (RAT). Besaran nominal SHU setiap anggota diputuskan proporsional berdasar keaktifan simpan pinpan serta partisipasi transaksi belanja anggota.'
  }
];
