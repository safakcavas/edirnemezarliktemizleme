"use client";

import { useState } from "react";
import { districtsData } from "@/data/regions";
import { contactConfig } from "@/data/contact";
import {
  Calculator,
  MessageCircle,
  CheckSquare,
  Square,
  MapPin,
  PhoneCall,
  CheckCircle,
  Tag,
} from "lucide-react";

interface ServiceOption {
  id: string;
  label: string;
  price: number;
}

export default function QuoteCalculator() {
  const [district, setDistrict] = useState("Edirne Merkez");
  const [village, setVillage] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const availableServices: ServiceOption[] = [
    { id: "mermer", label: "Mermer Beyazlatma & Yosun Temizliği", price: 4500 },
    { id: "ot", label: "Yabani Ot Temizliği & Toprak Havalandırma", price: 3500 },
    { id: "cicek", label: "Canlı Çiçek Dikimi & Can Suyu", price: 3800 },
    { id: "yazi", label: "Mezar Taşı Yazılarının Boyanması (Altın Yaldız)", price: 2500 },
    { id: "derz", label: "Mermer Derz Dolgusu & Çatlak Onarımı", price: 3500 },
    { id: "budama", label: "Ağaç Budama & Mezar Çevresi Düzenleme", price: 1800 },
  ];

  const [selectedServices, setSelectedServices] = useState<string[]>([
    "mermer",
    "ot",
  ]);

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      setSelectedServices(selectedServices.filter((s) => s !== id));
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  // Calculate 1-visit price estimate
  const rawSum = availableServices
    .filter((s) => selectedServices.includes(s.id))
    .reduce((acc, curr) => acc + curr.price, 0);

  // Apply bundle discount if 2 or more services are selected for the single visit
  const hasDiscount = selectedServices.length >= 2;
  const calculatedPrice = hasDiscount
    ? Math.round((rawSum * 0.875) / 100) * 100 // bundle discount
    : rawSum;

  const handleWhatsappSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const chosenServiceNames = availableServices
      .filter((s) => selectedServices.includes(s.id))
      .map((s) => `• ${s.label}`)
      .join("\n");

    const messageLines = [
      "🌿 *EDİRNE MEZAR TEMİZLEME & BAKIM TEKLİF TALEBİ*",
      "----------------------------------",
      "📌 *Kapsam:* 1 Ziyaret (Tek Seferlik Uygulama)",
      `📍 *İlçe:* ${district}`,
      `🏡 *Köy / Mezarlık:* ${village.trim() || "Belirtilmedi (Görüşülecek)"}`,
      `👤 *Talep Eden:* ${name.trim() || "İsimsiz Müşteri"}`,
      phone.trim() ? `📞 *İletişim:* ${phone.trim()}` : "",
      "",
      "*1 Ziyarette Yapılacak Hizmetler:*",
      chosenServiceNames || "• Genel Bakım",
      "",
      `💰 *Hesaplanan Tahmini Tutar:* ~${calculatedPrice.toLocaleString("tr-TR")} ₺`,
      notes.trim() ? `\n📝 *Ek Not:* ${notes.trim()}` : "",
      "----------------------------------",
      "Fotoğraflı öncesi/sonrası hizmetiniz ve 1 ziyaretlik net fiyatınız için bilgi rica ediyorum.",
    ].filter(Boolean);

    const fullMessage = messageLines.join("\n");
    const waUrl = contactConfig.getWhatsappUrl(fullMessage);
    setSubmitted(true);
    window.open(waUrl, "_blank");
  };

  return (
    <section id="fiyat-teklifi" className="py-20 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5 text-emerald-700" />
            <span>1 Ziyarette Eksiksiz Hizmet & Fiyatlandırma</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Köyünüzü ve İhtiyaçlarınızı Seçin
          </h2>
          <p className="text-base text-slate-600 max-w-xl mx-auto">
            Tüm paketlerimiz <strong>1 ziyarette</strong> eksiksiz tamamlanıp video/fotoğraf ile teslim edilir.
            İhtiyacınız olan işlemleri seçerek tahmini tutarı anında görün.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/90 relative">
          <form onSubmit={handleWhatsappSubmit} className="space-y-6">
            {/* Step 1: Location */}
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">
                1. Mezarlığın Bulunduğu İlçe ve Köy / Mevki
              </label>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1">
                    İlçe Seçin
                  </label>
                  <select
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 font-medium text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  >
                    {districtsData.map((d) => (
                      <option key={d.slug} value={d.name}>
                        {d.name} {d.isCenter ? "(Merkez)" : ""}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1">
                    Köy, Mahalle veya Mezarlık Adı
                  </label>
                  <input
                    type="text"
                    placeholder="Örn: Demirköy, Elmalı, Çamlıca vb."
                    value={village}
                    onChange={(e) => setVillage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 font-medium text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-2 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-600 inline" />
                Edirne sınırları içerisindeki tüm köylere kendi araçlarımızla 1 ziyarette gidiyoruz.
              </p>
            </div>

            {/* Step 2: Desired Services */}
            <div className="pt-2 border-t border-slate-100">
              <label className="block text-sm font-bold text-slate-900 mb-3">
                2. Bu Ziyarette Yapılmasını İstediğiniz Hizmetleri Seçin
              </label>
              <div className="grid sm:grid-cols-2 gap-3">
                {availableServices.map((srv) => {
                  const isChecked = selectedServices.includes(srv.id);
                  return (
                    <button
                      type="button"
                      key={srv.id}
                      onClick={() => toggleService(srv.id)}
                      className={`flex items-start justify-between p-3.5 rounded-xl text-left border transition-all duration-200 ${
                        isChecked
                          ? "bg-emerald-50/80 border-emerald-500 text-emerald-950 font-medium shadow-sm"
                          : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 text-emerald-700">
                          {isChecked ? (
                            <CheckSquare className="w-5 h-5 fill-emerald-600 text-white" />
                          ) : (
                            <Square className="w-5 h-5 text-slate-400" />
                          )}
                        </div>
                        <span className="text-xs sm:text-sm">{srv.label}</span>
                      </div>
                      <span className="text-xs font-bold text-emerald-800 shrink-0 ml-2">
                        {srv.price.toLocaleString("tr-TR")} ₺
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Contact details */}
            <div className="pt-2 border-t border-slate-100">
              <label className="block text-sm font-bold text-slate-900 mb-2">
                3. İletişim ve Varsa Özel Notunuz
              </label>
              <div className="grid sm:grid-cols-2 gap-4 mb-3">
                <input
                  type="text"
                  placeholder="Adınız ve Soyadınız"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 font-medium text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Telefon Numaranız (İsteğe bağlı)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 font-medium text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>
              <textarea
                rows={2}
                placeholder="Varsa kabirle ilgili ek bilgi (Örn: Mezar 10 yıldır bakımsız, taşın sağ tarafı çatlak vb.)"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 font-medium text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
            </div>

            {/* Step 4: Estimated Price Bar */}
            <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider flex items-center justify-center sm:justify-start gap-1">
                  <Tag className="w-3.5 h-3.5" />
                  <span>1 Ziyaret Tahmini Paket Bedeli</span>
                </span>
                <div className="flex items-baseline justify-center sm:justify-start gap-2 mt-1">
                  <span className="text-3xl font-black text-emerald-950">
                    {calculatedPrice > 0 ? `~${calculatedPrice.toLocaleString("tr-TR")} ₺` : "0 ₺"}
                  </span>
                  {hasDiscount && (
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-200/70 px-2 py-0.5 rounded-md">
                      Paket İndirimi Dahil
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  * 1 tek ziyarette eksiksiz teslimat ve WhatsApp video onayı dahildir.
                </p>
              </div>

              <div className="shrink-0 text-center sm:text-right">
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-700 text-white text-xs font-bold">
                  1 Ziyarette Fotoğraflı/Videolu Teslimat
                </span>
              </div>
            </div>

            {/* Submit Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-base shadow-lg shadow-emerald-900/20 transition duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>WhatsApp&apos;tan 1 Ziyaret Teklifi Al</span>
              </button>

              <a
                href={`tel:${contactConfig.phoneRaw}`}
                className="flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-sm transition"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <span>Telefonla Ara</span>
              </a>
            </div>

            {submitted && (
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>
                  WhatsApp uygulamanız açılıyor. Mesajı gönderdiğinizde en kısa sürede dönüş sağlanacaktır.
                </span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
