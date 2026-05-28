import React, { useState, useMemo } from 'react';
import { BookOpen, Calendar, Clock, X, ThumbsUp } from 'lucide-react';
import { blogPosts } from '../data';
import { BlogPost } from '../types';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  
  // Like simulator state
  const [likes, setLikes] = useState<{ [key: string]: number }>({
    'blog-1': 24,
    'blog-2': 18,
    'blog-3': 43,
    'blog-4': 15,
  });
  const [likedList, setLikedList] = useState<{ [key: string]: boolean }>({});

  const categories = ['Semua', 'Kegiatan', 'Pengumuman', 'Tips Keuangan', 'Rapat Anggota'];

  // Filter posts
  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'Semua') return blogPosts;
    return blogPosts.filter((post) => post.category === selectedCategory);
  }, [selectedCategory]);

  const handleLike = (postId: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Avoid opening the blog
    if (likedList[postId]) {
      setLikes((prev) => ({ ...prev, [postId]: prev[postId] - 1 }));
      setLikedList((prev) => ({ ...prev, [postId]: false }));
    } else {
      setLikes((prev) => ({ ...prev, [postId]: prev[postId] + 1 }));
      setLikedList((prev) => ({ ...prev, [postId]: true }));
    }
  };

  return (
    <section id="blog" className="py-24 bg-slate-50 relative border-b border-slate-205 border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-red-600 font-bold font-display tracking-widest text-xs uppercase block">
            Update Kegiatan &amp; Blog
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
            Kabar <span className="text-red-600">Kegiatan &amp; Edukasi</span> Koperasi
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto">
            Ikuti berbagai update laporan kegiatan kemanusiaan, pengumuman agenda rapat tahunan, serta tutorial edukatif seputar pengelolaan finansial mandiri keluarga.
          </p>
          <div className="w-12 h-1 bg-red-600 mx-auto" />
        </div>

        {/* Categories Filtering Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 border rounded-sm text-xs font-bold uppercase tracking-tight transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-red-600 text-white border-red-600'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="bg-white border border-slate-200 rounded overflow-hidden shadow-sm hover:border-red-600 transition-colors duration-200 group cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Blog Cover Image */}
                <div className="aspect-video relative overflow-hidden bg-slate-100 border-b border-slate-100">
                  <div className="absolute top-3 left-3 bg-white/95 px-2.5 py-1 rounded-sm text-[9px] font-extrabold text-red-750 text-red-600 tracking-wider uppercase z-10 shadow-sm border border-slate-200">
                    {post.category}
                  </div>
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-3000 duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Blog Card Meta & Title */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold font-display text-slate-900 leading-snug group-hover:text-red-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer Authors details */}
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-105 border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full overflow-hidden border border-slate-200 bg-white">
                    <img
                      src={post.author.avatarUrl}
                      alt={post.author.name}
                      className="w-full h-full object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 leading-none">{post.author.name}</p>
                    <p className="text-[9px] text-slate-403 text-slate-400 mt-0.5 leading-none font-medium">{post.author.role}</p>
                  </div>
                </div>

                {/* Like Button */}
                <button
                  onClick={(e) => handleLike(post.id, e)}
                  className={`flex items-center gap-1 text-[10px] uppercase font-bold py-1 px-2.5 rounded-sm border transition-colors cursor-pointer ${
                    likedList[post.id]
                      ? 'bg-red-50 border-red-200 text-red-600 font-bold'
                      : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-500'
                  }`}
                >
                  <ThumbsUp className={`w-3 h-3 ${likedList[post.id] ? 'fill-red-600 text-red-600' : ''}`} />
                  <span>{likes[post.id]}</span>
                </button>
              </div>

            </article>
          ))}
        </div>

      </div>

      {/* Expanded Blog Modal Detail */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-slate-900/65 backdrop-blur-sm"
            onClick={() => setSelectedPost(null)}
          />

          <div className="relative bg-white rounded w-full max-w-2xl overflow-hidden shadow-xl border border-slate-200 z-20 animate-fade-in flex flex-col max-h-[92vh]">
            <div className="overflow-y-auto">
              
              {/* Close pin */}
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 p-1.5 rounded bg-slate-900/50 text-white hover:text-red-500 hover:bg-slate-950 transition-colors z-30 cursor-pointer"
                aria-label="Tutup"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Big Header Art Banner */}
              <div className="h-44 sm:h-64 relative bg-slate-200 border-b border-slate-100">
                <img
                  src={selectedPost.imageUrl}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-905/95 from-slate-900/95 via-slate-900/40 to-transparent flex items-end p-5 sm:p-6">
                  <div>
                    <span className="text-[9px] font-bold text-red-400 bg-red-950/80 px-2.5 py-0.5 rounded-sm uppercase tracking-widest mb-1.5 inline-block border border-red-500/10">
                      {selectedPost.category}
                    </span>
                    <h3 className="text-white text-base sm:text-xl font-bold font-display leading-tight">
                      {selectedPost.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Content Panel */}
              <div className="p-5 sm:p-7 space-y-5">
                
                {/* Meta details */}
                <div className="flex flex-wrap items-center justify-between pb-4 border-b border-slate-200 gap-3">
                  {/* Author detail */}
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full overflow-hidden border border-slate-205 border-slate-200 bg-white">
                      <img
                        src={selectedPost.author.avatarUrl}
                        alt={selectedPost.author.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900 leading-none">{selectedPost.author.name}</p>
                      <p className="text-[10px] text-slate-500 mt-1 leading-none">{selectedPost.author.role}</p>
                    </div>
                  </div>

                  {/* Calendar / indicators */}
                  <div className="flex items-center gap-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider font-sans">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {selectedPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {selectedPost.readTime}
                    </span>
                  </div>
                </div>

                {/* Article Prose content block */}
                <div className="prose max-w-none text-slate-600 text-xs sm:text-sm leading-relaxed space-y-3.5 font-sans">
                  {selectedPost.content.split('\n\n').map((para, i) => (
                    <p key={i}>
                      {para}
                    </p>
                  ))}
                </div>

                {/* Author signoff and cooperative trust block */}
                <div className="p-4 rounded border border-slate-200 bg-slate-50 flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-red-50 text-red-600 flex items-center justify-center shrink-0 border border-red-100">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <h5 className="font-bold text-slate-900 text-[11px] uppercase tracking-wide">Pilar Transparansi Informasi Koperasi</h5>
                    <p className="text-slate-500 text-[10px] leading-relaxed">
                      Laporan ini merupakan bagian dari sarana penyebarluasan berita serta edukasi terpadu berkala dari segenap jajaran pengurus Koperasi Sejahtera Mulia demi tegaknya transparansi berkoperasi.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Footer Back Button layout */}
            <div className="p-3 bg-slate-50 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setSelectedPost(null)}
                className="bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 font-bold py-2 px-3.5 rounded text-[10px] uppercase tracking-wider cursor-pointer"
              >
                Tutup Bacaan
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
