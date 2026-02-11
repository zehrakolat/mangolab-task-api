# Task Management API

Bu proje, Mangolab.ai işe alım süreci için hazırlanan mini case çalışmasıdır. Node.js  kullanılarak geliştirilen bu API, basit task yönetimi işlemlerini gerçekleştirir.

## Özellikler

- **Modüler Yapı:** Kod karmaşasını önlemek için Controller, Routes ve App mantığı ayrılarak temiz bir mimari kuruldu.
- **Veri Yönetimi:** Veriler, veritabanı yerine sunucu belleğinde (in-memory) saklanıyor.
- **Validasyon:** Hatalı veya boş veri girişleri (boş title vb.) engellenir.
- **Test:** Jest ve Supertest ile endpoint testleri yazılmıştır.(API endpoints doğruluğu Jest ile test ediliyor.)
- **Docker:** Proje, konteyner yapısında çalışmaya uygun hale getirildi.

## Kurulum ve Çalıştırma

1. **Gerekli Paketleri Yükleyin:**
   ```bash
   npm install
2. **Uygulamayı başlatın:** 
 ' ```bash
   npm start
''''
3. **Testleri Çalıştırma:**
Yazılan test senaryolarını kontrol etmek için:
' ```bash
npm test
'
Planlama: Önce hangi verilere ve endpoint'lere ihtiyacım olduğunu belirledim.

Yapı: Kodun okunabilir ve geliştirilebilir olması için klasörleri (routes, controllers) ayırarak modüler bir yapı kurdum.

Hatalı veri girişini önlemek için createTask fonksiyonuna basit validasyon kuralları ekledim.

AI Desteği: Proje iskeletini oluştururken ve test (Jest) ayarlarını yaparken ai'den destek aldım.

Son Kontrol: AI çıktısını doğrudan kullanmak yerine, kodları inceleyip gerekli validasyonları ekledim ve kendi mantığıma göre düzenledim.

klasör yapısı şu şekilde:

task-api/
├── src/
│   ├── controllers/
│   │   └── taskController.js  (Mantıksal işlemler burada)
│   ├── routes/
│   │   └── taskRoutes.js      (Endpoint yönlendirmeleri burada)
│   ├── app.js                 (Express uygulaması konfigürasyonu)
│   └── server.js              
├── tests/
│   └── task.test.js           (Unit testler)
├── Dockerfile
├── package-lock.json
├── package.json
└── README.md
