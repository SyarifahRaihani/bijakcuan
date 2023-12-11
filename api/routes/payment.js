const express = require("express")
const app = express()
const pay = require("../controllers/payment")

app.post("/pay", pay)

module.exports = app
