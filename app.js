const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Habari Dunia! Karibuni Kenya. Swahili translation of Hello World! Welcome to Kenya'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
