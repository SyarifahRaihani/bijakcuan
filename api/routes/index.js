const express = require("express")
const app = express()
const auth = require("./auth")

const url = "/api/v1"

app.use(url, auth)

module.exports = app
