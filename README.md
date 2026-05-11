# Veri Bilimi Quiz

Statik HTML/CSS/JS ile çalışan basit bir quiz. Her turda kolay, orta ve zor seviyelerden havuzdan rastgele birer soru seçilir.

## Çalıştırma

`index.html` dosyasını tarayıcıda açman yeterli. Klasör yapısını değiştirme (`css/`, `js/` yolları göreli).

İstersen yerel sunucu:

```bash
python -m http.server 8080
```

Sonra tarayıcıda `http://localhost:8080` aç.

## Dosyalar

| Dosya | Açıklama |
|--------|----------|
| `index.html` | Sayfa iskeleti |
| `css/styles.css` | Stiller |
| `js/questions.js` | Soru havuzu (`window.questionBank`) |
| `js/app.js` | Akış, rastgele seçim, skor |

Tur uzunluğu ve ekran mantığı `js/app.js` içindeki `QUIZ_LENGTH` ile ayarlanır.
