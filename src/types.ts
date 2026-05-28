export interface BusinessUnit {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  iconName: string; // Used to dynamically map Lucide icons
}

export interface Product {
  id: string;
  name: string;
  category: 'Sembako' | 'Kerajinan' | 'Elektronik' | 'Pertanian' | 'Lainnya';
  price: number;
  unit: string;
  description: string;
  imageUrl: string;
  stock: number;
}

export interface BlogPost {
  id: string;
  title: string;
  category: 'Kegiatan' | 'Pengumuman' | 'Tips Keuangan' | 'Rapat Anggota';
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatarUrl: string;
  };
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatarUrl: string;
  rating: number;
}

export interface SavingLoanSimulation {
  type: 'saving' | 'loan';
  amount: number;
  period: number; // in months
  interestRate: number; // annual percentage
}
