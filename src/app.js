const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

// Middleware yapılandırmaları
app.use(helmet());      // Güvenlik katmanı
app.use(cors());        // Dış erişim izinleri ayarları
app.use(bodyParser.json()); // JSON veri okuma

// API routes başlangıç noktası/ Tüm routes '/api' ön ekiyle başlar 
app.use('/api', taskRoutes);

// Hata yakalama
app.use((req, res) => {
    res.status(404).json({ error: 'Endpoint bulunamadı.' });
});

module.exports = app;
