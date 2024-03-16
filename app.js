const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('This is an sample delivery using linux and this is final in aws'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
