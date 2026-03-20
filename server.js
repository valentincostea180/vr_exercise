const express = require('express');
const path = require('path');
const app = express();
const PORT = 5173;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'camera.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
    console.log(`📁 Access your app at http://localhost:${PORT}/camera.html`);
});