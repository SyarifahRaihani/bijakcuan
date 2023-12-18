const express = require("express")
const app = express()
const { daftar, masuk, edit, refreshToken } = require("../controllers/auth")

app.post("/daftar", daftar)
app.post("/masuk", masuk)
app.post("/edit", edit)
app.post("/refreshToken", refreshToken)

module.exports = app
