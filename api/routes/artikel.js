const express = require("express")
const app = express()
const { getAllArtikel, getAllArtikelById  } = require("../controllers/artikel")

app.get("/artikel", getAllArtikel)
app.get("/artikel/:id", getAllArtikelById)

module.exports = app
