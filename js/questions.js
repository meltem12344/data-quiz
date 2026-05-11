/**
 * Veri bilimi quiz soru havuzu — sadece veri (app.js'den önce yüklenir).
 * Her soru: q (metin), opts (şıklar), answer (doğru indeks 0–3), feedback (açıklama)
 * Her seviyede 30 soru.
 */
window.questionBank = {
  easy: [
    {
      q: "ChatGPT hangi şirket tarafından geliştirildi?",
      opts: ["Google", "OpenAI", "Microsoft", "Meta"],
      answer: 1,
      feedback:
        "ChatGPT, 2015 yılında kurulan OpenAI tarafından geliştirilmiştir. Microsoft, OpenAI'ye büyük yatırım yapmıştır ama geliştiren şirket OpenAI'dir.",
    },
    {
      q: '"AI" kısaltmasının açılımı nedir?',
      opts: ["Automated Internet", "Artificial Intelligence", "Advanced Input", "Automated Index"],
      answer: 1,
      feedback: 'AI = Artificial Intelligence, Türkçesi "Yapay Zeka" anlamına gelir.',
    },
    {
      q: "ChatGPT bir arama motoru mudur?",
      opts: [
        "Evet, Google gibi çalışır",
        "Hayır, bir dil modelidir",
        "Evet, ama daha zekidir",
        "Hayır, bir veritabanıdır",
      ],
      answer: 1,
      feedback:
        "ChatGPT bir büyük dil modelidir (LLM). Arama motorları gibi web'i taramaz; eğitildiği verilerden yanıt üretir.",
    },
    {
      q: "Hatalı veri, yapay zekanın yanlış sonuç vermesine neden olabilir mi?",
      opts: [
        "Hayır, YZ her zaman doğru sonuç verir",
        "Evet, 'çöp girer, çöp çıkar' ilkesi geçerlidir",
        "Hayır, YZ hataları otomatik düzeltir",
        "Sadece büyük veri setlerinde sorun olur",
      ],
      answer: 1,
      feedback:
        '"Garbage in, garbage out" (GIGO) veri biliminin temel ilkelerinden biridir. Kalitesiz veri = kalitesiz model.',
    },
    {
      q: "Bir algoritma kullanıcı alışkanlıklarını öğrenebilir mi?",
      opts: [
        "Hayır, algoritmalar statiktir",
        "Evet, makine öğrenmesi ile mümkündür",
        "Sadece robotlar öğrenebilir",
        "Evet ama sadece programlanırsa",
      ],
      answer: 1,
      feedback:
        "Netflix, Spotify, YouTube gibi platformlar kullanıcı davranışlarından öğrenen makine öğrenmesi algoritmalarını aktif olarak kullanır.",
    },
    {
      q: "Yapay zeka yalan söyleyebilir mi?",
      opts: [
        "Hayır, her zaman doğruyu söyler",
        "Evet, 'halüsinasyon' denen hatalar yapabilir",
        "Sadece bilinçli olarak programlandıysa",
        "Hayır, matematiksel hesap yapar",
      ],
      answer: 1,
      feedback:
        'YZ modelleri "halüsinasyon" denilen durumda olmayan şeyleri varmış gibi üretebilir. Bu bir hata türüdür, niyet değil.',
    },
    {
      q: "Yapay zekalar internete bağlı olmadan çalışabilir mi?",
      opts: [
        "Hayır, internetsiz çalışamazlar",
        "Evet, eğitilmiş modeller internetsiz de çalışabilir",
        "Sadece büyük modeller çalışabilir",
        "Hayır, bulut bağlantısı şarttır",
      ],
      answer: 1,
      feedback:
        "Eğitilmiş YZ modelleri (örn. yerel LLM'ler) internetsiz çalışabilir. İnternet bağlantısı eğitim ve güncelleme için gereklidir, çalışma için değil.",
    },
    {
      q: "Bir yapay zeka modeli veri olmadan öğrenebilir mi?",
      opts: [
        "Evet, kendi kendine öğrenebilir",
        "Hayır, veri olmadan öğrenme mümkün değildir",
        "Evet, ama çok yavaş öğrenir",
        "Hayır, sadece internetten öğrenir",
      ],
      answer: 1,
      feedback:
        "Makine öğrenmesi tamamen veriye dayanır. Veri olmadan model eğitmek mümkün değildir; bu yüzden veri toplama ve temizleme kritik adımlardır.",
    },
    {
      q: "Veri biliminde en çok kullanılan programlama dili hangisidir?",
      opts: ["Java", "C++", "Python", "Ruby"],
      answer: 2,
      feedback:
        "Python, zengin kütüphane ekosistemi (NumPy, Pandas, Scikit-learn, TensorFlow) sayesinde veri bilimi ve makine öğrenmesinde en popüler dildir.",
    },
    {
      q: "Yapay zekanın 'öğrenmesi' için en temel gereksinim nedir?",
      opts: ["Hızlı internet bağlantısı", "Büyük ve kaliteli veri", "Pahalı donanım", "İnsan müdahalesi"],
      answer: 1,
      feedback:
        "Veri, yapay zekanın yakıtıdır. Ne kadar büyük ve kaliteli veri olursa model o kadar iyi öğrenir. Donanım önemli olsa da veri olmadan hiçbir şey yapılamaz.",
    },
    {
      q: "Sosyal medya algoritmları ne işe yarar?",
      opts: [
        "Sadece reklamları yönetir",
        "Hangi içeriklerin sana gösterileceğine karar verir",
        "Kullanıcıların şifrelerini korur",
        "Sunucuların hızını artırır",
      ],
      answer: 1,
      feedback:
        "Instagram, TikTok, Twitter gibi platformların algoritmaları, kullanıcının geçmiş davranışlarını analiz ederek ilgilenebileceği içerikleri öne çıkarır.",
    },
    {
      q: "\"Büyük Veri\" (Big Data) ne anlama gelir?",
      opts: [
        "Sadece çok büyük dosyalar",
        "Geleneksel araçlarla işlenemeyen devasa, hızlı ve çeşitli veri kümeleri",
        "Yüzlerce gigabaytlık veriler",
        "Sadece şirketlerin kullandığı veriler",
      ],
      answer: 1,
      feedback:
        "Büyük Veri; hacim (Volume), hız (Velocity) ve çeşitlilik (Variety) ile tanımlanır. Bunlara 'üç V' denir. Geleneksel Excel tabloları büyük veri sayılmaz.",
    },
    {
      q: "Bir yapay zeka görüntüdeki bir kediyi nasıl tanır?",
      opts: [
        "Kelimeleri okuyarak",
        "Milyonlarca kedi fotoğrafıyla eğitilerek",
        "İnternette arama yaparak",
        "Ses dalgalarını analiz ederek",
      ],
      answer: 1,
      feedback:
        "Görüntü tanıma modelleri milyonlarca etiketlenmiş fotoğrafla eğitilir. Model, piksel örüntülerini öğrenerek kedileri diğer nesnelerden ayırt etmeyi öğrenir.",
    },
    {
      q: "Hangi uygulama yapay zeka kullanmaz?",
      opts: ["Spotify öneri sistemi", "Hesap makinesi", "Google Fotoğraflar yüz tanıma", "Gmail spam filtresi"],
      answer: 1,
      feedback:
        "Hesap makinesi sabit matematiksel işlemler yapar, öğrenmez ve uyum sağlamaz. Diğerleri hepsi makine öğrenmesi kullanan sistemlerdir.",
    },
    {
      q: "Yapay zeka neden bazen ırkçı veya önyargılı sonuçlar üretir?",
      opts: [
        "Programcılar öyle yazmıştır",
        "Eğitim verilerindeki önyargıları yansıtır",
        "İnternet bağlantısı kesildiğinde",
        "Çok fazla veriyle eğitildiğinde",
      ],
      answer: 1,
      feedback:
        "YZ modelleri eğitim verilerindeki önyargıları (bias) öğrenir ve çoğaltır. Bu nedenle veri çeşitliliği ve adil veri toplama kritik etik konulardır.",
    },
    {
      q: "Hangi şirket TensorFlow'u geliştirmiştir?",
      opts: ["Meta", "Microsoft", "Google", "Amazon"],
      answer: 2,
      feedback:
        "TensorFlow, Google Brain ekibi tarafından geliştirilen ve 2015'te açık kaynak olarak yayınlanan derin öğrenme kütüphanesidir.",
    },
    {
      q: "Telefon yüz kilit sistemi hangi yapay zeka teknolojisini kullanır?",
      opts: ["Doğal Dil İşleme", "Yüz Tanıma (Computer Vision)", "Öneri Sistemi", "Konuşma Sentezi"],
      answer: 1,
      feedback:
        "Yüz tanıma, Bilgisayarlı Görü (Computer Vision) alanına girer. Model, yüzün geometrik özelliklerini ve derinlik verilerini analiz ederek kimliği doğrular.",
    },
    {
      q: "Sesli asistanlar (Siri, Alexa) hangi teknolojiyi kullanır?",
      opts: ["Blockchain", "Doğal Dil İşleme (NLP)", "Artırılmış Gerçeklik", "Kuantum Hesaplama"],
      answer: 1,
      feedback:
        "Sesli asistanlar Doğal Dil İşleme (NLP) ve Konuşma Tanıma (Speech Recognition) teknolojilerini birlikte kullanır. Sesi metne, metni anlama dönüştürürler.",
    },
    {
      q: "Veri bilimciler hangi araçla veri analizi yapar en çok?",
      opts: ["Microsoft Word", "Jupyter Notebook", "Adobe Photoshop", "AutoCAD"],
      answer: 1,
      feedback:
        "Jupyter Notebook, veri bilimcilerin kod yazıp çalıştırabildiği, grafik oluşturabildiği ve notlar ekleyebildiği etkileşimli bir ortamdır. Sektör standardıdır.",
    },
    {
      q: "Yapay zeka bir sanatçının müziğini taklit edebilir mi?",
      opts: [
        "Hayır, müzik tamamen insana özgüdür",
        "Evet, ses örüntülerini öğrenerek benzer müzik üretebilir",
        "Sadece klasik müziği taklit edebilir",
        "Hayır, telif hakkı yasaları bunu engeller",
      ],
      answer: 1,
      feedback:
        "YZ modelleri (örn. Suno, Udio) bir sanatçının ses tonu, ritim ve melodi kalıplarını öğrenerek benzer müzik üretebilir. Bu büyük etik tartışmalara yol açmaktadır.",
    },
    {
      q: "Excel veya Google Sheets tabloları veri analizi için kullanılabilir mi?",
      opts: [
        "Hayır, sadece sunum içindir",
        "Evet, filtre, grafik ve basit formüllerle analiz yapılabilir",
        "Sadece muhasebe için uygundur",
        "Hayır, yapay zeka gerektirir",
      ],
      answer: 1,
      feedback:
        "Tablolama yazılımları küçük ve orta ölçekli veri setlerinde filtreleme, pivot, grafik ve istatistik için yaygın kullanılır. Büyük veride Python/R ve veritabanları tercih edilir.",
    },
    {
      q: "'Büyük Veri' (Big Data) ifadesi genelde neyi vurgular?",
      opts: [
        "Sadece çok pahalı sunucular",
        "Hacim, hız ve çeşitlilik gibi ölçeklenmesi zor veri ortamlarını",
        "Sadece devlet verilerini",
        "İnternetteki tüm yazıları",
      ],
      answer: 1,
      feedback:
        "Big Data literatüründe sıkça '3V' (Volume, Velocity, Variety) anılır: çok büyük hacim, hızlı akış, çok çeşitli format. Klasik araçların zorlandığı ölçekleri ifade eder.",
    },
    {
      q: "QR kodu okuyup yönlendirme yapan telefon uygulamaları hangi fikre dayanır?",
      opts: [
        "Blockchain doğrulama",
        "Görüntüdeki deseni tanıma (bilgisayarlı görü)",
        "Ses tanıma",
        "Kuantum şifreleme",
      ],
      answer: 1,
      feedback:
        "Kamera görüntüsündeki kare desenini çözmek bilgisayarlı görü (Computer Vision) ve görüntü işleme teknikleriyle yapılır; QR sadece 'barkod' türü bir veri taşır.",
    },
    {
      q: "E-posta spam kutusuna düşen bazı mailleri filtreleyen sistemler ne tür bir problem çözer?",
      opts: [
        "Sadece şifreleme",
        "Metinleri sınıflandırma (spam değil mi?)",
        "Sadece dosya sıkıştırma",
        "Sadece ekran çözünürlüğü",
      ],
      answer: 1,
      feedback:
        "Spam filtreleri genelde metin içeriğine ve gönderici kalıplarına bakarak 'spam / değil' sınıflandırması yapar; bu klasik bir makine öğrenmesi / istatistik uygulamasıdır.",
    },
    {
      q: "Algoritma kelimesi günlük dilde en yakın olarak ne anlama gelir?",
      opts: [
        "Sadece bir programlama dili",
        "Belirli bir problemi çözmek için adım adım izlenen yöntem",
        "Sadece bilgisayar donanımı",
        "Rastgele tahmin listesi",
      ],
      answer: 1,
      feedback:
        "Algoritma, girdiden çıktıya giden net kurallar dizisidir. Yemek tarifi veya yol tarifi gibi düşünülebilir; kod, algoritmanın makineye yazılmış halidir.",
    },
    {
      q: "Grafik ve tablolar veri sunumunda neden önemlidir?",
      opts: [
        "Sadece renkli görünsün diye",
        "İnsanın örüntüleri hızlı görmesine yardım eder",
        "Veriyi siler",
        "Dosya boyutunu artırmak için",
      ],
      answer: 1,
      feedback:
        "İnsan beyni görsel örüntüleri sayılara göre daha hızlı işler. Veri görselleştirme, trend ve aykırı değerleri keşfetmek için temel bir veri bilimi becerisidir.",
    },
    {
      q: "Bulut (cloud) bilişim kullanıcıya pratikte ne sunar?",
      opts: [
        "Sadece e-posta",
        "İnternet üzerinden ölçeklenebilir depolama ve işlem gücü",
        "Sadece oyun konsolu",
        "Yerel disk kullanımını yasaklar",
      ],
      answer: 1,
      feedback:
        "Bulut, sunucu ve depolama gibi kaynakları uzaktan hizmet olarak kullanmayı sağlar. Veri biliminde büyük veri setlerini ve GPU eğitimini kiralamak yaygındır.",
    },
    {
      q: "İnternet sitelerinde 'çerez' (cookie) genelde ne için tutulur?",
      opts: [
        "Virüs yüklemek için",
        "Oturum ve tercih gibi bilgileri tarayıcıda saklamak için",
        "Ekran parlaklığı için",
        "Klavye hızını ölçmek için",
      ],
      answer: 1,
      feedback:
        "Çerezler, siteye tekrar geldiğinde hatırlatma ve oturum yönetimi gibi amaçlarla tarayıcıda küçük veri tutar. Veri etiği ve KVKK/GDPR kapsamında şeffaflık önemlidir.",
    },
    {
      q: "Yapay zeka çıktıları her zaman hukuken veya etik olarak kullanılabilir mi?",
      opts: [
        "Evet, her kullanım serbesttir",
        "Hayır; telif, gizlilik ve zarar riski gibi sınırlar vardır",
        "Sadece üniversiteler kullanabilir",
        "Evet, sadece görsel için yasaktır",
      ],
      answer: 1,
      feedback:
        "YZ içerik üretimi telif, kişisel veri, deepfake ve ayrımcılık gibi riskler doğurur. Kullanım senaryosuna göre politika ve onay gerekir; 'teknik mümkün' ile 'etik/hukuki uygun' aynı değildir.",
    },
    {
      q: "Bir chatbot cevabında kaynak göstermiyorsa ne yapmalısın?",
      opts: [
        "Her cümleyi kesin doğru kabul et",
        "Kritik bilgileri bağımsız kaynaklardan doğrula",
        "Sadece emojilere güven",
        "Hiçbir şey yapma",
      ],
      answer: 1,
      feedback:
        "LLM'ler halüsinasyon yapabilir ve kaynak uydurabilir. Sağlık, hukuk ve haber gibi konularda mutlaka güvenilir birinci kaynaklarla doğrulama yapılmalıdır.",
    },
  ],

  medium: [
    {
      q: "Netflix ve Spotify'ın öneri sistemi hangi alanla ilgilidir?",
      opts: ["Siber Güvenlik", "Makine Öğrenmesi", "Bulut Bilişim", "Blockchain"],
      answer: 1,
      feedback:
        "Öneri sistemleri (recommendation systems) makine öğrenmesinin önemli bir uygulama alanıdır. İşbirlikçi filtreleme ve içerik tabanlı filtreleme gibi teknikler kullanır.",
    },
    {
      q: "Yapay zekanın bir insan gibi düşünüp düşünemediğini anlamak için yapılan teste ne denir?",
      opts: ["Turing Testi", "Einstein Testi", "Lovelace Testi", "Shannon Testi"],
      answer: 0,
      feedback:
        "Turing Testi, 1950 yılında Alan Turing tarafından önerilmiştir. Bir makinenin insan gibi konuşup konuşamadığını ölçer.",
    },
    {
      q: "Bilgisayarların insan gibi öğrenmesini sağlayan alt dala ne denir?",
      opts: ["Veri Tabanı", "Makine Öğrenmesi", "Ağ Güvenliği", "İşletim Sistemi"],
      answer: 1,
      feedback:
        "Machine Learning (Makine Öğrenmesi), yapay zekanın veriden otomatik olarak öğrenmesini sağlayan alt disiplindir.",
    },
    {
      q: '"Veri" ile "Bilgi" arasındaki fark nedir?',
      opts: [
        "Hiçbir fark yoktur",
        "Veri ham, bilgi işlenmiş anlam taşıyan çıktıdır",
        "Bilgi daha büyük veridir",
        "Veri sayısal, bilgi metinseldir",
      ],
      answer: 1,
      feedback:
        "Veri (data): işlenmemiş ham gerçekler. Bilgi (information): verinin işlenerek anlam kazandırılmış hali. Örn: '37.2' veri; 'ateşin var' bilgi.",
    },
    {
      q: "Bir yapay zekaya ne yapması gerektiğini söylediğimiz komut cümlesine ne denir?",
      opts: ["Kod", "Prompt", "Query", "Script"],
      answer: 1,
      feedback:
        "Prompt Engineering, YZ modellerine verilecek komut/talimatları optimize etme bilimidir. ChatGPT'ye yazdığın her şey bir prompttur.",
    },
    {
      q: '"Python" ismini bir yılandan mı almıştır?',
      opts: [
        "Evet, zehirli yılan gibi güçlü",
        "Hayır, İngiliz komedi grubundan: Monty Python",
        "Evet, esnek yapısından esinlenilmiş",
        "Hayır, matematiksel bir sembolden",
      ],
      answer: 1,
      feedback:
        "Python'un yaratıcısı Guido van Rossum, dile Monty Python's Flying Circus adlı İngiliz komedi programından esinlenerek bu ismi vermiştir.",
    },
    {
      q: "Makine öğrenmesinde 'overfitting' (aşırı öğrenme) ne demektir?",
      opts: [
        "Modelin çok hızlı öğrenmesi",
        "Modelin eğitim verisini ezberleyip yeni veriye genelleyememesi",
        "Modelin çok fazla veriyle eğitilmesi",
        "Modelin hiç öğrenememesi",
      ],
      answer: 1,
      feedback:
        "Overfitting: model eğitim verisini 'ezberlediği' için yeni verilerde başarısız olur. Sınav sorularını ezberlemenin benzer örneği: aynı soruları bilirsin ama farklı soruları çözemezsin.",
    },
    {
      q: "Gözetimli öğrenme (Supervised Learning) nedir?",
      opts: [
        "Modelin kendi başına öğrenmesi",
        "Etiketli verilerle modelin doğru cevapları öğrenmesi",
        "İnsan gözetiminde yapılan programlama",
        "Modellerin birbirini denetlemesi",
      ],
      answer: 1,
      feedback:
        "Gözetimli öğrenmede her veri örneğinin doğru cevabı (etiketi) vardır. Model, girdi-çıktı çiftlerinden örüntüleri öğrenir. E-posta spam tespiti klasik bir örnektir.",
    },
    {
      q: "Sinir ağları (Neural Networks) neyi taklit eder?",
      opts: [
        "Bilgisayar devrelerini",
        "İnsan beyninin nöron yapısını",
        "İnternet altyapısını",
        "DNA yapısını",
      ],
      answer: 1,
      feedback:
        "Yapay sinir ağları, insan beynindeki nöronların birbirine bağlanma şeklinden ilham alır. Birbirine bağlı katmanlar halinde veriyi işleyerek karmaşık örüntüleri öğrenirler.",
    },
    {
      q: "A/B testi veri biliminde ne için kullanılır?",
      opts: [
        "İki farklı modeli eğitmek için",
        "İki farklı değişken arasındaki farkın etkisini ölçmek için",
        "Veriyi iki parçaya bölmek için",
        "İki programlama dilini karşılaştırmak için",
      ],
      answer: 1,
      feedback:
        "A/B testi: kullanıcıları iki gruba bölerek farklı versiyonların (buton rengi, başlık, algoritma) etkisini istatistiksel olarak ölçme yöntemidir. Tüm büyük teknoloji şirketleri kullanır.",
    },
    {
      q: "GPT'nin açılımı nedir?",
      opts: [
        "General Processing Technology",
        "Generative Pre-trained Transformer",
        "Global Python Tool",
        "Graphic Processing Terminal",
      ],
      answer: 1,
      feedback:
        "GPT = Generative Pre-trained Transformer. Büyük metin verisiyle önceden eğitilmiş (pre-trained) ve yeni metin üretebilen (generative) dönüştürücü (transformer) mimarisi kullanır.",
    },
    {
      q: "Makine öğrenmesinde 'etiket' (label) ne anlama gelir?",
      opts: [
        "Veriye yapıştırılan isim etiketi",
        "Modelin tahmin etmeye çalıştığı doğru cevap",
        "Veri setinin dosya adı",
        "Algoritmanın versiyonu",
      ],
      answer: 1,
      feedback:
        "Etiket (label), gözetimli öğrenmede her veri örneği için bilinen doğru çıktıdır. Örn: e-posta için 'spam/spam değil', görüntü için 'kedi/köpek' etiketleri.",
    },
    {
      q: "Doğal Dil İşleme (NLP) ne ile uğraşır?",
      opts: [
        "Doğal afetlerin tahmin edilmesiyle",
        "Bilgisayarların insan dilini anlayıp üretmesiyle",
        "Programlama dillerinin geliştirilmesiyle",
        "Ses dosyalarının sıkıştırılmasıyla",
      ],
      answer: 1,
      feedback:
        "NLP (Natural Language Processing): bilgisayarların Türkçe, İngilizce gibi doğal dilleri anlamasını, yorumlamasını ve üretmesini sağlar. ChatGPT, Google Translate bunun ürünüdür.",
    },
    {
      q: "Veri görselleştirme neden önemlidir?",
      opts: [
        "Sadece estetik amaçlar için",
        "Karmaşık veriyi anlaşılır hale getirmek ve örüntüleri keşfetmek için",
        "Veriyi şifrelemek için",
        "Modeli daha hızlı eğitmek için",
      ],
      answer: 1,
      feedback:
        "Görselleştirme, ham sayıları insan beyninin anlayabileceği grafiklere dönüştürür. Gizli örüntüleri, anomalileri ve trendleri ortaya çıkarır. 'Bir görsel bin kelimeye bedeldir.'",
    },
    {
      q: "Makine öğrenmesinde 'özellik' (feature) ne demektir?",
      opts: [
        "Modelin özel yetenekleri",
        "Modelin tahmin için kullandığı girdi değişkenleri",
        "Algoritmanın versiyonu",
        "Veri setinin boyutu",
      ],
      answer: 1,
      feedback:
        "Özellik (feature): modelin girdi olarak kullandığı ölçülebilir veri noktalarıdır. Ev fiyatı tahmini için: metrekare, oda sayısı, konum birer özelliktir.",
    },
    {
      q: "Hangi makine öğrenmesi türü ödül-ceza mekanizmasıyla öğrenir?",
      opts: [
        "Gözetimli Öğrenme",
        "Gözetimsiz Öğrenme",
        "Pekiştirmeli Öğrenme",
        "Yarı Gözetimli Öğrenme",
      ],
      answer: 2,
      feedback:
        "Pekiştirmeli Öğrenme (Reinforcement Learning): ajan, çevreyle etkileşerek ödül (doğru eylem) ve ceza (yanlış eylem) alır. AlphaGo ve oyun oynayan YZ'ler bu yöntemi kullanır.",
    },
    {
      q: "Pandas kütüphanesi ne için kullanılır?",
      opts: [
        "Panda hayvanlarını sınıflandırmak için",
        "Python'da veri manipülasyonu ve analizi için",
        "Web sitesi geliştirmek için",
        "3D modelleme için",
      ],
      answer: 1,
      feedback:
        "Pandas, Python'un en temel veri analizi kütüphanesidir. DataFrame yapısıyla tablosal veriyi kolayca okumayı, filtrelemeyi, birleştirmeyi ve analiz etmeyi sağlar.",
    },
    {
      q: "Model doğruluğu (accuracy) her zaman en iyi başarı ölçütü müdür?",
      opts: [
        "Evet, yüksek accuracy her zaman iyidir",
        "Hayır, dengesiz veri setlerinde yanıltıcı olabilir",
        "Evet, %90 üzeri mükemmel sayılır",
        "Hayır, sadece gözetimli öğrenmede kullanılır",
      ],
      answer: 1,
      feedback:
        "Dengesiz veri setinde (örn. 99 normal, 1 hastalıklı hasta) model hepsini 'normal' dese %99 accuracy alır ama işe yaramaz. F1-score, precision-recall gibi metrikler daha doğru değerlendirir.",
    },
    {
      q: "Hangi algoritma, verideki benzer noktaları gruplayarak kümelere ayırır?",
      opts: ["Lineer Regresyon", "K-Means", "Karar Ağacı", "Lojistik Regresyon"],
      answer: 1,
      feedback:
        "K-Means, gözetimsiz öğrenmede en yaygın kümeleme algoritmasıdır. Veriyi K adet kümeye böler. Müşteri segmentasyonu, belge gruplandırma gibi alanlarda kullanılır.",
    },
    {
      q: "Yapay zekanın 'kara kutu' (black box) problemi ne demektir?",
      opts: [
        "Modelin çok fazla enerji tüketmesi",
        "Modelin nasıl karar verdiğinin anlaşılamaması",
        "Modelin siyah-beyaz görüntüleri işleyememesi",
        "Modelin çökmesi",
      ],
      answer: 1,
      feedback:
        "Kara kutu: modelin girdi-çıktı ilişkisi bilinir ama iç karar mekanizması anlaşılamaz. Özellikle derin öğrenmede kritik etik sorun; tıp ve hukuk gibi alanlarda açıklanabilirlik şarttır.",
    },
    {
      q: "K-katlı çapraz doğrulama (k-fold cross-validation) temel amacı nedir?",
      opts: [
        "Veriyi kalıcı olarak silmek",
        "Modelin farklı veri alt kümelerinde genelleme performansını tahmin etmek",
        "Sadece eğitim süresini uzatmak",
        "GPU sıcaklığını ölçmek",
      ],
      answer: 1,
      feedback:
        "K-fold ile veri K parçaya bölünür; her turda farklı parça doğrulama, kalanlar eğitim olur. Böylece tek bir train/test bölünmesine bağlı şanslı/kötü sonuç riski azalır.",
    },
    {
      q: "L2 düzenlileştirme (ridge) genelde neyi cezalandırarak overfitting'i azaltır?",
      opts: [
        "Kategorik değişken sayısını",
        "Ağırlıkların büyük normlarını",
        "Eksik değerleri",
        "Grafik çözünürlüğünü",
      ],
      answer: 1,
      feedback:
        "Ridge, kayıp fonksiyonuna ağırlık kareleri cezası ekler; böylece aşırı büyük katsayılar bastırılır ve model daha yumuşak, genelleme dostu olur. L1 (Lasso) ise seyrekliği teşvik eder.",
    },
    {
      q: "ROC eğrisi ve AUC metriği özellikle hangi tür problemlerde sık kullanılır?",
      opts: [
        "Sadece regresyon",
        "İkili sınıflandırma ve skor tabanlı eşik seçimi",
        "Sadece görüntü boyutlandırma",
        "Sadece zaman serisi tahmini",
      ],
      answer: 1,
      feedback:
        "ROC, farklı eşiklerde True Positive Rate ile False Positive Rate'i gösterir. AUC, rastgele bir pozitif örneğin skorunun negatifden yüksek olma olasılığıdır; dengesiz veride accuracy'ye göre daha bilgilidir.",
    },
    {
      q: "Metinleri sayısal vektörlere dönüştüren 'embedding' katmanı ne işe yarar?",
      opts: [
        "Sadece yazım denetimi",
        "Anlamsal yakın kelimeleri vektör uzayında yakınlaştırmak",
        "Sadece dosya sıkıştırmak",
        "Sadece HTML etiketleri üretmek",
      ],
      answer: 1,
      feedback:
        "Embedding, kelime veya alt kelime birimlerini düşük boyutlu yoğun vektörlere haritalar. Word2vec, GloVe ve modern LLM token embedding'leri bu fikrin devamıdır.",
    },
    {
      q: "Kategorik bir değişkeni (ör. şehir adı) birçok model için sayısallaştırmanın klasik yolu nedir?",
      opts: [
        "Her şehre rastgele 0-1 atamak",
        "One-hot encoding veya hedef kodlama gibi yöntemler",
        "Şehirleri alfabetik sıraya göre tek sayı yapmak (her zaman güvenli)",
        "Sadece büyük harfe çevirmek",
      ],
      answer: 1,
      feedback:
        "Label encoding kategorilere tek tam sayı verir; bazı modeller bunu büyüklük sanır. One-hot veya embedding, kategori yapısını daha güvenli temsil eder; yüksek kardinalitede hedef/embedding tercih edilir.",
    },
    {
      q: "Öğrenme oranı (learning rate) çok yüksek seçilirse tipik risk nedir?",
      opts: [
        "Model hiç öğrenmez",
        "Optimizasyon salınıp yakınsamayabilir veya kararsızlaşır",
        "Sadece bellek kullanımı düşer",
        "Veri seti otomatik büyür",
      ],
      answer: 1,
      feedback:
        "Çok büyük adımlar gradyan inişinde minimumu 'atlayıp' salınan veya patlayan güncellemelere yol açabilir. Çok küçük adımlar ise eğitimi aşırı yavaşlatır.",
    },
    {
      q: "Dropout katmanı sinir ağı eğitiminde neyi hedefler?",
      opts: [
        "Nöronları kalıcı olarak silmek",
        "Eğitim sırasında rastgele nöronları kapatıp birlikte uyumayı (co-adaptation) azaltmak",
        "Ağı tamamen dondurmak",
        "Sadece çıktı katmanını kaldırmak",
      ],
      answer: 1,
      feedback:
        "Dropout, mini-batch başına rastgele birimleri sıfırlayarak aşırı öğrenmeyi azaltan stokastik düzenlileştirmedir. Testte genelde tüm birimler açık, ağırlıklar ölçeklenir.",
    },
    {
      q: "SQL veri bilimi iş akışında çoğu zaman hangi rolü üstlenir?",
      opts: [
        "Sadece 3D modelleme",
        "İlişkisel veriyi filtreleme, birleştirme ve özetleme",
        "Sadece derin öğrenme eğitimi",
        "Sadece PDF oluşturma",
      ],
      answer: 1,
      feedback:
        "SQL, veri ambarı ve operasyonel veritabanlarından örnek çekmek, JOIN ve GROUP BY ile özellik tabloları hazırlamak için günlük veri bilimi işinin önemli parçasıdır.",
    },
    {
      q: "Precision (kesinlik) ve Recall (duyarlılık) arasındaki bilinen gerilim genelde nasıl özetlenir?",
      opts: [
        "İkisi her zaman eşit olmalıdır",
        "Biri artarken diğeri bazen düşebilir; problem tipine göre denge seçilir",
        "Recall sadece regresyon içindir",
        "Precision sadece kümeleme içindir",
      ],
      answer: 1,
      feedback:
        "Precision: pozitif dediklerinin ne kadarı gerçekten pozitif. Recall: gerçek pozitiflerin ne kadarını yakaladın. Spam veya tıbbi tarama gibi maliyetlere göre hangisini optimize edeceğin değişir.",
    },
    {
      q: "Veri sızıntısı (data leakage) model değerlendirmesinde ne demektir?",
      opts: [
        "Sunucudan veri indirmek",
        "Doğrulama/teste, eğitimde olmaması gereken bilgi sızması",
        "Grafik renklerinin yanlış olması",
        "Dosya adının uzun olması",
      ],
      answer: 1,
      feedback:
        "Leakage: hedefi dolaylı olarak veren özelliklerin (gelecekten gelen bilgi, test istatistiği vb.) eğitime girmesi sonucu yapay yüksek skor. Gerçek hayatta model çöker; özellik mühendisliğinde sık tuzaktır.",
    },
  ],

  hard: [
    {
      q: "Bir veri kümesindeki en sık tekrar eden değere ne denir?",
      opts: ["Medyan", "Ortalama", "Mod", "Varyans"],
      answer: 2,
      feedback:
        "Mod (Mode): en sık gözlemlenen değerdir. Medyan: ortanca değer. Ortalama: tüm değerlerin toplamının sayıya bölümü.",
    },
    {
      q: "Veri biliminde en çok zaman alan şey nedir?",
      opts: ["Model seçimi", "Veri temizleme ve ön işleme", "Sonuçları yorumlama", "Algoritma yazma"],
      answer: 1,
      feedback:
        "Araştırmalar, veri bilimcilerin zamanlarının %60-80'ini veri temizleme ve hazırlamaya harcadığını göstermektedir. 'Data wrangling' kritik bir beceridir.",
    },
    {
      q: "Veri bilimi topluluğunun en büyük buluşma ve yarışma platformu hangisidir?",
      opts: ["GitHub", "Stack Overflow", "Kaggle", "HuggingFace"],
      answer: 2,
      feedback:
        "Kaggle, Google'a ait veri bilimi yarışma platformudur. Milyonlarca veri bilimcinin dataset paylaştığı, yarıştığı ve öğrendiği en büyük topluluktur.",
    },
    {
      q: "İlk programcı olarak kabul edilen kişi kimdir?",
      opts: ["Alan Turing", "Ada Lovelace", "Charles Babbage", "Grace Hopper"],
      answer: 1,
      feedback:
        "Ada Lovelace (1815-1852), Charles Babbage'ın Analitik Makinesi için algoritmalar yazan dünyanın ilk programcısı olarak kabul edilir.",
    },
    {
      q: "Yapay zekanın 'atası' sayılan ünlü İngiliz matematikçi kimdir?",
      opts: ["Isaac Newton", "Alan Turing", "John von Neumann", "Claude Shannon"],
      answer: 1,
      feedback:
        "Alan Turing (1912-1954), modern bilgisayar biliminin ve yapay zekanın temellerini atan matematikçidir. Turing Testi ve Turing Makinesi onun eserleridir.",
    },
    {
      q: "Sence bir algoritma, sadece klavye yazış hızına bakarak Parkinson hastası olup olmadığını anlayabilir mi?",
      opts: [
        "Hayır, bu imkansız",
        "Evet, araştırmalar bu konuda umut verici sonuçlar gösteriyor",
        "Sadece doktor yazış hızına bakabilir",
        "Hayır, bunun için beyin taraması gerekir",
      ],
      answer: 1,
      feedback:
        "Evet! MIT ve diğer araştırma merkezleri klavye vuruş dinamiklerinden (keystroke dynamics) Parkinson'u tespit eden modeller geliştirmiştir. Veri bilimi hayat kurtarır!",
    },
    {
      q: "Gradient Descent (Gradyan İnişi) algoritması ne için kullanılır?",
      opts: [
        "Veriyi görselleştirmek için",
        "Modelin kayıp fonksiyonunu minimize etmek için",
        "Veriyi normalize etmek için",
        "Model mimarisini seçmek için",
      ],
      answer: 1,
      feedback:
        "Gradient Descent, modelin hata (kayıp) fonksiyonunu minimize etmek için parametreleri iteratif olarak güncelleyen optimizasyon algoritmasıdır. Derin öğrenmenin temel taşıdır.",
    },
    {
      q: "Transformer mimarisi (GPT, BERT) hangi mekanizmayı devrim niteliğinde kullandı?",
      opts: [
        "Konvolüsyon katmanları",
        "Öz-dikkat (Self-Attention) mekanizması",
        "Tekrarlayan nöron yapısı",
        "Karar ağacı katmanları",
      ],
      answer: 1,
      feedback:
        "2017'de 'Attention is All You Need' makalesiyle tanıtılan Self-Attention, modelin bir cümledeki kelimelerin birbirleriyle ilişkisini paralel olarak hesaplamasını sağlar. Modern LLM'lerin temeli budur.",
    },
    {
      q: "Varyans ve önyargı (bias-variance) dengesi nedir?",
      opts: [
        "Modelin hızı ile doğruluğu arasındaki denge",
        "Underfitting ile overfitting arasındaki temel denge",
        "Eğitim süresi ile veri miktarı arasındaki denge",
        "Precision ile recall arasındaki denge",
      ],
      answer: 1,
      feedback:
        "Yüksek bias → underfitting (model çok basit). Yüksek varyans → overfitting (model çok karmaşık). İyi model ikisi arasında optimum noktayı bulur. Makine öğrenmesinin temel ikilemlerinden biridir.",
    },
    {
      q: "ROC eğrisi ve AUC skoru ne ölçer?",
      opts: [
        "Modelin eğitim süresini",
        "İkili sınıflandırma modelinin farklı eşik değerlerindeki performansını",
        "Verinin dağılımını",
        "Modelin bellek kullanımını",
      ],
      answer: 1,
      feedback:
        "ROC (Receiver Operating Characteristic) eğrisi, True Positive Rate'i False Positive Rate'e karşı çizer. AUC (Area Under Curve) 1'e yaklaştıkça model mükemmele yaklaşır. Tıbbi teşhis modellerinde kritiktir.",
    },
    {
      q: "Principal Component Analysis (PCA) ne işe yarar?",
      opts: [
        "Eksik verileri doldurmak için",
        "Boyut indirgeme yaparak veriyi daha az özellikle temsil etmek için",
        "Verileri kümelemek için",
        "Model doğruluğunu artırmak için",
      ],
      answer: 1,
      feedback:
        "PCA, çok boyutlu veriyi en önemli varyasyonları koruyarak daha az boyuta indirger. Görselleştirme, hesaplama yükü azaltma ve gürültü temizleme için kullanılır.",
    },
    {
      q: "P-değeri (p-value) istatistikte ne anlama gelir?",
      opts: [
        "Modelin doğruluk yüzdesi",
        "Gözlemlenen sonucun sıfır hipotezi doğruyken rastlantısal oluşma olasılığı",
        "Veri setinin büyüklüğü",
        "Tahmin hatasının karesi",
      ],
      answer: 1,
      feedback:
        "P < 0.05 genellikle istatistiksel anlamlılık eşiği sayılır. 'Sıfır hipotezi doğru olsaydı bu sonucu görme olasılığı neydi?' sorusunu cevaplar. Veri biliminde A/B testlerinin temeldir.",
    },
    {
      q: "Random Forest algoritması nasıl çalışır?",
      opts: [
        "Tek bir güçlü karar ağacı oluşturur",
        "Birden fazla karar ağacının tahminlerini birleştirerek (ensemble) sonuç üretir",
        "Veriyi rastgele karıştırarak öğrenir",
        "Nöral ağ katmanlarını rastgele seçer",
      ],
      answer: 1,
      feedback:
        "Random Forest, Bootstrap Aggregating (Bagging) yöntemini kullanan bir ensemble metodudur. Çok sayıda karar ağacının çoğunluk oyuyla tahmin yapar. Tek ağaca göre çok daha robust ve overfitting'e dayanıklıdır.",
    },
    {
      q: "Hiperparametre (hyperparameter) ile parametre arasındaki fark nedir?",
      opts: [
        "İkisi aynı şeydir",
        "Hiperparametreler modelin dışında insanın belirlediği; parametreler eğitim sırasında öğrenilenlerdir",
        "Parametreler daha önemlidir",
        "Hiperparametreler sadece derin öğrenmede kullanılır",
      ],
      answer: 1,
      feedback:
        "Parametre: model eğitirken veriden öğrenilir (ağırlıklar, bias). Hiperparametre: eğitim öncesi insanın ayarladığı (öğrenme hızı, katman sayısı, ağaç sayısı). Grid Search, hiperparametre optimizasyonunda kullanılır.",
    },
    {
      q: "Veri setini eğitim, doğrulama ve test olarak neden böleriz?",
      opts: [
        "Hesaplama süresini kısaltmak için",
        "Modelin görmediği veriye ne kadar iyi genellediğini tarafsızca ölçmek için",
        "Veri güvenliğini sağlamak için",
        "Algoritmanın daha hızlı çalışması için",
      ],
      answer: 1,
      feedback:
        "Eğitim: model öğrenir. Doğrulama: hiperparametre ayarı ve erken durdurma için. Test: final değerlendirme, modelin hiç görmediği veriyle. Test setini eğitimde kullansaydık sonuçlar yanıltıcı olurdu.",
    },
    {
      q: "Derin Öğrenme (Deep Learning) ile klasik Makine Öğrenmesinin temel farkı nedir?",
      opts: [
        "Derin öğrenme daha yavaştır",
        "Derin öğrenme özellikleri otomatik öğrenir; klasik ML'de özellikler insan tarafından tasarlanır",
        "Klasik ML daha fazla veri gerektirir",
        "Derin öğrenme sadece görüntü için kullanılır",
      ],
      answer: 1,
      feedback:
        "Klasik ML'de domain uzmanları özellikleri (features) elle tasarlar. Derin öğrenme çok katmanlı sinir ağları ile ham veriden özellikleri otomatik öğrenir. Bu esneklik büyük veri ve karmaşık problemlerde devrimsel oldu.",
    },
    {
      q: "Hangi kayıp fonksiyonu regresyon problemlerinde en yaygın kullanılır?",
      opts: ["Cross-Entropy Loss", "Mean Squared Error (MSE)", "Hinge Loss", "KL Divergence"],
      answer: 1,
      feedback:
        "MSE (Ortalama Kare Hata), tahmin ile gerçek değer arasındaki farkın karesinin ortalamasıdır. Büyük hataları daha çok cezalandırır. Sınıflandırmada Cross-Entropy, regresyonda MSE/MAE tercih edilir.",
    },
    {
      q: "Batch Normalization katmanı ne sağlar?",
      opts: [
        "Veriyi eşit gruplara böler",
        "Katman aktivasyonlarını normalize ederek eğitimi hızlandırır ve stabilize eder",
        "Gereksiz nöronları siler",
        "Modelin boyutunu küçültür",
      ],
      answer: 1,
      feedback:
        "Batch Normalization her mini-batch'teki aktivasyonları normalize eder. Internal Covariate Shift problemini azaltır, daha yüksek öğrenme hızı kullanılmasını sağlar ve düzenlileştirici etki yapar.",
    },
    {
      q: "Konfüzyon matrisi (Confusion Matrix) ne gösterir?",
      opts: [
        "Modelin ne kadar 'kafasının karıştığını'",
        "Sınıflandırma modelinin TP, FP, TN, FN dağılımını",
        "Verinin dağılım istatistiklerini",
        "Özellikler arası korelasyonu",
      ],
      answer: 1,
      feedback:
        "Confusion Matrix: True Positive (doğru pozitif), False Positive (yanlış alarm), True Negative (doğru negatif), False Negative (kaçırılan) değerleri gösterir. Precision, Recall, F1 bu matristen türetilir.",
    },
    {
      q: "Attention mekanizması olmadan Transformer mimarisi var olabilir miydi?",
      opts: [
        "Evet, sadece LSTM yeterli olurdu",
        "Hayır, Self-Attention Transformer'ın tanımlayıcı özelliğidir",
        "Evet, konvolüsyon katmanlarıyla yapılabilirdi",
        "Hayır, ama RNN ile ikame edilebilirdi",
      ],
      answer: 1,
      feedback:
        "'Attention Is All You Need' (Vaswani et al., 2017) makalesi, RNN ve CNN olmadan yalnızca attention mekanizmasıyla çalışan Transformer'ı tanıttı. Self-Attention olmadan Transformer diye bir şey yoktur.",
    },
    {
      q: "Boyut laneti (curse of dimensionality) veri biliminde neyi ifade eder?",
      opts: [
        "Grafiklerin çok renkli olması",
        "Boyut arttıkça verinin seyrekleşmesi ve mesafe tabanlı yöntemlerin zayıflaması",
        "Sadece 3B görüntülerin işlenememesi",
        "CPU saat hızının düşmesi",
      ],
      answer: 1,
      feedback:
        "Yüksek boyutlu uzayda noktalar birbirinden uzaklaşır; komşuluk ve kernel tabanlı yöntemler etkisini kaybeder. Bu yüzden boyut indirgeme (PCA, seçim) ve düzenlileştirme önemlidir.",
    },
    {
      q: "PCA (Temel Bileşenler Analizi) temel olarak ne yapar?",
      opts: [
        "Sınıflandırma eşiği seçer",
        "Varyansı en çok açıklayan doğrusal projeksiyon eksenlerini bulur",
        "Eksik değerleri doldurur",
        "Metni otomatik çevirir",
      ],
      answer: 1,
      feedback:
        "PCA, kovaryans yapısına bakarak veriyi daha düşük boyutlu alt uzaya projeler; birinci bileşen en büyük varyans yönüdür. Gözetimsiz doğrusal boyut indirgeme yöntemidir.",
    },
    {
      q: "Softmax fonksiyonu çok sınıflı sinir ağı çıktısında ne sağlar?",
      opts: [
        "Negatif olasılıklar",
        "Toplamı 1 olan pozitif sınıf olasılıkları (dağılım)",
        "Sadece ikili 0/1",
        "Sınıf sayısını azaltır",
      ],
      answer: 1,
      feedback:
        "Softmax, skor vektörünü üstelleyip normalize ederek olasılık vektörü üretir. Cross-entropy kaybı ile birlikte çok sınıflı sınıflandırmanın standart çıkış katmanıdır.",
    },
    {
      q: "Bayes teoreminin makine öğrenmesindeki MAP tahmini ile ilişkisi nasıl özetlenir?",
      opts: [
        "MAP, önseli yok sayar",
        "MAP, önsel (prior) ile olabilirlik (likelihood) birleştirilerek mod parametreleri seçilir",
        "MAP sadece kümeleme içindir",
        "MAP ile olasılık hiç hesaplanmaz",
      ],
      answer: 1,
      feedback:
        "MAP (Maximum A Posteriori), posterior'u maksimize eden parametreyi seçer; düzenlileştirilmiş maksimum olabilirlik gibi düşünülebilir. Önsel, parametrelere yumuşak kısıt koyar.",
    },
    {
      q: "LIME veya SHAP gibi yöntemler model açıklanabilirliğinde neyi hedefler?",
      opts: [
        "Eğitim hızını katlar",
        "Belirli bir tahmin için hangi özelliklerin ne kadar etkili olduğunu yerel veya adil biçimde göstermek",
        "Veri setini şifrelemek",
        "Sadece görüntü boyutunu küçültmek",
      ],
      answer: 1,
      feedback:
        "Bu yöntemler kara kutu modellerin tek bir örnekteki kararını özellik katkılarıyla açıklamaya çalışır. Tıbbi ve finansal karar destek sistemlerinde denetim ve güven için kritiktir.",
    },
    {
      q: "Merkezi Limit Teoremi pratikte A/B testi yorumunda neden önemlidir?",
      opts: [
        "Her dağılımın kesin normal olduğunu garanti eder",
        "Örnek ortalamaların yaklaşık normal dağılım göstermesiyle güven aralığı ve p-değeri mantığını destekler",
        "p-değerini sıfırlar",
        "Sadece görüntü verisi için geçerlidir",
      ],
      answer: 1,
      feedback:
        "CLT, bağımsız örnekler altında örnek ortalamanın dağılımının (yeterli n ile) yaklaşık normal olmasını sağlar. Bu, klasik hipotez testlerinin dayandığı yaklaşımlardan biridir; varsayımlar yine kontrol edilmelidir.",
    },
    {
      q: "Mutual information (karşılıklı bilgi) iki değişken arasında ne ölçer?",
      opts: [
        "Sadece doğrusal korelasyon",
        "Birini bilmenin diğeri hakkında belirsizliği ne kadar azalttığı",
        "Sadece ortalama fark",
        "Sadece mod farkı",
      ],
      answer: 1,
      feedback:
        "Mutual information, doğrusal olmayan bağımlılıkları da yakalayabilen entropi tabanlı bir ilişki ölçüsüdür. Özellik seçiminde sık kullanılır; Pearson korelasyonundan farklıdır.",
    },
    {
      q: "Transfer learning (aktarımlı öğrenme) tipik olarak ne zaman avantajlıdır?",
      opts: [
        "Hiç etiket yokken bile her zaman",
        "Az etiketli veri varken önceden büyük veriyle eğitilmiş temsilleri uyarlamak",
        "Sadece tablo verisinde yasaktır",
        "Sadece kuantum bilgisayarda",
      ],
      answer: 1,
      feedback:
        "ImageNet gibi dev veriyle eğitilmiş omurgayı (backbone) dondurup ince ayar yapmak, az veride sıfırdan eğitime göre çoğu zaman daha iyi sonuç verir. NLP'de foundation modeller benzer mantıktır.",
    },
    {
      q: "Otokodlayıcı (autoencoder) denetimsiz bağlamda ne öğrenmeye çalışır?",
      opts: [
        "Sınıf etiketlerini",
        "Veriyi düşük boyutlu kodlayıp yeniden üreterek önemli yapıyı yakalamak",
        "Sadece sıralama indeksi",
        "Sadece dosya adı",
      ],
      answer: 1,
      feedback:
        "Autoencoder encoder-decoder yapısıyla rekonstrüksiyon hatasını minimize eder; gizli temsil anomali tespiti veya boyut indirgeme için kullanılabilir. Varyasyonel versiyonlar (VAE) olasılıksal modeldir.",
    },
    {
      q: "Çoklu test (multiple testing) yaparken Bonferroni düzeltmesi neyi azaltmayı hedefler?",
      opts: [
        "Örneklem boyutunu",
        "Yanlış pozitif (tip I hata) birikim riskini",
        "Model parametre sayısını",
        "Eğitim süresini",
      ],
      answer: 1,
      feedback:
        "Çok hipotez test edildiğinde rastgele anlamlı görünme olasılığı artar. Bonferroni, eşiği α/k gibi sıkılaştırarak ailevi tip I hata oranını kontrol etmeye çalışır; güç kaybı maliyeti vardır.",
    },
  ],
};
