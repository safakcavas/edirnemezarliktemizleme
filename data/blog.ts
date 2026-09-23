export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: string;
  date: string; // ISO format: YYYY-MM-DD
  readTime: string;
  author: string;
  keywords: string[];
  image: string;
  content: {
    lead: string;
    sections: {
      heading: string;
      body: string[];
      tip?: string;
      checklist?: string[];
    }[];
    conclusion: string;
  };
}

export const generalBlogPosts: BlogPost[] = [
  {
    slug: "edirne-mezar-bakimi-nasil-yapilir",
    title: "Edirne'de Mezar Bakımı Nasıl Yapılır? Mermer Temizliği ve Toprak Bakım Rehberi",
    description:
      "Edirne iklim koşullarında kabirlerin yabani otlardan arındırılması, mermerin aşınmadan beyazlatılması ve mevsimlik çiçek bakımı hakkında kapsamlı rehber.",
    excerpt:
      "Edirne merkez ve tüm köylerinde mezar bakımı yaparken dikkat edilmesi gereken aşamalar, doğru malzeme seçimi ve periyodik kabir düzenleme adımları.",
    category: "Bakım Rehberi",
    date: "2026-09-20",
    readTime: "5 dk okuma",
    author: "Edirne Mezar Bakım Uzmanı",
    keywords: [
      "Edirne mezar bakımı",
      "mezar temizliği nasıl yapılır",
      "Edirne mezarlık temizliği",
      "kabir bakımı Edirne",
      "mermer mezar temizliği Edirne",
    ],
    image: "/images/hero-cemetery.jpg",
    content: {
      lead: "Mezarlıklar, ebediyete intikal etmiş sevdiklerimize duyduğumuz hürmet ve vefanın somut birer göstergesidir. Ancak Edirne'nin Balkanlar'dan gelen sert ayazı, nehir vadilerindeki yoğun nemi ve yaz kuraklığı; mermerlerde kararma, yosunlanma ve toprakta yabani ot istilasına neden olur. Doğru yöntemlerle yapılan periyodik bir bakım, kabrin fiziki bütünlüğünü korur ve her zaman tertemiz kalmasını sağlar.",
      sections: [
        {
          heading: "1. Aşama: Yabani Otların Kökten Temizlenmesi ve Toprak Havalandırması",
          body: [
            "Edirne ve Trakya'nın verimli kara toprağı, ilkbahar ve sonbahar aylarında köklü yabani otların, sarmaşıkların ve dikenlerin hızla büyümesine yol açar. Yalnızca yüzeyden kesilen otlar kısa sürede yeniden çıkar ve kökleri mermer kaidenin altına sızarak yapının oynamasına neden olabilir.",
            "Bu nedenle ilk adım, otların kökleriyle birlikte el çapalarıyla sökülmesidir. Söküm işleminden sonra mezar toprağı bellenmeli, havalandırılmalı ve kök artıklarından tamamen elenmelidir. Çökme veya aşınma varsa, kaliteli elenmiş bahçe toprağı takviye edilmelidir.",
          ],
          tip: "Yabani ot temizliğinde kimyasal ot kurutucu (herbisit) kullanılması önerilmez. Kimyasal ilaçlar mermer derzlerine sızarak zamanla harcı eritir ve toprağı zehirleyerek yeni dikilecek çiçeklerin kurumasına sebep olur.",
        },
        {
          heading: "2. Aşama: Mermer Yüzeylerin Özel Solüsyonla Beyazlatılması",
          body: [
            "Edirne'deki köy ve şehir mezarlıklarında rüzgar ve yağmur suyu mermer gözeneklerinde yosun, liken ve kireç tortusu bırakır. Pek çok kişi bu lekeleri çıkarmak için porçöz, tuz ruhu veya sert çamaşır suyu kullanır; ancak bu asidik maddeler mermerin koruyucu cilasını eritir ve taşı delik deşik eder.",
            "Doğru mermer beyazlatma işleminde asitsiz, biyolojik olarak çözünebilen ve mermerin mineral yapısını koruyan özel yüzey aktif solüsyonlar ve yumuşak kıllı fırçalar kullanılır. Bol su ile durulandıktan sonra mermere su itici koruyucu katman uygulanır.",
          ],
          checklist: [
            "Tuz ruhu, çamaşır suyu veya kireç sökücü asitler kesinlikle kullanılmamalıdır.",
            "Tel fırça yerine orta sertlikte kıl fırça ve mikrofiber bezler tercih edilmelidir.",
            "Kabir yıkandıktan sonra bol temiz suyla durulanmalıdır.",
          ],
        },
        {
          heading: "3. Aşama: Mezar Taşı Yazı Boyama ve Harç/Derz Kontrolü",
          body: [
            "Güneşin UV ışınları ve kış donları mezar baş taşındaki yazıları zamanla silikleştirir. Mezar kimliğinin kaybolmaması için mermer oyma yazılar özel altın yaldız veya mat siyah hava koşullarına dayanıklı akrilik dış cephe boyalarıyla ince fırçalar yardımıyla yenilenir.",
            "Ayrıca mermer birleşim yerlerindeki derz harçları kontrol edilir. Don çatlakları nedeniyle açılan derzler, su sızmasını ve kışın taşın patlamasını önlemek amacıyla su geçirmez beyaz mermer silikonu veya özel derz dolgusu ile kapatılır.",
          ],
        },
        {
          heading: "4. Aşama: İklime Uygun Çiçeklendirme ve Can Suyu",
          body: [
            "Edirne'nin soğuk kışlarına ve kurak yazlarına dayanıklı bitkiler seçilmelidir. Bodur çalılar (Taflan, Şimşir), mevsimlik dayanıklı çiçekler (Hercai Menekşe, Kadife Çiçeği) ve kokulu türler (Lavanta, Biberiye) kabir üzerinde hem estetik bir görünüm sağlar hem de uzun süre diri kalır.",
            "Ekim işleminden sonra toprağa can suyu verilir ve gerekiyorsa nemi tutması için çam kabuğu veya dolomit taş malçlama yapılır.",
          ],
        },
      ],
      conclusion:
        "Eğer uzakta yaşıyorsanız veya zaman ayıramıyorsanız, profesyonel mobil ekibimiz Edirne Merkez ve 8 ilçesindeki 253 köyün tamamında bu adımları kendi su ve ekipmanıyla yerine getirmekte; öncesi ve sonrası HD video kaydı ile teslim etmektedir.",
    },
  },
  {
    slug: "mezar-mermeri-nasil-beyazlatilir-asitsiz-temizlik",
    title: "Mezar Mermeri Nasıl Beyazlatılır? Asitsiz ve Yüzeye Zararsız Temizlik Yöntemleri",
    description:
      "Tuz ruhu veya çamaşır suyu mermeri neden çürütür? Kararan, yosun tutan mezar taşlarını aşındırmadan ilk günkü beyazlığına kavuşturmanın güvenli yöntemleri.",
    excerpt:
      "Mermer mezar temizliğinde yapılan ölümcül hatalar ve taşın ömrünü uzatarak kararmaları yok eden profesyonel asitsiz beyazlatma solüsyonlarının kullanım rehberi.",
    category: "Mermer Beyazlatma",
    date: "2026-09-15",
    readTime: "4 dk okuma",
    author: "Mermer Bakım Servisi",
    keywords: [
      "mezar mermeri beyazlatma",
      "mezar taşı temizleme",
      "kararmış mezar temizliği",
      "asitsiz mezar beyazlatma",
      "mermer leke çıkarma",
    ],
    image: "/images/hero-cemetery.jpg",
    content: {
      lead: "Yıllar boyunca yağmur, kar, çamur ve ağaç reçinelerine maruz kalan mezar mermerleri zamanla sararır, kararır ve yosun kaplanır. Birçok kişi hızlı sonuç almak için ev tipi asitli deterjanlara başvurur; oysa kalsiyum karbonat esaslı olan mermer asitle temas ettiğinde geri dönülemez şekilde erir ve süngerleşir.",
      sections: [
        {
          heading: "Tuz Ruhu ve Kireç Çözücüler Mermere Neden Zarar Verir?",
          body: [
            "Mermer doğal bir kalker taşıdır ve kimyasal yapısı asitlere karşı son derece kırılgandır. Tuz ruhu (hidroklorik asit) veya kireç çözücüler mermer yüzeyine döküldüğünde hemen köpürür. Bu köpürme aslında taşın yüzey tabakasının eridiğini gösterir.",
            "Asitle temizlenen mermer ilk birkaç gün beyaz görünse de koruyucu sır tabakası yok olduğu için gözenekleri sonuna kadar açılır. Sonuç olarak bir sonraki yağmurda kir ve is o deliklere çok daha derin işler ve taş eskisinden kat kat daha hızlı kararır.",
          ],
        },
        {
          heading: "Profesyonel ve Güvenli Beyazlatma Adımları",
          body: [
            "Doğal taşlar için özel formüle edilmiş pH nötr veya hafif alkali derinlemesine temizlik solüsyonları kullanılmalıdır. Bu solüsyonlar mermer kristallerine zarar vermeden yosun, liken, küf ve is tabakasını yumuşatarak yüzeyden ayırır.",
            "Solüsyon mezar yüzeyine püskürtüldükten sonra 10-15 dakika nüfuz etmesi beklenir. Ardından orta sertlikte kıllara sahip fırçalarla dairesel hareketlerle ovulur ve bol temiz suyla durulanır.",
          ],
        },
      ],
      conclusion:
        "Edirne Mezar Temizleme olarak biz hiçbir işlemimizde mermere zarar veren asitler kullanmıyoruz. Özel mermer solüsyonlarımız ile taşlarınızı aşındırmadan ilk günkü beyaz ve parlak görünümüne kavuşturuyoruz.",
    },
  },
  {
    slug: "gurbetciler-icin-edirnede-kabir-bakim-hizmeti",
    title: "Almanya ve Avrupa'daki Gurbetçiler İçin Edirne Köylerine Mezar Bakım Hizmeti",
    description:
      "Almanya, Hollanda, Fransa ve tüm Avrupa'daki gurbetçilerimiz için Edirne ve 8 ilçesindeki köy kabirlerine güvenilir, videolu ve fotoğraflı bakım hizmeti.",
    excerpt:
      "Yurt dışında yaşarken Edirne'deki dede ve ana ocağındaki kabirlerin bakımını nasıl yaptırabilirsiniz? WhatsApp üzerinden görüntülü keşif ve teslimat süreci.",
    category: "Gurbetçi Hizmetleri",
    date: "2026-09-12",
    readTime: "4 dk okuma",
    author: "Gurbetçi İletişim Masası",
    keywords: [
      "gurbetçi mezar bakımı Edirne",
      "Almanya gurbetçilerine kabir bakımı",
      "Edirne köy mezarı temizliği",
      "Keşan uzaktan mezar bakımı",
      "videolu mezar teslimatı",
    ],
    image: "/images/hero-cemetery.jpg",
    content: {
      lead: "Almanya, Avusturya, Fransa, Belçika ve İsviçre başta olmak üzere Avrupa'nın dört bir yanında yaşayan yüz binlerce Edirneli gurbetçimiz bulunmaktadır. Sıla hasreti çeken hemşehrilerimiz için en büyük manevi yüklerden biri, memleket köylerinde yatan anne, baba ve büyüklerinin kabirlerini düzenli olarak ziyaret edememek ve bakımlarını yaptıramamaktır.",
      sections: [
        {
          heading: "Uzakta Olsanız da Gözünüz Arkada Kalmasın",
          body: [
            "Yılda yalnızca bir veya iki haftalığına memlekete gelinebildiğinde, mezarlığı ziyaret edip çalı çırpı içinde görmek derin bir üzüntü yaratır. Üstelik tatil süresinde mermer beyazlatma solüsyonu, bahçe aletleri ve su bulmak büyük bir zahmete dönüşür.",
            "Edirne Mezar Bakım olarak gurbetçi hemşehrilerimizin bu manevi emanetini üstleniyoruz. Keşan'ından Uzunköprü'süne, Havsa'sından İpsala ve Enez'ine kadar 253 Edirne köyüne bizzat ulaşıyoruz.",
          ],
        },
        {
          heading: "3 Basit Adımda Sipariş ve Teslimat",
          body: [
            "1. WhatsApp Üzerinden Bilgi Paylaşımı: Merhumun adı-soyadı, ilçe ve köy adı ile varsa yaklaşık mezar konumu bize iletilir.",
            "2. Yerinde Ücretsiz Keşif & Öncesi Video Çekimi: Mobil ekibimiz ilgili köy mezarlığına gider, kabri bulur ve durumunu gösteren HD video ve fotoğrafları size iletir.",
            "3. Uygulama & Detaylı Teslimat Raporu: Onayınız sonrası temizlik, beyazlatma, ot ayıklama, yazı boyama ve çiçeklendirme tamamlanır; yapılan işin 4K videosu anında iletilir.",
          ],
        },
      ],
      conclusion:
        "Memleketinizden binlerce kilometre uzakta olsanız bile dualarınız sevdiklerinizin kabrinde çiçek açsın. WhatsApp hattımızdan bize dilediğiniz saatte yazabilirsiniz.",
    },
  },
  {
    slug: "edirne-koy-mezarliklarina-yerinde-mobil-bakim",
    title: "Edirne'nin 253 Köy Mezarlığına Yerinde Mobil Kabir Temizliği ve Ulaşım",
    description:
      "Su ve elektrik bulunmayan ücra Edirne köy mezarlıklarında kendi su depomuz ve mobil ekipmanlarımızla profesyonel kabir bakımı.",
    excerpt:
      "Edirne Merkez, Havsa, Keşan, Uzunköprü, İpsala, Meriç, Lalapaşa, Süloğlu, Enez ve 253 köyde mezar temizliği nasıl yapılır? Mobil saha ekibimizin çalışma prensipleri.",
    category: "Bölgesel Hizmet",
    date: "2026-09-08",
    readTime: "5 dk okuma",
    author: "Saha Operasyon Ekibi",
    keywords: [
      "Edirne köy mezarlık temizleme",
      "Keşan köy mezar bakımı",
      "Uzunköprü mezarlık servisi",
      "Havsa kabir temizliği",
      "mobil mezar temizleme Edirne",
    ],
    image: "/images/hero-cemetery.jpg",
    content: {
      lead: "Şehir merkezlerindeki asri mezarlıklarda çeşme, yürüyüş yolları ve düzenli görevliler bulunabilir. Ancak Edirne'nin yüzlerce köy mezarlığında çoğu zaman yakında akan bir su çeşmesi dahi yoktur; yollar engebelidir ve kabirler yabani çalıların arasında kaybolma riskiyle karşı karşıyadır.",
      sections: [
        {
          heading: "Susuz ve Elektriksiz Mezarlıklara Tam Donanımlı Mobil Çözüm",
          body: [
            "Araçlarımız, köy mezarlıklarının bu özel şartlarına göre donatılmıştır. Araçlarımızda kendi temiz basınçlı su depomuz, bataryalı profesyonel budama aletleri ve portatif basınçlı yıkama sistemleri yer almaktadır.",
            "Bu sayede köyün en ücra köşesindeki, tepedeki veya sınır hattındaki eski mezarlıklarda dahi kimseden su ya da elektrik talep etmeden tam teşekküllü temizlik yapabiliyoruz.",
          ],
        },
      ],
      conclusion:
        "Köyünüz ne kadar uzakta olursa olsun sevdiklerinizin kabri bizim için mukaddes bir emanettir. Tek bir telefon veya WhatsApp mesajı ile yanınızdayız.",
    },
  },
  {
    slug: "edirne-iklimine-dayanikli-mezar-cicekleri",
    title: "Edirne Sert İklimine Dayanıklı Mezar Çiçekleri ve Çalı Türleri Rehberi",
    description:
      "Edirne'nin kuru ayazına ve yaz sıcağına dayanıklı, kabir üzerinde solmadan uzun süre diri kalan çiçek ve çalı türleri rehberi.",
    excerpt:
      "Kabir üzerine çiçek seçerken kök yapısının mermere zarar vermemesi ve susuzluğa dayanıklı olması gerekir. Edirne toprağına en uygun mezarlık çiçekleri.",
    category: "Çiçeklendirme",
    date: "2026-09-03",
    readTime: "4 dk okuma",
    author: "Peyzaj ve Bahçe Uzmanı",
    keywords: [
      "Edirne mezara hangi çiçek dikilir",
      "Edirne mezarlık çiçekleri",
      "kabir çiçeklendirme Edirne",
      "kuraklığa dayanıklı mezar çiçekleri",
    ],
    image: "/images/hero-cemetery.jpg",
    content: {
      lead: "Kabirlerin üzerine çiçek ekmek hem dini ve manevi bir gelenek hem de kabre huzurlu ve bakımlı bir görünüm kazandıran en güzel uygulamadır. Ancak gelişi güzel seçilen narin salon çiçekleri veya derin köklü büyük ağaçlar Edirne mezarlık şartlarında kısa sürede kurur ya da mermer yapıyı patlatır.",
      sections: [
        {
          heading: "Edirne Kabirleri İçin En Uygun Bitki ve Çiçekler",
          body: [
            "Bodur Taflan & Şimşir: Dört mevsim yeşil kalan, yaprak dökmeyen ve budanarak formunu koruyan bodur çalılar mezar çerçevesi için idealdir.",
            "Hercai Menekşe: Sonbahar ve kış aylarında dikilen, kar altında bile çiçek açmaya devam eden dayanıklı bir kış çiçeğidir.",
            "Kadife Çiçeği (Tagetes): İlkbahar ve yazın dikilir. Böcekleri uzak tutan doğal kokusu ve kuraklığa yüksek direnciyle mezarlıkların vazgeçilmezidir.",
            "Lavanta & Biberiye: Hoş kokuları, estetik yaprakları ve susuzluğa olan olağanüstü dayanıklılıkları ile Edirne toprağında yıllarca yaşarlar.",
          ],
        },
      ],
      conclusion:
        "Paketlerimizde iklime en uygun, yerel fidelerden seçilmiş canlı çiçekler kullanıyor ve can suyu gübrelemesiyle birlikte teslim ediyoruz.",
    },
  },
  {
    slug: "mezar-tasi-yazi-boyama-ve-derz-tamiri",
    title: "Mezar Taşı Yazı Boyama ve Mermer Derz Tamiratı Nasıl Yapılır?",
    description:
      "Zamanla silinen mezar baş taşı yazılarını altın yaldız veya siyah boyayla yenileme ve don çatlağı oluşturan derzlerin su geçirmez tamiri.",
    excerpt:
      "Güneşten ve kardan silinen kabir taşlarındaki yazıların yenilenmesi ve mermerlerin ayrılmasını önleyen profesyonel derz onarım teknikleri.",
    category: "Onarım & Tamirat",
    date: "2026-08-28",
    readTime: "4 dk okuma",
    author: "Taş & Restorasyon Ustası",
    keywords: [
      "mezar taşı yazı boyama",
      "mezar yazısı yenileme Edirne",
      "mermer derz tamiri",
      "altın yaldız mezar boyası",
    ],
    image: "/images/hero-cemetery.jpg",
    content: {
      lead: "Mezar baş taşındaki merhumun ismi, doğum ve ölüm tarihleri zaman içinde rüzgar, don ve güneş etkisiyle solup okunamaz hale gelir. Aynı zamanda mermer blokları birbirine bağlayan derz harçları da su alıp çatlar. Bu yıpranmalar kabrin kimliğini ve sağlamlığını tehlikeye atar.",
      sections: [
        {
          heading: "Mezar Taşı Yazıları Hangi Boya ile Boyanır?",
          body: [
            "Normal sprey boyalar veya ev tipi yağlı boyalar mermer üzerinde tutunamaz ve birkaç ay içinde pul pul dökülür. Mezar yazılarında dış cephe koşullarına, yüksek UV ışınlarına ve don olaylarına dirençli özel akrilik mermer boyaları ya da dayanıklı altın yaldız varak boyaları kullanılmalıdır.",
            "Boyama öncesinde harflerin içindeki eski boya kalıntıları, toz ve yosunlar arındırılır; yüzey kuruduğunda ince uçlu samur fırçalarla 2 kat boya tatbik edilir.",
          ],
        },
      ],
      conclusion:
        "Silinen kabir yazılarınızı ilk günkü netliğine kavuşturuyor, çatlayan mermer derzlerinizi sağlamlaştırarak mezarın uzun yıllar korunmasını sağlıyoruz.",
    },
  },
  {
    slug: "trakya-tekirdag-kirklareli-kardes-platform",
    title: "Tekirdağ ve Kırklareli Köyleri İçin Trakya Mezar Bakım Kardeş Platformumuz",
    description:
      "Tekirdağ (Çorlu, Çerkezköy, Süleymanpaşa, Malkara) ve Kırklareli (Lüleburgaz, Babaeski) bölgelerindeki kabir bakım hizmetlerimiz hakkında bilgi.",
    excerpt:
      "Trakya genelinde Tekirdağ ve Kırklareli köylerinde mezarlık bakımı yaptırmak isteyen vatandaşlarımız için trakyamezarliktemizleme.site kardeş platformumuz yayında.",
    category: "Bölgesel Hizmet",
    date: "2026-08-20",
    readTime: "3 dk okuma",
    author: "Bölge Koordinasyon Masası",
    keywords: [
      "Tekirdağ mezar bakımı",
      "Kırklareli mezarlık temizleme",
      "Çorlu kabir bakımı",
      "Lüleburgaz mezar temizliği",
      "Trakya mezarlık temizleme",
    ],
    image: "/images/hero-cemetery.jpg",
    content: {
      lead: "Edirne'nin yanı sıra Tekirdağ ve Kırklareli illerinde de aile kabirleri bulunan hemşehrilerimiz için tüm Trakya köylerini kapsayan kardeş platformumuz trakyamezarliktemizleme.site üzerinden kesintisiz mobil hizmet sunuyoruz.",
      sections: [
        {
          heading: "Tüm Trakya Genelinde Mobil Mezar Bakımı",
          body: [
            "Çorlu, Süleymanpaşa, Çerkezköy, Lüleburgaz, Babaeski, Malkara ve diğer tüm Trakya ilçelerinde kendi su depolu araçlarımızla kabir temizliği, asitsiz beyazlatma ve çiçeklendirme yapıyoruz.",
          ],
        },
      ],
      conclusion:
        "Tekirdağ ve Kırklareli sınırları içindeki kabirleriniz için trakyamezarliktemizleme.site adresini ziyaret edebilirsiniz.",
    },
  },
];

