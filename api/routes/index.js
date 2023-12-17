const express = require("express")
const app = express()
const auth = require("./auth")
const payment = require("./payment")
const event = require("./event")
const artikel = require("./artikel")
const promo = require("./promo")
const course = require("./course")
const url = "/api/v1"

app.use(url, auth)
app.use(url, payment)
app.use(url, event)
app.use(url, artikel)
app.use(url, promo)
app.use(url, course)

module.exports = app
