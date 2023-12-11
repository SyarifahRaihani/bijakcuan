const express = require("express")
const app = express()
const { daftar, masuk } = require("../controllers/auth")

app.post("/daftar", daftar)
app.post("/masuk", masuk)

module.exports = app
