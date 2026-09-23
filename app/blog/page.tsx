import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { blogPosts } from "@/data/blog";
import { contactConfig } from "@/data/contact";
import {
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  Sparkles,
  MessageCircle,
  Home,
  ChevronRight,
  CheckCircle2,
  MapPin,
  Building2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Edirne Mezar Bakımı ve Kabir Temizliği Rehberleri | edirnemezarliktemizleme.site",
  description:
    "Edirne Merkez, Keşan, Uzunköprü, Havsa, İpsala, Meriç, Lalapaşa, Süloğlu, Enez ve 253 köy mezarlığı için asitsiz mermer beyazlatma, yabani ot temizliği, çiçeklendirme ve kabir bakım rehberleri.",
  keywords: [
    "Edirne mezar temizliği blog",
    "Edirne mezar bakımı",
    "Keşan mezarlık temizleme",
    "Uzunköprü mezar bakımı",
    "Havsa kabir temizliği",
    "Edirne köy mezarları bakımı",
    "mermer mezar beyazlatma rehberi",
    "gurbetçi mezar bakımı Edirne",
  ],
  alternates: {
    canonical: "https://edirnemezarliktemizleme.site/blog",
  },
  openGraph: {
    title: "Edirne İlçe Mezar Bakım ve Kabir Temizlik Rehberleri",
    description:
      "Edirne'nin 9 resmi ilçesi ve 253 köyü için kabir bakımı, asitsiz mermer beyazlatma teknikleri ve yerinde mobil temizlik rehberleri.",
    url: "https://edirnemezarliktemizleme.site/blog",
    type: "website",
  },
};

