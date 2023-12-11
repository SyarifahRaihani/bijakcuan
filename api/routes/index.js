const express = require("express")
const app = express()
const auth = require("./auth")
const payment = require("./payment")
const event = require("./event")

const url = "/api/v1"

app.use(url, auth)
app.use(url, payment)
app.use(url, event)

module.exports = app
