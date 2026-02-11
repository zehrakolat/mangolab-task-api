const request = require('supertest'); // HTTP isteklerini simüle eden kütüphane (Postman gibi davranır)
const app = require('../src/app');    // Test edeceğimiz Express uygulamasını çağırıyoruz

// Describe: Testleri gruplamak için kullanılır. Burası "Task API Uç Noktaları" test grubudur.
describe('Task API Endpoints', () => {
    
    // 1. TEST SENARYOSU: Başarılı bir task oluşturma testi
    it('POST /api/tasks -> Yeni bir task oluşturmalı', async () => {
        // Sanal bir POST isteği atıyoruz
        const res = await request(app)
            .post('/api/tasks')
            .send({
                title: 'Mangolab Case Hazırla' // Gönderdiğimiz veri (body)
            });
        
        // Beklentilerimiz (Assertions)
        expect(res.statusCode).toEqual(201); // 201: "Created" kodu dönmeli
        expect(res.body).toHaveProperty('id'); // Gelen cevapta mutlaka bir 'id' olmalı
        expect(res.body.title).toBe('Mangolab Case Hazırla'); // Title bizim gönderdiğimizle aynı olmalı
        expect(res.body.completed).toBe(false); // Yeni görev varsayılan olarak tamamlanmamış gelmeli
    });

    // 2. TEST SENARYOSU: Listeleme testi
    it('GET /api/tasks -> Task listesini döner', async () => {
        // Sanal bir GET isteği atıyoruz
        const res = await request(app).get('/api/tasks');
        
        // Beklentilerimiz
        expect(res.statusCode).toEqual(200); // 200: "OK" kodu dönmeli
        expect(Array.isArray(res.body)).toBeTruthy(); // Gelen cevap bir array formatında olmalı
        
        // İlk testte bir kayıt eklediğimiz için, listenin uzunluğu 0'dan büyük olmalı
        expect(res.body.length).toBeGreaterThan(0); 
    });

    // 3. TEST SENARYOSU: Hata yönetimi (Validation) testi
    it('POST /api/tasks -> Boş title ile hata vermeli', async () => {
        // Title'ı boş göndererek hatayı tetikliyoruz
        const res = await request(app)
            .post('/api/tasks')
            .send({ title: '' }); // Hatalı veri
            
        // Beklentimiz: Sunucu bunu kabul etmemeli ve 400 (Bad Request) dönmeli
        expect(res.statusCode).toEqual(400);
    });
});