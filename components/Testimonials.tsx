import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Ahmet Yılmaz",
      location: "Almanya / Köln (Havsa Hasköy Mezarlığı)",
      text: "Almanya'da yaşadığımız için dedemin köydeki mezarını her yıl ziyaret edemiyorduk. Kendilerine WhatsApp'tan yazdım, köydeki mezarı gidip buldular, pırıl pırıl temizleyip çiçek diktiler. Gönderdikleri öncesi-sonrası videoları görünce gözlerimiz yaşardı. Allah razı olsun.",
      rating: 5,
    },
    {
      name: "Merve D.",
      location: "İstanbul (Uzunköprü Kurtbey Mezarlığı)",
      text: "Bayram öncesi annemin mezar bakımını yaptırdık. Mermerleri o kadar güzel beyazlatmışlar ki sanki yeni yapılmış gibi oldu. Taş yazıları da yeniden altın rengiyle boyandı. Süreç boyunca her aşamayı fotoğraflarla iletmeleri çok güven verdi.",
      rating: 5,
    },
    {
      name: "Hasan Çelik",
      location: "Edirne Merkez (Karaağaç Mezarlığı)",
      text: "Yıllardır ilgilenemediğimiz aile kabristanındaki yabani dikenleri kökten temizleyip toprağını havalandırdılar ve taze toprak koydular. Saygılı ve çok temiz çalışan bir ekip. Edirne'de böyle bir hizmetin olması büyük kolaylık.",
      rating: 5,
    },
    {
      name: "Fatma Korkmaz",
      location: "Bursa (Keşan Çamlıca Köyü)",
      text: "Uzakta olduğumuz için içimiz hep buruktu. Yıllık periyodik bakım anlaşması yaptık, her ay düzenli gidip sulamasını ve bakımını yapıp videosunu atıyorlar. Gurbettekiler için gerçekten çok büyük nimet.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 text-emerald-700" />
            <span>Müşteri Memnuniyeti</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Bizi Tercih Eden Hemşehrilerimizin Yorumları
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Edirne’den, diğer şehirlerden ve yurt dışından emanetlerini teslim
            eden ailelerin samimi deneyimleri.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition"
            >
              <div>
                <div className="flex items-center gap-1 mb-4 text-amber-500">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-slate-300 mb-2" />
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <p className="font-bold text-slate-900 text-sm">{rev.name}</p>
                <p className="text-xs text-emerald-700 font-medium mt-0.5">
                  {rev.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
