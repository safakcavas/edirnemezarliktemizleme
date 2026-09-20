export interface DistrictInfo {
  name: string;
  slug: string;
  isCenter?: boolean;
  popularVillages: string[];
  allVillagesCount: number;
}

export const districtsData: DistrictInfo[] = [
  {
    name: "Edirne Merkez",
    slug: "edirne-merkez",
    isCenter: true,
    popularVillages: [
      "Ahi", "Avarız", "Bosna", "Budakdoğanca", "Büyükdöllük", "Büyükismailçe",
      "Değirmenyanı", "Demirhanlı", "Doyran", "Ekmekçi", "Elçili", "Eskikadın",
      "Hacıumur", "Hasanağa", "Hatipköy", "Hıdırağa", "İskender", "Karabulut",
      "Karakasım", "Karayusuf", "Kayapa", "Kemalköy", "Korucu", "Köşençiftliği",
      "Küçükdöllük", "Menekşesofular", "Muratçalı", "Musabeyli", "Orhaniye",
      "Sarayakpınar", "Sazlıdere", "Suakacağı", "Tayakadın", "Uzgaç", "Üyüklütatar",
      "Yenikadın", "Yolüstü", "Karaağaç", "Yıldırım", "Şükrüpaşa", "Kıyık"
    ],
    allVillagesCount: 37
  },
  {
    name: "Havsa",
    slug: "havsa",
    popularVillages: [
      "Abalar", "Arpaç", "Azatlı", "Bakışlar", "Bostanlı", "Çukurköy",
      "Habiller", "Hasköy", "Kabaağaç", "Köseömer", "Kulubalık", "Kuzucu",
      "Musulca", "Naipyusuf", "Necatiye", "Oğulpaşa", "Osmanlı", "Söğütlüdere",
      "Şerbettar", "Tahal", "Taptık", "Yolageldi"
    ],
    allVillagesCount: 22
  },
  {
    name: "Uzunköprü",
    slug: "uzunkopru",
    popularVillages: [
      "Alıç", "Altınyazı", "Aslıhan", "Balaban", "Balabankoru", "Başağıl",
      "Bayramlı", "Beykonak", "Bıldır", "Çakmakköy", "Çalıköy", "Çavuşlu",
      "Çiftlikköy", "Çobanpınarı", "Danişment", "Değirmenci", "Dereköy", "Elmalı",
      "Eskiköy", "Gazihalil", "Gazimehmet", "Gemici", "Hamidiye", "Hamitli",
      "Harmanlı", "Hasanpınar", "Kadıağılı", "Kadıköy", "Karabürçek", "Karapınar",
      "Karayayla", "Kavacık", "Kavakayazma", "Kırkkavak", "Kırköy", "Kiremitçisalih",
      "Kurdu", "Kurtbey", "Kurttepe", "Maksutlu", "Malkoçköy", "Meşeli",
      "Muhacırkadı", "Ömerbey", "Saçlımüsellim", "Salarlı", "Sazlımalkoç", "Sığırcılı",
      "Sipahi", "Sultanşah", "Süleymaniye", "Turnacı", "Yağmurca"
    ],
    allVillagesCount: 53
  },
  {
    name: "Keşan",
    slug: "kesan",
    popularVillages: [
      "Akçeşme", "Akhoca", "Altıntaş", "Bahçeköy", "Barağı", "Beyköy",
      "Boztepe", "Büyükdoğanca", "Çamlıca", "Çelebi", "Çeltik", "Çobançeşmesi",
      "Danişment", "Dişbudak", "Erikli", "Gökçetepe", "Gündüzler", "Kadıköy",
      "Karacaali", "Karahisar", "Karasatı", "Karlı", "Kılıçköy", "Kızkapan",
      "Koruklu", "Kozköy", "Küçükdoğanca", "Lalacık", "Mahmutköy", "Maltepe",
      "Mecidiye", "Mercan", "Orhaniye", "Pırnar", "Sazlıdere", "Seydiköy",
      "Siğilli", "Suluca", "Şabanmera", "Şükrüköy", "Türkmen", "Yaylaköy",
      "Yeniceçiftlik", "Yerlisu", "Yeşilköy"
    ],
    allVillagesCount: 45
  },
  {
    name: "İpsala",
    slug: "ipsala",
    popularVillages: [
      "Aliçopehlivan", "Balabancık", "Hacı", "Hıdırköy", "İbriktepe", "Karaağaç",
      "Kocahıdır", "Korucu", "Koyuntepe", "Kumdere", "Küçükdoğanca", "Paşaköy",
      "Pazardere", "Sarıcaali", "Sarpdere", "Sultan", "Tevfikiye", "Turpçular", "Yapıldak"
    ],
    allVillagesCount: 19
  },
  {
    name: "Meriç",
    slug: "meric",
    popularVillages: [
      "Adasarhanlı", "Akçadam", "Akıncılar", "Alibey", "Büyükaltıağaç",
      "Hasırcıarnavutköy", "Kadıdondurma", "Karahamza", "Karayusuflu", "Kavaklı",
      "Küçükaltıağaç", "Küpdere", "Nasuhbey", "Olacak", "Paşayenice", "Rahmanca",
      "Saatağacı", "Serem", "Subaşı", "Umurca", "Yakupbey", "Yenicegörice"
    ],
    allVillagesCount: 21
  },
  {
    name: "Lalapaşa",
    slug: "lalapasa",
    popularVillages: [
      "Büyünlü", "Çallıdere", "Çatma", "Çömlek", "Çömlekakpınar", "Demirköy",
      "Doğanköy", "Dombay", "Hacıdanişment", "Hacılar", "Hamzabeyli", "Hanlıyenice",
      "Hüseyinpınar", "Kalkansöğüt", "Kavaklı", "Küçünlü", "Ortakçı", "Ömeroba",
      "Saksağan", "Sarıdanişment", "Sinanköy", "Süleymandanişment", "Taşlımüsellim",
      "Tuğlalık", "Uzunbayır", "Vaysal", "Yünlüce"
    ],
    allVillagesCount: 27
  },
  {
    name: "Süloğlu",
    slug: "suloglu",
    popularVillages: [
      "Akardere", "Büyükgerdelli", "Domurcalı", "Geçkinli", "Keramettin",
      "Küküler", "Sülecik", "Taşlısekban", "Tatarlar", "Yağcılı"
    ],
    allVillagesCount: 10
  },
  {
    name: "Enez",
    slug: "enez",
    popularVillages: [
      "Abdurrahim", "Büyükevren", "Çandır", "Çavuşköy", "Çeribaşı", "Gülçavuş",
      "Hasköy", "Hisarlı", "Işıklı", "Karaincirli", "Kocaali", "Küçükevren",
      "Sultaniçe", "Sütçüler", "Şehitler", "Umurbey", "Vakıf", "Yazır", "Yenice"
    ],
    allVillagesCount: 19
  }
];

export const trakyaSiteRedirect = {
  brandName: "Trakya Mezar Bakım",
  siteUrl: "https://trakyamezarliktemizleme.site",
  description: "Tekirdağ (Çorlu, Süleymanpaşa, Çerkezköy vb.) ve Kırklareli (Lüleburgaz, Babaeski vb.) bölgelerindeki kabir bakım hizmetlerimiz için Trakya sitemizi ziyaret edebilirsiniz.",
  provinces: ["Tekirdağ", "Kırklareli"]
};
