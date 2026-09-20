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
      "Karaağaç", "Yıldırım", "Şükrüpaşa", "Kıyık", "Demirköy", "Karabulut",
      "Avarız", "Hıdırağa", "Büyükdöllük", "Menekşesofular", "Musabeyli",
      "Hasanağa", "Tayakadın", "Orhaniye", "İskender", "Sarayakpınar", "Yolüstü", "Budakdoğanca"
    ],
    allVillagesCount: 37
  },
  {
    name: "Havsa",
    slug: "havsa",
    popularVillages: [
      "Abalar", "Arpaç", "Bakışlar", "Bostanlı", "Çukurköy", "Habiller",
      "Hasköy", "Kabaağaç", "Köseömer", "Kulubalık", "Musul", "Naipyusuf",
      "Necatiye", "Oğulpaşa", "Şerbettar", "Taptık", "Yolageldi"
    ],
    allVillagesCount: 22
  },
  {
    name: "Uzunköprü",
    slug: "uzunkopru",
    popularVillages: [
      "Aşçıoğlu", "Başağıl", "Bayramlı", "Beykonak", "Çakmak", "Çalıköy",
      "Çiftlikköy", "Değirmenci", "Dereköy", "Elmalı", "Gazimehmet", "Hamidiye",
      "Harmanlı", "Hasanpınar", "Karapınar", "Kavacık", "Kırköy", "Kırcasalih",
      "Kurtbey", "Maksutlu", "Salarlı", "Saçlımüsellim", "Sığırcılı", "Sipahi"
    ],
    allVillagesCount: 53
  },
  {
    name: "Keşan",
    slug: "kesan",
    popularVillages: [
      "Ahmetbey", "Akçeşme", "Altıntaş", "Bahçeköy", "Beyköy", "Boztepe",
      "Büyükdoğanca", "Çamlıca", "Çeltik", "Çobançeşmesi", "Danişment", "Dişbudak",
      "Erikli", "Gökçetepe", "Karlıköy", "Kılıçköy", "Koruklu", "Maltepe",
      "Mecidiye", "Orhaniye", "Pırnar", "Siğilli", "Suluca", "Şabanmera", "Yayla"
    ],
    allVillagesCount: 45
  },
  {
    name: "İpsala",
    slug: "ipsala",
    popularVillages: [
      "Balabancık", "Esetçe", "Hacı", "İbriktepe", "Kocahıdır", "Korucu",
      "Koyuntepe", "Kumdere", "Küçükdoğanca", "Paşaköy", "Sarıcaali", "Sultanköy",
      "Tevfikiye", "Turpçular", "Vaysal", "Yapıldak", "Yenikarpuzlu"
    ],
    allVillagesCount: 19
  },
  {
    name: "Meriç",
    slug: "meric",
    popularVillages: [
      "Adasarhanlı", "Akçadam", "Alibeyköy", "Büyükaltıağaç", "Hasırcıarnavutköy",
      "Kadıdondurma", "Karahamza", "Karayusuflu", "Kavaklı", "Küçükaltıağaç",
      "Küplü", "Nasuhbey", "Olacak", "Paşaelçisi", "Sağlık", "Serem", "Subaşı", "Umurca"
    ],
    allVillagesCount: 21
  },
  {
    name: "Lalapaşa",
    slug: "lalapasa",
    popularVillages: [
      "Çallıdere", "Çömlekakpınar", "Çömlekköy", "Demirköy", "Doğanköy", "Dombay",
      "Hacıdanişment", "Hamzabeyli", "Hanlyenice", "Hüseyinpınar", "Kalkansöğüt",
      "Kavaklı", "Küçünlü", "Ortakçı", "Ömeroba", "Sarıdanişment", "Sinanköy", "Vaysal"
    ],
    allVillagesCount: 27
  },
  {
    name: "Süloğlu",
    slug: "suloglu",
    popularVillages: [
      "Akardere", "Büyükgerdelli", "Domurcalı", "Geçkinli", "Keramettin",
      "Küküler", "Sülecik", "Taşlısekban", "Yağcılı"
    ],
    allVillagesCount: 10
  },
  {
    name: "Enez",
    slug: "enez",
    popularVillages: [
      "Abdullahpaşa", "Büyükevren", "Çandırlı", "Çeribaşı", "Gülçavuş", "Hasköy",
      "Hisarlı", "Işıklı", "Karaincirli", "Kocaali", "Küçükevren", "Sultaniçe",
      "Sütçüler", "Şehitler", "Umurbey", "Vakıf", "Yenice"
    ],
    allVillagesCount: 19
  }
];
