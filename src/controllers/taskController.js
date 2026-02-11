// Basit bir in-memory database simülasyonu
let tasks = []; // dataları database yerine bu dizide tutuyorum
let nextId = 1; // her yeni task için unique id oluşturmak için sayaç

// Tüm taskları getir 
exports.getAllTasks = (req, res) => {
    res.status(200).json(tasks); // Mevcut task dizisini 200 (Başarılı) koduyla geri gönderir.
};

// Yeni task oluştur /tasks isteği geldiğinde yeni bir görev oluşturur.
exports.createTask = (req, res) => {
    const { title } = req.body;

    // Basit Validation (Error Handling)
    // başlık boşsa veya metin değilse hata döndürür.
    if (!title || typeof title !== 'string' || title.trim() === '') {
        return res.status(400).json({ 
            error: 'Title alanı zorunludur ve metin olmalıdır.' 
        });
    }
// Yeni task objesinin oluşturulması:
    const newTask = {
        id: nextId++,   // unique ID atar ve sayacı 1 artırır.
        title: title.trim(), // title (string) başındaki ve sonundaki boşlukları temizler.
        completed: false, // Yeni görev oluşurken default olarak false(tamamlanmadı) & completed (boolean)
        createdAt: new Date() // Yeni görev oluşurken otomatik tarih ve saat bilgisi & createdAt (date)
    };
// Yeni objeyi bellekteki listeye ekler.
    tasks.push(newTask);
// 201 (Oluşturuldu) koduyla beraber yeni taskı geri döndürür.
    res.status(201).json(newTask);
};