"use client";

import { useState } from "react";
import { districtsData } from "@/data/regions";
import { contactConfig } from "@/data/contact";
import { MapPin, Search, CheckCircle2, MessageCircle, Navigation } from "lucide-react";

export default function Regions() {
  const [selectedDistrict, setSelectedDistrict] = useState(districtsData[0]);
  const [searchTerm, setSearchTerm] = useState("");

  // Search through all villages in all districts
  const searchResults = searchTerm.trim()
    ? districtsData.flatMap((d) =>
        d.popularVillages
          .filter((v) => v.toLocaleLowerCase("tr").includes(searchTerm.toLocaleLowerCase("tr")))
          .map((v) => ({ village: v, district: d.name }))
      )
    : [];

  return (
    <section id="bolgeler" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Navigation className="w-3.5 h-3.5 text-emerald-700" />
            <span>Kapsamlı Hizmet Ağı</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Edirne ve Tüm Köylerine Hizmet Götürüyoruz
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Mezarınız Edirne Merkez’de veya en uç köyde dahi olsa, kendi
            aracımız ve profesyonel temizlik ekipmanlarımızla bizzat
            yerine ulaşıyoruz.
          </p>
        </div>

        {/* Village Search Bar */}
        <div className="max-w-xl mx-auto mb-10">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
            <input
              type="text"
              placeholder="Köy veya mahalle adınızı arayın (Örn: Kırcasalih, Demirköy, Kurtbey...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-slate-200 focus:border-emerald-600 focus:outline-none text-sm text-slate-900 shadow-sm"
            />
          </div>

          {/* Search Result Instant Reassurance */}
          {searchTerm.trim().length > 0 && (
            <div className="mt-3 p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
              {searchResults.length > 0 ? (
                <div>
                  <p className="text-xs font-bold text-emerald-900 mb-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 inline" />
                    <span>Evet! Bu bölgeye düzenli kabir temizlik ve bakım hizmeti veriyoruz:</span>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {searchResults.slice(0, 8).map((res, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-white border border-emerald-300 text-xs font-semibold text-emerald-900 shadow-sm"
                      >
                        <MapPin className="w-3 h-3 text-emerald-600" />
                        <strong>{res.village}</strong> ({res.district})
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-xs text-slate-700">
                  <p className="font-semibold text-slate-900">
                    Aradığınız köy listede görünmese de Edirne sınırları içindeki TÜM köylere gidiyoruz!
                  </p>
                  <p className="mt-1">
                    Lütfen WhatsApp hattımıza köyünüzün adını yazarak teyit alınız.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* District Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {districtsData.map((dist) => {
            const isSelected = selectedDistrict.slug === dist.slug;
            return (
              <button
                key={dist.slug}
                onClick={() => setSelectedDistrict(dist)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                  isSelected
                    ? "bg-emerald-800 text-white shadow-md shadow-emerald-900/20 scale-105"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {dist.name}
              </button>
            );
          })}
        </div>

        {/* District Villages Display */}
        <div className="rounded-3xl bg-slate-50 border border-slate-200/80 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 mb-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-emerald-700" />
                <span>{selectedDistrict.name} ve Bağlı Köyleri</span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {selectedDistrict.name} bölgesinde yaklaşık {selectedDistrict.allVillagesCount} köy ve mahalle mezarlığına aktif hizmet sunulmaktadır.
              </p>
            </div>
            <a
              href={contactConfig.getWhatsappUrl(`Merhaba, ${selectedDistrict.name} bölgesinde mezar bakım ve temizlik hizmeti almak istiyorum.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-semibold transition"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>{selectedDistrict.name} İçin Fiyat Al</span>
            </a>
          </div>

          {/* Villages Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
            {selectedDistrict.popularVillages.map((village, idx) => (
              <div
                key={idx}
                className="p-2.5 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-700 hover:border-emerald-400 hover:text-emerald-900 hover:bg-emerald-50/50 transition duration-150 flex items-center gap-1.5"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                <span className="truncate">{village}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
            <span>* Listede yer almayan tüm mezarlık ve mevkiler için de hizmet verilmektedir.</span>
            <span className="font-semibold text-emerald-800">Yerinde Profesyonel Ekipman & Mobil Hizmet</span>
          </div>
        </div>
      </div>
    </section>
  );
}