export const districtBlogPosts: BlogPost[] = [
  {
    slug: "edirne-merkez-mezar-bakimi-ve-kabir-temizligi",
    title: "Edirne Merkez Mezar Bakımı ve Kabir Temizliği | Karaağaç, Kıyık ve 37 Köye Yerinde Hizmet",
    description:
      "Edirne Merkez Asri, Acı Çeşme, Buçuktepe ve Karaağaç, Bosna, Doyran, Karakasım dahil 37 köy mezarlığında mobil su depolu kabir temizliği ve çiçeklendirme.",
    excerpt:
      "Edirne merkez ve bağlı köylerde asitsiz mermer beyazlatma, yabani ot ayıklama, mezar taşı yazı boyama ve HD videolu teslimat.",
    category: "Edirne İlçeleri",
    date: "2026-09-21",
    readTime: "5 dk okuma",
    author: "Edirne Merkez Saha Ekibi",
    keywords: [
      "Edirne merkez mezar bakımı",
      "Edirne mezarlık temizliği",
      "Karaağaç mezarlık bakımı",
      "Kıyık mezar temizleme",
      "Edirne mermer beyazlatma",
      "Edirne köy mezarları temizliği",
    ],
    image: "/images/hero-cemetery.jpg",
    content: {
      lead: "Tarihi ve manevi zenginliğiyle Edirne Merkez; Meriç ve Tunca nehirlerinin çevresinde kurulu hem şehir mezarlıklarına hem de nehir boyu ve tepe köylerine yayılmış 37 kırsal mezarlığa sahiptir. Yüksek nem ve kış donları mezar taşlarında yosunlanma ve derz çatlaklarına yol açar. Mobil ekibimiz Edirne Merkez ve köylerine yerinde hizmet sunmaktadır.",
      sections: [
        {
          heading: "Edirne Merkez Kabirlerinde Profesyonel Bakım",
          body: [
            "Nehir vadisinden yükselen rutubet mermerlerde kararmaya ve yeşil yosun tabakasına neden olur.",
            "Asitsiz solüsyonla mermeri aşındırmadan yıkıyor, açılan derzleri beyaz mastik ile dolduruyor ve silinen baş taşı yazılarını altın yaldız boya ile belirginleştiriyoruz.",
          ],
        },
        {
          heading: "Hizmet Verilen Edirne Merkez Köyleri",
          body: [
            "Karaağaç, Bosna, Budakdoğanca, Büyükdöllük, Büyükismailçe, Değirmenyanı, Demirhanlı, Doyran, Ekmekçi, Elçili, Eskikadın, Hacıumur, Hasanağa, Hatipköy, Hıdırağa, İskender, Karabulut, Karakasım, Karayusuf, Kayapa, Kemalköy, Korucu, Köşençiftliği, Küçükdöllük, Menekşesofular, Muratçalı, Musabeyli, Orhaniye, Sarayakpınar, Sazlıdere, Suakacağı, Tayakadın, Uzgaç, Üyüklütatar, Yenikadın, Yolüstü ve şehir mezarlıkları.",
          ],
        },
      ],
      conclusion:
        "Edirne Merkez ve köylerindeki mezarlar için WhatsApp üzerinden anında durum tespiti ve fiyat teklifi alabilirsiniz.",
    },
  },
  {
    slug: "kesan-mezar-bakimi-ve-kabir-temizligi",
    title: "Keşan Mezar Bakımı ve Kabir Temizliği | Erikli, Çamlıca ve 45 Köy Mezarlığına Hizmet",
    description:
      "Keşan Asri mezarlık ve Erikli, Çamlıca, Mecidiye, Beyköy dahil 45 köy mezarlığında profesyonel mezar temizliği, mermer beyazlatma ve çiçeklendirme.",
    excerpt:
      "Keşan ve Saros Körfezi köylerinde deniz rüzgarı ve kuraklığa dayanıklı mermer bakımı, yabani ot temizliği ve uzaktaki ailelere videolu teslimat.",
    category: "Edirne İlçeleri",
    date: "2026-09-19",
    readTime: "5 dk okuma",
    author: "Keşan Saha Ekibi",
    keywords: [
      "Keşan mezar bakımı",
      "Keşan mezarlık temizliği",
      "Erikli mezar bakımı",
      "Mecidiye kabir temizleme",
      "Çamlıca mezarlık temizliği",
      "Keşan mermer beyazlatma",
    ],
    image: "/images/hero-cemetery.jpg",
    content: {
      lead: "Edirne'nin güney kapısı ve en kalabalık ilçelerinden olan Keşan; Saros Körfezi sahilleri ve geniş tarım arazileri arasında 45 köye sahiptir. Keşan mezarlıklarında denizden esen poyraz ve lodos mermer gözeneklerinde tuz ve toz birikmesine sebep olur. Mobil su tankerimiz ve uzman ekibimizle Keşan genelinde yerinde kabir bakımı yapıyoruz.",
      sections: [
        {
          heading: "Keşan ve Saros Köylerinde Kabir Düzenleme",
          body: [
            "Keşan köylerinde su şebekesi olmayan eski mezarlıklara kendi basınçlı su depomuzla giderek mezar mermerlerini derinlemesine yıkıyoruz.",
            "Tuzlu havanın mermerde oluşturduğu sararmayı asitsiz solüsyonla temizliyor, kuraklığa dayanıklı lavanta ve kadife çiçeği ekiyoruz.",
          ],
        },
        {
          heading: "Kapsadığımız Keşan Köyleri (45 Köy)",
          body: [
            "Akçeşme, Akhoca, Altıntaş, Bahçeköy, Barağı, Beyköy, Boztepe, Büyükdoğanca, Çamlıca, Çelebi, Çeltik, Çobançeşmesi, Danişment, Dişbudak, Erikli, Gökçetepe, Gündüzler, Kadıköy, Karacaali, Karahisar, Karasatı, Karlı, Kılıçköy, Kızkapan, Koruklu, Kozköy, Küçükdoğanca, Lalacık, Mahmutköy, Maltepe, Mecidiye, Mercan, Orhaniye, Pırnar, Sazlıdere, Seydiköy, Siğilli, Suluca, Şabanmera, Şükrüköy, Türkmen, Yaylaköy, Yeniceçiftlik, Yerlisu, Yeşilköy ve Keşan merkez mezarlıkları.",
          ],
        },
      ],
      conclusion:
        "Keşan'daki kabirlerinizi bayramlar ve özel günler öncesinde tertemiz yaptırmak için WhatsApp'tan bizimle iletişime geçebilirsiniz.",
    },
  },
  {
    slug: "uzunkopru-mezar-bakimi-ve-kabir-temizligi",
    title: "Uzunköprü Mezar Bakımı ve Kabir Temizliği | 53 Köye Yerinde Mobil Kabir Temizleme",
    description:
      "Uzunköprü merkez ve Kırcasalih, Dereköy, Aşçıoğlu, Kavacık dahil 53 köy mezarlığında kendi suyumuz ve ekipmanımızla mermer beyazlatma ve ot temizliği.",
    excerpt:
      "Edirne'nin en geniş köy ağına sahip ilçesi Uzunköprü'de ücra ve susuz köy mezarlıklarına yerinde profesyonel bakım ve videolu teslimat.",
    category: "Edirne İlçeleri",
    date: "2026-09-18",
    readTime: "5 dk okuma",
    author: "Uzunköprü Saha Ekibi",
    keywords: [
      "Uzunköprü mezar bakımı",
      "Uzunköprü mezarlık temizliği",
      "Kırcasalih mezar bakımı",
      "Kavacık kabir temizleme",
      "Uzunköprü köy mezarları bakımı",
    ],
    image: "/images/hero-cemetery.jpg",
    content: {
      lead: "Tarihi taş köprüsüyle ünlü Uzunköprü, 53 köyüyle Edirne'nin köy sayısı bakımından en büyük ilçesidir. Ergene Nehri havzasındaki düzlük ve tepe köylerinde yer alan kabirlerin çoğu sulama imkanından yoksundur. Uzunköprü'nün tüm köylerine kendi mobil temiz su tankerimizle ulaşıyoruz.",
      sections: [
        {
          heading: "53 Uzunköprü Köyünde Kesintisiz Mezar Bakımı",
          body: [
            "Ergene havzasının verimli toprağında kabri saran ayrık otları kökten sökülür, mezar toprağı havalandırılır.",
            "Mezar mermerleri asitsiz şampuanla yıkanır, don çatlakları tamir edilir ve silinen baş taşı yazıları altın yaldızla boyanır.",
          ],
        },
        {
          heading: "Kapsadığımız Uzunköprü Köyleri",
          body: [
            "Alıç, Altınyazı, Aslıhan, Balaban, Balabankoru, Başağıl, Bayramlı, Beykonak, Bıldır, Çakmakköy, Çalıköy, Çavuşlu, Çiftlikköy, Çobanpınarı, Danişment, Değirmenci, Dereköy, Elmalı, Eskiköy, Gazihalil, Gazimehmet, Gemici, Hamidiye, Hamitli, Harmanlı, Hasanpınar, Kadıağılı, Kadıköy, Karabürçek, Karapınar, Karayayla, Kavacık, Kavakayazma, Kırkkavak, Kırköy, Kiremitçisalih, Kurdu, Kurtbey, Kurttepe, Maksutlu, Malkoçköy, Meşeli, Muhacırkadı, Ömerbey, Saçlımüsellim, Salarlı, Sazlımalkoç, Sığırcılı, Sipahi, Sultanşah, Süleymaniye, Turnacı, Yağmurca ve ilçe merkezi.",
          ],
        },
      ],
      conclusion:
        "Uzunköprü ve köylerindeki aile kabirleriniz için WhatsApp üzerinden ücretsiz keşif ve durum tespiti isteyebilirsiniz.",
    },
  },
  {
    slug: "havsa-mezar-bakimi-ve-kabir-temizleme",
    title: "Havsa Mezar Bakımı ve Kabir Temizleme | Necatiye, Osmanlı ve 22 Köy Mezarlığı",
    description:
      "Havsa merkez, Necatiye, Osmanlı, Abalar, Yolageldi ve 22 köy mezarlığında yabani ot sökümü, asitsiz mermer temizleme ve çiçeklendirme.",
    excerpt:
      "Havsa ve tüm köylerinde mezar taşlarının parlatılması, silinen yazıların boyanması ve uzaktaki hemşehrilerimize videolu teslimat.",
    category: "Edirne İlçeleri",
    date: "2026-09-17",
    readTime: "4 dk okuma",
    author: "Havsa Saha Ekibi",
    keywords: [
      "Havsa mezar bakımı",
      "Havsa mezarlık temizliği",
      "Necatiye mezar bakımı",
      "Osmanlı köyü mezar temizliği",
      "Havsa kabir mermer parlatma",
    ],
    image: "/images/hero-cemetery.jpg",
    content: {
      lead: "Edirne ile Uzunköprü arasında uzanan Havsa, köklü köy geleneğine ve geniş tarım arazilerine sahip huzurlu bir ilçemizdir. Havsa köy mezarlıklarında rüzgar ve kuraklık sebebiyle kabirler otlanabilir, mezar yazıları güneşten solabilir. Havsa ve 22 köyünün tamamında yerinde kabir temizliği yapıyoruz.",
      sections: [
        {
          heading: "Havsa'da Gerçekleştirilen Mezar Bakım İşlemleri",
          body: [
            "Mezar üzerindeki kurumuş çalılar ve dikenli otlar el çapalarıyla kökten temizlenir.",
            "Taşa zarar veren çamaşır suyu veya tuz ruhu yerine pH dengeli solüsyonla mermerler ovularak yıkanır.",
            "Silinen isimler kaliteli altın yaldız boyasıyla 2 kat boyanarak okunur hale getirilir.",
          ],
        },
        {
          heading: "Hizmet Verilen Havsa Köyleri",
          body: [
            "Abalar, Arpaç, Azatlı, Bakışlar, Bostanlı, Çukurköy, Habiller, Hasköy, Kabaağaç, Köseömer, Kulubalık, Kuzucu, Musulca, Naipyusuf, Necatiye, Oğulpaşa, Osmanlı, Söğütlüdere, Şerbettar, Tahal, Taptık, Yolageldi ve Havsa ilçe merkezi.",
          ],
        },
      ],
      conclusion:
        "Havsa'daki kabirlerinizi pırıl pırıl yaptırmak için WhatsApp hattımızdan bize dilediğiniz zaman ulaşabilirsiniz.",
    },
  },
  {
    slug: "ipsala-mezar-bakimi-ve-kabir-temizleme",
    title: "İpsala Mezar Bakımı ve Kabir Temizleme | İbriktepe, Yenikarpuzlu ve 19 Köye Hizmet",
    description:
      "İpsala merkez, İbriktepe, Yenikarpuzlu, Esetçe, Hacı ve 19 köy mezarlığında yerinde mobil su depolu kabir temizliği ve çiçeklendirme.",
    excerpt:
      "Meriç sınır boyundaki İpsala pirinç ovaları ve köylerinde mezarlık bakımı, mermer yenileme ve gurbetçilere videolu teslimat.",
    category: "Edirne İlçeleri",
    date: "2026-09-16",
    readTime: "4 dk okuma",
    author: "İpsala Saha Ekibi",
    keywords: [
      "İpsala mezar bakımı",
      "İpsala mezarlık temizliği",
      "İbriktepe mezar bakımı",
      "Yenikarpuzlu kabir temizleme",
      "İpsala mermer beyazlatma",
    ],
    image: "/images/hero-cemetery.jpg",
    content: {
      lead: "Türkiye'nin çeltik ambarı olan ve Yunanistan sınır kapısına ev sahipliği yapan İpsala; Meriç Nehri'nin suladığı bereketli ovalarda 19 köye sahiptir. Yüksek nem ve çeltik tarlalarının yarattığı rutubet mezar mermerlerinde yoğun yosunlanma oluşturur. İpsala ve tüm köylerinde yerinde mezar bakımı sağlıyoruz.",
      sections: [
        {
          heading: "Çeltik Ovasında Yosun ve Rutubet Temizliği",
          body: [
            "İpsala'da mezar mermerleri yüksek neme maruz kaldığından yosun sporları hızla ürer.",
            "Biyolojik temizleyicilerimizle mermeri ovup yosunları kökten yok ediyor, su itici şeffaf cila uyguluyoruz.",
          ],
        },
        {
          heading: "Hizmet Verilen İpsala Köyleri",
          body: [
            "Aliçopehlivan, Balabancık, Hacı, Hıdırköy, İbriktepe, Karaağaç, Kocahıdır, Korucu, Koyuntepe, Kumdere, Küçükdoğanca, Paşaköy, Pazardere, Sarıcaali, Sarpdere, Sultan, Tevfikiye, Turpçular, Yapıldak ve İpsala merkez.",
          ],
        },
      ],
      conclusion:
        "İpsala ve köylerindeki mezarlarınız için WhatsApp hattımıza mesaj göndererek aynı gün fiyat teklifi alabilirsiniz.",
    },
  },
  {
    slug: "meric-mezar-bakimi-ve-kabir-temizligi",
    title: "Meriç Mezar Bakımı ve Kabir Temizliği | Subaşı, Küpdere ve 21 Köy Mezarlığı",
    description:
      "Meriç ilçesi, Subaşı beldesi ve Adasarhanlı, Küpdere dahil 21 köy mezarlığında asitsiz mermer parlatma, yabani ot temizliği ve canlı çiçek dikimi.",
    excerpt:
      "Meriç Nehri kıyısındaki sınır köylerinde mezarlık bakımı, toprak havalandırması ve uzaktaki ailelere özel videolu kabir teslimatı.",
    category: "Edirne İlçeleri",
    date: "2026-09-15",
    readTime: "4 dk okuma",
    author: "Meriç Saha Ekibi",
    keywords: [
      "Meriç mezar bakımı",
      "Meriç mezarlık temizliği",
      "Subaşı mezar bakımı",
      "Adasarhanlı kabir temizleme",
      "Meriç mermer mezar temizliği",
    ],
    image: "/images/hero-cemetery.jpg",
    content: {
      lead: "Adını tarihi nehirden alan Meriç ilçesi; Subaşı beldesi ve 21 köyüyle sakin ve yemyeşil bir sınır bölgesidir. Meriç köylerindeki mezarlıklar nehir kıyısı ve orman kenarlarında yer alır. Köy mezarlığında su altyapısı olmasa dahi kendi araçlarımızla gelip kabirleri titizlikle temizliyoruz.",
      sections: [
        {
          heading: "Meriç Köy Mezarlıklarında Neler Yapıyoruz?",
          body: [
            "Köklü otlar ve çalılar sökülüp mezar çevresi budanır.",
            "Mezar mermerindeki çamur, is ve yosunlar asitsiz solüsyonla yıkanır.",
            "Solmuş mezar baş taşı yazıları altın yaldızla tazeleyip canlı çiçekler dikilir.",
          ],
        },
        {
          heading: "Hizmet Verilen Meriç Köyleri",
          body: [
            "Adasarhanlı, Akçadam, Akıncılar, Alibey, Büyükaltıağaç, Hasırcıarnavutköy, Kadıdondurma, Karahamza, Karayusuflu, Kavaklı, Küçükaltıağaç, Küpdere, Nasuhbey, Olacak, Paşayenice, Rahmanca, Saatağacı, Serem, Subaşı, Umurca, Yakupbey, Yenicegörice ve Meriç merkez.",
          ],
        },
      ],
      conclusion:
        "Meriç ve köylerindeki mezarlar için hızlı fiyat teklifi ve keşif videosu almak için hemen WhatsApp'tan bize yazabilirsiniz.",
    },
  },
  {
    slug: "lalapasa-mezar-bakimi-ve-koy-kabir-temizleme",
    title: "Lalapaşa Mezar Bakımı ve Köy Kabir Temizleme | Hamzabeyli, Vaysal ve 27 Köy",
    description:
      "Lalapaşa ilçe merkezi, Hamzabeyli, Vaysal, Süleymandanişment ve 27 sınır köyü mezarlığında sert kış şartlarına dayanıklı kabir bakımı ve mermer yenileme.",
    excerpt:
      "Bulgaristan sınırındaki dağlık Lalapaşa köylerinde don çatlaklarına karşı mermer derz tamiri, yabani ot temizliği ve videolu teslimat.",
    category: "Edirne İlçeleri",
    date: "2026-09-14",
    readTime: "4 dk okuma",
    author: "Lalapaşa Sınır Saha Ekibi",
    keywords: [
      "Lalapaşa mezar bakımı",
      "Lalapaşa mezarlık temizliği",
      "Hamzabeyli mezar bakımı",
      "Vaysal kabir temizleme",
      "Lalapaşa mermer derz tamiri",
    ],
    image: "/images/hero-cemetery.jpg",
    content: {
      lead: "Edirne'nin Bulgaristan sınırındaki kuzey ilçesi Lalapaşa, yüksek rakımı ve orman köyleriyle Trakya'nın en sert kış koşullarının yaşandığı bölgelerdendir. Aşırı kar ve don mermer birleşim derzlerini patlatabilir. Lalapaşa ve 27 sınır köyünün tamamına mobil ekibimizle ulaşıyoruz.",
      sections: [
        {
          heading: "Lalapaşa Dağ Köylerinde Yerinde Çözüm",
          body: [
            "Zorlu arazi şartlarında su bulunmayan tepe mezarlıklarına kendi temiz su tankerimizle gidiyoruz.",
            "Donmaya karşı -30 dereceye dayanıklı beyaz mastik ile derzleri dolduruyor, mermerleri asitsiz şampuanla parlatıyoruz.",
          ],
        },
        {
          heading: "Hizmet Verilen Lalapaşa Köyleri",
          body: [
            "Büyünlü, Çallıdere, Çatma, Çömlek, Çömlekakpınar, Demirköy, Doğanköy, Dombay, Hacıdanişment, Hacılar, Hamzabeyli, Hanlıyenice, Hüseyinpınar, Kalkansöğüt, Kavaklı, Küçünlü, Ortakçı, Ömeroba, Saksağan, Sarıdanişment, Sinanköy, Süleymandanişment, Taşlımüsellim, Tuğlalık, Uzunbayır, Vaysal, Yünlüce ve ilçe merkezi.",
          ],
        },
      ],
      conclusion:
        "Lalapaşa'nın en uç köyündeki kabirlerinizi emanet şuuruyla temizliyor ve video ile teslim ediyoruz.",
    },
  },
  {
    slug: "suloglu-mezar-bakimi-ve-kabir-temizleme",
    title: "Süloğlu Mezar Bakımı ve Kabir Temizleme | Geçkinli, Büyükgerdelli ve 10 Köye Hizmet",
    description:
      "Süloğlu ilçe merkezi, Geçkinli, Büyükgerdelli, Domurcalı, Tatarlar ve 10 köy mezarlığında mobil profesyonel mezar temizliği ve çiçeklendirme.",
    excerpt:
      "Süloğlu ve bağlı tüm köylerde mezar otu temizliği, mermer beyazlatma, silinen taş yazılarını altın yaldızla boyama ve periyodik kabir bakımı.",
    category: "Edirne İlçeleri",
    date: "2026-09-13",
    readTime: "4 dk okuma",
    author: "Süloğlu Saha Ekibi",
    keywords: [
      "Süloğlu mezar bakımı",
      "Süloğlu mezarlık temizliği",
      "Geçkinli mezar bakımı",
      "Büyükgerdelli kabir temizleme",
      "Süloğlu mezar taşı boyama",
    ],
    image: "/images/hero-cemetery.jpg",
    content: {
      lead: "Edirne'nin şirin ve sakin ilçesi Süloğlu, verimli tarım toprakları ve baraj gölü çevresindeki köyleriyle bilinir. Süloğlu mezarlıklarında rüzgar etkisiyle mezarların üzerine tohumlar savrulur ve yabani otlar kabri sarabilir. Süloğlu ve 10 köyünün tamamına yerinde kabir temizliği götürüyoruz.",
      sections: [
        {
          heading: "Süloğlu Mezarlıklarında Uyguladığımız Hizmetler",
          body: [
            "Köklü otlar ve çalılar çapalanarak mezardan arındırılır.",
            "Mezar mermerleri aşındırıcı kimyasallar olmadan özel solüsyonla beyazlatılır.",
            "Silinen isim ve tarihler altın yaldız boya ile tazeleyerek canlı çiçekler dikilir.",
          ],
        },
        {
          heading: "Hizmet Verilen Süloğlu Köyleri",
          body: [
            "Akardere, Büyükgerdelli, Domurcalı, Geçkinli, Keramettin, Küküler, Sülecik, Taşlısekban, Tatarlar, Yağcılı ve Süloğlu merkez mezarlığı.",
          ],
        },
      ],
      conclusion:
        "Süloğlu'ndaki sevdiklerinizin kabir bakımı için WhatsApp hattımıza bir mesaj atmanız yeterlidir.",
    },
  },
  {
    slug: "enez-mezar-bakimi-ve-kabir-temizligi",
    title: "Enez Mezar Bakımı ve Kabir Temizliği | Büyükevren, Sultaniçe ve 19 Köye Hizmet",
    description:
      "Enez ilçe merkezi, Sultaniçe, Gülçavuş, Büyükevren, Vakıf dahil 19 sahil ve göl köyü mezarlığında deniz tuzu korozyonuna karşı mermer bakımı.",
    excerpt:
      "Ege kıyısındaki Enez ve köylerinde deniz tuzu ve lodosun mermerde yarattığı kararmaları asitsiz solüsyonla temizleyen mobil kabir bakım servisi.",
    category: "Edirne İlçeleri",
    date: "2026-09-12",
    readTime: "4 dk okuma",
    author: "Enez Sahil Ekibi",
    keywords: [
      "Enez mezar bakımı",
      "Enez mezarlık temizliği",
      "Sultaniçe mezar bakımı",
      "Büyükevren kabir temizleme",
      "Enez mermer mezar temizliği",
    ],
    image: "/images/hero-cemetery.jpg",
    content: {
      lead: "Saros Körfezi'nin Ege Denizi ile buluştuğu noktada yer alan Enez; lagün gölleri, balıkçı köyleri ve yazlık siteleriyle tanınır. Ancak denizden esen yoğun tuzlu lodos fırtınaları mezar mermerlerinde tuz korozyonuna ve taşın matlaşmasına yol açar. Yıl boyunca Enez ve 19 köyünün tamamında yerinde kabir temizliği gerçekleştiriyoruz.",
      sections: [
        {
          heading: "Deniz Tuzu ve Rüzgara Karşı Mermer Koruması",
          body: [
            "Tuzlu nem mermer yüzeyine yapışarak kararmayı hızlandırır. Ekibimiz önce nötr solüsyonla tuzu çözer ve bol tatlı su ile durular.",
            "Taş kuruduktan sonra su itici koruyucu katman uygulayarak mermerin parlak kalmasını sağlar.",
          ],
        },
        {
          heading: "Hizmet Verilen Enez Köyleri",
          body: [
            "Abdurrahim, Büyükevren, Çandır, Çavuşköy, Çeribaşı, Gülçavuş, Hasköy, Hisarlı, Işıklı, Karaincirli, Kocaali, Küçükevren, Sultaniçe, Sütçüler, Şehitler, Umurbey, Vakıf, Yazır, Yenice ve Enez merkez mezarlıkları.",
          ],
        },
      ],
      conclusion:
        "Enez ve köylerindeki mezarlarınızı yaz kış demeden temiz ve çiçekli tutmak için bizimle iletişime geçebilirsiniz.",
    },
  },
];

export const blogPosts: BlogPost[] = [...generalBlogPosts, ...districtBlogPosts];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}

export function getDistrictBlogPosts(): BlogPost[] {
  return districtBlogPosts;
}

export function getGeneralBlogPosts(): BlogPost[] {
  return generalBlogPosts;
}
