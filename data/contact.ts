export const contactConfig = {
  brandName: "Edirne Mezar Bakım & Temizlik",
  domain: "edirnemezarliktemizleme.site",
  phone: "+90 530 230 15 22",
  phoneRaw: "905302301522",
  whatsappNumber: "905302301522",
  email: "bilgi@edirnemezarliktemizleme.site",
  location: "Edirne Merkez / Tüm İlçe ve Köyler",
  workingHours: "Haftanın 7 Günü: 08:00 - 20:00",
  serviceNote: "Edirne merkez, tüm ilçeler ve 250'den fazla köye kendi araçlarımızla yerinde hizmet götürüyoruz.",
  getWhatsappUrl: (customMessage?: string) => {
    const defaultMsg = "Merhaba, edirnemezarliktemizleme.site üzerinden ulaşıyorum. Edirne'deki mezar bakım ve temizlik hizmetiniz hakkında bilgi ve fiyat teklifi almak istiyorum.";
    const text = encodeURIComponent(customMessage || defaultMsg);
    return `https://wa.me/905302301522?text=${text}`;
  }
};
