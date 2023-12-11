require("dotenv").config()
const express = require("express")
const cors = require("cors")
const routes = require("./routes")

const app = express()
const PORT = process.env.API_PORT

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`))
