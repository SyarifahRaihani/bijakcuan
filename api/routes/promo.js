const express = require('express');
const app = express()
const { getAllPromos } = require('../controllers/promo');

app.get('/promos', getAllPromos);

module.exports = app;