export default function BlogIndexPage() {
  const districtPosts = blogPosts.filter((p) => p.category === "Edirne İlçeleri");
  const guidePosts = blogPosts.filter((p) => p.category !== "Edirne İlçeleri");
  const featuredPost = guidePosts[0] || blogPosts[0];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Edirne Mezar Bakım ve Kabir Temizlik Blogu",
    url: "https://edirnemezarliktemizleme.site/blog",
    description:
      "Edirne genelinde ve 9 ilçesindeki 253 köy mezarlığında kabir bakımı, mermer beyazlatma, toprak düzenleme ve çiçek dikimi hakkında uzman makaleleri ve pratik rehberler.",
    publisher: {
      "@type": "Organization",
      name: "Edirne Mezar Bakım Hizmetleri",
      url: "https://edirnemezarliktemizleme.site",
      logo: {
        "@type": "ImageObject",
        url: "https://edirnemezarliktemizleme.site/icon.svg",
      },
    },
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      url: `https://edirnemezarliktemizleme.site/blog/${post.slug}`,
      datePublished: post.date,
      dateModified: post.date,
      author: {
        "@type": "Organization",
        name: post.author,
      },
    })),
  };

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-emerald-700 focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none"
      >
        İçeriğe Atla
      </a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main id="main-content" className="min-h-screen bg-slate-50 flex flex-col">
        {/* Header / Hero */}
        <section className="bg-gradient-to-b from-emerald-950 via-slate-900 to-slate-900 text-white pt-10 pb-16 px-4 sm:px-6 lg:px-8 border-b border-emerald-900/60">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400 mb-6">
              <Link
                href="/"
                className="hover:text-emerald-300 transition flex items-center gap-1"
              >
                <Home className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Ana Sayfa</span>
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" aria-hidden="true" />
              <span className="text-emerald-300 font-semibold">Blog & İlçe Rehberleri</span>
            </nav>

            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/80 border border-emerald-700/50 text-emerald-300 text-xs font-semibold">
                <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Edirne Genelinde {blogPosts.length} Kapsamlı Rehber</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Tüm Edirne İlçeleri Mezar Bakım ve Temizlik Rehberleri
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Edirne Merkez ve 8 ilçesindeki 253 köy mezarlığında iklim şartlarına uygun kabir bakımı,
                asitsiz mermer beyazlatma, yabani ot temizliği ve uzaktaki aileler için yerinde videolu hizmet kılavuzları.
              </p>

              {/* Quick Jump Badges */}
              <div className="pt-3 flex flex-wrap gap-2 text-xs">
                <a
                  href="#edirne-ilceleri"
                  className="px-3 py-1.5 rounded-xl bg-emerald-800/80 hover:bg-emerald-700 border border-emerald-600/50 text-emerald-200 transition font-semibold flex items-center gap-1"
                >
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Edirne İlçeleri ({districtPosts.length})</span>
                </a>
                <a
                  href="#uzman-rehberler"
                  className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 transition font-semibold flex items-center gap-1"
                >
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Teknik Bakım Rehberleri ({guidePosts.length})</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full space-y-16">
          {/* Featured Post */}
          {featuredPost && (
            <div>
              <div className="relative rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-xl transition duration-300 overflow-hidden group">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <div className="w-full lg:w-1/2 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                        {featuredPost.category}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                        <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                        {featuredPost.readTime}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                        <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                        {featuredPost.date}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 group-hover:text-emerald-800 transition leading-snug">
                      <Link href={`/blog/${featuredPost.slug}`}>
                        {featuredPost.title}
                      </Link>
                    </h2>

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>

                    <div className="pt-2">
                      <Link
                        href={`/blog/${featuredPost.slug}`}
                        aria-label={`"${featuredPost.title}" rehberini okuyun`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-sm transition group-hover:gap-3"
                      >
                        <span>Rehberi Okuyun</span>
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2">
                    <div className="relative rounded-2xl overflow-hidden aspect-[16/10] border border-slate-200 shadow-inner bg-slate-100">
                      <Image
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        width={800}
                        height={500}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-semibold">
                        <span className="bg-emerald-800/90 backdrop-blur px-2.5 py-1 rounded-md text-[11px]">
                          Öne Çıkan Rehber
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SECTION 1: Edirne İlçeleri */}
          <section id="edirne-ilceleri" className="scroll-mt-12">
            <div className="flex items-center justify-between gap-4 mb-6 pb-3 border-b border-slate-200">
              <div>
                <div className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Edirne Bölgesi (9 İlçe & 253 Köy)</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Edirne İlçe Mezar Bakım ve Temizlik Rehberleri
                </h2>
              </div>
              <span className="text-xs text-slate-500 font-semibold hidden sm:inline">
                {districtPosts.length} İlçe Kılavuzu
              </span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {districtPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-lg hover:border-emerald-500/40 transition duration-300 flex flex-col justify-between group overflow-hidden"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 border-b border-slate-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={375}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md bg-emerald-900/90 text-white font-bold text-xs shadow-sm backdrop-blur">
                        Edirne
                      </span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-3 text-xs text-slate-500">
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="w-3 h-3" aria-hidden="true" />
                          {post.date}
                        </span>
                        <span>•</span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3 h-3" aria-hidden="true" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition line-clamp-2 leading-snug">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-slate-400 font-medium truncate max-w-[140px]">
                        {post.author}
                      </span>
                      <Link
                        href={`/blog/${post.slug}`}
                        aria-label={`"${post.title}" devamını oku`}
                        className="inline-flex items-center gap-1 text-emerald-700 font-bold hover:text-emerald-900 group-hover:gap-1.5 transition-all"
                      >
                        <span>İlçe Rehberini Oku</span>
                        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* SECTION 2: Uzman Rehberler */}
          <section id="uzman-rehberler" className="scroll-mt-12">
            <div className="flex items-center justify-between gap-4 mb-6 pb-3 border-b border-slate-200">
              <div>
                <div className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Teknik & Pratik Kılavuzlar</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Uzman Mezar Bakımı, Mermer & Bitki Rehberleri
                </h2>
              </div>
              <span className="text-xs text-slate-500 font-semibold hidden sm:inline">
                {guidePosts.length} Kılavuz
              </span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {guidePosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-lg hover:border-emerald-500/40 transition duration-300 flex flex-col justify-between group overflow-hidden"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 border-b border-slate-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={375}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md bg-white/95 text-emerald-800 font-bold text-xs shadow-sm backdrop-blur">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-3 text-xs text-slate-500">
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="w-3 h-3" aria-hidden="true" />
                          {post.date}
                        </span>
                        <span>•</span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3 h-3" aria-hidden="true" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition line-clamp-2 leading-snug">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-slate-400 font-medium truncate max-w-[140px]">
                        {post.author}
                      </span>
                      <Link
                        href={`/blog/${post.slug}`}
                        aria-label={`"${post.title}" devamını oku`}
                        className="inline-flex items-center gap-1 text-emerald-700 font-bold hover:text-emerald-900 group-hover:gap-1.5 transition-all"
                      >
                        <span>Rehberi İncele</span>
                        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Conversion CTA Banner */}
          <div className="rounded-3xl bg-gradient-to-br from-emerald-900 via-slate-900 to-teal-950 text-white p-8 sm:p-10 shadow-xl border border-emerald-800/80">
            <div className="max-w-3xl mx-auto text-center space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-800/80 border border-emerald-700/60 text-emerald-200 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5 text-emerald-300" aria-hidden="true" />
                <span>Edirne Merkez ve Tüm İlçelere Hizmet</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Sevdiklerinizin Kabir Bakımını Profesyonellere Emanet Edin
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
                Edirne&apos;nin 253 köyüne kendi mobil su depomuz ve ekipmanımızla ulaşıyoruz.
                İşlem öncesi ve sonrası HD video/fotoğraflı teslimat yapıyoruz.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={contactConfig.getWhatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp üzerinden bilgi ve fiyat teklifi alın"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-emerald-600" aria-hidden="true" />
                  <span>WhatsApp’tan Bilgi & Fiyat Al</span>
                </a>
                <Link
                  href="/#fiyat-teklifi"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 font-semibold text-sm transition"
                >
                  <span>Online Fiyat Hesapla</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>

              <div className="pt-3 flex flex-wrap items-center justify-center gap-4 text-xs text-emerald-200/80">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                  Yerinde su & elektrik ihtiyacı olmadan
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                  HD video ile teslimat garantisi
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingCTA />
    </>
  );
}
