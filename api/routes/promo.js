const express = require("express")
const app = express()
const { getAllPromos } = require("../controllers/promo")

app.get("/promo", getAllPromos)

module.exports = app
