const express = require('express');
const app = express()
const { getAllEvents, getEventById } = require('../controllers/event');

app.get('/events', getAllEvents);
app.get('/events/:id', getEventById);

module.exports = app;