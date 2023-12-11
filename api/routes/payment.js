const express = require("express")
const app = express()
const { order, orderValidation } = require("../controllers/payment")

app.post("/order", order)
app.post("/orderValidation", orderValidation)

module.exports = app
