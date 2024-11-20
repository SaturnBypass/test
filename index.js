const express = require('express');
const geoip = require('geoip-lite');

const app = express();

// Menggunakan PORT dari environment variable atau default ke 3000
const port = process.env.PORT || 80;

// Endpoint dengan parameter IP
app.get('/json/:ip', (req, res) => {
    const ip = req.params.ip;

    // Mendapatkan informasi lokasi IP
    const geo = geoip.lookup(ip);

    if (geo) {
        res.json({ ip, countryCode: geo.country });
    } else {
        res.status(404).json({ error: 'IP not found or invalid' });
    }
});

// Menjalankan server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
