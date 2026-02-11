const express = require('express');
const router = express.Router(); // Express'in yönlendirme modülünü başlatıyoruz.
const taskController = require('../controllers/taskController'); // Mantıksal işlemleri yapacak olan dosyayı çağırıyoruz.

// 'GET /tasks' adresine istek gelirse controller içindeki getAllTasks fonksiyonunu çalıştır.
router.get('/tasks', taskController.getAllTasks);

// 'POST /tasks' adresine veri gelirse controller içindeki createTask fonksiyonunu çalıştır.
router.post('/tasks', taskController.createTask);

module.exports = router; // Bu yönlendiriciyi diğer dosyalarda kullancaz.