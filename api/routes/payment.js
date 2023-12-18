const express = require("express")
const app = express()
const { order, orderValidation, orderGet, getTransaksi } = require("../controllers/payment")

app.post("/order", order)
app.post("/orderValidation", orderValidation)
app.post("/orderGet", orderGet)
app.get("/getTransaksi/:user_id", getTransaksi)

module.exports = app
