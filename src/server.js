const app = require('./app'); // Yapılandırdığımız app dosyasını çağırıyoruz.
const PORT = process.env.PORT || 3000; // Varsa ortamdaki portu kullan, yoksa 3000 portunu aç.

// Sunucuyu dinlemeye başla:
app.listen(PORT, () => {
    console.log(`Server ${PORT} portunda çalışıyor...`);
});