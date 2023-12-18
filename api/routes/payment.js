const express = require("express")
const app = express()
const { order, orderValidation, orderGet } = require("../controllers/payment")

app.post("/order", order)
app.post("/orderValidation", orderValidation)
app.post("/orderGet", orderGet)

module.exports = app
