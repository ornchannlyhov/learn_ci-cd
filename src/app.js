const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Pull Request');
});

module.exports = app;